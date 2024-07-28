import * as virtualDesktop from "./VirtualDesktop_pb.js";
import { Message } from 'google-protobuf';

export interface EventSubscriber<E, R = void> {
    /** Adds a listener to this event. */
    addListener(listener: (e: E) => R): void;
    /** Stop listening to this event. The `listener` argument is the listener
     * to remove. */
    removeListener(listener: (e: E) => R): void;
    /** Check whether `listener` is registered for this event. Returns `true`
     * if it is listening, `false` otherwise. */
    hasListener(listener: (e: E) => R): boolean;
}

class EventManager<E, R = void> implements EventSubscriber<E, R> {
    private _listeners: Set<(eventData: E) => R>;
    private _stackTraceWhenAdded: WeakMap<(eventData: E) => R, string>;

    constructor() {
        this._listeners = new Set();
        this._stackTraceWhenAdded = new WeakMap();
    }

    addListener(listener: (e: E) => R): void {
        if (!listener || this._listeners.has(listener))
            return;
        this._listeners.add(listener);
        this._stackTraceWhenAdded.set(listener, new Error().stack ?? 'no location could be collected.');
    }
    removeListener(listener: (e: E) => R): void {
        if (!listener)
            return;
        this._listeners.delete(listener);
        this._stackTraceWhenAdded.delete(listener);
    }
    hasListener(listener: (e: E) => R): boolean {
        return this._listeners.has(listener);
    }

    clear() {
        this._listeners.clear();
        this._stackTraceWhenAdded = new WeakMap();
    }

    fire(eventData: E): R[] {
        const returned: R[] = [];
        for (const listener of this._listeners) {
            try {
                returned.push(listener.apply(null, [eventData]));
            } catch (error) {
                const stack = this._stackTraceWhenAdded.get(listener);
                console.error(
                    'Error during event handling!\n', error,
                    '\nListener added at:\n', stack,
                    '\nError at:\n', error.stack
                );
            }
        }
        return returned;
    }

    public get length(): number {
        return this._listeners.size;
    }
}

export interface ClientConstructorParams {
    input: Deno.Reader & Deno.Closer;
    output: Deno.Writer & Deno.Closer;
}

export interface ConnectToSpawnedChildProcessParams {
    /** Path to the server executable. If `null` or empty then attempts to use
     * the default executable name in the current directory. If the path ends
     * with `/` or `\` then the default executable name will be appended. */
    serverPath?: string | null;
    /** If this callback is specified then the spawned process's stderr will
     * be decoded if the process exits with an error and the callback will be
     * called with the decoded string. */
    handleServerCrash?: (error: string) => void,
    /** When the client is closed try to kill the spawned process. */
    aggressivelyKillProcess?: boolean,
    /** If the specified `serverPath` is not absolute then it should be relative
     * to the API script's folder if this is `true`, otherwise it is relative to
     * the current working directory. */
    relativeToScriptPath?: boolean,
}

/** The default name for the virtual desktop server executable. */
export const defaultServerExecutableName = "VirtualDesktopManager.exe";

export interface ConnectToClientForParentProcessParams { }

interface ResponseHandler {
    handleResponse: (response: virtualDesktop.Response, lastResponse: boolean) => void,
    expectSingleResponse: boolean,
    onCompleted: (error?: Error) => void,
}

interface ReadFromInputParams {
    input: Deno.Reader;
    isCanceled: () => boolean;
    allowedMessageSize?: null | ((size: number) => Promise<boolean> | boolean);
    handleMessage: (message: Uint8Array) => Promise<void>;
}

/** A helper method that handles reading messages with prefixed sizes. */
async function readFromInput({ input, isCanceled, allowedMessageSize, handleMessage, }: ReadFromInputParams): Promise<void> {
    let buffer = new Uint8Array(1024);
    let totalReadBytes = 0;

    while (!isCanceled()) {
        // Read until full message has been received:
        let messageLength = 0;
        let skippedLength = 0;
        while (!isCanceled()) {
            // Parse message length:
            if (messageLength == 0 && totalReadBytes >= 4) {
                messageLength = new DataView(buffer.buffer).getUint32(0, true);

                if (messageLength == 0) {
                    buffer.copyWithin(0, 4, totalReadBytes)
                    totalReadBytes -= 4;
                    continue;
                }

                if (allowedMessageSize && !await allowedMessageSize(messageLength))
                    skippedLength = 4;
                else if (buffer.length < messageLength)
                    buffer = new Uint8Array(messageLength);

                if (isCanceled())
                    break;
            }
            // If we have read the whole message then break:
            if (messageLength != 0 && totalReadBytes - 4 >= messageLength)
                break;
            // Ignore all currently read bytes (will use whole buffer for read):
            if (skippedLength > 0)
                skippedLength = totalReadBytes;
            // Read more data:
            const readBytes = await input.read(buffer.subarray(totalReadBytes - skippedLength, buffer.length));
            if (!readBytes) return; // EOF (really null, can't be 0)
            totalReadBytes += readBytes;
        }
        if (isCanceled())
            break;

        if (skippedLength == 0) {
            await handleMessage(buffer.subarray(4, messageLength + 4));
        }

        // Remove current message from buffer:
        /** Read bytes that don't belong to the skipped message. */
        const leftOver = totalReadBytes - 4 - messageLength;
        /** Number of actual read bytes in the buffer. */
        const usedBufferLength = totalReadBytes - skippedLength;
        buffer.copyWithin(0, usedBufferLength - leftOver, usedBufferLength)
        totalReadBytes -= 4 + messageLength;
    }
}

async function writeAll(output: Deno.Writer, buffer: Uint8Array, isCanceled: () => boolean): Promise<void> {
    let writtenBytes = 0;
    while (writtenBytes < buffer.length && !isCanceled()) {
        writtenBytes += await output.write(buffer.subarray(writtenBytes));
    }
}

enum OutputMessageSizeCheck {
    Allow,
    Resized,
    Cancel,
}

interface WriteToOutputParams<T extends Message> {
    output: Deno.Writer;
    isCanceled: () => boolean;
    getNextMessage: () => Promise<T | undefined>;
    allowedMessageSize?: null | ((size: number, message: T) => Promise<OutputMessageSizeCheck> | OutputMessageSizeCheck);
}

async function writeToOutput<T extends Message>({
    output,
    isCanceled,
    getNextMessage,
    allowedMessageSize,
}: WriteToOutputParams<T>) {
    const sizeBuffer = new Uint8Array(4);
    while (!isCanceled()) {
        // Get the next queued response:
        const message = await getNextMessage();
        if (isCanceled() || !message)
            break;
        let binary = message.serializeBinary();

        // Handle too large responses:
        if (allowedMessageSize != null) {
            const result = await allowedMessageSize(binary.length, message);
            switch (result) {
                case OutputMessageSizeCheck.Resized:
                    binary = message.serializeBinary();
                    break;
                case OutputMessageSizeCheck.Cancel:
                    continue;
                default:
                case OutputMessageSizeCheck.Allow:
                    break;
            }
        }
        if (isCanceled())
            break;

        // Write the response to the output:
        {
            // Write size in first 4 bytes:
            const size = binary.length;
            new DataView(sizeBuffer.buffer).setUint32(0, size, true);
        }
        await writeAll(output, sizeBuffer, isCanceled);
        await writeAll(output, binary, isCanceled);
    }
}

export interface MultipleResponses<T> extends AsyncIterableIterator<T>, Deno.Closer {
    close(): void;
    /** Collect all messages into an array. If an error occurs then the request
     * will be closed/canceled automatically. Note that you should not use this
     * method for requests which expect infinite responses. */
    toArray(): Promise<T[]>;
    /** A new message from the server. */
    onMessage: EventSubscriber<T>,
    /** When a server response failed to be processed. */
    onError: EventSubscriber<Error>,
    /** When the response stream is finished. If the stream was closed due to an
     * error then that error is provided. */
    onClose: EventSubscriber<Error | null>,
}

export interface VirtualDesktopChangedEventArgs {
    oldCurrentVirtualDesktopIndex: number;
    newCurrentVirtualDesktopIndex: number;
}
export interface VirtualDesktopDeletedEventArgs {
    /** The index of the virtual desktop that was deleted */
    indexOfDeletedVirtualDesktop: number;
    /** The index of the virtual desktop that is to be displayed after specified
     * virtual desktop is deleted.
     *
     * This index is for before the delete is preformed. So if it is after the
     * deleted virtual desktop then it will be one less after the delete operation
     * has been preformed. */
    indexOfFallbackVirtualDesktop: number;
}
export interface VirtualDesktopCreatedEventArgs {
    /** The index of the created virtual desktop. The new virtual desktop should
     * always be created after all the currently existing virtual desktops but
     * this might change in the future. */
    indexOfCreatedVirtualDesktop: number;
}


