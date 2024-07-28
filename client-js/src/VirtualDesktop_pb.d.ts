import * as jspb from 'google-protobuf'



export class Request extends jspb.Message {
  getId(): number;
  setId(value: number): Request;

  getLog(): LogRequest | undefined;
  setLog(value?: LogRequest): Request;
  hasLog(): boolean;
  clearLog(): Request;

  getCancel(): CancelRequest | undefined;
  setCancel(value?: CancelRequest): Request;
  hasCancel(): boolean;
  clearCancel(): Request;

  getGetIsElevated(): GetIsElevatedRequest | undefined;
  setGetIsElevated(value?: GetIsElevatedRequest): Request;
  hasGetIsElevated(): boolean;
  clearGetIsElevated(): Request;

  getGetCurrentVirtualDesktop(): GetCurrentVirtualDesktopRequest | undefined;
  setGetCurrentVirtualDesktop(value?: GetCurrentVirtualDesktopRequest): Request;
  hasGetCurrentVirtualDesktop(): boolean;
  clearGetCurrentVirtualDesktop(): Request;

  getCreateVirtualDesktop(): CreateVirtualDesktopRequest | undefined;
  setCreateVirtualDesktop(value?: CreateVirtualDesktopRequest): Request;
  hasCreateVirtualDesktop(): boolean;
  clearCreateVirtualDesktop(): Request;

  getDeleteVirtualDesktop(): DeleteVirtualDesktopRequest | undefined;
  setDeleteVirtualDesktop(value?: DeleteVirtualDesktopRequest): Request;
  hasDeleteVirtualDesktop(): boolean;
  clearDeleteVirtualDesktop(): Request;

  getChangeVirtualDesktop(): ChangeVirtualDesktopRequest | undefined;
  setChangeVirtualDesktop(value?: ChangeVirtualDesktopRequest): Request;
  hasChangeVirtualDesktop(): boolean;
  clearChangeVirtualDesktop(): Request;

  getListenForVirtualDesktopChanged(): ListenForVirtualDesktopChangedRequest | undefined;
  setListenForVirtualDesktopChanged(value?: ListenForVirtualDesktopChangedRequest): Request;
  hasListenForVirtualDesktopChanged(): boolean;
  clearListenForVirtualDesktopChanged(): Request;

  getListenForVirtualDesktopCreated(): ListenForVirtualDesktopCreatedRequest | undefined;
  setListenForVirtualDesktopCreated(value?: ListenForVirtualDesktopCreatedRequest): Request;
  hasListenForVirtualDesktopCreated(): boolean;
  clearListenForVirtualDesktopCreated(): Request;

  getListenForVirtualDesktopDeleted(): ListenForVirtualDesktopDeletedRequest | undefined;
  setListenForVirtualDesktopDeleted(value?: ListenForVirtualDesktopDeletedRequest): Request;
  hasListenForVirtualDesktopDeleted(): boolean;
  clearListenForVirtualDesktopDeleted(): Request;

  getPinWindowToAllVirtualDesktops(): PinWindowToAllVirtualDesktopsRequest | undefined;
  setPinWindowToAllVirtualDesktops(value?: PinWindowToAllVirtualDesktopsRequest): Request;
  hasPinWindowToAllVirtualDesktops(): boolean;
  clearPinWindowToAllVirtualDesktops(): Request;

  getUnpinWindowFromAllVirtualDesktops(): UnpinWindowFromAllVirtualDesktopsRequest | undefined;
  setUnpinWindowFromAllVirtualDesktops(value?: UnpinWindowFromAllVirtualDesktopsRequest): Request;
  hasUnpinWindowFromAllVirtualDesktops(): boolean;
  clearUnpinWindowFromAllVirtualDesktops(): Request;

  getMoveWindowToVirtualDesktop(): MoveWindowToVirtualDesktopRequest | undefined;
  setMoveWindowToVirtualDesktop(value?: MoveWindowToVirtualDesktopRequest): Request;
  hasMoveWindowToVirtualDesktop(): boolean;
  clearMoveWindowToVirtualDesktop(): Request;

  getGetWindowVirtualDesktopIndex(): GetWindowVirtualDesktopIndexRequest | undefined;
  setGetWindowVirtualDesktopIndex(value?: GetWindowVirtualDesktopIndexRequest): Request;
  hasGetWindowVirtualDesktopIndex(): boolean;
  clearGetWindowVirtualDesktopIndex(): Request;

  getGetWindowIsPinnedToVirtualDesktop(): GetWindowIsPinnedToVirtualDesktopRequest | undefined;
  setGetWindowIsPinnedToVirtualDesktop(value?: GetWindowIsPinnedToVirtualDesktopRequest): Request;
  hasGetWindowIsPinnedToVirtualDesktop(): boolean;
  clearGetWindowIsPinnedToVirtualDesktop(): Request;

  getOpenWindowsQuery(): QueryOpenWindowsRequest | undefined;
  setOpenWindowsQuery(value?: QueryOpenWindowsRequest): Request;
  hasOpenWindowsQuery(): boolean;
  clearOpenWindowsQuery(): Request;

  getGetForegroundWindow(): GetForegroundWindowRequest | undefined;
  setGetForegroundWindow(value?: GetForegroundWindowRequest): Request;
  hasGetForegroundWindow(): boolean;
  clearGetForegroundWindow(): Request;

  getGetDesktopWindow(): GetDesktopWindowRequest | undefined;
  setGetDesktopWindow(value?: GetDesktopWindowRequest): Request;
  hasGetDesktopWindow(): boolean;
  clearGetDesktopWindow(): Request;

  getListenToShellEvents(): ListenToShellEventsRequest | undefined;
  setListenToShellEvents(value?: ListenToShellEventsRequest): Request;
  hasListenToShellEvents(): boolean;
  clearListenToShellEvents(): Request;

  getGetIsWindowMinimized(): GetIsWindowMinimizedRequest | undefined;
  setGetIsWindowMinimized(value?: GetIsWindowMinimizedRequest): Request;
  hasGetIsWindowMinimized(): boolean;
  clearGetIsWindowMinimized(): Request;

  getGetWindowLocation(): GetWindowLocationRequest | undefined;
  setGetWindowLocation(value?: GetWindowLocationRequest): Request;
  hasGetWindowLocation(): boolean;
  clearGetWindowLocation(): Request;

  getSetWindowShowState(): SetWindowShowStateRequest | undefined;
  setSetWindowShowState(value?: SetWindowShowStateRequest): Request;
  hasSetWindowShowState(): boolean;
  clearSetWindowShowState(): Request;

  getCloseWindow(): CloseWindowRequest | undefined;
  setCloseWindow(value?: CloseWindowRequest): Request;
  hasCloseWindow(): boolean;
  clearCloseWindow(): Request;

  getSetForegroundWindow(): SetForegroundWindowRequest | undefined;
  setSetForegroundWindow(value?: SetForegroundWindowRequest): Request;
  hasSetForegroundWindow(): boolean;
  clearSetForegroundWindow(): Request;

  getMoveWindow(): MoveWindowRequest | undefined;
  setMoveWindow(value?: MoveWindowRequest): Request;
  hasMoveWindow(): boolean;
  clearMoveWindow(): Request;

  getStopWindowFlashing(): StopWindowFlashingRequest | undefined;
  setStopWindowFlashing(value?: StopWindowFlashingRequest): Request;
  hasStopWindowFlashing(): boolean;
  clearStopWindowFlashing(): Request;