/** Properties that can be used to filter out what windows to collect information
 * about */
export interface QueryOpenWindowsFilter {
    /** If `true` then only collect info about windows which have some virtual
     * desktop info, this rules out invisible windows and other special window
     * types.
     *
     * Set to `false` to get only weird windows that don't have any virtual
     * desktop info. */
    hasVirtualDesktopInfo?: boolean;

    /** Only collect info about the window with the specified handle. */
    windowHandle?: IntPtr;
    /** Only collect info for child windows of the specified window handle. */
    parentWindowHandle?: IntPtr;
    /** Only collect info for descendant windows of the specified window handle. */
    rootParentWindowHandle?: IntPtr;

    /** Only collect info about windows with the specified title. */
    title?: string;
    /** Only collect info about windows that belong to the process with the
     * specified id. */
    processId?: number;
    /** Only collect info about windows that are minimized or only windows that
     * aren't minimized. `true` to only collect information about windows that
     * are minimized. */
    isMinimized?: boolean;

    /** If `true` then only collect info about windows that are pinned to all desktops.
     * If `false` then only collect info about windows that are definitively visible
     * on all desktops. */
    pinnedToAllVirtualDesktops?: boolean;
    /** Only collect info for windows that are bound to the virtual desktop at the
     * specified index. */
    virtualDesktopIndex?: number;
}
function createQueryOpenWindowsFilter(filter: undefined | QueryOpenWindowsFilter): virtualDesktop.OpenWindowsFilter {
    const created = new virtualDesktop.OpenWindowsFilter();

    if (!filter) {
        filter = {};
    }


    if (filter.windowHandle != undefined) {
        created.setWindowHandle(filter.windowHandle);
    }
    if (filter.parentWindowHandle != undefined) {
        created.setParentWindowHandle(filter.parentWindowHandle);
    }
    if (filter.rootParentWindowHandle != undefined) {
        created.setRootParentWindowHandle(filter.rootParentWindowHandle);
    }

    if (filter.processId != undefined) {
        created.setProcessId(filter.processId);
    }
    if (filter.title != undefined) {
        created.setTitle(filter.title);
    }
    if (filter.isMinimized != undefined) {
        created.setIsMinimized(filter.isMinimized);
    }

    if (filter.pinnedToAllVirtualDesktops != undefined) {
        created.setPinnedToAllVirtualDesktops(filter.pinnedToAllVirtualDesktops);
    }
    if (filter.virtualDesktopIndex != undefined) {
        created.setVirtualDesktopIndex(filter.virtualDesktopIndex);
    }
    if (filter.hasVirtualDesktopInfo != undefined) {
        created.setHasVirtualDesktopInfo(filter.hasVirtualDesktopInfo);
    }
    return created;
}

/** Specifies the data that should be retrieved about some windows. This is an
 * optimization hint to the server and may be ignored depending on the
 * implementation.
 *
 * If this information is sent then any fields that aren't `true` may be left out
 * of the returned window information. Fields that are unspecified or `false`
 * might might still be sent back though depending on the server implementation.
 * For example if you have filters that required gathering the data anyway then
 * that data might be sent back as well. */
export interface QueryOpenWindowsWantedData {
    /** Get information about a window's parent window. */
    parentWindowHandle?: boolean;
    /** Get information about a window's root parent window. */
    rootParentWindowHandle?: boolean;
    /** Get a window's title. */
    title?: boolean;
    /** Get the id of the process that owns a window. */
    processId?: boolean;
    /** Determine if a window is minimized. */
    isMinimized?: boolean;
    /** Determine if a window is pinned to all virtual desktops. */
    pinnedToAllVirtualDesktops?: boolean;
    /** Determine the index of the virtual desktop that a window is visible on. */
    virtualDesktopIndex?: boolean;
}

/** Info about an open window. */
export interface QueryOpenWindowsInfo {
    /** The handle for the window. */
    windowHandle: IntPtr;
    /** The handle for the parent window. */
    parentWindowHandle?: IntPtr;
    /** The handle for the root parent window. */
    rootParentWindowHandle?: IntPtr;

    /** The title for the window. */
    title?: string;
    /** The id of the process to which the window belongs. */
    processId?: number;
    /** Indicates if the window is minimized. */
    isMinimized?: boolean;

    /** Indicates if the window is pinned and therefore visible on all virtual
     * desktops */
    pinnedToAllVirtualDesktops?: boolean;
    /** The index of the virtual desktop that this window is visible on. */
    virtualDesktopIndex?: number;
}

/** The show states of a window. Can be used to hide a window or to
 * minimize/maximize/restore it. */
export enum ShowState {
    /** Hides the window and activates another window. */
    HIDE = 0,
    /** Minimizes a window, even if the thread that owns the window is not
     * responding. This flag should only be used when minimizing windows from a
     * different thread. */
    FORCE_MINIMIZE = 11,
    /** Maximizes the specified window. */
    MAXIMIZE = 3,
    /** Minimizes the specified window and activates the next top-level window
     * in the Z order. */
    MINIMIZE = 6,
    /** Activates and displays the window. If the window is minimized or maximized,
     * the system restores it to its original size and position. An application
     * should specify this flag when restoring a minimized window. */
    RESTORE = 9,
    /** Activates the window and displays it in its current size and position. */
    SHOW = 5,
    /** Sets the show state based on the SW_ value specified in the STARTUPINFO
     * structure passed to the CreateProcess function by the program that started
     * the application. */
    SHOW_DEFAULT = 10,
    /** Activates the window and displays it as a maximized window. */
    SHOW_MAXIMIZED = 3,
    /** Activates the window and displays it as a minimized window. */
    SHOW_MINIMIZED = 2,
    /** Displays the window as a minimized window. This value is similar to
     * `SHOW_MINIMIZED`, except the window is not activated. */
    SHOW_MINIMIZED_NO_ACTIVATE = 7,
    /** Displays the window in its current size and position. This value is
     * similar to `SHOW`, except that the window is not activated. */
    SHOW_NO_ACTIVATE = 8,
    /** Displays a window in its most recent size and position. This value is
     * similar to `SHOW_NORMAL`, except that the window is not activated. */
    SHOW_NORMAL_NO_ACTIVATE = 4,
    /** Activates and displays a window. If the window is minimized or maximized,
     * the system restores it to its original size and position. An application
     * should specify this flag when displaying the window for the first time. */
    SHOW_NORMAL = 1,
};

export interface Rectangle {
    left: number,
    top: number,
    width: number,
    height: number,
}
function toRectangle(rectangle: Rectangle): virtualDesktop.Rectangle {
    return new virtualDesktop.Rectangle()
        .setTop(rectangle.top)
        .setLeft(rectangle.left)
        .setWidth(rectangle.width)
        .setHeight(rectangle.height);
}
/** Value indicating what shell event occurred.
 *
 * # Links
 * https://msdn.microsoft.com/en-us/library/windows/desktop/ms644989(v=vs.85).aspx
 * https://msdn.microsoft.com/en-us/library/windows/desktop/ms644991(v=vs.85).aspx
 */
export enum ShellEventType {
    /** An event type code with unknown meaning. */
    UNKNOWN = 0,
    /** A top-level, unowned window has been created. The window exists when the
     * system calls this hook.
     *
     * - Data is: A handle to the window being created. */
    WINDOW_CREATED = 1,
    /** A top-level, unowned window is about to be destroyed. The window still
     * exists when the system calls this hook.
     *
     * - Data is: A handle to the top-level window being destroyed. */
    WINDOW_DESTROYED = 2,
    /** The shell should activate its main window.
     *
     * - Data is: Not used. */
    ACTIVATE_SHELL_WINDOW = 3,
    /** The activation has changed to a different top-level, unowned window.
     *
     * - Data is: A handle to the activated window.
     * - 2nd Data is: The value is `true` if the window is in full-screen mode, or
     * `false` otherwise. */
    WINDOW_ACTIVATED = 4,
    /** A window is being minimized or maximized. The system needs the coordinates
     * of the minimized rectangle for the window.
     *
     * - Data is: A pointer to a `SHELLHOOKINFO` structure.
     * - 2nd Data is: A pointer to a `RECT` structure. */
    GET_MIN_RECT = 5,
    /** The title of a window in the task bar has been redrawn.
     *
     * - Data is: A handle to the window that needs to be redrawn.
     * - 2nd Data is: The value is `true` if the window is flashing, or `false`
     * otherwise. */
    REDRAW = 6,
    /** The user has selected the task list.
     *
     * - Data is: Can be ignored. */
    TASK_MAN = 7,
    /** Keyboard language was changed or a new keyboard layout was loaded.
     *
     * - Data is: A handle to the window.
     * - 2nd Data is: A handle to a keyboard layout. */
    LANGUAGE = 8,
    SYS_MENU = 9,
    /**
     * - Data is: A handle to the window that should be forced to exit. */
    END_TASK = 10,
    /** The accessibility state has changed.
     *
     * - Data is: The accessibility state has changed. */
    ACCESSIBILITY_STATE = 11,
    /** The user completed an input event (for example, pressed an application
     * command button on the mouse or an application command key on the keyboard),
     * and the application did not handle the `M_APPCOMMAND` message generated by
     * that input.
     *
     * - Data is: The `APPCOMMAND` which has been unhandled by the application
     *   or other hooks. See `WM_APPCOMMAND` and use the `GET_APPCOMMAND_Data`
     *   macro to retrieve this parameter.
     * - 2nd Data is: `GET_APPCOMMAND_LPARAM(lParam)` is the application command
     *   corresponding to the input event.
     *   `GET_DEVICE_LPARAM(lParam)` indicates what generated the input event;
     *   for example, the mouse or keyboard. For more information, see the
     *   `uDevice` parameter description under `M_APPCOMMAND`.
     *   `GET_FLAGS_LPARAM(lParam)` depends on the value of cmd in `WM_APPCOMMAND`.
     *   For example, it might indicate which virtual keys were held down when
     *   the `WM_APPCOMMAND` message was originally sent. For more information,
     *   see the `dwCmdFlags` description parameter under `WM_APPCOMMAND`. */
    APP_COMMAND = 12,
    /** A top-level window is being replaced. The window exists when the system
     * calls this hook.
     *
     * - Data is: A handle to the window being replaced.
     * - 2nd Data is: A handle to the new window.
     *
     * Windows 2000:  Not supported. */
    WINDOW_REPLACED = 13,
    /**
     * - Data is: A handle to the window replacing the top-level window. */
    WINDOW_REPLACING = 14,
    /**
     * - Data is: A handle to the window that moved to a different monitor.
     * - 2nd Data is: A handle to the window that moved to a different monitor. */
    MONITOR_CHANGED = 16,
    /**
     * - Data is: A handle to the activated window. */
    RUDE_APP_ACTIVATED = 17,
    /**
     * - Data is: A handle to the window that needs to be flashed. */
    FLASH = 18,
}

/** Info about a shell event that has information about some open window. */
export interface ShellEventArgs {
    /** Indicates what type of shell event occurred. */
    eventType: ShellEventType;
    /** For most actions this will be a handle for the affected window.
     * For some actions this handle is used for something else. */
    data: IntPtr;
    /** Contains secondary data for the event. What it is used for depends on the
     * event type.
     *
     * This will only be included if it is specified as wanted in the initial
     * request. */
    secondaryData: IntPtr;
    /** The code used by Windows to indicate the event type. */
    eventTypeCode: number,
}

export interface ListenToShellEventsParams {
    /** Use a more advanced event listener that captures the second event
     * argument as well.
     *
     * The more advanced event listener currently doesn't work very well (only
     * for the server's windows) so this should always be `false`. */
    getSecondEventArg?: boolean,
    /** If this is specified then all other events types will be filter out. */
    wantedEventType?: ShellEventType | null,
}

export interface MoveWindowToVirtualDesktopOptions {
    /** Don't preform the move if the window is already at the specified window.
     * Note that this will also prevent the "stop window flashing" code from
     * running for this window. */
    skipMoveIfAlreadyAtTarget?: boolean,
    /** Do some extra work to stop the window from flashing. When a window is
     * "flashing" its taskbar icon might be flashing yellow and the taskbar icon
     * is also visible on all virtual desktops. */
    stopWindowFlashing?: boolean,
}
function createMoveWindowToVirtualDesktopOptions(options: undefined | MoveWindowToVirtualDesktopOptions): virtualDesktop.MoveWindowToVirtualDesktopOptions {
    return new virtualDesktop.MoveWindowToVirtualDesktopOptions()
        .setDontMoveIfAlreadyAtTarget(options?.skipMoveIfAlreadyAtTarget ?? true)
        .setStopWindowFlashing(options?.stopWindowFlashing ?? false);
}

/** The type of handles to windows. */
export type IntPtr = number;

export interface IVirtualDesktopManager {
    /** Log a message. This can be useful if the client is a sub-process of
     * the server and therefore might want to defer log handling to the
     * parent process.
     * @param message The message that should be logged. */
    log(message: string): Promise<void>;

    /** Determine if the server has elevated permissions.
     *
     * Reasons to use this:
     * - Allows client to gracefully handle issues.
     * - This affects the performance of process monitoring, so you might choose
     *   a lower sampling rate if the is `false`.
     *
     * @returns `true` if the server has elevated permissions. */
    getIsElevated(): Promise<boolean>;


    // #region Handle Current Virtual Desktop

    /** Get the index of the current virtual desktop.
     * @returns The index of the current virtual desktop. */
    getCurrentVirtualDesktopIndex(): Promise<number>;
    changeCurrentVirtualDesktopToIndex(smoothChange: boolean, index: number): Promise<void>;
    changeCurrentVirtualDesktopToRight(smoothChange: boolean, count: number): Promise<void>;
    changeCurrentVirtualDesktopToLeft(smoothChange: boolean, count: number): Promise<void>;

    // #endregion Handle Current Virtual Desktop


    // #region Create/Delete Virtual Desktops

    /** Create a new virtual desktop, this will always be created after all the
     * current virtual desktops.
     * @param switchToCreatedDesktop `true` to immediately switch to the newly created virtual desktop. */
    createVirtualDesktop(switchToCreatedDesktop: boolean): Promise<void>;
    /** Delete the virtual desktop at the specified index or the current virtual
     * desktop if no index is specified.
     * @param preferFallbackToTheLeft If `true` then fallback to the virtual desktop
     * to the left of the current one instead of the one the right.
     * @param index The index of the virtual desktop that should be deleted. If
     * not specified then deletes the current virtual desktop. */
    deleteVirtualDesktop(preferFallbackToTheLeft: boolean, index?: number): Promise<void>;

    // #endregion Create/Delete Virtual Desktops


    // #region Listen for Virtual Desktop Changed/Created/Removed

    /** Be notified when the current virtual desktop index is changed. */
    listenForVirtualDesktopChanged(): MultipleResponses<VirtualDesktopChangedEventArgs>;
    /** Be notified when a virtual desktop is created. */
    listenForVirtualDesktopCreated(): MultipleResponses<VirtualDesktopCreatedEventArgs>;
    /** Be notified when a virtual desktop is deleted/closed/destroyed. */
    listenForVirtualDesktopDeleted(): MultipleResponses<VirtualDesktopDeletedEventArgs>;

    // #endregion Listen for Virtual Desktop Changed/Created/Removed


    // #region Query a window's virtual desktop info

    /** Get the index for a certain window's virtual desktop. */
    getWindowVirtualDesktopIndex(windowHandle: IntPtr): Promise<number>;
    /** Determine if a window is pinned so that it is visible to all virtual desktops. */
    getWindowIsPinnedToVirtualDesktop(windowHandle: IntPtr): Promise<boolean>;

    // #endregion Query a window's virtual desktop info


    // #region Manage a window's virtual desktop