  getDataCase(): Request.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    id: number,
    log?: LogRequest.AsObject,
    cancel?: CancelRequest.AsObject,
    getIsElevated?: GetIsElevatedRequest.AsObject,
    getCurrentVirtualDesktop?: GetCurrentVirtualDesktopRequest.AsObject,
    createVirtualDesktop?: CreateVirtualDesktopRequest.AsObject,
    deleteVirtualDesktop?: DeleteVirtualDesktopRequest.AsObject,
    changeVirtualDesktop?: ChangeVirtualDesktopRequest.AsObject,
    listenForVirtualDesktopChanged?: ListenForVirtualDesktopChangedRequest.AsObject,
    listenForVirtualDesktopCreated?: ListenForVirtualDesktopCreatedRequest.AsObject,
    listenForVirtualDesktopDeleted?: ListenForVirtualDesktopDeletedRequest.AsObject,
    pinWindowToAllVirtualDesktops?: PinWindowToAllVirtualDesktopsRequest.AsObject,
    unpinWindowFromAllVirtualDesktops?: UnpinWindowFromAllVirtualDesktopsRequest.AsObject,
    moveWindowToVirtualDesktop?: MoveWindowToVirtualDesktopRequest.AsObject,
    getWindowVirtualDesktopIndex?: GetWindowVirtualDesktopIndexRequest.AsObject,
    getWindowIsPinnedToVirtualDesktop?: GetWindowIsPinnedToVirtualDesktopRequest.AsObject,
    openWindowsQuery?: QueryOpenWindowsRequest.AsObject,
    getForegroundWindow?: GetForegroundWindowRequest.AsObject,
    getDesktopWindow?: GetDesktopWindowRequest.AsObject,
    listenToShellEvents?: ListenToShellEventsRequest.AsObject,
    getIsWindowMinimized?: GetIsWindowMinimizedRequest.AsObject,
    getWindowLocation?: GetWindowLocationRequest.AsObject,
    setWindowShowState?: SetWindowShowStateRequest.AsObject,
    closeWindow?: CloseWindowRequest.AsObject,
    setForegroundWindow?: SetForegroundWindowRequest.AsObject,
    moveWindow?: MoveWindowRequest.AsObject,
    stopWindowFlashing?: StopWindowFlashingRequest.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    LOG = 14,
    CANCEL = 15,
    GET_IS_ELEVATED = 17,
    GET_CURRENT_VIRTUAL_DESKTOP = 30,
    CREATE_VIRTUAL_DESKTOP = 31,
    DELETE_VIRTUAL_DESKTOP = 32,
    CHANGE_VIRTUAL_DESKTOP = 33,
    LISTEN_FOR_VIRTUAL_DESKTOP_CHANGED = 34,
    LISTEN_FOR_VIRTUAL_DESKTOP_CREATED = 35,
    LISTEN_FOR_VIRTUAL_DESKTOP_DELETED = 36,
    PIN_WINDOW_TO_ALL_VIRTUAL_DESKTOPS = 37,
    UNPIN_WINDOW_FROM_ALL_VIRTUAL_DESKTOPS = 38,
    MOVE_WINDOW_TO_VIRTUAL_DESKTOP = 39,
    GET_WINDOW_VIRTUAL_DESKTOP_INDEX = 40,
    GET_WINDOW_IS_PINNED_TO_VIRTUAL_DESKTOP = 41,
    OPEN_WINDOWS_QUERY = 50,
    GET_FOREGROUND_WINDOW = 51,
    GET_DESKTOP_WINDOW = 52,
    LISTEN_TO_SHELL_EVENTS = 53,
    GET_IS_WINDOW_MINIMIZED = 70,
    GET_WINDOW_LOCATION = 71,
    SET_WINDOW_SHOW_STATE = 60,
    CLOSE_WINDOW = 61,
    SET_FOREGROUND_WINDOW = 62,
    MOVE_WINDOW = 63,
    STOP_WINDOW_FLASHING = 64,
  }
}

export class Response extends jspb.Message {
  getId(): number;
  setId(value: number): Response;

  getDone(): boolean;
  setDone(value: boolean): Response;

  getSuccess(): SuccessResponse | undefined;
  setSuccess(value?: SuccessResponse): Response;
  hasSuccess(): boolean;
  clearSuccess(): Response;

  getCanceled(): CanceledResponse | undefined;
  setCanceled(value?: CanceledResponse): Response;
  hasCanceled(): boolean;
  clearCanceled(): Response;

  getError(): ErrorResponse | undefined;
  setError(value?: ErrorResponse): Response;
  hasError(): boolean;
  clearError(): Response;

  getDroppedRequest(): DroppedRequestResponse | undefined;
  setDroppedRequest(value?: DroppedRequestResponse): Response;
  hasDroppedRequest(): boolean;
  clearDroppedRequest(): Response;

  getGetIsElevated(): GetIsElevatedResponse | undefined;
  setGetIsElevated(value?: GetIsElevatedResponse): Response;
  hasGetIsElevated(): boolean;
  clearGetIsElevated(): Response;

  getGetCurrentVirtualDesktop(): GetCurrentVirtualDesktopResponse | undefined;
  setGetCurrentVirtualDesktop(value?: GetCurrentVirtualDesktopResponse): Response;
  hasGetCurrentVirtualDesktop(): boolean;
  clearGetCurrentVirtualDesktop(): Response;

  getListenForVirtualDesktopChanged(): ListenForVirtualDesktopChangedResponse | undefined;
  setListenForVirtualDesktopChanged(value?: ListenForVirtualDesktopChangedResponse): Response;
  hasListenForVirtualDesktopChanged(): boolean;
  clearListenForVirtualDesktopChanged(): Response;

  getListenForVirtualDesktopCreated(): ListenForVirtualDesktopCreatedResponse | undefined;
  setListenForVirtualDesktopCreated(value?: ListenForVirtualDesktopCreatedResponse): Response;
  hasListenForVirtualDesktopCreated(): boolean;
  clearListenForVirtualDesktopCreated(): Response;

  getListenForVirtualDesktopDeleted(): ListenForVirtualDesktopDeletedResponse | undefined;
  setListenForVirtualDesktopDeleted(value?: ListenForVirtualDesktopDeletedResponse): Response;
  hasListenForVirtualDesktopDeleted(): boolean;
  clearListenForVirtualDesktopDeleted(): Response;

  getGetWindowVirtualDesktopIndex(): GetWindowVirtualDesktopIndexResponse | undefined;
  setGetWindowVirtualDesktopIndex(value?: GetWindowVirtualDesktopIndexResponse): Response;
  hasGetWindowVirtualDesktopIndex(): boolean;
  clearGetWindowVirtualDesktopIndex(): Response;

  getGetWindowIsPinnedToVirtualDesktop(): GetWindowIsPinnedToVirtualDesktopResponse | undefined;
  setGetWindowIsPinnedToVirtualDesktop(value?: GetWindowIsPinnedToVirtualDesktopResponse): Response;
  hasGetWindowIsPinnedToVirtualDesktop(): boolean;
  clearGetWindowIsPinnedToVirtualDesktop(): Response;

  getOpenWindowsQuery(): QueryOpenWindowsResponse | undefined;
  setOpenWindowsQuery(value?: QueryOpenWindowsResponse): Response;
  hasOpenWindowsQuery(): boolean;
  clearOpenWindowsQuery(): Response;

  getGetForegroundWindow(): GetForegroundWindowResponse | undefined;
  setGetForegroundWindow(value?: GetForegroundWindowResponse): Response;
  hasGetForegroundWindow(): boolean;
  clearGetForegroundWindow(): Response;

  getGetDesktopWindow(): GetDesktopWindowResponse | undefined;
  setGetDesktopWindow(value?: GetDesktopWindowResponse): Response;
  hasGetDesktopWindow(): boolean;
  clearGetDesktopWindow(): Response;

  getListenToShellEvents(): ListenToShellEventsResponse | undefined;
  setListenToShellEvents(value?: ListenToShellEventsResponse): Response;
  hasListenToShellEvents(): boolean;
  clearListenToShellEvents(): Response;

  getGetIsWindowMinimized(): GetIsWindowMinimizedResponse | undefined;
  setGetIsWindowMinimized(value?: GetIsWindowMinimizedResponse): Response;
  hasGetIsWindowMinimized(): boolean;
  clearGetIsWindowMinimized(): Response;

  getGetWindowLocation(): GetWindowLocationResponse | undefined;
  setGetWindowLocation(value?: GetWindowLocationResponse): Response;
  hasGetWindowLocation(): boolean;
  clearGetWindowLocation(): Response;

  getSetWindowShowState(): SetWindowShowStateResponse | undefined;
  setSetWindowShowState(value?: SetWindowShowStateResponse): Response;
  hasSetWindowShowState(): boolean;
  clearSetWindowShowState(): Response;