    pinWindowToAllVirtualDesktops(windowHandle: IntPtr, stopWindowFlashing: boolean): Promise<void>;
    /** Unpin a window so that it is no longer shown on all virtual desktops and
     * then optionally move it to a specified virtual desktop index.
     * @param windowHandle The handle for the window that should be unpinned.
     * @param targetVirtualDesktopIndex The virtual desktop that the window should
     * be moved to directly after it is unpinned.
     * @param moveEvenIfAlreadyUnpinned Move the window even if it was already unpinned. */
    unpinWindowFromAllVirtualDesktops(windowHandle: IntPtr, targetVirtualDesktopIndex?: number, moveEvenIfAlreadyUnpinned?: boolean, moveOptions?: MoveWindowToVirtualDesktopOptions): Promise<void>;
    /** Move a window to a specific virtual desktop index.
     * @param windowHandle The handle for the window that should be moved.
     * @param targetVirtualDesktopIndex The index of the virtual desktop that the
     * window should be moved to. */
    moveWindowToVirtualDesktopIndex(windowHandle: IntPtr, targetVirtualDesktopIndex: number, moveOptions?: MoveWindowToVirtualDesktopOptions): Promise<void>;
    /** Move a window to a virtual desktop to the left of the one it is currently on.
     * @param windowHandle The handle for the window that should be moved.
     * @param count The number of virtual desktops to move the window. */
    moveWindowToVirtualDesktopLeftOfCurrent(windowHandle: IntPtr, count: number, moveOptions?: MoveWindowToVirtualDesktopOptions): Promise<void>;
    /** Move a window to a virtual desktop to the right of the one it is currently on.
     * @param windowHandle The handle for the window that should be moved.
     * @param count The number of virtual desktops to move the window. */
    moveWindowToVirtualDesktopRightOfCurrent(windowHandle: IntPtr, count: number, moveOptions?: MoveWindowToVirtualDesktopOptions): Promise<void>;

    // #endregion Manage a window's virtual desktop


    // #region Query Open Windows

    /** Gets information about all open windows that have the specified properties,
     * or all windows if no properties are specified.
     * @param filter Properties to use to filter what windows should have their
     * information collected.
     * @param wantedData An optimization hint that allows the server to send less
     * data. Can be left unspecified to let the server send all data. */
    queryOpenWindows(filter: QueryOpenWindowsFilter, wantedData?: QueryOpenWindowsWantedData | null): MultipleResponses<QueryOpenWindowsInfo>;

    /** Get the currently selected window. */
    getForegroundWindow(): Promise<IntPtr>

    /** Get the desktop window. */
    getDesktopWindow(): Promise<IntPtr>;

    /** Listen to shell events.
     *
     * # Uses
     *
     * - Can be used to keep track of foreground window (`RUDE_APP_ACTIVATED`).
     *   (Doesn't detect tray icon context menu windows - window handle is Zero)
     * - Can be used to get notified on window open or close. (`WINDOW_CREATED`)
     *   (`WINDOW_DESTROYED`) (`WINDOW_REPLACED`?)
     * - Can be used to keep track of window titles. (`REDRAW`)
     * - Can be used to get notified on window minimize. (`GET_MIN_RECT`)
     **/
    listenToShellEvents(args?: ListenToShellEventsParams): MultipleResponses<ShellEventArgs>;

    // #endregion Query Open Windows


    // #region Get Window Info

    /** Determine if a window is minimized.
     * @param windowHandle The window that should be checked to see if it is minimized.
     * @returns {Promise<boolean>} `true` if the window is minimized. */
    getIsWindowMinimized(windowHandle: IntPtr): Promise<boolean>;

    /** Determine a window's location.
     * @param windowHandle The window whose location should be determined.
     * @param extendedFrameBounds Use extended frame bounds, this will exclude
     * the window's drop shadow from the returned bounds.
     * @returns The bounds of the window. */
    getWindowLocation(windowHandle: IntPtr, extendedFrameBounds: boolean): Promise<Rectangle>;

    // #endregion Get Window Info


    // #region Manipulate Window

    /** Sets the specified window's show state.
     * @param windowHandle The window that should have its show state changed.
     * @param showState The state that window should be changed to.
     * @returns {Promise<boolean>} `true` if the window was previously shown. */
    setWindowShowState(windowHandle: IntPtr, showState: ShowState): Promise<boolean>;

    /** Close a window.
     * @param windowHandle The window that should be closed. */
    closeWindow(windowHandle: IntPtr): Promise<void>;

    /** Set the foreground window (the currently select window).
     * @param windowHandle The handle for the window that should be moved to the front. */
    setForegroundWindow(windowHandle: IntPtr): Promise<void>;

    /** Move a window.
     * @param windowHandle The window that should be moved.
     * @param wantedLocation The location the window should be moved to. */
    moveWindow(windowHandle: IntPtr, wantedLocation: Rectangle): Promise<void>;

    /** Stop some windows from trying to grab the users attention by flashing
     * their taskbar icons. The taskbar icon of flashing windows is visible on
     * all virtual desktops.
     *
     * It is strongly recommended to use a filter that has
     * `hasVirtualDesktopInfo` set to `true`.
     * @param filter Determines what windows should stop being flashed. */
    stopWindowFlashing(filter: QueryOpenWindowsFilter): Promise<void>;

    // #endregion Manipulate Window
}

/** The names of all functions on `virtualDesktop.Response` that can be used to
 * get more specific response types. */
type ResponseValidatorKeys = {
    [key in keyof virtualDesktop.Response]:
    // Only methods (with no arguments):
    virtualDesktop.Response[key] extends (() => infer R)
    ? (R extends
        // Filter out unwanted methods:
        virtualDesktop.Response | boolean | string | number | Message.MessageArray | undefined | virtualDesktop.Response.AsObject | Uint8Array
        ? never
        : key)
    : never
}[keyof virtualDesktop.Response];
/** All methods on a `virtualDesktop.Response` that can be used to turn it into a
 * specific response type. */
type ResponseValidators = {
    [key in ResponseValidatorKeys]: virtualDesktop.Response[key] extends (() => infer R) ? NonNullable<R> : never
};

/** The request was canceled. */
export class RequestCanceledError extends Error {
    constructor() {
        super("Request was canceled.");
        this.name = this.constructor.name;
    }
}
/** The client was closed so a request couldn't be processed or completed. */
export class ClientClosedError extends Error {
    constructor() {
        super("Client was closed.");
        this.name = this.constructor.name;
    }
}
/** The server encountered an error while processing a request. */
export class ServerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}
/** The client did not expect the response the server gave for a request. */
export class InvalidServerResponseTypeError extends Error {
    constructor(expected: string, actual: string) {
        super("Expected a response with type \"" + expected + "\" but got a message of type \"" + actual + "\".");
        this.name = this.constructor.name;
    }
}
/** The request was too large and wasn't sent to the server. */
export class TooLargeRequestError extends Error {
    public requestSize: number;
    public maxRequestSize: number;

    constructor(actualSize: number, maxSize: number) {
        super("Request message was " + actualSize + " bytes large which exceeded the maximum size of " + maxSize + " bytes.");
        this.name = this.constructor.name;

        this.requestSize = actualSize;
        this.maxRequestSize = maxSize;
    }
}

export class Client implements Deno.Closer, IVirtualDesktopManager {

    // #region Field types

    /** Read the servers responses from this stream. */
    private _input: Deno.Reader & Deno.Closer;
    /** Write requests to the server via this stream. */
    private _output: Deno.Writer & Deno.Closer;

    private _isClosed: boolean;
    private _onClosed: EventManager<void>;
    private _onCloseRequested: EventManager<void>;

    /** Requests that are queued to be sent to the server. */
    private _queuedRequests: virtualDesktop.Request[];
    /** A function that should be called after a new request has been enqueued
     * into the `_queuedRequests` array. */
    private _handleQueuedRequests: null | (() => void);
    /** Data associated with an active request. Key is a request's id. */
    private _activeRequests: Map<number, ResponseHandler>;
    /** The id to use for the next request.
     *
     * Use only even numbers so that odd numbers can be used for requests that
     * are initiated by the server. 0 is reserved for stateless requests that
     * don't need a response. */
    private _currentRequestId: number;

    /** The maximum size of messages to send to the server for a request. */
    public maxRequestSize: number;
    /** The maximum size to accept for messages sent by the server. */
    public maxResponseSize: number;

    /** Invoked when a response read from the input stream could not be parsed
     * correctly.
     *
     * Maybe the client was based on a different incompatible protobuf schema
     * or maybe the server has a bug. */
    private _onResponseParseError: EventManager<void>;
    /// Invoked when a response was ignored due to its message size.
    private _onTooLargeResponse: EventManager<void>;

    /** The client received a response to a request id that was unknown. This
     * probably indicates a bug in the server or client. */
    private _onResponseToUnknownRequest: EventManager<void>;

    /** Did not receive a single response for a request which expected only one
     * response. This probably indicates a bug in the server or client. */
    private _onMultipleResponsesToSingleResponseRequest: EventManager<void>;

    /** The server ignored one or more requests that were sent from this client.
     * This could be because the sent requests were too large but it is more
     * likely because of a bug or because someone else was also writing to the
     * output stream. */
    private _onServerDroppedRequest: EventManager<void>;

    private _onInputClosed: EventManager<Error | null>;
    private _onOutputClosed: EventManager<Error | null>;

    /** The client encountered an error when handling messages.
     *
     * This is not invoked for error responses from the server, instead this
     * indicates a larger issue. */
    private _onClientError: EventManager<Error>;

    // #endregion Field types


    constructor(params: ClientConstructorParams) {
        this._input = params.input;
        this._output = params.output;

        this._isClosed = false;
        this._onClosed = new EventManager();
        this._onCloseRequested = new EventManager();

        this._queuedRequests = [];
        this._handleQueuedRequests = null;
        this._activeRequests = new Map();
        this._currentRequestId = 2;

        this.maxRequestSize = 1_000_000;
        this.maxResponseSize = 1_000_000;


        this._onResponseParseError = new EventManager();
        this._onTooLargeResponse = new EventManager();
        this._onResponseToUnknownRequest = new EventManager();
        this._onMultipleResponsesToSingleResponseRequest = new EventManager();
        this._onServerDroppedRequest = new EventManager();

        this._onClientError = new EventManager();

        this._onInputClosed = new EventManager();
        this._onOutputClosed = new EventManager();


        this._onResponseParseError.addListener(() => this._onClientError.fire(new Error('A response sent from the server failed to parse.')));
        this._onTooLargeResponse.addListener(() => this._onClientError.fire(new Error('Server sent a response that was too large so it was ignored.')));
        this._onResponseToUnknownRequest.addListener(() => this._onClientError.fire(new Error('Served sent a response to an unknown request.')));
        this._onMultipleResponsesToSingleResponseRequest.addListener(() => this._onClientError.fire(new Error('multiple responses from server to a request that only expected one response.')));
        this._onServerDroppedRequest.addListener(() => this._onClientError.fire(new Error('Server dropped a request.')));

        this._onInputClosed.addListener((e) => { if (e != null) this._onClientError.fire(e) });
        this._onOutputClosed.addListener((e) => { if (e != null) this._onClientError.fire(e) });


        this._handleInput();
        this._handleOutput();
    }


    // #region Closer

    public close(): void {
        if (this._isClosed) return;
        this._onCloseRequested.fire();
        this._isClosed = true;

        // Defer IO close since it might be blocking:
        setTimeout(() => {
            try {
                this._input.close();
            } catch (error) {
                this._onClientError.fire(error);
            }
        }, 0);
        setTimeout(() => {
            try {
                this._output.close()
            } catch (error) {
                this._onClientError.fire(error);
            }
        }, 0);
        if (this._handleQueuedRequests) this._handleQueuedRequests();

        const activeRequests = this._activeRequests;
        this._activeRequests = new Map();

        for (const handler of activeRequests.values()) {
            handler.onCompleted(new ClientClosedError());
        }

        this._onClosed.fire();
    }

    public get onClosed(): EventSubscriber<void> {
        return this._onClosed;
    }

    public get onCloseRequested(): EventSubscriber<void> {
        return this._onCloseRequested;
    }

    public get isClosed(): boolean {
        return this._isClosed;
    }

    // #endregion Closer


    // #region Background Promises

    private async _handleInput(): Promise<void> {
        try {
            try {
                await readFromInput({
                    input: this._input,
                    isCanceled: () => this._isClosed,
                    allowedMessageSize: (size) => {
                        const isAllowed = size <= this.maxResponseSize;
                        if (!isAllowed)
                            this._onTooLargeResponse.fire();
                        return isAllowed;
                    },
                    handleMessage: async (message) => {
                        // Parse and handle request:
                        let response: virtualDesktop.Response;
                        try {
                            response = virtualDesktop.Response.deserializeBinary(message);
                        }
                        catch (Exception) {
                            this._onResponseParseError.fire();
                            return;
                        }

                        if (response.getDataCase() == virtualDesktop.Response.DataCase.DROPPED_REQUEST) {
                            this._onServerDroppedRequest.fire();
                            return;
                        }

                        const responseHandler = this._activeRequests.get(response.getId());
                        if (!responseHandler) {
                            this._onResponseToUnknownRequest.fire();
                            return;
                        }
                        const isDone = response.getDone() || responseHandler.expectSingleResponse;
                        if (isDone) {
                            this._activeRequests.delete(response.getId());
                        }
                        responseHandler.handleResponse(response, isDone);
                        if (isDone) {
                            responseHandler.onCompleted();
                            if (isDone && !response.getDone()) {
                                this._onMultipleResponsesToSingleResponseRequest.fire();
                            }
                        }
                    },
                });
            } catch (error) {
                this._onInputClosed.fire(error);
                return;
            }
            this._onInputClosed.fire(null);
        } finally {
            // If we can't parse responses from the server then we should probably
            // stop sending requests anyway.
            this.close();
        }
    }

    private async _handleOutput(): Promise<void> {
        try {
            try {
                await writeToOutput<virtualDesktop.Request>({
                    output: this._output,
                    isCanceled: () => this._isClosed,
                    getNextMessage: async () => {
                        const needToWait = () => this._queuedRequests.length == 0 && !this._isClosed;
                        while (needToWait()) {
                            await new Promise((resolve, reject) => {
                                try {
                                    if (needToWait())
                                        this._handleQueuedRequests = resolve as () => void;
                                    else
                                        resolve(null);
                                } catch (error) {
                                    reject(error);
                                }
                            });
                        }
                        return this._queuedRequests.shift();
                    },
                    allowedMessageSize: (size, message) => {
                        // Handle too large requests:
                        if (size <= this.maxRequestSize)
                            return OutputMessageSizeCheck.Allow;
                        else {
                            const responseHandler = this._activeRequests.get(message.getId());
                            if (responseHandler) {
                                this._activeRequests.delete(message.getId());

                                responseHandler.onCompleted(new TooLargeRequestError(size, this.maxRequestSize));
                            }

                            return OutputMessageSizeCheck.Cancel;
                        }
                    },
                });
            } catch (error) {
                this._onOutputClosed.fire(error);
                return;
            }
            this._onOutputClosed.fire(null);
        } finally {
            // If we can't send requests then we close the client so that the request
            // queue doesn't continue to grow.
            this.close();
        }
    }

    // #endregion Background Promises


    // #region Helper methods

    private _registerRequest(responseHandler: ResponseHandler): number {
        if (this._isClosed) {
            // Prevent adding a response handler that will never be completed.
            throw new ClientClosedError();
        }
        let id
        do {
            id = this._currentRequestId;
            if (this._currentRequestId >= (0xFFFFFFFF - 1)) {
                // Would overflow an Uint32:
                this._currentRequestId = 2;
            } else {
                this._currentRequestId += 2;
            }
        } while (this._activeRequests.has(id));
        this._activeRequests.set(id, responseHandler);
        return id;
    }

    private _enqueueRequest(request: virtualDesktop.Request) {
        if (this._isClosed) {
            // Prevent enqueuing a request that will never be sent.
            throw new ClientClosedError();
        }
        this._queuedRequests.push(request);
        if (this._handleQueuedRequests) {
            this._handleQueuedRequests();
            this._handleQueuedRequests = null;
        }
    }

    private _sendRequest(request: virtualDesktop.Request, responseHandler: ResponseHandler): number {
        const id = this._registerRequest(responseHandler);
        request.setId(id);
        this._enqueueRequest(request);
        return id;
    }

    private _isRequestActive(id: number, handler: null | ResponseHandler = null): boolean {
        const actual = this._activeRequests.get(id);
        if (actual == null || actual == handler) {
            return true;
        }
        return false;
    }