  getDataCase(): Response.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    id: number,
    done: boolean,
    success?: SuccessResponse.AsObject,
    canceled?: CanceledResponse.AsObject,
    error?: ErrorResponse.AsObject,
    droppedRequest?: DroppedRequestResponse.AsObject,
    getIsElevated?: GetIsElevatedResponse.AsObject,
    getCurrentVirtualDesktop?: GetCurrentVirtualDesktopResponse.AsObject,
    listenForVirtualDesktopChanged?: ListenForVirtualDesktopChangedResponse.AsObject,
    listenForVirtualDesktopCreated?: ListenForVirtualDesktopCreatedResponse.AsObject,
    listenForVirtualDesktopDeleted?: ListenForVirtualDesktopDeletedResponse.AsObject,
    getWindowVirtualDesktopIndex?: GetWindowVirtualDesktopIndexResponse.AsObject,
    getWindowIsPinnedToVirtualDesktop?: GetWindowIsPinnedToVirtualDesktopResponse.AsObject,
    openWindowsQuery?: QueryOpenWindowsResponse.AsObject,
    getForegroundWindow?: GetForegroundWindowResponse.AsObject,
    getDesktopWindow?: GetDesktopWindowResponse.AsObject,
    listenToShellEvents?: ListenToShellEventsResponse.AsObject,
    getIsWindowMinimized?: GetIsWindowMinimizedResponse.AsObject,
    getWindowLocation?: GetWindowLocationResponse.AsObject,
    setWindowShowState?: SetWindowShowStateResponse.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    SUCCESS = 13,
    CANCELED = 14,
    ERROR = 15,
    DROPPED_REQUEST = 16,
    GET_IS_ELEVATED = 17,
    GET_CURRENT_VIRTUAL_DESKTOP = 30,
    LISTEN_FOR_VIRTUAL_DESKTOP_CHANGED = 34,
    LISTEN_FOR_VIRTUAL_DESKTOP_CREATED = 35,
    LISTEN_FOR_VIRTUAL_DESKTOP_DELETED = 36,
    GET_WINDOW_VIRTUAL_DESKTOP_INDEX = 40,
    GET_WINDOW_IS_PINNED_TO_VIRTUAL_DESKTOP = 41,
    OPEN_WINDOWS_QUERY = 50,
    GET_FOREGROUND_WINDOW = 51,
    GET_DESKTOP_WINDOW = 52,
    LISTEN_TO_SHELL_EVENTS = 53,
    GET_IS_WINDOW_MINIMIZED = 70,
    GET_WINDOW_LOCATION = 71,
    SET_WINDOW_SHOW_STATE = 60,
  }
}

export class SuccessResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessResponse): SuccessResponse.AsObject;
  static serializeBinaryToWriter(message: SuccessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessResponse;
  static deserializeBinaryFromReader(message: SuccessResponse, reader: jspb.BinaryReader): SuccessResponse;
}

export namespace SuccessResponse {
  export type AsObject = {
  }
}

export class ErrorResponse extends jspb.Message {
  getErrorMessage(): string;
  setErrorMessage(value: string): ErrorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorResponse): ErrorResponse.AsObject;
  static serializeBinaryToWriter(message: ErrorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorResponse;
  static deserializeBinaryFromReader(message: ErrorResponse, reader: jspb.BinaryReader): ErrorResponse;
}

export namespace ErrorResponse {
  export type AsObject = {
    errorMessage: string,
  }
}

export class DroppedRequestResponse extends jspb.Message {
  getErrorMessage(): string;
  setErrorMessage(value: string): DroppedRequestResponse;

  getReason(): DroppedRequestResponse.Reason;
  setReason(value: DroppedRequestResponse.Reason): DroppedRequestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DroppedRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DroppedRequestResponse): DroppedRequestResponse.AsObject;
  static serializeBinaryToWriter(message: DroppedRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DroppedRequestResponse;
  static deserializeBinaryFromReader(message: DroppedRequestResponse, reader: jspb.BinaryReader): DroppedRequestResponse;
}

export namespace DroppedRequestResponse {
  export type AsObject = {
    errorMessage: string,
    reason: DroppedRequestResponse.Reason,
  }

  export enum Reason { 
    PARSE_ERROR = 0,
    TOO_LARGE_REQUEST = 1,
  }
}

export class CancelRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelRequest): CancelRequest.AsObject;
  static serializeBinaryToWriter(message: CancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelRequest;
  static deserializeBinaryFromReader(message: CancelRequest, reader: jspb.BinaryReader): CancelRequest;
}

export namespace CancelRequest {
  export type AsObject = {
  }
}

export class CanceledResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CanceledResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CanceledResponse): CanceledResponse.AsObject;
  static serializeBinaryToWriter(message: CanceledResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CanceledResponse;
  static deserializeBinaryFromReader(message: CanceledResponse, reader: jspb.BinaryReader): CanceledResponse;
}

export namespace CanceledResponse {
  export type AsObject = {
  }
}

export class LogRequest extends jspb.Message {
  getLogMessage(): string;
  setLogMessage(value: string): LogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogRequest): LogRequest.AsObject;
  static serializeBinaryToWriter(message: LogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogRequest;
  static deserializeBinaryFromReader(message: LogRequest, reader: jspb.BinaryReader): LogRequest;
}

export namespace LogRequest {
  export type AsObject = {
    logMessage: string,
  }
}

export class ListenToShellEventsRequest extends jspb.Message {
  getGetSecondEventArg(): boolean;
  setGetSecondEventArg(value: boolean): ListenToShellEventsRequest;

  getWantedEventType(): ShellEventType;
  setWantedEventType(value: ShellEventType): ListenToShellEventsRequest;

  getOptionalWantedShellTypeCase(): ListenToShellEventsRequest.OptionalWantedShellTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenToShellEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenToShellEventsRequest): ListenToShellEventsRequest.AsObject;
  static serializeBinaryToWriter(message: ListenToShellEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenToShellEventsRequest;
  static deserializeBinaryFromReader(message: ListenToShellEventsRequest, reader: jspb.BinaryReader): ListenToShellEventsRequest;
}

export namespace ListenToShellEventsRequest {
  export type AsObject = {
    getSecondEventArg: boolean,
    wantedEventType: ShellEventType,
  }

  export enum OptionalWantedShellTypeCase { 
    OPTIONAL_WANTED_SHELL_TYPE_NOT_SET = 0,
    WANTED_EVENT_TYPE = 2,
  }
}

export class ListenToShellEventsResponse extends jspb.Message {
  getEventType(): ShellEventType;
  setEventType(value: ShellEventType): ListenToShellEventsResponse;

  getData(): number;
  setData(value: number): ListenToShellEventsResponse;

  getSecondaryData(): number;
  setSecondaryData(value: number): ListenToShellEventsResponse;

  getEventTypeCode(): number;
  setEventTypeCode(value: number): ListenToShellEventsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenToShellEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListenToShellEventsResponse): ListenToShellEventsResponse.AsObject;
  static serializeBinaryToWriter(message: ListenToShellEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenToShellEventsResponse;
  static deserializeBinaryFromReader(message: ListenToShellEventsResponse, reader: jspb.BinaryReader): ListenToShellEventsResponse;
}

export namespace ListenToShellEventsResponse {
  export type AsObject = {
    eventType: ShellEventType,
    data: number,
    secondaryData: number,
    eventTypeCode: number,
  }
}

export class MoveWindowRequest extends jspb.Message {
  getWindowHandle(): number;
  setWindowHandle(value: number): MoveWindowRequest;

  getWantedLocation(): Rectangle | undefined;
  setWantedLocation(value?: Rectangle): MoveWindowRequest;
  hasWantedLocation(): boolean;
  clearWantedLocation(): MoveWindowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveWindowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveWindowRequest): MoveWindowRequest.AsObject;
  static serializeBinaryToWriter(message: MoveWindowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveWindowRequest;
  static deserializeBinaryFromReader(message: MoveWindowRequest, reader: jspb.BinaryReader): MoveWindowRequest;
}

export namespace MoveWindowRequest {
  export type AsObject = {
    windowHandle: number,
    wantedLocation?: Rectangle.AsObject,
  }
}

export class GetWindowLocationRequest extends jspb.Message {
  getWindowHandle(): number;
  setWindowHandle(value: number): GetWindowLocationRequest;

  getExtendedFrameBound(): boolean;
  setExtendedFrameBound(value: boolean): GetWindowLocationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWindowLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWindowLocationRequest): GetWindowLocationRequest.AsObject;
  static serializeBinaryToWriter(message: GetWindowLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWindowLocationRequest;
  static deserializeBinaryFromReader(message: GetWindowLocationRequest, reader: jspb.BinaryReader): GetWindowLocationRequest;
}

export namespace GetWindowLocationRequest {
  export type AsObject = {
    windowHandle: number,
    extendedFrameBound: boolean,
  }
}

export class GetWindowLocationResponse extends jspb.Message {
  getBounds(): Rectangle | undefined;
  setBounds(value?: Rectangle): GetWindowLocationResponse;
  hasBounds(): boolean;
  clearBounds(): GetWindowLocationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWindowLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWindowLocationResponse): GetWindowLocationResponse.AsObject;
  static serializeBinaryToWriter(message: GetWindowLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWindowLocationResponse;
  static deserializeBinaryFromReader(message: GetWindowLocationResponse, reader: jspb.BinaryReader): GetWindowLocationResponse;
}

export namespace GetWindowLocationResponse {
  export type AsObject = {
    bounds?: Rectangle.AsObject,
  }
}

export class Rectangle extends jspb.Message {
  getTop(): number;
  setTop(value: number): Rectangle;

  getLeft(): number;
  setLeft(value: number): Rectangle;

  getWidth(): number;
  setWidth(value: number): Rectangle;