    private _validateResponse<V extends [ResponseValidatorKeys] | [undefined] | []>(
        response: virtualDesktop.Response,
        ...[validate]: V
    ): V extends [NonNullable<ResponseValidatorKeys>] ? ResponseValidators[V[0]] : virtualDesktop.Response {
        if (!validate) {
            return response as any;
        }
        const value = response[validate]();
        if (value) {
            return value as any;
        }

        // Special case general response types:
        const actualValue = response.getDataCase();
        switch (actualValue) {
            case virtualDesktop.Response.DataCase.CANCELED:
                throw new RequestCanceledError();
            case virtualDesktop.Response.DataCase.ERROR:
                throw new ServerError(response.getError()?.getErrorMessage() ?? "unknown error");
        }

        // Invalid response types:

        let expected: string = validate;
        if (expected.startsWith("get")) {
            expected = expected.slice(3);
        }
        // CamelCase => SCREAMING_SNAKE_CASE:
        expected = expected.split(/(?=[A-Z])/).join('_').toUpperCase();

        // Actual value (enum is an object where the keys are the enum names):
        const actualName = Object.entries(virtualDesktop.Response.DataCase)
            .filter(([_key, value]) => value == actualValue)
            .map(([key, _value]) => key)[0];
        throw new InvalidServerResponseTypeError(expected, actualName);
    }

    /** Send a request and wait to get a response back.
     *
     * @param request The request to send.
     * @returns A promise that will complete once the server has sent back a response. */
    private _sendRequestWithSingleResponse<V extends [ResponseValidatorKeys] | []>(
        request: virtualDesktop.Request,
        ...[validate]: V
    ): Promise<V extends [NonNullable<ResponseValidatorKeys>] ? ResponseValidators[V[0]] : virtualDesktop.Response> {
        return new Promise((resolve, reject) => {
            try {
                let done = false;
                const responseHandler: ResponseHandler = {
                    expectSingleResponse: true,
                    handleResponse: (message) => {
                        if (validate) {
                            try {
                                resolve(this._validateResponse(message, validate) as any);
                            } catch (error) {
                                reject(error);
                            }
                        } else {
                            resolve(message as any);
                        }
                        done = true;
                    },
                    onCompleted: (error) => {
                        if (done) return;
                        if (error != null) {
                            reject(error);
                        } else {
                            reject(new Error("No response received from server"));
                        }
                    },
                };

                this._sendRequest(request, responseHandler);
            } catch (error) {
                reject(error);
            }
        });
    }
    /** Send a request and expect multiple responses.
     *
     * # Examples
     *
     * ```typescript
     * async function(client: Client): void {
     *      const iterator = client._sendRequestWithMultipleResponses(new virtualDesktop.Request(), response => response);
     *      for await (const response of iterator) {
     *          // Can call close anytime to stop responses:
     *          iterator.close();
     *      }
     * }
     * ```
     *
     * @param request The request to send.
     * @param mapResponse A function that maps the response type into a different type.
     * @param validate The getter method on the `virtualDesktop.Response` type to use to get the expected response type.
     * @returns An iterator that will yield any responses sent back from the server. This object can also be closed to send a cancel request to the server. */
    private _sendRequestWithMultipleResponses<T, V extends [ResponseValidatorKeys] | []>(
        request: virtualDesktop.Request,
        mapResponse: (response: V extends [NonNullable<ResponseValidatorKeys>] ? ResponseValidators[V[0]] : virtualDesktop.Response) => T,
        ...[validate]: V
    ): MultipleResponses<T> {
        type AsyncIterResult = { isError: false, value: T } | { isError: true, error: Error };
        let queue: AsyncIterResult[] = [];
        let requestError: null | Error = null;
        let isCompleted = false;
        let isUsingAsyncIteratorAPI = false;
        let queuedPromises: (() => void)[] = [];
        const next = function (): Promise<IteratorResult<T, null>> {
            isUsingAsyncIteratorAPI = true;
            return new Promise(async (resolve, reject) => {
                const check = () => {
                    try {
                        const nextValue = queue.shift();
                        if (nextValue) {
                            if (nextValue.isError) {
                                reject(nextValue.error);
                            } else {
                                resolve({ value: nextValue.value, done: false });
                            }
                        } else if (isCompleted) {
                            if (requestError != null) {
                                reject(requestError);
                            } else {
                                resolve({ value: null, done: true });
                            }
                        } else {
                            queuedPromises.push(check);
                        }
                    } catch (error) {
                        reject(error);
                    }
                };
                check();
            });
        };

        const onMessage = new EventManager<T>();
        const onError = new EventManager<Error>();
        const onClose = new EventManager<Error | null>();
        const responseHandler: ResponseHandler = {
            expectSingleResponse: false,
            handleResponse: (response, lastResponse) => {
                if (!isUsingAsyncIteratorAPI && !onMessage.length && !onError.length) return;

                let result: AsyncIterResult;
                try {
                    if (lastResponse && response.hasSuccess()) {
                        // Can finish a stream of responses with a success message.
                        return;
                    }
                    let value: T;
                    if (validate) {
                        value = mapResponse(this._validateResponse(response, validate) as any);
                    } else {
                        value = mapResponse(response as any);
                    }
                    result = { value, isError: false };
                } catch (error) {
                    if (lastResponse && !requestError) {
                        requestError = error;
                        if (!isCompleted) {
                            // Delay error to completion (probably canceled error / server error):
                            return;
                        }
                    }
                    result = { error, isError: true };
                }

                // Async iterator API:
                if (isUsingAsyncIteratorAPI) {
                    // Note: don't queue messages if only the event based API is used.
                    queue.push(result);

                    // Wake iterator promise:
                    const check = queuedPromises.shift()
                    if (check) check();
                }
                // Event based API:
                if (result.isError) {
                    onError.fire(result.error);
                } else {
                    onMessage.fire(result.value);
                }
            },
            onCompleted: (error) => {
                isCompleted = true;
                if (error) {
                    requestError = error;
                }

                // Wake iterator promises:
                queuedPromises.forEach(check => check());
                queuedPromises = [];

                onClose.fire(error ?? null);
            }
        };
        const id = this._sendRequest(request, responseHandler);

        let isClosing = false;
        const iterator = {
            [Symbol.asyncIterator]() {
                isUsingAsyncIteratorAPI = true;
                return iterator
            },
            next,
            close: () => {
                if (!isClosing && this._isRequestActive(id, responseHandler)) {
                    const requestIndex = this._queuedRequests.indexOf(request);
                    if (requestIndex >= 0) {
                        // Request still queued => remove it and unregister the response handler:
                        this._queuedRequests.splice(requestIndex, 1);
                        const handler = this._activeRequests.get(id);
                        if (handler == responseHandler) {
                            this._activeRequests.delete(id);
                            handler.onCompleted(new RequestCanceledError());
                        }
                    } else {
                        // Already sent request => Tell server it was canceled:
                        this._enqueueRequest(
                            new virtualDesktop.Request()
                                .setId(id)
                                .setCancel(new virtualDesktop.CancelRequest())
                        );
                    }
                    isClosing = true;
                }
            },
            async toArray(): Promise<T[]> {
                try {
                    const values: T[] = [];
                    for await (const value of this) {
                        values.push(value);
                    }
                    return values;
                } finally {
                    this.close();
                }
            },
            onMessage,
            onError,
            onClose,
        };
        return iterator;
    }

    // #endregion Helper methods


    // #region New methods

    /** Create a client that connects to the parent process via this process's
     * stdin and stdout. */
    public static connectToParentProcess(_params: ConnectToClientForParentProcessParams = {}): Client {
        return new Client({ input: Deno.stdin, output: Deno.stdout });
    }

    /** Spawn a server as a sub process of this program and then connect to it
     * via its stdin and stdout. */
    public static connectToSpawnedChildProcess(params: ConnectToSpawnedChildProcessParams = {}): Client {
        let path = "./" + defaultServerExecutableName;
        if (params.serverPath) {
            path = params.serverPath;
            if (path.endsWith('/') || path.endsWith('\\')) {
                path += defaultServerExecutableName;
            }
        }

        if (params.relativeToScriptPath) {
            const scriptFile = import.meta.url;
            if (!scriptFile.startsWith('file:///')) {
                throw new Error('script path doesn\'t start with "file:///" protocol');
            }
            const scriptFolder = decodeURI(scriptFile.slice('file:///'.length)) + '/../';
            if (path.startsWith('./')) {
                path = scriptFolder + path.slice('./'.length);
            } else if (path.startsWith('.\\')) {
                path = scriptFolder + path.slice('.\\'.length);
            } else if (path.startsWith('../') || path.startsWith('..\\')) {
                path = scriptFolder + path;
            }
        }

        const process = Deno.run({
            cmd: [path, "--as-server"],
            stderr: 'piped',
            stdin: 'piped',
            stdout: 'piped',
        });

        const handleServerCrash = params.handleServerCrash;
        if (handleServerCrash) {
            (async () => {
                try {
                    const status = await process.status();
                    if (!status.success) {
                        const stderr = await process.stderrOutput();
                        handleServerCrash(new TextDecoder().decode(stderr));
                    }
                } catch (error) {
                    handleServerCrash("Failed to wait for spawned process to exit: " + error);
                }
            })();
        }

        const client = new Client({ input: process.stdout, output: process.stdin });
        if (params.aggressivelyKillProcess)
            client.onCloseRequested.addListener(() => process.close());
        return client;
    }

    // #endregion New methods


    // #region Client events

    /** Invoked when a response read from the input stream could not be parsed
     * correctly.
     *
     * Maybe the client was based on a different incompatible protobuf schema
     * or maybe the server has a bug. */
    public get onResponseParseError(): EventSubscriber<void> {
        return this._onResponseParseError;
    }
    /// Invoked when a response was ignored due to its message size.
    public get onTooLargeResponse(): EventSubscriber<void> {
        return this._onTooLargeResponse;
    }

    /** The client received a response to a request id that was unknown. This
     * probably indicates a bug in the server or client. */
    public get onResponseToUnknownRequest(): EventSubscriber<void> {
        return this._onResponseToUnknownRequest;
    }

    /** Did not receive a single response for a request which expected only one
     * response. This probably indicates a bug in the server or client. */
    public get onMultipleResponsesToSingleResponseRequest(): EventSubscriber<void> {
        return this._onMultipleResponsesToSingleResponseRequest;
    }

    /** The server ignored one or more requests that were sent from this client.
     * This could be because the sent requests were too large but it is more
     * likely because of a bug or because someone else was also writing to the
     * output stream. */
    public get onServerDroppedRequest(): EventSubscriber<void> {
        return this._onServerDroppedRequest;
    }

    /** The client encountered an error when handling messages.
     *
     * This is not invoked for error responses from the server, instead this
     * indicates a larger issue. */
    public get onClientError(): EventSubscriber<Error> {
        return this._onClientError;
    }

    public get onInputClosed(): EventSubscriber<Error | null> {
        return this._onInputClosed;
    }
    public get onOutputClosed(): EventSubscriber<Error | null> {
        return this._onOutputClosed;
    }

    // #endregion Client events


    // #region IVirtualDesktopManager