  getHeight(): number;
  setHeight(value: number): Rectangle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rectangle.AsObject;
  static toObject(includeInstance: boolean, msg: Rectangle): Rectangle.AsObject;
  static serializeBinaryToWriter(message: Rectangle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rectangle;
  static deserializeBinaryFromReader(message: Rectangle, reader: jspb.BinaryReader): Rectangle;
}

export namespace Rectangle {
  export type AsObject = {
    top: number,
    left: number,
    width: number,
    height: number,
  }
}

export class GetIsElevatedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIsElevatedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIsElevatedRequest): GetIsElevatedRequest.AsObject;
  static serializeBinaryToWriter(message: GetIsElevatedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIsElevatedRequest;
  static deserializeBinaryFromReader(message: GetIsElevatedRequest, reader: jspb.BinaryReader): GetIsElevatedRequest;
}

export namespace GetIsElevatedRequest {
  export type AsObject = {
  }
}

export class GetIsElevatedResponse extends jspb.Message {
  getIsElevated(): boolean;
  setIsElevated(value: boolean): GetIsElevatedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIsElevatedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIsElevatedResponse): GetIsElevatedResponse.AsObject;
  static serializeBinaryToWriter(message: GetIsElevatedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIsElevatedResponse;
  static deserializeBinaryFromReader(message: GetIsElevatedResponse, reader: jspb.BinaryReader): GetIsElevatedResponse;
}

export namespace GetIsElevatedResponse {
  export type AsObject = {
    isElevated: boolean,
  }
}

export class GetDesktopWindowRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDesktopWindowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDesktopWindowRequest): GetDesktopWindowRequest.AsObject;
  static serializeBinaryToWriter(message: GetDesktopWindowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDesktopWindowRequest;
  static deserializeBinaryFromReader(message: GetDesktopWindowRequest, reader: jspb.BinaryReader): GetDesktopWindowRequest;
}

export namespace GetDesktopWindowRequest {
  export type AsObject = {
  }
}

export class GetDesktopWindowResponse extends jspb.Message {
  getDesktopWindowHandle(): number;
  setDesktopWindowHandle(value: number): GetDesktopWindowResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDesktopWindowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDesktopWindowResponse): GetDesktopWindowResponse.AsObject;
  static serializeBinaryToWriter(message: GetDesktopWindowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDesktopWindowResponse;
  static deserializeBinaryFromReader(message: GetDesktopWindowResponse, reader: jspb.BinaryReader): GetDesktopWindowResponse;
}

export namespace GetDesktopWindowResponse {
  export type AsObject = {
    desktopWindowHandle: number,
  }
}

export class GetForegroundWindowRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetForegroundWindowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetForegroundWindowRequest): GetForegroundWindowRequest.AsObject;
  static serializeBinaryToWriter(message: GetForegroundWindowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetForegroundWindowRequest;
  static deserializeBinaryFromReader(message: GetForegroundWindowRequest, reader: jspb.BinaryReader): GetForegroundWindowRequest;
}

export namespace GetForegroundWindowRequest {
  export type AsObject = {
  }
}

export class GetForegroundWindowResponse extends jspb.Message {
  getForegroundWindowHandle(): number;
  setForegroundWindowHandle(value: number): GetForegroundWindowResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetForegroundWindowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetForegroundWindowResponse): GetForegroundWindowResponse.AsObject;
  static serializeBinaryToWriter(message: GetForegroundWindowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetForegroundWindowResponse;
  static deserializeBinaryFromReader(message: GetForegroundWindowResponse, reader: jspb.BinaryReader): GetForegroundWindowResponse;
}

export namespace GetForegroundWindowResponse {
  export type AsObject = {
    foregroundWindowHandle: number,
  }
}

export class SetForegroundWindowRequest extends jspb.Message {
  getWindowHandle(): number;
  setWindowHandle(value: number): SetForegroundWindowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetForegroundWindowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetForegroundWindowRequest): SetForegroundWindowRequest.AsObject;
  static serializeBinaryToWriter(message: SetForegroundWindowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetForegroundWindowRequest;
  static deserializeBinaryFromReader(message: SetForegroundWindowRequest, reader: jspb.BinaryReader): SetForegroundWindowRequest;
}

export namespace SetForegroundWindowRequest {
  export type AsObject = {
    windowHandle: number,
  }
}

export class GetIsWindowMinimizedRequest extends jspb.Message {
  getWindowHandle(): number;
  setWindowHandle(value: number): GetIsWindowMinimizedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIsWindowMinimizedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIsWindowMinimizedRequest): GetIsWindowMinimizedRequest.AsObject;
  static serializeBinaryToWriter(message: GetIsWindowMinimizedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIsWindowMinimizedRequest;
  static deserializeBinaryFromReader(message: GetIsWindowMinimizedRequest, reader: jspb.BinaryReader): GetIsWindowMinimizedRequest;
}

export namespace GetIsWindowMinimizedRequest {
  export type AsObject = {
    windowHandle: number,
  }
}

export class GetIsWindowMinimizedResponse extends jspb.Message {
  getIsMinimized(): boolean;
  setIsMinimized(value: boolean): GetIsWindowMinimizedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIsWindowMinimizedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIsWindowMinimizedResponse): GetIsWindowMinimizedResponse.AsObject;
  static serializeBinaryToWriter(message: GetIsWindowMinimizedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIsWindowMinimizedResponse;
  static deserializeBinaryFromReader(message: GetIsWindowMinimizedResponse, reader: jspb.BinaryReader): GetIsWindowMinimizedResponse;
}

export namespace GetIsWindowMinimizedResponse {
  export type AsObject = {
    isMinimized: boolean,
  }
}

export class CloseWindowRequest extends jspb.Message {
  getWindowHandle(): number;
  setWindowHandle(value: number): CloseWindowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseWindowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseWindowRequest): CloseWindowRequest.AsObject;
  static serializeBinaryToWriter(message: CloseWindowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseWindowRequest;
  static deserializeBinaryFromReader(message: CloseWindowRequest, reader: jspb.BinaryReader): CloseWindowRequest;
}

export namespace CloseWindowRequest {
  export type AsObject = {
    windowHandle: number,
  }
}

export class SetWindowShowStateRequest extends jspb.Message {
  getWindowHandle(): number;
  setWindowHandle(value: number): SetWindowShowStateRequest;

  getWantedState(): SetWindowShowStateRequest.ShowState;
  setWantedState(value: SetWindowShowStateRequest.ShowState): SetWindowShowStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetWindowShowStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetWindowShowStateRequest): SetWindowShowStateRequest.AsObject;
  static serializeBinaryToWriter(message: SetWindowShowStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetWindowShowStateRequest;
  static deserializeBinaryFromReader(message: SetWindowShowStateRequest, reader: jspb.BinaryReader): SetWindowShowStateRequest;
}

export namespace SetWindowShowStateRequest {
  export type AsObject = {
    windowHandle: number,
    wantedState: SetWindowShowStateRequest.ShowState,
  }

  export enum ShowState { 
    HIDE = 0,
    FORCE_MINIMIZE = 11,
    MAXIMIZE = 3,
    MINIMIZE = 6,
    RESTORE = 9,
    SHOW = 5,
    SHOW_DEFAULT = 10,
    SHOW_MAXIMIZED = 3,
    SHOW_MINIMIZED = 2,
    SHOW_MINIMIZED_NO_ACTIVATE = 7,
    SHOW_NO_ACTIVATE = 8,
    SHOW_NORMAL_NO_ACTIVATE = 4,
    SHOW_NORMAL = 1,
  }
}

export class SetWindowShowStateResponse extends jspb.Message {
  getWasVisible(): boolean;
  setWasVisible(value: boolean): SetWindowShowStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetWindowShowStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetWindowShowStateResponse): SetWindowShowStateResponse.AsObject;
  static serializeBinaryToWriter(message: SetWindowShowStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetWindowShowStateResponse;
  static deserializeBinaryFromReader(message: SetWindowShowStateResponse, reader: jspb.BinaryReader): SetWindowShowStateResponse;
}

export namespace SetWindowShowStateResponse {
  export type AsObject = {
    wasVisible: boolean,
  }
}

export class OpenWindowsFilter extends jspb.Message {
  getHasVirtualDesktopInfo(): boolean;
  setHasVirtualDesktopInfo(value: boolean): OpenWindowsFilter;

  getWindowHandle(): number;
  setWindowHandle(value: number): OpenWindowsFilter;

  getParentWindowHandle(): number;
  setParentWindowHandle(value: number): OpenWindowsFilter;

  getRootParentWindowHandle(): number;
  setRootParentWindowHandle(value: number): OpenWindowsFilter;

  getTitle(): string;
  setTitle(value: string): OpenWindowsFilter;

  getProcessId(): number;
  setProcessId(value: number): OpenWindowsFilter;

  getPinnedToAllVirtualDesktops(): boolean;
  setPinnedToAllVirtualDesktops(value: boolean): OpenWindowsFilter;

  getVirtualDesktopIndex(): number;
  setVirtualDesktopIndex(value: number): OpenWindowsFilter;

  getIsMinimized(): boolean;
  setIsMinimized(value: boolean): OpenWindowsFilter;

  getOptionalHasVirtualDesktopInfoCase(): OpenWindowsFilter.OptionalHasVirtualDesktopInfoCase;

  getOptionalWindowHandleCase(): OpenWindowsFilter.OptionalWindowHandleCase;

  getOptionalParentWindowHandleCase(): OpenWindowsFilter.OptionalParentWindowHandleCase;

  getOptionalRootParentWindowHandleCase(): OpenWindowsFilter.OptionalRootParentWindowHandleCase;

  getOptionalTitleCase(): OpenWindowsFilter.OptionalTitleCase;

  getOptionalProcessIdCase(): OpenWindowsFilter.OptionalProcessIdCase;

  getOptionalPinnedToAllVirtualDesktopsCase(): OpenWindowsFilter.OptionalPinnedToAllVirtualDesktopsCase;

  getOptionalVirtualDesktopIndexCase(): OpenWindowsFilter.OptionalVirtualDesktopIndexCase;

  getOptionalIsMinimizedCase(): OpenWindowsFilter.OptionalIsMinimizedCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenWindowsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: OpenWindowsFilter): OpenWindowsFilter.AsObject;
  static serializeBinaryToWriter(message: OpenWindowsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenWindowsFilter;
  static deserializeBinaryFromReader(message: OpenWindowsFilter, reader: jspb.BinaryReader): OpenWindowsFilter;
}

export namespace OpenWindowsFilter {
  export type AsObject = {
    hasVirtualDesktopInfo: boolean,
    windowHandle: number,
    parentWindowHandle: number,
    rootParentWindowHandle: number,
    title: string,
    processId: number,
    pinnedToAllVirtualDesktops: boolean,
    virtualDesktopIndex: number,
    isMinimized: boolean,
  }

  export enum OptionalHasVirtualDesktopInfoCase { 
    OPTIONAL_HAS_VIRTUAL_DESKTOP_INFO_NOT_SET = 0,
    HAS_VIRTUAL_DESKTOP_INFO = 1,
  }

  export enum OptionalWindowHandleCase { 
    OPTIONAL_WINDOW_HANDLE_NOT_SET = 0,
    WINDOW_HANDLE = 2,
  }

  export enum OptionalParentWindowHandleCase { 
    OPTIONAL_PARENT_WINDOW_HANDLE_NOT_SET = 0,
    PARENT_WINDOW_HANDLE = 3,
  }

  export enum OptionalRootParentWindowHandleCase { 
    OPTIONAL_ROOT_PARENT_WINDOW_HANDLE_NOT_SET = 0,
    ROOT_PARENT_WINDOW_HANDLE = 4,
  }

  export enum OptionalTitleCase { 
    OPTIONAL_TITLE_NOT_SET = 0,
    TITLE = 5,
  }

  export enum OptionalProcessIdCase { 
    OPTIONAL_PROCESS_ID_NOT_SET = 0,
    PROCESS_ID = 6,
  }

  export enum OptionalPinnedToAllVirtualDesktopsCase { 
    OPTIONAL_PINNED_TO_ALL_VIRTUAL_DESKTOPS_NOT_SET = 0,
    PINNED_TO_ALL_VIRTUAL_DESKTOPS = 7,
  }

  export enum OptionalVirtualDesktopIndexCase { 
    OPTIONAL_VIRTUAL_DESKTOP_INDEX_NOT_SET = 0,
    VIRTUAL_DESKTOP_INDEX = 8,
  }

  export enum OptionalIsMinimizedCase { 
    OPTIONAL_IS_MINIMIZED_NOT_SET = 0,
    IS_MINIMIZED = 9,
  }
}

export class QueryOpenWindowsRequest extends jspb.Message {
  getWindowsFilter(): OpenWindowsFilter | undefined;
  setWindowsFilter(value?: OpenWindowsFilter): QueryOpenWindowsRequest;
  hasWindowsFilter(): boolean;
  clearWindowsFilter(): QueryOpenWindowsRequest;

  getWantedDataSpecifier(): QueryOpenWindowsRequestWantedDataSpecifier | undefined;
  setWantedDataSpecifier(value?: QueryOpenWindowsRequestWantedDataSpecifier): QueryOpenWindowsRequest;
  hasWantedDataSpecifier(): boolean;
  clearWantedDataSpecifier(): QueryOpenWindowsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOpenWindowsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOpenWindowsRequest): QueryOpenWindowsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryOpenWindowsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOpenWindowsRequest;
  static deserializeBinaryFromReader(message: QueryOpenWindowsRequest, reader: jspb.BinaryReader): QueryOpenWindowsRequest;
}

export namespace QueryOpenWindowsRequest {
  export type AsObject = {
    windowsFilter?: OpenWindowsFilter.AsObject,
    wantedDataSpecifier?: QueryOpenWindowsRequestWantedDataSpecifier.AsObject,
  }
}

export class QueryOpenWindowsRequestWantedDataSpecifier extends jspb.Message {
  getParentWindowHandle(): boolean;
  setParentWindowHandle(value: boolean): QueryOpenWindowsRequestWantedDataSpecifier;

  getRootParentWindowHandle(): boolean;
  setRootParentWindowHandle(value: boolean): QueryOpenWindowsRequestWantedDataSpecifier;

  getTitle(): boolean;
  setTitle(value: boolean): QueryOpenWindowsRequestWantedDataSpecifier;

  getProcessId(): boolean;
  setProcessId(value: boolean): QueryOpenWindowsRequestWantedDataSpecifier;

  getPinnedToAllVirtualDesktops(): boolean;
  setPinnedToAllVirtualDesktops(value: boolean): QueryOpenWindowsRequestWantedDataSpecifier;

  getVirtualDesktopIndex(): boolean;
  setVirtualDesktopIndex(value: boolean): QueryOpenWindowsRequestWantedDataSpecifier;

  getIsMinimized(): boolean;
  setIsMinimized(value: boolean): QueryOpenWindowsRequestWantedDataSpecifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOpenWindowsRequestWantedDataSpecifier.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOpenWindowsRequestWantedDataSpecifier): QueryOpenWindowsRequestWantedDataSpecifier.AsObject;
  static serializeBinaryToWriter(message: QueryOpenWindowsRequestWantedDataSpecifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOpenWindowsRequestWantedDataSpecifier;
  static deserializeBinaryFromReader(message: QueryOpenWindowsRequestWantedDataSpecifier, reader: jspb.BinaryReader): QueryOpenWindowsRequestWantedDataSpecifier;
}

export namespace QueryOpenWindowsRequestWantedDataSpecifier {
  export type AsObject = {
    parentWindowHandle: boolean,
    rootParentWindowHandle: boolean,
    title: boolean,
    processId: boolean,
    pinnedToAllVirtualDesktops: boolean,
    virtualDesktopIndex: boolean,
    isMinimized: boolean,
  }
}

export class QueryOpenWindowsResponse extends jspb.Message {
  getWindowHandle(): number;
  setWindowHandle(value: number): QueryOpenWindowsResponse;

  getParentWindowHandle(): number;
  setParentWindowHandle(value: number): QueryOpenWindowsResponse;

  getRootParentWindowHandle(): number;
  setRootParentWindowHandle(value: number): QueryOpenWindowsResponse;

  getTitle(): string;
  setTitle(value: string): QueryOpenWindowsResponse;

  getProcessId(): number;
  setProcessId(value: number): QueryOpenWindowsResponse;

  getPinnedToAllVirtualDesktops(): boolean;
  setPinnedToAllVirtualDesktops(value: boolean): QueryOpenWindowsResponse;

  getVirtualDesktopIndex(): number;
  setVirtualDesktopIndex(value: number): QueryOpenWindowsResponse;

  getIsMinimized(): boolean;
  setIsMinimized(value: boolean): QueryOpenWindowsResponse;

  getOptionalParentWindowHandleCase(): QueryOpenWindowsResponse.OptionalParentWindowHandleCase;

  getOptionalRootParentWindowHandleCase(): QueryOpenWindowsResponse.OptionalRootParentWindowHandleCase;

  getOptionalTitleCase(): QueryOpenWindowsResponse.OptionalTitleCase;

  getOptionalProcessIdCase(): QueryOpenWindowsResponse.OptionalProcessIdCase;

  getOptionalPinnedToAllVirtualDesktopsCase(): QueryOpenWindowsResponse.OptionalPinnedToAllVirtualDesktopsCase;

  getOptionalVirtualDesktopIndexCase(): QueryOpenWindowsResponse.OptionalVirtualDesktopIndexCase;