    async log(message: string): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setLog(new virtualDesktop.LogRequest()
                    .setLogMessage(message)
                ),
            'getSuccess'
        );
    }
    async getCurrentVirtualDesktopIndex(): Promise<number> {
        const response = await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setGetCurrentVirtualDesktop(new virtualDesktop.GetCurrentVirtualDesktopRequest()),
            'getGetCurrentVirtualDesktop'
        );
        return response.getCurrentVirtualDesktopIndex();
    }
    async changeCurrentVirtualDesktopToIndex(smoothChange: boolean, index: number): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setChangeVirtualDesktop(new virtualDesktop.ChangeVirtualDesktopRequest()
                    .setWantedVirtualDesktopIndex(index)
                    .setSmoothChange(smoothChange)
                ),
            'getSuccess'
        );
    }
    async changeCurrentVirtualDesktopToRight(smoothChange: boolean, count: number): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setChangeVirtualDesktop(new virtualDesktop.ChangeVirtualDesktopRequest()
                    .setChangeRight(count)
                    .setSmoothChange(smoothChange)
                ),
            'getSuccess'
        );
    }
    async changeCurrentVirtualDesktopToLeft(smoothChange: boolean, count: number): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setChangeVirtualDesktop(new virtualDesktop.ChangeVirtualDesktopRequest()
                    .setChangeLeft(count)
                    .setSmoothChange(smoothChange)
                ),
            'getSuccess'
        );
    }
    async createVirtualDesktop(switchToCreatedDesktop: boolean): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setCreateVirtualDesktop(new virtualDesktop.CreateVirtualDesktopRequest()
                    .setSwitchToTheCreatedDesktop(switchToCreatedDesktop)
                ),
            'getSuccess'
        );
    }
    async deleteVirtualDesktop(preferFallbackToTheLeft: boolean, index?: number): Promise<void> {
        const request = new virtualDesktop.DeleteVirtualDesktopRequest()
            .setPreferFallingBackToTheLeft(preferFallbackToTheLeft);

        if (index != undefined) {
            request.setVirtualDesktopIndex(index);
        } else {
            request.setCurrentDesktop(new virtualDesktop.DeleteVirtualDesktopRequestCurrentDesktop());
        }

        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setDeleteVirtualDesktop(request),
            'getSuccess'
        );
    }
    listenForVirtualDesktopChanged(): MultipleResponses<VirtualDesktopChangedEventArgs> {
        return this._sendRequestWithMultipleResponses(
            new virtualDesktop.Request()
                .setListenForVirtualDesktopChanged(new virtualDesktop.ListenForVirtualDesktopChangedRequest()),
            (response) => response.toObject(),
            'getListenForVirtualDesktopChanged'
        );
    }
    listenForVirtualDesktopCreated(): MultipleResponses<VirtualDesktopCreatedEventArgs> {
        return this._sendRequestWithMultipleResponses(
            new virtualDesktop.Request()
                .setListenForVirtualDesktopCreated(new virtualDesktop.ListenForVirtualDesktopCreatedRequest()),
            (response) => response.toObject(),
            'getListenForVirtualDesktopCreated'
        );
    }
    listenForVirtualDesktopDeleted(): MultipleResponses<VirtualDesktopDeletedEventArgs> {
        return this._sendRequestWithMultipleResponses(
            new virtualDesktop.Request()
                .setListenForVirtualDesktopDeleted(new virtualDesktop.ListenForVirtualDesktopDeletedRequest()),
            (response) => response.toObject(),
            'getListenForVirtualDesktopDeleted'
        );
    }
    async getWindowVirtualDesktopIndex(windowHandle: number): Promise<number> {
        const response = await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setGetWindowVirtualDesktopIndex(
                    new virtualDesktop.GetWindowVirtualDesktopIndexRequest()
                        .setWindowHandle(windowHandle)
                ),
            'getGetWindowVirtualDesktopIndex'
        );
        return response.getVirtualDesktopIndex();
    }
    async getWindowIsPinnedToVirtualDesktop(windowHandle: number): Promise<boolean> {
        const response = await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setGetWindowIsPinnedToVirtualDesktop(
                    new virtualDesktop.GetWindowIsPinnedToVirtualDesktopRequest()
                        .setWindowHandle(windowHandle)
                ),
            'getGetWindowIsPinnedToVirtualDesktop'
        );
        return response.getIsPinned();
    }
    async pinWindowToAllVirtualDesktops(windowHandle: number, stopWindowFlashing: boolean): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setPinWindowToAllVirtualDesktops(new virtualDesktop.PinWindowToAllVirtualDesktopsRequest()
                    .setWindowHandle(windowHandle)
                    .setStopWindowFlashing(stopWindowFlashing)
                ),
            'getSuccess'
        );
    }
    async unpinWindowFromAllVirtualDesktops(windowHandle: number, targetVirtualDesktopIndex?: number, moveEvenIfAlreadyUnpinned?: boolean, moveOptions?: MoveWindowToVirtualDesktopOptions): Promise<void> {
        const request = new virtualDesktop.UnpinWindowFromAllVirtualDesktopsRequest()
            .setWindowHandle(windowHandle);

        if (targetVirtualDesktopIndex === undefined || targetVirtualDesktopIndex === null) {
            request.setJustUnpin(new virtualDesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin());
        } else if (moveEvenIfAlreadyUnpinned) {
            request.setMoveUnconditionally(
                new virtualDesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally()
                    .setTargetVirtualDesktopIndex(targetVirtualDesktopIndex)
                    .setMoveOptions(createMoveWindowToVirtualDesktopOptions(moveOptions))
            );
        } else {
            request.setMoveIfUnpinned(
                new virtualDesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned()
                    .setTargetVirtualDesktopIndex(targetVirtualDesktopIndex)
                    .setMoveOptions(createMoveWindowToVirtualDesktopOptions(moveOptions))
            );
        }

        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setUnpinWindowFromAllVirtualDesktops(request),
            'getSuccess'
        );
    }
    async moveWindowToVirtualDesktopIndex(windowHandle: number, targetVirtualDesktopIndex: number, moveOptions?: MoveWindowToVirtualDesktopOptions): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setMoveWindowToVirtualDesktop(new virtualDesktop.MoveWindowToVirtualDesktopRequest()
                    .setWindowHandle(windowHandle)
                    .setMoveOptions(createMoveWindowToVirtualDesktopOptions(moveOptions))
                    .setWantedVirtualDesktopIndex(targetVirtualDesktopIndex)
                ),
            'getSuccess'
        );
    }
    async moveWindowToVirtualDesktopLeftOfCurrent(windowHandle: number, count: number, moveOptions?: MoveWindowToVirtualDesktopOptions): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setMoveWindowToVirtualDesktop(new virtualDesktop.MoveWindowToVirtualDesktopRequest()
                    .setWindowHandle(windowHandle)
                    .setMoveOptions(createMoveWindowToVirtualDesktopOptions(moveOptions))
                    .setChangeLeft(count)
                ),
            'getSuccess'
        );
    }
    async moveWindowToVirtualDesktopRightOfCurrent(windowHandle: number, count: number, moveOptions?: MoveWindowToVirtualDesktopOptions): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setMoveWindowToVirtualDesktop(new virtualDesktop.MoveWindowToVirtualDesktopRequest()
                    .setWindowHandle(windowHandle)
                    .setMoveOptions(createMoveWindowToVirtualDesktopOptions(moveOptions))
                    .setChangeRight(count)
                ),
            'getSuccess'
        );
    }

    queryOpenWindows(filter: QueryOpenWindowsFilter, wantedData?: QueryOpenWindowsWantedData | null): MultipleResponses<QueryOpenWindowsInfo> {
        const query = new virtualDesktop.QueryOpenWindowsRequest().setWindowsFilter(createQueryOpenWindowsFilter(filter));

        if (wantedData) {
            const specifier = new virtualDesktop.QueryOpenWindowsRequestWantedDataSpecifier();


            if (wantedData.parentWindowHandle)
                specifier.setParentWindowHandle(true);
            if (wantedData.rootParentWindowHandle)
                specifier.setRootParentWindowHandle(true);

            if (wantedData.processId)
                specifier.setProcessId(true);
            if (wantedData.title)
                specifier.setTitle(true);
            if (wantedData.isMinimized)
                specifier.setIsMinimized(true);

            if (wantedData.pinnedToAllVirtualDesktops)
                specifier.setPinnedToAllVirtualDesktops(true);
            if (wantedData.virtualDesktopIndex)
                specifier.setVirtualDesktopIndex(true);


            query.setWantedDataSpecifier(specifier);
        }


        return this._sendRequestWithMultipleResponses(
            new virtualDesktop.Request()
                .setOpenWindowsQuery(query),
            (response) => {
                const info: { windowHandle: IntPtr } & Partial<virtualDesktop.QueryOpenWindowsResponse.AsObject> = response.toObject();

                if (response.getOptionalParentWindowHandleCase() == virtualDesktop.QueryOpenWindowsResponse.OptionalParentWindowHandleCase.OPTIONAL_PARENT_WINDOW_HANDLE_NOT_SET) {
                    delete info.parentWindowHandle;
                }
                if (response.getOptionalRootParentWindowHandleCase() == virtualDesktop.QueryOpenWindowsResponse.OptionalRootParentWindowHandleCase.OPTIONAL_ROOT_PARENT_WINDOW_HANDLE_NOT_SET) {
                    delete info.rootParentWindowHandle;
                }

                if (response.getOptionalTitleCase() == virtualDesktop.QueryOpenWindowsResponse.OptionalTitleCase.OPTIONAL_TITLE_NOT_SET) {
                    delete info.title;
                }
                if (response.getOptionalProcessIdCase() == virtualDesktop.QueryOpenWindowsResponse.OptionalProcessIdCase.OPTIONAL_PROCESS_ID_NOT_SET) {
                    delete info.processId;
                }
                if (response.getOptionalIsMinimizedCase() == virtualDesktop.QueryOpenWindowsResponse.OptionalIsMinimizedCase.OPTIONAL_IS_MINIMIZED_NOT_SET) {
                    delete info.isMinimized;
                }

                if (response.getOptionalPinnedToAllVirtualDesktopsCase() == virtualDesktop.QueryOpenWindowsResponse.OptionalPinnedToAllVirtualDesktopsCase.OPTIONAL_PINNED_TO_ALL_VIRTUAL_DESKTOPS_NOT_SET) {
                    delete info.pinnedToAllVirtualDesktops;
                }
                if (response.getOptionalVirtualDesktopIndexCase() == virtualDesktop.QueryOpenWindowsResponse.OptionalVirtualDesktopIndexCase.OPTIONAL_VIRTUAL_DESKTOP_INDEX_NOT_SET) {
                    delete info.virtualDesktopIndex;
                }

                return info;
            },
            'getOpenWindowsQuery'
        );
    }

    async getForegroundWindow(): Promise<number> {
        const response = await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setGetForegroundWindow(
                    new virtualDesktop.GetForegroundWindowRequest()
                ),
            'getGetForegroundWindow'
        );
        return response.getForegroundWindowHandle();
    }
    async getDesktopWindow(): Promise<number> {
        const response = await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setGetDesktopWindow(
                    new virtualDesktop.GetDesktopWindowRequest()
                ),
            'getGetDesktopWindow'
        );
        return response.getDesktopWindowHandle();
    }

    listenToShellEvents(args?: ListenToShellEventsParams): MultipleResponses<ShellEventArgs> {
        const request = new virtualDesktop.ListenToShellEventsRequest();
        if (args && args.getSecondEventArg) {
            request.setGetSecondEventArg(args.getSecondEventArg);
        }
        if (args && args.wantedEventType) {
            request.setWantedEventType(args.wantedEventType);
        }
        return this._sendRequestWithMultipleResponses(
            new virtualDesktop.Request()
                .setListenToShellEvents(request),
            (response) => response.toObject(),
            'getListenToShellEvents'
        );
    }

    async getIsWindowMinimized(windowHandle: number): Promise<boolean> {
        const response = await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setGetIsWindowMinimized(
                    new virtualDesktop.GetIsWindowMinimizedRequest()
                        .setWindowHandle(windowHandle)
                ),
            'getGetIsWindowMinimized'
        );
        return response.getIsMinimized();
    }
    async setWindowShowState(windowHandle: number, showState: ShowState): Promise<boolean> {
        const response = await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setSetWindowShowState(
                    new virtualDesktop.SetWindowShowStateRequest()
                        .setWindowHandle(windowHandle)
                        .setWantedState(showState)
                ),
            'getSetWindowShowState'
        );
        return response.getWasVisible();
    }
    async closeWindow(windowHandle: number): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setCloseWindow(new virtualDesktop.CloseWindowRequest()
                    .setWindowHandle(windowHandle)
                ),
            'getSuccess'
        );
    }
    async setForegroundWindow(windowHandle: number): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setSetForegroundWindow(new virtualDesktop.SetForegroundWindowRequest()
                    .setWindowHandle(windowHandle)
                ),
            'getSuccess'
        );
    }

    async getIsElevated(): Promise<boolean> {
        const response = await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setGetIsElevated(
                    new virtualDesktop.GetIsElevatedRequest()
                ),
            'getGetIsElevated'
        );
        return response.getIsElevated();
    }

    async getWindowLocation(windowHandle: number, extendedFrameBounds: boolean): Promise<Rectangle> {
        const response = await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setGetWindowLocation(
                    new virtualDesktop.GetWindowLocationRequest()
                        .setWindowHandle(windowHandle)
                        .setExtendedFrameBound(extendedFrameBounds)
                ),
            'getGetWindowLocation'
        );
        const bounds = response.getBounds();
        if (bounds) {
            return bounds.toObject();
        } else {
            throw new Error("no window bounds were returned by the server");
        }
    }
    async moveWindow(windowHandle: number, wantedLocation: Rectangle): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setMoveWindow(new virtualDesktop.MoveWindowRequest()
                    .setWindowHandle(windowHandle)
                    .setWantedLocation(toRectangle(wantedLocation))
                ),
            'getSuccess'
        );
    }
    async stopWindowFlashing(filter: QueryOpenWindowsFilter): Promise<void> {
        await this._sendRequestWithSingleResponse(
            new virtualDesktop.Request()
                .setStopWindowFlashing(new virtualDesktop.StopWindowFlashingRequest()
                    .setWindowsFilter(createQueryOpenWindowsFilter(filter))
                ),
            'getSuccess'
        );
    }

    // #endregion IVirtualDesktopManager

}