  getOptionalIsMinimizedCase(): QueryOpenWindowsResponse.OptionalIsMinimizedCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOpenWindowsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOpenWindowsResponse): QueryOpenWindowsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryOpenWindowsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOpenWindowsResponse;
  static deserializeBinaryFromReader(message: QueryOpenWindowsResponse, reader: jspb.BinaryReader): QueryOpenWindowsResponse;
}

export namespace QueryOpenWindowsResponse {
  export type AsObject = {
    windowHandle: number,
    parentWindowHandle: number,
    rootParentWindowHandle: number,
    title: string,
    processId: number,
    pinnedToAllVirtualDesktops: boolean,
    virtualDesktopIndex: number,
    isMinimized: boolean,
  }

  export enum OptionalParentWindowHandleCase { 
    OPTIONAL_PARENT_WINDOW_HANDLE_NOT_SET = 0,
    PARENT_WINDOW_HANDLE = 2,
  }

  export enum OptionalRootParentWindowHandleCase { 
    OPTIONAL_ROOT_PARENT_WINDOW_HANDLE_NOT_SET = 0,
    ROOT_PARENT_WINDOW_HANDLE = 3,
  }

  export enum OptionalTitleCase { 
    OPTIONAL_TITLE_NOT_SET = 0,
    TITLE = 4,
  }

  export enum OptionalProcessIdCase { 
    OPTIONAL_PROCESS_ID_NOT_SET = 0,
    PROCESS_ID = 5,
  }

  export enum OptionalPinnedToAllVirtualDesktopsCase { 
    OPTIONAL_PINNED_TO_ALL_VIRTUAL_DESKTOPS_NOT_SET = 0,
    PINNED_TO_ALL_VIRTUAL_DESKTOPS = 6,
  }

  export enum OptionalVirtualDesktopIndexCase { 
    OPTIONAL_VIRTUAL_DESKTOP_INDEX_NOT_SET = 0,
    VIRTUAL_DESKTOP_INDEX = 7,
  }

  export enum OptionalIsMinimizedCase { 
    OPTIONAL_IS_MINIMIZED_NOT_SET = 0,
    IS_MINIMIZED = 8,
  }
}

export class GetCurrentVirtualDesktopRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentVirtualDesktopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentVirtualDesktopRequest): GetCurrentVirtualDesktopRequest.AsObject;
  static serializeBinaryToWriter(message: GetCurrentVirtualDesktopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentVirtualDesktopRequest;
  static deserializeBinaryFromReader(message: GetCurrentVirtualDesktopRequest, reader: jspb.BinaryReader): GetCurrentVirtualDesktopRequest;
}

export namespace GetCurrentVirtualDesktopRequest {
  export type AsObject = {
  }
}

export class GetCurrentVirtualDesktopResponse extends jspb.Message {
  getCurrentVirtualDesktopIndex(): number;
  setCurrentVirtualDesktopIndex(value: number): GetCurrentVirtualDesktopResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentVirtualDesktopResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentVirtualDesktopResponse): GetCurrentVirtualDesktopResponse.AsObject;
  static serializeBinaryToWriter(message: GetCurrentVirtualDesktopResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentVirtualDesktopResponse;
  static deserializeBinaryFromReader(message: GetCurrentVirtualDesktopResponse, reader: jspb.BinaryReader): GetCurrentVirtualDesktopResponse;
}

export namespace GetCurrentVirtualDesktopResponse {
  export type AsObject = {
    currentVirtualDesktopIndex: number,
  }
}

export class CreateVirtualDesktopRequest extends jspb.Message {
  getSwitchToTheCreatedDesktop(): boolean;
  setSwitchToTheCreatedDesktop(value: boolean): CreateVirtualDesktopRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualDesktopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualDesktopRequest): CreateVirtualDesktopRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualDesktopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualDesktopRequest;
  static deserializeBinaryFromReader(message: CreateVirtualDesktopRequest, reader: jspb.BinaryReader): CreateVirtualDesktopRequest;
}

export namespace CreateVirtualDesktopRequest {
  export type AsObject = {
    switchToTheCreatedDesktop: boolean,
  }
}

export class DeleteVirtualDesktopRequest extends jspb.Message {
  getPreferFallingBackToTheLeft(): boolean;
  setPreferFallingBackToTheLeft(value: boolean): DeleteVirtualDesktopRequest;

  getCurrentDesktop(): DeleteVirtualDesktopRequestCurrentDesktop | undefined;
  setCurrentDesktop(value?: DeleteVirtualDesktopRequestCurrentDesktop): DeleteVirtualDesktopRequest;
  hasCurrentDesktop(): boolean;
  clearCurrentDesktop(): DeleteVirtualDesktopRequest;

  getVirtualDesktopIndex(): number;
  setVirtualDesktopIndex(value: number): DeleteVirtualDesktopRequest;

  getDesktopToRemoveCase(): DeleteVirtualDesktopRequest.DesktopToRemoveCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualDesktopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualDesktopRequest): DeleteVirtualDesktopRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualDesktopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualDesktopRequest;
  static deserializeBinaryFromReader(message: DeleteVirtualDesktopRequest, reader: jspb.BinaryReader): DeleteVirtualDesktopRequest;
}

export namespace DeleteVirtualDesktopRequest {
  export type AsObject = {
    preferFallingBackToTheLeft: boolean,
    currentDesktop?: DeleteVirtualDesktopRequestCurrentDesktop.AsObject,
    virtualDesktopIndex: number,
  }

  export enum DesktopToRemoveCase { 
    DESKTOP_TO_REMOVE_NOT_SET = 0,
    CURRENT_DESKTOP = 14,
    VIRTUAL_DESKTOP_INDEX = 15,
  }
}

export class DeleteVirtualDesktopRequestCurrentDesktop extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualDesktopRequestCurrentDesktop.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualDesktopRequestCurrentDesktop): DeleteVirtualDesktopRequestCurrentDesktop.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualDesktopRequestCurrentDesktop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualDesktopRequestCurrentDesktop;
  static deserializeBinaryFromReader(message: DeleteVirtualDesktopRequestCurrentDesktop, reader: jspb.BinaryReader): DeleteVirtualDesktopRequestCurrentDesktop;
}

export namespace DeleteVirtualDesktopRequestCurrentDesktop {
  export type AsObject = {
  }
}

export class ChangeVirtualDesktopRequest extends jspb.Message {
  getSmoothChange(): boolean;
  setSmoothChange(value: boolean): ChangeVirtualDesktopRequest;

  getWantedVirtualDesktopIndex(): number;
  setWantedVirtualDesktopIndex(value: number): ChangeVirtualDesktopRequest;

  getChangeRight(): number;
  setChangeRight(value: number): ChangeVirtualDesktopRequest;

  getChangeLeft(): number;
  setChangeLeft(value: number): ChangeVirtualDesktopRequest;

  getChangeCase(): ChangeVirtualDesktopRequest.ChangeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeVirtualDesktopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeVirtualDesktopRequest): ChangeVirtualDesktopRequest.AsObject;
  static serializeBinaryToWriter(message: ChangeVirtualDesktopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeVirtualDesktopRequest;
  static deserializeBinaryFromReader(message: ChangeVirtualDesktopRequest, reader: jspb.BinaryReader): ChangeVirtualDesktopRequest;
}

export namespace ChangeVirtualDesktopRequest {
  export type AsObject = {
    smoothChange: boolean,
    wantedVirtualDesktopIndex: number,
    changeRight: number,
    changeLeft: number,
  }

  export enum ChangeCase { 
    CHANGE_NOT_SET = 0,
    WANTED_VIRTUAL_DESKTOP_INDEX = 13,
    CHANGE_RIGHT = 14,
    CHANGE_LEFT = 15,
  }
}

export class ListenForVirtualDesktopChangedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenForVirtualDesktopChangedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenForVirtualDesktopChangedRequest): ListenForVirtualDesktopChangedRequest.AsObject;
  static serializeBinaryToWriter(message: ListenForVirtualDesktopChangedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenForVirtualDesktopChangedRequest;
  static deserializeBinaryFromReader(message: ListenForVirtualDesktopChangedRequest, reader: jspb.BinaryReader): ListenForVirtualDesktopChangedRequest;
}

export namespace ListenForVirtualDesktopChangedRequest {
  export type AsObject = {
  }
}

export class ListenForVirtualDesktopChangedResponse extends jspb.Message {
  getOldCurrentVirtualDesktopIndex(): number;
  setOldCurrentVirtualDesktopIndex(value: number): ListenForVirtualDesktopChangedResponse;

  getNewCurrentVirtualDesktopIndex(): number;
  setNewCurrentVirtualDesktopIndex(value: number): ListenForVirtualDesktopChangedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenForVirtualDesktopChangedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListenForVirtualDesktopChangedResponse): ListenForVirtualDesktopChangedResponse.AsObject;
  static serializeBinaryToWriter(message: ListenForVirtualDesktopChangedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenForVirtualDesktopChangedResponse;
  static deserializeBinaryFromReader(message: ListenForVirtualDesktopChangedResponse, reader: jspb.BinaryReader): ListenForVirtualDesktopChangedResponse;
}

export namespace ListenForVirtualDesktopChangedResponse {
  export type AsObject = {
    oldCurrentVirtualDesktopIndex: number,
    newCurrentVirtualDesktopIndex: number,
  }
}

export class ListenForVirtualDesktopDeletedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenForVirtualDesktopDeletedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenForVirtualDesktopDeletedRequest): ListenForVirtualDesktopDeletedRequest.AsObject;
  static serializeBinaryToWriter(message: ListenForVirtualDesktopDeletedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenForVirtualDesktopDeletedRequest;
  static deserializeBinaryFromReader(message: ListenForVirtualDesktopDeletedRequest, reader: jspb.BinaryReader): ListenForVirtualDesktopDeletedRequest;
}

export namespace ListenForVirtualDesktopDeletedRequest {
  export type AsObject = {
  }
}

export class ListenForVirtualDesktopDeletedResponse extends jspb.Message {
  getIndexOfDeletedVirtualDesktop(): number;
  setIndexOfDeletedVirtualDesktop(value: number): ListenForVirtualDesktopDeletedResponse;

  getIndexOfFallbackVirtualDesktop(): number;
  setIndexOfFallbackVirtualDesktop(value: number): ListenForVirtualDesktopDeletedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenForVirtualDesktopDeletedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListenForVirtualDesktopDeletedResponse): ListenForVirtualDesktopDeletedResponse.AsObject;
  static serializeBinaryToWriter(message: ListenForVirtualDesktopDeletedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenForVirtualDesktopDeletedResponse;
  static deserializeBinaryFromReader(message: ListenForVirtualDesktopDeletedResponse, reader: jspb.BinaryReader): ListenForVirtualDesktopDeletedResponse;
}

export namespace ListenForVirtualDesktopDeletedResponse {
  export type AsObject = {
    indexOfDeletedVirtualDesktop: number,
    indexOfFallbackVirtualDesktop: number,
  }
}

export class ListenForVirtualDesktopCreatedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenForVirtualDesktopCreatedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenForVirtualDesktopCreatedRequest): ListenForVirtualDesktopCreatedRequest.AsObject;
  static serializeBinaryToWriter(message: ListenForVirtualDesktopCreatedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenForVirtualDesktopCreatedRequest;
  static deserializeBinaryFromReader(message: ListenForVirtualDesktopCreatedRequest, reader: jspb.BinaryReader): ListenForVirtualDesktopCreatedRequest;
}

export namespace ListenForVirtualDesktopCreatedRequest {
  export type AsObject = {
  }
}

export class ListenForVirtualDesktopCreatedResponse extends jspb.Message {
  getIndexOfCreatedVirtualDesktop(): number;
  setIndexOfCreatedVirtualDesktop(value: number): ListenForVirtualDesktopCreatedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenForVirtualDesktopCreatedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListenForVirtualDesktopCreatedResponse): ListenForVirtualDesktopCreatedResponse.AsObject;
  static serializeBinaryToWriter(message: ListenForVirtualDesktopCreatedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenForVirtualDesktopCreatedResponse;
  static deserializeBinaryFromReader(message: ListenForVirtualDesktopCreatedResponse, reader: jspb.BinaryReader): ListenForVirtualDesktopCreatedResponse;
}

export namespace ListenForVirtualDesktopCreatedResponse {
  export type AsObject = {
    indexOfCreatedVirtualDesktop: number,
  }
}

export class PinWindowToAllVirtualDesktopsRequest extends jspb.Message {
  getWindowHandle(): number;
  setWindowHandle(value: number): PinWindowToAllVirtualDesktopsRequest;

  getStopWindowFlashing(): boolean;
  setStopWindowFlashing(value: boolean): PinWindowToAllVirtualDesktopsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PinWindowToAllVirtualDesktopsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PinWindowToAllVirtualDesktopsRequest): PinWindowToAllVirtualDesktopsRequest.AsObject;
  static serializeBinaryToWriter(message: PinWindowToAllVirtualDesktopsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PinWindowToAllVirtualDesktopsRequest;
  static deserializeBinaryFromReader(message: PinWindowToAllVirtualDesktopsRequest, reader: jspb.BinaryReader): PinWindowToAllVirtualDesktopsRequest;
}

export namespace PinWindowToAllVirtualDesktopsRequest {
  export type AsObject = {
    windowHandle: number,
    stopWindowFlashing: boolean,
  }
}

export class UnpinWindowFromAllVirtualDesktopsRequest extends jspb.Message {
  getWindowHandle(): number;
  setWindowHandle(value: number): UnpinWindowFromAllVirtualDesktopsRequest;

  getJustUnpin(): UnpinWindowFromAllVirtualDesktopsRequestJustUnpin | undefined;
  setJustUnpin(value?: UnpinWindowFromAllVirtualDesktopsRequestJustUnpin): UnpinWindowFromAllVirtualDesktopsRequest;
  hasJustUnpin(): boolean;
  clearJustUnpin(): UnpinWindowFromAllVirtualDesktopsRequest;

  getMoveIfUnpinned(): UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned | undefined;
  setMoveIfUnpinned(value?: UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned): UnpinWindowFromAllVirtualDesktopsRequest;
  hasMoveIfUnpinned(): boolean;
  clearMoveIfUnpinned(): UnpinWindowFromAllVirtualDesktopsRequest;

  getMoveUnconditionally(): UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally | undefined;
  setMoveUnconditionally(value?: UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally): UnpinWindowFromAllVirtualDesktopsRequest;
  hasMoveUnconditionally(): boolean;
  clearMoveUnconditionally(): UnpinWindowFromAllVirtualDesktopsRequest;

  getShouldMoveAsWellCase(): UnpinWindowFromAllVirtualDesktopsRequest.ShouldMoveAsWellCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnpinWindowFromAllVirtualDesktopsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnpinWindowFromAllVirtualDesktopsRequest): UnpinWindowFromAllVirtualDesktopsRequest.AsObject;
  static serializeBinaryToWriter(message: UnpinWindowFromAllVirtualDesktopsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnpinWindowFromAllVirtualDesktopsRequest;
  static deserializeBinaryFromReader(message: UnpinWindowFromAllVirtualDesktopsRequest, reader: jspb.BinaryReader): UnpinWindowFromAllVirtualDesktopsRequest;
}

export namespace UnpinWindowFromAllVirtualDesktopsRequest {
  export type AsObject = {
    windowHandle: number,
    justUnpin?: UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.AsObject,
    moveIfUnpinned?: UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.AsObject,
    moveUnconditionally?: UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.AsObject,
  }

  export enum ShouldMoveAsWellCase { 
    SHOULD_MOVE_AS_WELL_NOT_SET = 0,
    JUST_UNPIN = 2,
    MOVE_IF_UNPINNED = 3,
    MOVE_UNCONDITIONALLY = 4,
  }
}

export class UnpinWindowFromAllVirtualDesktopsRequestJustUnpin extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.AsObject;
  static toObject(includeInstance: boolean, msg: UnpinWindowFromAllVirtualDesktopsRequestJustUnpin): UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.AsObject;
  static serializeBinaryToWriter(message: UnpinWindowFromAllVirtualDesktopsRequestJustUnpin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnpinWindowFromAllVirtualDesktopsRequestJustUnpin;
  static deserializeBinaryFromReader(message: UnpinWindowFromAllVirtualDesktopsRequestJustUnpin, reader: jspb.BinaryReader): UnpinWindowFromAllVirtualDesktopsRequestJustUnpin;
}

export namespace UnpinWindowFromAllVirtualDesktopsRequestJustUnpin {
  export type AsObject = {
  }
}

export class UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned extends jspb.Message {
  getTargetVirtualDesktopIndex(): number;
  setTargetVirtualDesktopIndex(value: number): UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned;

  getMoveOptions(): MoveWindowToVirtualDesktopOptions | undefined;
  setMoveOptions(value?: MoveWindowToVirtualDesktopOptions): UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned;
  hasMoveOptions(): boolean;
  clearMoveOptions(): UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.AsObject;
  static toObject(includeInstance: boolean, msg: UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned): UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.AsObject;
  static serializeBinaryToWriter(message: UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned;
  static deserializeBinaryFromReader(message: UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned, reader: jspb.BinaryReader): UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned;
}

export namespace UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned {
  export type AsObject = {
    targetVirtualDesktopIndex: number,
    moveOptions?: MoveWindowToVirtualDesktopOptions.AsObject,
  }
}

export class UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally extends jspb.Message {
  getTargetVirtualDesktopIndex(): number;
  setTargetVirtualDesktopIndex(value: number): UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally;

  getMoveOptions(): MoveWindowToVirtualDesktopOptions | undefined;
  setMoveOptions(value?: MoveWindowToVirtualDesktopOptions): UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally;
  hasMoveOptions(): boolean;
  clearMoveOptions(): UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.AsObject;
  static toObject(includeInstance: boolean, msg: UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally): UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.AsObject;
  static serializeBinaryToWriter(message: UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally;
  static deserializeBinaryFromReader(message: UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally, reader: jspb.BinaryReader): UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally;
}

export namespace UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally {
  export type AsObject = {
    targetVirtualDesktopIndex: number,
    moveOptions?: MoveWindowToVirtualDesktopOptions.AsObject,
  }
}

export class MoveWindowToVirtualDesktopRequest extends jspb.Message {
  getWindowHandle(): number;
  setWindowHandle(value: number): MoveWindowToVirtualDesktopRequest;

  getMoveOptions(): MoveWindowToVirtualDesktopOptions | undefined;
  setMoveOptions(value?: MoveWindowToVirtualDesktopOptions): MoveWindowToVirtualDesktopRequest;
  hasMoveOptions(): boolean;
  clearMoveOptions(): MoveWindowToVirtualDesktopRequest;

  getWantedVirtualDesktopIndex(): number;
  setWantedVirtualDesktopIndex(value: number): MoveWindowToVirtualDesktopRequest;

  getChangeRight(): number;
  setChangeRight(value: number): MoveWindowToVirtualDesktopRequest;

  getChangeLeft(): number;
  setChangeLeft(value: number): MoveWindowToVirtualDesktopRequest;

  getChangeCase(): MoveWindowToVirtualDesktopRequest.ChangeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveWindowToVirtualDesktopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveWindowToVirtualDesktopRequest): MoveWindowToVirtualDesktopRequest.AsObject;
  static serializeBinaryToWriter(message: MoveWindowToVirtualDesktopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveWindowToVirtualDesktopRequest;
  static deserializeBinaryFromReader(message: MoveWindowToVirtualDesktopRequest, reader: jspb.BinaryReader): MoveWindowToVirtualDesktopRequest;
}

export namespace MoveWindowToVirtualDesktopRequest {
  export type AsObject = {
    windowHandle: number,
    moveOptions?: MoveWindowToVirtualDesktopOptions.AsObject,
    wantedVirtualDesktopIndex: number,
    changeRight: number,
    changeLeft: number,
  }

  export enum ChangeCase { 
    CHANGE_NOT_SET = 0,
    WANTED_VIRTUAL_DESKTOP_INDEX = 13,
    CHANGE_RIGHT = 14,
    CHANGE_LEFT = 15,
  }
}

export class MoveWindowToVirtualDesktopOptions extends jspb.Message {
  getDontMoveIfAlreadyAtTarget(): boolean;
  setDontMoveIfAlreadyAtTarget(value: boolean): MoveWindowToVirtualDesktopOptions;

  getStopWindowFlashing(): boolean;
  setStopWindowFlashing(value: boolean): MoveWindowToVirtualDesktopOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveWindowToVirtualDesktopOptions.AsObject;
  static toObject(includeInstance: boolean, msg: MoveWindowToVirtualDesktopOptions): MoveWindowToVirtualDesktopOptions.AsObject;
  static serializeBinaryToWriter(message: MoveWindowToVirtualDesktopOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveWindowToVirtualDesktopOptions;
  static deserializeBinaryFromReader(message: MoveWindowToVirtualDesktopOptions, reader: jspb.BinaryReader): MoveWindowToVirtualDesktopOptions;
}

export namespace MoveWindowToVirtualDesktopOptions {
  export type AsObject = {
    dontMoveIfAlreadyAtTarget: boolean,
    stopWindowFlashing: boolean,
  }
}

export class GetWindowVirtualDesktopIndexRequest extends jspb.Message {
  getWindowHandle(): number;
  setWindowHandle(value: number): GetWindowVirtualDesktopIndexRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWindowVirtualDesktopIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWindowVirtualDesktopIndexRequest): GetWindowVirtualDesktopIndexRequest.AsObject;
  static serializeBinaryToWriter(message: GetWindowVirtualDesktopIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWindowVirtualDesktopIndexRequest;
  static deserializeBinaryFromReader(message: GetWindowVirtualDesktopIndexRequest, reader: jspb.BinaryReader): GetWindowVirtualDesktopIndexRequest;
}

export namespace GetWindowVirtualDesktopIndexRequest {
  export type AsObject = {
    windowHandle: number,
  }
}

export class GetWindowVirtualDesktopIndexResponse extends jspb.Message {
  getVirtualDesktopIndex(): number;
  setVirtualDesktopIndex(value: number): GetWindowVirtualDesktopIndexResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWindowVirtualDesktopIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWindowVirtualDesktopIndexResponse): GetWindowVirtualDesktopIndexResponse.AsObject;
  static serializeBinaryToWriter(message: GetWindowVirtualDesktopIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWindowVirtualDesktopIndexResponse;
  static deserializeBinaryFromReader(message: GetWindowVirtualDesktopIndexResponse, reader: jspb.BinaryReader): GetWindowVirtualDesktopIndexResponse;
}

export namespace GetWindowVirtualDesktopIndexResponse {
  export type AsObject = {
    virtualDesktopIndex: number,
  }
}

export class GetWindowIsPinnedToVirtualDesktopRequest extends jspb.Message {
  getWindowHandle(): number;
  setWindowHandle(value: number): GetWindowIsPinnedToVirtualDesktopRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWindowIsPinnedToVirtualDesktopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWindowIsPinnedToVirtualDesktopRequest): GetWindowIsPinnedToVirtualDesktopRequest.AsObject;
  static serializeBinaryToWriter(message: GetWindowIsPinnedToVirtualDesktopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWindowIsPinnedToVirtualDesktopRequest;
  static deserializeBinaryFromReader(message: GetWindowIsPinnedToVirtualDesktopRequest, reader: jspb.BinaryReader): GetWindowIsPinnedToVirtualDesktopRequest;
}

export namespace GetWindowIsPinnedToVirtualDesktopRequest {
  export type AsObject = {
    windowHandle: number,
  }
}

export class GetWindowIsPinnedToVirtualDesktopResponse extends jspb.Message {
  getIsPinned(): boolean;
  setIsPinned(value: boolean): GetWindowIsPinnedToVirtualDesktopResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWindowIsPinnedToVirtualDesktopResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWindowIsPinnedToVirtualDesktopResponse): GetWindowIsPinnedToVirtualDesktopResponse.AsObject;
  static serializeBinaryToWriter(message: GetWindowIsPinnedToVirtualDesktopResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWindowIsPinnedToVirtualDesktopResponse;
  static deserializeBinaryFromReader(message: GetWindowIsPinnedToVirtualDesktopResponse, reader: jspb.BinaryReader): GetWindowIsPinnedToVirtualDesktopResponse;
}

export namespace GetWindowIsPinnedToVirtualDesktopResponse {
  export type AsObject = {
    isPinned: boolean,
  }
}

export class StopWindowFlashingRequest extends jspb.Message {
  getWindowsFilter(): OpenWindowsFilter | undefined;
  setWindowsFilter(value?: OpenWindowsFilter): StopWindowFlashingRequest;
  hasWindowsFilter(): boolean;
  clearWindowsFilter(): StopWindowFlashingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopWindowFlashingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopWindowFlashingRequest): StopWindowFlashingRequest.AsObject;
  static serializeBinaryToWriter(message: StopWindowFlashingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopWindowFlashingRequest;
  static deserializeBinaryFromReader(message: StopWindowFlashingRequest, reader: jspb.BinaryReader): StopWindowFlashingRequest;
}

export namespace StopWindowFlashingRequest {
  export type AsObject = {
    windowsFilter?: OpenWindowsFilter.AsObject,
  }
}

export enum ShellEventType { 
  UNKNOWN = 0,
  WINDOW_CREATED = 1,
  WINDOW_DESTROYED = 2,
  ACTIVATE_SHELL_WINDOW = 3,
  WINDOW_ACTIVATED = 4,
  GET_MIN_RECT = 5,
  REDRAW = 6,
  TASK_MAN = 7,
  LANGUAGE = 8,
  SYS_MENU = 9,
  END_TASK = 10,
  ACCESSIBILITY_STATE = 11,
  APP_COMMAND = 12,
  WINDOW_REPLACED = 13,
  WINDOW_REPLACING = 14,
  MONITOR_CHANGED = 16,
  RUDE_APP_ACTIVATED = 17,
  FLASH = 18,
}
