// source: VirtualDesktop.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.virtualdesktop.CancelRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.CanceledResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.ChangeVirtualDesktopRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.ChangeVirtualDesktopRequest.ChangeCase', null, global);
goog.exportSymbol('proto.virtualdesktop.CloseWindowRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.CreateVirtualDesktopRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.DeleteVirtualDesktopRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.DeleteVirtualDesktopRequest.DesktopToRemoveCase', null, global);
goog.exportSymbol('proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop', null, global);
goog.exportSymbol('proto.virtualdesktop.DroppedRequestResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.DroppedRequestResponse.Reason', null, global);
goog.exportSymbol('proto.virtualdesktop.ErrorResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.GetCurrentVirtualDesktopRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.GetCurrentVirtualDesktopResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.GetDesktopWindowRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.GetDesktopWindowResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.GetForegroundWindowRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.GetForegroundWindowResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.GetIsElevatedRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.GetIsElevatedResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.GetIsWindowMinimizedRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.GetIsWindowMinimizedResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.GetWindowLocationRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.GetWindowLocationResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.ListenForVirtualDesktopChangedRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.ListenForVirtualDesktopChangedResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.ListenToShellEventsRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.ListenToShellEventsRequest.OptionalWantedShellTypeCase', null, global);
goog.exportSymbol('proto.virtualdesktop.ListenToShellEventsResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.LogRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.MoveWindowRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.MoveWindowToVirtualDesktopOptions', null, global);
goog.exportSymbol('proto.virtualdesktop.MoveWindowToVirtualDesktopRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.ChangeCase', null, global);
goog.exportSymbol('proto.virtualdesktop.OpenWindowsFilter', null, global);
goog.exportSymbol('proto.virtualdesktop.OpenWindowsFilter.OptionalHasVirtualDesktopInfoCase', null, global);
goog.exportSymbol('proto.virtualdesktop.OpenWindowsFilter.OptionalIsMinimizedCase', null, global);
goog.exportSymbol('proto.virtualdesktop.OpenWindowsFilter.OptionalParentWindowHandleCase', null, global);
goog.exportSymbol('proto.virtualdesktop.OpenWindowsFilter.OptionalPinnedToAllVirtualDesktopsCase', null, global);
goog.exportSymbol('proto.virtualdesktop.OpenWindowsFilter.OptionalProcessIdCase', null, global);
goog.exportSymbol('proto.virtualdesktop.OpenWindowsFilter.OptionalRootParentWindowHandleCase', null, global);
goog.exportSymbol('proto.virtualdesktop.OpenWindowsFilter.OptionalTitleCase', null, global);
goog.exportSymbol('proto.virtualdesktop.OpenWindowsFilter.OptionalVirtualDesktopIndexCase', null, global);
goog.exportSymbol('proto.virtualdesktop.OpenWindowsFilter.OptionalWindowHandleCase', null, global);
goog.exportSymbol('proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.QueryOpenWindowsRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier', null, global);
goog.exportSymbol('proto.virtualdesktop.QueryOpenWindowsResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.QueryOpenWindowsResponse.OptionalIsMinimizedCase', null, global);
goog.exportSymbol('proto.virtualdesktop.QueryOpenWindowsResponse.OptionalParentWindowHandleCase', null, global);
goog.exportSymbol('proto.virtualdesktop.QueryOpenWindowsResponse.OptionalPinnedToAllVirtualDesktopsCase', null, global);
goog.exportSymbol('proto.virtualdesktop.QueryOpenWindowsResponse.OptionalProcessIdCase', null, global);
goog.exportSymbol('proto.virtualdesktop.QueryOpenWindowsResponse.OptionalRootParentWindowHandleCase', null, global);
goog.exportSymbol('proto.virtualdesktop.QueryOpenWindowsResponse.OptionalTitleCase', null, global);
goog.exportSymbol('proto.virtualdesktop.QueryOpenWindowsResponse.OptionalVirtualDesktopIndexCase', null, global);
goog.exportSymbol('proto.virtualdesktop.Rectangle', null, global);
goog.exportSymbol('proto.virtualdesktop.Request', null, global);
goog.exportSymbol('proto.virtualdesktop.Request.DataCase', null, global);
goog.exportSymbol('proto.virtualdesktop.Response', null, global);
goog.exportSymbol('proto.virtualdesktop.Response.DataCase', null, global);
goog.exportSymbol('proto.virtualdesktop.SetForegroundWindowRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.SetWindowShowStateRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.SetWindowShowStateRequest.ShowState', null, global);
goog.exportSymbol('proto.virtualdesktop.SetWindowShowStateResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.ShellEventType', null, global);
goog.exportSymbol('proto.virtualdesktop.StopWindowFlashingRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.SuccessResponse', null, global);
goog.exportSymbol('proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest', null, global);
goog.exportSymbol('proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.ShouldMoveAsWellCase', null, global);
goog.exportSymbol('proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin', null, global);
goog.exportSymbol('proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned', null, global);
goog.exportSymbol('proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.virtualdesktop.Request.oneofGroups_);
};
goog.inherits(proto.virtualdesktop.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.Request.displayName = 'proto.virtualdesktop.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.virtualdesktop.Response.oneofGroups_);
};
goog.inherits(proto.virtualdesktop.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.Response.displayName = 'proto.virtualdesktop.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.SuccessResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.SuccessResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.SuccessResponse.displayName = 'proto.virtualdesktop.SuccessResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.ErrorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.ErrorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.ErrorResponse.displayName = 'proto.virtualdesktop.ErrorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.DroppedRequestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.DroppedRequestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.DroppedRequestResponse.displayName = 'proto.virtualdesktop.DroppedRequestResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.CancelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.CancelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.CancelRequest.displayName = 'proto.virtualdesktop.CancelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.CanceledResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.CanceledResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.CanceledResponse.displayName = 'proto.virtualdesktop.CanceledResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.LogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.LogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.LogRequest.displayName = 'proto.virtualdesktop.LogRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.ListenToShellEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.virtualdesktop.ListenToShellEventsRequest.oneofGroups_);
};
goog.inherits(proto.virtualdesktop.ListenToShellEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.ListenToShellEventsRequest.displayName = 'proto.virtualdesktop.ListenToShellEventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.ListenToShellEventsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.ListenToShellEventsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.ListenToShellEventsResponse.displayName = 'proto.virtualdesktop.ListenToShellEventsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.MoveWindowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.MoveWindowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.MoveWindowRequest.displayName = 'proto.virtualdesktop.MoveWindowRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetWindowLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetWindowLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetWindowLocationRequest.displayName = 'proto.virtualdesktop.GetWindowLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetWindowLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetWindowLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetWindowLocationResponse.displayName = 'proto.virtualdesktop.GetWindowLocationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.Rectangle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.Rectangle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.Rectangle.displayName = 'proto.virtualdesktop.Rectangle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetIsElevatedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetIsElevatedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetIsElevatedRequest.displayName = 'proto.virtualdesktop.GetIsElevatedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetIsElevatedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetIsElevatedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetIsElevatedResponse.displayName = 'proto.virtualdesktop.GetIsElevatedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetDesktopWindowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetDesktopWindowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetDesktopWindowRequest.displayName = 'proto.virtualdesktop.GetDesktopWindowRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetDesktopWindowResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetDesktopWindowResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetDesktopWindowResponse.displayName = 'proto.virtualdesktop.GetDesktopWindowResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetForegroundWindowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetForegroundWindowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetForegroundWindowRequest.displayName = 'proto.virtualdesktop.GetForegroundWindowRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetForegroundWindowResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetForegroundWindowResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetForegroundWindowResponse.displayName = 'proto.virtualdesktop.GetForegroundWindowResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.SetForegroundWindowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.SetForegroundWindowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.SetForegroundWindowRequest.displayName = 'proto.virtualdesktop.SetForegroundWindowRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetIsWindowMinimizedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetIsWindowMinimizedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetIsWindowMinimizedRequest.displayName = 'proto.virtualdesktop.GetIsWindowMinimizedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetIsWindowMinimizedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetIsWindowMinimizedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetIsWindowMinimizedResponse.displayName = 'proto.virtualdesktop.GetIsWindowMinimizedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.CloseWindowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.CloseWindowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.CloseWindowRequest.displayName = 'proto.virtualdesktop.CloseWindowRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.SetWindowShowStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.SetWindowShowStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.SetWindowShowStateRequest.displayName = 'proto.virtualdesktop.SetWindowShowStateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.SetWindowShowStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.SetWindowShowStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.SetWindowShowStateResponse.displayName = 'proto.virtualdesktop.SetWindowShowStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.OpenWindowsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_);
};
goog.inherits(proto.virtualdesktop.OpenWindowsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.OpenWindowsFilter.displayName = 'proto.virtualdesktop.OpenWindowsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.QueryOpenWindowsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.QueryOpenWindowsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.QueryOpenWindowsRequest.displayName = 'proto.virtualdesktop.QueryOpenWindowsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.displayName = 'proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.QueryOpenWindowsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_);
};
goog.inherits(proto.virtualdesktop.QueryOpenWindowsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.QueryOpenWindowsResponse.displayName = 'proto.virtualdesktop.QueryOpenWindowsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetCurrentVirtualDesktopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetCurrentVirtualDesktopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetCurrentVirtualDesktopRequest.displayName = 'proto.virtualdesktop.GetCurrentVirtualDesktopRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetCurrentVirtualDesktopResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetCurrentVirtualDesktopResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetCurrentVirtualDesktopResponse.displayName = 'proto.virtualdesktop.GetCurrentVirtualDesktopResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.CreateVirtualDesktopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.CreateVirtualDesktopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.CreateVirtualDesktopRequest.displayName = 'proto.virtualdesktop.CreateVirtualDesktopRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.virtualdesktop.DeleteVirtualDesktopRequest.oneofGroups_);
};
goog.inherits(proto.virtualdesktop.DeleteVirtualDesktopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.DeleteVirtualDesktopRequest.displayName = 'proto.virtualdesktop.DeleteVirtualDesktopRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.displayName = 'proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.virtualdesktop.ChangeVirtualDesktopRequest.oneofGroups_);
};
goog.inherits(proto.virtualdesktop.ChangeVirtualDesktopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.ChangeVirtualDesktopRequest.displayName = 'proto.virtualdesktop.ChangeVirtualDesktopRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.ListenForVirtualDesktopChangedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.displayName = 'proto.virtualdesktop.ListenForVirtualDesktopChangedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.ListenForVirtualDesktopChangedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.displayName = 'proto.virtualdesktop.ListenForVirtualDesktopChangedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.displayName = 'proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.displayName = 'proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.displayName = 'proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.displayName = 'proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.displayName = 'proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.oneofGroups_);
};
goog.inherits(proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.displayName = 'proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.displayName = 'proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.displayName = 'proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.displayName = 'proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.oneofGroups_);
};
goog.inherits(proto.virtualdesktop.MoveWindowToVirtualDesktopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.displayName = 'proto.virtualdesktop.MoveWindowToVirtualDesktopRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.MoveWindowToVirtualDesktopOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.displayName = 'proto.virtualdesktop.MoveWindowToVirtualDesktopOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.displayName = 'proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.displayName = 'proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.displayName = 'proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.displayName = 'proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.virtualdesktop.StopWindowFlashingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.virtualdesktop.StopWindowFlashingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.virtualdesktop.StopWindowFlashingRequest.displayName = 'proto.virtualdesktop.StopWindowFlashingRequest';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.virtualdesktop.Request.oneofGroups_ = [[14,15,17,30,31,32,33,34,35,36,37,38,39,40,41,50,51,52,53,70,71,60,61,62,63,64]];

/**
 * @enum {number}
 */
proto.virtualdesktop.Request.DataCase = {
  DATA_NOT_SET: 0,
  LOG: 14,
  CANCEL: 15,
  GET_IS_ELEVATED: 17,
  GET_CURRENT_VIRTUAL_DESKTOP: 30,
  CREATE_VIRTUAL_DESKTOP: 31,
  DELETE_VIRTUAL_DESKTOP: 32,
  CHANGE_VIRTUAL_DESKTOP: 33,
  LISTEN_FOR_VIRTUAL_DESKTOP_CHANGED: 34,
  LISTEN_FOR_VIRTUAL_DESKTOP_CREATED: 35,
  LISTEN_FOR_VIRTUAL_DESKTOP_DELETED: 36,
  PIN_WINDOW_TO_ALL_VIRTUAL_DESKTOPS: 37,
  UNPIN_WINDOW_FROM_ALL_VIRTUAL_DESKTOPS: 38,
  MOVE_WINDOW_TO_VIRTUAL_DESKTOP: 39,
  GET_WINDOW_VIRTUAL_DESKTOP_INDEX: 40,
  GET_WINDOW_IS_PINNED_TO_VIRTUAL_DESKTOP: 41,
  OPEN_WINDOWS_QUERY: 50,
  GET_FOREGROUND_WINDOW: 51,
  GET_DESKTOP_WINDOW: 52,
  LISTEN_TO_SHELL_EVENTS: 53,
  GET_IS_WINDOW_MINIMIZED: 70,
  GET_WINDOW_LOCATION: 71,
  SET_WINDOW_SHOW_STATE: 60,
  CLOSE_WINDOW: 61,
  SET_FOREGROUND_WINDOW: 62,
  MOVE_WINDOW: 63,
  STOP_WINDOW_FLASHING: 64
};

/**
 * @return {proto.virtualdesktop.Request.DataCase}
 */
proto.virtualdesktop.Request.prototype.getDataCase = function() {
  return /** @type {proto.virtualdesktop.Request.DataCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.Request.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    log: (f = msg.getLog()) && proto.virtualdesktop.LogRequest.toObject(includeInstance, f),
    cancel: (f = msg.getCancel()) && proto.virtualdesktop.CancelRequest.toObject(includeInstance, f),
    getIsElevated: (f = msg.getGetIsElevated()) && proto.virtualdesktop.GetIsElevatedRequest.toObject(includeInstance, f),
    getCurrentVirtualDesktop: (f = msg.getGetCurrentVirtualDesktop()) && proto.virtualdesktop.GetCurrentVirtualDesktopRequest.toObject(includeInstance, f),
    createVirtualDesktop: (f = msg.getCreateVirtualDesktop()) && proto.virtualdesktop.CreateVirtualDesktopRequest.toObject(includeInstance, f),
    deleteVirtualDesktop: (f = msg.getDeleteVirtualDesktop()) && proto.virtualdesktop.DeleteVirtualDesktopRequest.toObject(includeInstance, f),
    changeVirtualDesktop: (f = msg.getChangeVirtualDesktop()) && proto.virtualdesktop.ChangeVirtualDesktopRequest.toObject(includeInstance, f),
    listenForVirtualDesktopChanged: (f = msg.getListenForVirtualDesktopChanged()) && proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.toObject(includeInstance, f),
    listenForVirtualDesktopCreated: (f = msg.getListenForVirtualDesktopCreated()) && proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.toObject(includeInstance, f),
    listenForVirtualDesktopDeleted: (f = msg.getListenForVirtualDesktopDeleted()) && proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.toObject(includeInstance, f),
    pinWindowToAllVirtualDesktops: (f = msg.getPinWindowToAllVirtualDesktops()) && proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.toObject(includeInstance, f),
    unpinWindowFromAllVirtualDesktops: (f = msg.getUnpinWindowFromAllVirtualDesktops()) && proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.toObject(includeInstance, f),
    moveWindowToVirtualDesktop: (f = msg.getMoveWindowToVirtualDesktop()) && proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.toObject(includeInstance, f),
    getWindowVirtualDesktopIndex: (f = msg.getGetWindowVirtualDesktopIndex()) && proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.toObject(includeInstance, f),
    getWindowIsPinnedToVirtualDesktop: (f = msg.getGetWindowIsPinnedToVirtualDesktop()) && proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.toObject(includeInstance, f),
    openWindowsQuery: (f = msg.getOpenWindowsQuery()) && proto.virtualdesktop.QueryOpenWindowsRequest.toObject(includeInstance, f),
    getForegroundWindow: (f = msg.getGetForegroundWindow()) && proto.virtualdesktop.GetForegroundWindowRequest.toObject(includeInstance, f),
    getDesktopWindow: (f = msg.getGetDesktopWindow()) && proto.virtualdesktop.GetDesktopWindowRequest.toObject(includeInstance, f),
    listenToShellEvents: (f = msg.getListenToShellEvents()) && proto.virtualdesktop.ListenToShellEventsRequest.toObject(includeInstance, f),
    getIsWindowMinimized: (f = msg.getGetIsWindowMinimized()) && proto.virtualdesktop.GetIsWindowMinimizedRequest.toObject(includeInstance, f),
    getWindowLocation: (f = msg.getGetWindowLocation()) && proto.virtualdesktop.GetWindowLocationRequest.toObject(includeInstance, f),
    setWindowShowState: (f = msg.getSetWindowShowState()) && proto.virtualdesktop.SetWindowShowStateRequest.toObject(includeInstance, f),
    closeWindow: (f = msg.getCloseWindow()) && proto.virtualdesktop.CloseWindowRequest.toObject(includeInstance, f),
    setForegroundWindow: (f = msg.getSetForegroundWindow()) && proto.virtualdesktop.SetForegroundWindowRequest.toObject(includeInstance, f),
    moveWindow: (f = msg.getMoveWindow()) && proto.virtualdesktop.MoveWindowRequest.toObject(includeInstance, f),
    stopWindowFlashing: (f = msg.getStopWindowFlashing()) && proto.virtualdesktop.StopWindowFlashingRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.Request}
 */
proto.virtualdesktop.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.Request;
  return proto.virtualdesktop.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.Request}
 */
proto.virtualdesktop.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 14:
      var value = new proto.virtualdesktop.LogRequest;
      reader.readMessage(value,proto.virtualdesktop.LogRequest.deserializeBinaryFromReader);
      msg.setLog(value);
      break;
    case 15:
      var value = new proto.virtualdesktop.CancelRequest;
      reader.readMessage(value,proto.virtualdesktop.CancelRequest.deserializeBinaryFromReader);
      msg.setCancel(value);
      break;
    case 17:
      var value = new proto.virtualdesktop.GetIsElevatedRequest;
      reader.readMessage(value,proto.virtualdesktop.GetIsElevatedRequest.deserializeBinaryFromReader);
      msg.setGetIsElevated(value);
      break;
    case 30:
      var value = new proto.virtualdesktop.GetCurrentVirtualDesktopRequest;
      reader.readMessage(value,proto.virtualdesktop.GetCurrentVirtualDesktopRequest.deserializeBinaryFromReader);
      msg.setGetCurrentVirtualDesktop(value);
      break;
    case 31:
      var value = new proto.virtualdesktop.CreateVirtualDesktopRequest;
      reader.readMessage(value,proto.virtualdesktop.CreateVirtualDesktopRequest.deserializeBinaryFromReader);
      msg.setCreateVirtualDesktop(value);
      break;
    case 32:
      var value = new proto.virtualdesktop.DeleteVirtualDesktopRequest;
      reader.readMessage(value,proto.virtualdesktop.DeleteVirtualDesktopRequest.deserializeBinaryFromReader);
      msg.setDeleteVirtualDesktop(value);
      break;
    case 33:
      var value = new proto.virtualdesktop.ChangeVirtualDesktopRequest;
      reader.readMessage(value,proto.virtualdesktop.ChangeVirtualDesktopRequest.deserializeBinaryFromReader);
      msg.setChangeVirtualDesktop(value);
      break;
    case 34:
      var value = new proto.virtualdesktop.ListenForVirtualDesktopChangedRequest;
      reader.readMessage(value,proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.deserializeBinaryFromReader);
      msg.setListenForVirtualDesktopChanged(value);
      break;
    case 35:
      var value = new proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest;
      reader.readMessage(value,proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.deserializeBinaryFromReader);
      msg.setListenForVirtualDesktopCreated(value);
      break;
    case 36:
      var value = new proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest;
      reader.readMessage(value,proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.deserializeBinaryFromReader);
      msg.setListenForVirtualDesktopDeleted(value);
      break;
    case 37:
      var value = new proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest;
      reader.readMessage(value,proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.deserializeBinaryFromReader);
      msg.setPinWindowToAllVirtualDesktops(value);
      break;
    case 38:
      var value = new proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest;
      reader.readMessage(value,proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.deserializeBinaryFromReader);
      msg.setUnpinWindowFromAllVirtualDesktops(value);
      break;
    case 39:
      var value = new proto.virtualdesktop.MoveWindowToVirtualDesktopRequest;
      reader.readMessage(value,proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.deserializeBinaryFromReader);
      msg.setMoveWindowToVirtualDesktop(value);
      break;
    case 40:
      var value = new proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest;
      reader.readMessage(value,proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.deserializeBinaryFromReader);
      msg.setGetWindowVirtualDesktopIndex(value);
      break;
    case 41:
      var value = new proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest;
      reader.readMessage(value,proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.deserializeBinaryFromReader);
      msg.setGetWindowIsPinnedToVirtualDesktop(value);
      break;
    case 50:
      var value = new proto.virtualdesktop.QueryOpenWindowsRequest;
      reader.readMessage(value,proto.virtualdesktop.QueryOpenWindowsRequest.deserializeBinaryFromReader);
      msg.setOpenWindowsQuery(value);
      break;
    case 51:
      var value = new proto.virtualdesktop.GetForegroundWindowRequest;
      reader.readMessage(value,proto.virtualdesktop.GetForegroundWindowRequest.deserializeBinaryFromReader);
      msg.setGetForegroundWindow(value);
      break;
    case 52:
      var value = new proto.virtualdesktop.GetDesktopWindowRequest;
      reader.readMessage(value,proto.virtualdesktop.GetDesktopWindowRequest.deserializeBinaryFromReader);
      msg.setGetDesktopWindow(value);
      break;
    case 53:
      var value = new proto.virtualdesktop.ListenToShellEventsRequest;
      reader.readMessage(value,proto.virtualdesktop.ListenToShellEventsRequest.deserializeBinaryFromReader);
      msg.setListenToShellEvents(value);
      break;
    case 70:
      var value = new proto.virtualdesktop.GetIsWindowMinimizedRequest;
      reader.readMessage(value,proto.virtualdesktop.GetIsWindowMinimizedRequest.deserializeBinaryFromReader);
      msg.setGetIsWindowMinimized(value);
      break;
    case 71:
      var value = new proto.virtualdesktop.GetWindowLocationRequest;
      reader.readMessage(value,proto.virtualdesktop.GetWindowLocationRequest.deserializeBinaryFromReader);
      msg.setGetWindowLocation(value);
      break;
    case 60:
      var value = new proto.virtualdesktop.SetWindowShowStateRequest;
      reader.readMessage(value,proto.virtualdesktop.SetWindowShowStateRequest.deserializeBinaryFromReader);
      msg.setSetWindowShowState(value);
      break;
    case 61:
      var value = new proto.virtualdesktop.CloseWindowRequest;
      reader.readMessage(value,proto.virtualdesktop.CloseWindowRequest.deserializeBinaryFromReader);
      msg.setCloseWindow(value);
      break;
    case 62:
      var value = new proto.virtualdesktop.SetForegroundWindowRequest;
      reader.readMessage(value,proto.virtualdesktop.SetForegroundWindowRequest.deserializeBinaryFromReader);
      msg.setSetForegroundWindow(value);
      break;
    case 63:
      var value = new proto.virtualdesktop.MoveWindowRequest;
      reader.readMessage(value,proto.virtualdesktop.MoveWindowRequest.deserializeBinaryFromReader);
      msg.setMoveWindow(value);
      break;
    case 64:
      var value = new proto.virtualdesktop.StopWindowFlashingRequest;
      reader.readMessage(value,proto.virtualdesktop.StopWindowFlashingRequest.deserializeBinaryFromReader);
      msg.setStopWindowFlashing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLog();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.virtualdesktop.LogRequest.serializeBinaryToWriter
    );
  }
  f = message.getCancel();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.virtualdesktop.CancelRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetIsElevated();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.virtualdesktop.GetIsElevatedRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetCurrentVirtualDesktop();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.virtualdesktop.GetCurrentVirtualDesktopRequest.serializeBinaryToWriter
    );
  }
  f = message.getCreateVirtualDesktop();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.virtualdesktop.CreateVirtualDesktopRequest.serializeBinaryToWriter
    );
  }
  f = message.getDeleteVirtualDesktop();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.virtualdesktop.DeleteVirtualDesktopRequest.serializeBinaryToWriter
    );
  }
  f = message.getChangeVirtualDesktop();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.virtualdesktop.ChangeVirtualDesktopRequest.serializeBinaryToWriter
    );
  }
  f = message.getListenForVirtualDesktopChanged();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.serializeBinaryToWriter
    );
  }
  f = message.getListenForVirtualDesktopCreated();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.serializeBinaryToWriter
    );
  }
  f = message.getListenForVirtualDesktopDeleted();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.serializeBinaryToWriter
    );
  }
  f = message.getPinWindowToAllVirtualDesktops();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.serializeBinaryToWriter
    );
  }
  f = message.getUnpinWindowFromAllVirtualDesktops();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.serializeBinaryToWriter
    );
  }
  f = message.getMoveWindowToVirtualDesktop();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetWindowVirtualDesktopIndex();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetWindowIsPinnedToVirtualDesktop();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.serializeBinaryToWriter
    );
  }
  f = message.getOpenWindowsQuery();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      proto.virtualdesktop.QueryOpenWindowsRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetForegroundWindow();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      proto.virtualdesktop.GetForegroundWindowRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetDesktopWindow();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      proto.virtualdesktop.GetDesktopWindowRequest.serializeBinaryToWriter
    );
  }
  f = message.getListenToShellEvents();
  if (f != null) {
    writer.writeMessage(
      53,
      f,
      proto.virtualdesktop.ListenToShellEventsRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetIsWindowMinimized();
  if (f != null) {
    writer.writeMessage(
      70,
      f,
      proto.virtualdesktop.GetIsWindowMinimizedRequest.serializeBinaryToWriter
    );
  }
  f = message.getGetWindowLocation();
  if (f != null) {
    writer.writeMessage(
      71,
      f,
      proto.virtualdesktop.GetWindowLocationRequest.serializeBinaryToWriter
    );
  }
  f = message.getSetWindowShowState();
  if (f != null) {
    writer.writeMessage(
      60,
      f,
      proto.virtualdesktop.SetWindowShowStateRequest.serializeBinaryToWriter
    );
  }
  f = message.getCloseWindow();
  if (f != null) {
    writer.writeMessage(
      61,
      f,
      proto.virtualdesktop.CloseWindowRequest.serializeBinaryToWriter
    );
  }
  f = message.getSetForegroundWindow();
  if (f != null) {
    writer.writeMessage(
      62,
      f,
      proto.virtualdesktop.SetForegroundWindowRequest.serializeBinaryToWriter
    );
  }
  f = message.getMoveWindow();
  if (f != null) {
    writer.writeMessage(
      63,
      f,
      proto.virtualdesktop.MoveWindowRequest.serializeBinaryToWriter
    );
  }
  f = message.getStopWindowFlashing();
  if (f != null) {
    writer.writeMessage(
      64,
      f,
      proto.virtualdesktop.StopWindowFlashingRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.virtualdesktop.Request.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional LogRequest log = 14;
 * @return {?proto.virtualdesktop.LogRequest}
 */
proto.virtualdesktop.Request.prototype.getLog = function() {
  return /** @type{?proto.virtualdesktop.LogRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.LogRequest, 14));
};


/**
 * @param {?proto.virtualdesktop.LogRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setLog = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearLog = function() {
  return this.setLog(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasLog = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional CancelRequest cancel = 15;
 * @return {?proto.virtualdesktop.CancelRequest}
 */
proto.virtualdesktop.Request.prototype.getCancel = function() {
  return /** @type{?proto.virtualdesktop.CancelRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.CancelRequest, 15));
};


/**
 * @param {?proto.virtualdesktop.CancelRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setCancel = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearCancel = function() {
  return this.setCancel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasCancel = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional GetIsElevatedRequest get_is_elevated = 17;
 * @return {?proto.virtualdesktop.GetIsElevatedRequest}
 */
proto.virtualdesktop.Request.prototype.getGetIsElevated = function() {
  return /** @type{?proto.virtualdesktop.GetIsElevatedRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetIsElevatedRequest, 17));
};


/**
 * @param {?proto.virtualdesktop.GetIsElevatedRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setGetIsElevated = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearGetIsElevated = function() {
  return this.setGetIsElevated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasGetIsElevated = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional GetCurrentVirtualDesktopRequest get_current_virtual_desktop = 30;
 * @return {?proto.virtualdesktop.GetCurrentVirtualDesktopRequest}
 */
proto.virtualdesktop.Request.prototype.getGetCurrentVirtualDesktop = function() {
  return /** @type{?proto.virtualdesktop.GetCurrentVirtualDesktopRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetCurrentVirtualDesktopRequest, 30));
};


/**
 * @param {?proto.virtualdesktop.GetCurrentVirtualDesktopRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setGetCurrentVirtualDesktop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearGetCurrentVirtualDesktop = function() {
  return this.setGetCurrentVirtualDesktop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasGetCurrentVirtualDesktop = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional CreateVirtualDesktopRequest create_virtual_desktop = 31;
 * @return {?proto.virtualdesktop.CreateVirtualDesktopRequest}
 */
proto.virtualdesktop.Request.prototype.getCreateVirtualDesktop = function() {
  return /** @type{?proto.virtualdesktop.CreateVirtualDesktopRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.CreateVirtualDesktopRequest, 31));
};


/**
 * @param {?proto.virtualdesktop.CreateVirtualDesktopRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setCreateVirtualDesktop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearCreateVirtualDesktop = function() {
  return this.setCreateVirtualDesktop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasCreateVirtualDesktop = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional DeleteVirtualDesktopRequest delete_virtual_desktop = 32;
 * @return {?proto.virtualdesktop.DeleteVirtualDesktopRequest}
 */
proto.virtualdesktop.Request.prototype.getDeleteVirtualDesktop = function() {
  return /** @type{?proto.virtualdesktop.DeleteVirtualDesktopRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.DeleteVirtualDesktopRequest, 32));
};


/**
 * @param {?proto.virtualdesktop.DeleteVirtualDesktopRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setDeleteVirtualDesktop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearDeleteVirtualDesktop = function() {
  return this.setDeleteVirtualDesktop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasDeleteVirtualDesktop = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional ChangeVirtualDesktopRequest change_virtual_desktop = 33;
 * @return {?proto.virtualdesktop.ChangeVirtualDesktopRequest}
 */
proto.virtualdesktop.Request.prototype.getChangeVirtualDesktop = function() {
  return /** @type{?proto.virtualdesktop.ChangeVirtualDesktopRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.ChangeVirtualDesktopRequest, 33));
};


/**
 * @param {?proto.virtualdesktop.ChangeVirtualDesktopRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setChangeVirtualDesktop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearChangeVirtualDesktop = function() {
  return this.setChangeVirtualDesktop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasChangeVirtualDesktop = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional ListenForVirtualDesktopChangedRequest listen_for_virtual_desktop_changed = 34;
 * @return {?proto.virtualdesktop.ListenForVirtualDesktopChangedRequest}
 */
proto.virtualdesktop.Request.prototype.getListenForVirtualDesktopChanged = function() {
  return /** @type{?proto.virtualdesktop.ListenForVirtualDesktopChangedRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.ListenForVirtualDesktopChangedRequest, 34));
};


/**
 * @param {?proto.virtualdesktop.ListenForVirtualDesktopChangedRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setListenForVirtualDesktopChanged = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearListenForVirtualDesktopChanged = function() {
  return this.setListenForVirtualDesktopChanged(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasListenForVirtualDesktopChanged = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional ListenForVirtualDesktopCreatedRequest listen_for_virtual_desktop_created = 35;
 * @return {?proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest}
 */
proto.virtualdesktop.Request.prototype.getListenForVirtualDesktopCreated = function() {
  return /** @type{?proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest, 35));
};


/**
 * @param {?proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setListenForVirtualDesktopCreated = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearListenForVirtualDesktopCreated = function() {
  return this.setListenForVirtualDesktopCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasListenForVirtualDesktopCreated = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional ListenForVirtualDesktopDeletedRequest listen_for_virtual_desktop_deleted = 36;
 * @return {?proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest}
 */
proto.virtualdesktop.Request.prototype.getListenForVirtualDesktopDeleted = function() {
  return /** @type{?proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest, 36));
};


/**
 * @param {?proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setListenForVirtualDesktopDeleted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearListenForVirtualDesktopDeleted = function() {
  return this.setListenForVirtualDesktopDeleted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasListenForVirtualDesktopDeleted = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional PinWindowToAllVirtualDesktopsRequest pin_window_to_all_virtual_desktops = 37;
 * @return {?proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest}
 */
proto.virtualdesktop.Request.prototype.getPinWindowToAllVirtualDesktops = function() {
  return /** @type{?proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest, 37));
};


/**
 * @param {?proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setPinWindowToAllVirtualDesktops = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearPinWindowToAllVirtualDesktops = function() {
  return this.setPinWindowToAllVirtualDesktops(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasPinWindowToAllVirtualDesktops = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional UnpinWindowFromAllVirtualDesktopsRequest unpin_window_from_all_virtual_desktops = 38;
 * @return {?proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest}
 */
proto.virtualdesktop.Request.prototype.getUnpinWindowFromAllVirtualDesktops = function() {
  return /** @type{?proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest, 38));
};


/**
 * @param {?proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setUnpinWindowFromAllVirtualDesktops = function(value) {
  return jspb.Message.setOneofWrapperField(this, 38, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearUnpinWindowFromAllVirtualDesktops = function() {
  return this.setUnpinWindowFromAllVirtualDesktops(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasUnpinWindowFromAllVirtualDesktops = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional MoveWindowToVirtualDesktopRequest move_window_to_virtual_desktop = 39;
 * @return {?proto.virtualdesktop.MoveWindowToVirtualDesktopRequest}
 */
proto.virtualdesktop.Request.prototype.getMoveWindowToVirtualDesktop = function() {
  return /** @type{?proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.MoveWindowToVirtualDesktopRequest, 39));
};


/**
 * @param {?proto.virtualdesktop.MoveWindowToVirtualDesktopRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setMoveWindowToVirtualDesktop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 39, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearMoveWindowToVirtualDesktop = function() {
  return this.setMoveWindowToVirtualDesktop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasMoveWindowToVirtualDesktop = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional GetWindowVirtualDesktopIndexRequest get_window_virtual_desktop_index = 40;
 * @return {?proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest}
 */
proto.virtualdesktop.Request.prototype.getGetWindowVirtualDesktopIndex = function() {
  return /** @type{?proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest, 40));
};


/**
 * @param {?proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setGetWindowVirtualDesktopIndex = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearGetWindowVirtualDesktopIndex = function() {
  return this.setGetWindowVirtualDesktopIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasGetWindowVirtualDesktopIndex = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional GetWindowIsPinnedToVirtualDesktopRequest get_window_is_pinned_to_virtual_desktop = 41;
 * @return {?proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest}
 */
proto.virtualdesktop.Request.prototype.getGetWindowIsPinnedToVirtualDesktop = function() {
  return /** @type{?proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest, 41));
};


/**
 * @param {?proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setGetWindowIsPinnedToVirtualDesktop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearGetWindowIsPinnedToVirtualDesktop = function() {
  return this.setGetWindowIsPinnedToVirtualDesktop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasGetWindowIsPinnedToVirtualDesktop = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional QueryOpenWindowsRequest open_windows_query = 50;
 * @return {?proto.virtualdesktop.QueryOpenWindowsRequest}
 */
proto.virtualdesktop.Request.prototype.getOpenWindowsQuery = function() {
  return /** @type{?proto.virtualdesktop.QueryOpenWindowsRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.QueryOpenWindowsRequest, 50));
};


/**
 * @param {?proto.virtualdesktop.QueryOpenWindowsRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setOpenWindowsQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 50, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearOpenWindowsQuery = function() {
  return this.setOpenWindowsQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasOpenWindowsQuery = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional GetForegroundWindowRequest get_foreground_window = 51;
 * @return {?proto.virtualdesktop.GetForegroundWindowRequest}
 */
proto.virtualdesktop.Request.prototype.getGetForegroundWindow = function() {
  return /** @type{?proto.virtualdesktop.GetForegroundWindowRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetForegroundWindowRequest, 51));
};


/**
 * @param {?proto.virtualdesktop.GetForegroundWindowRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setGetForegroundWindow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 51, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearGetForegroundWindow = function() {
  return this.setGetForegroundWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasGetForegroundWindow = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional GetDesktopWindowRequest get_desktop_window = 52;
 * @return {?proto.virtualdesktop.GetDesktopWindowRequest}
 */
proto.virtualdesktop.Request.prototype.getGetDesktopWindow = function() {
  return /** @type{?proto.virtualdesktop.GetDesktopWindowRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetDesktopWindowRequest, 52));
};


/**
 * @param {?proto.virtualdesktop.GetDesktopWindowRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setGetDesktopWindow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 52, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearGetDesktopWindow = function() {
  return this.setGetDesktopWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasGetDesktopWindow = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional ListenToShellEventsRequest listen_to_shell_events = 53;
 * @return {?proto.virtualdesktop.ListenToShellEventsRequest}
 */
proto.virtualdesktop.Request.prototype.getListenToShellEvents = function() {
  return /** @type{?proto.virtualdesktop.ListenToShellEventsRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.ListenToShellEventsRequest, 53));
};


/**
 * @param {?proto.virtualdesktop.ListenToShellEventsRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setListenToShellEvents = function(value) {
  return jspb.Message.setOneofWrapperField(this, 53, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearListenToShellEvents = function() {
  return this.setListenToShellEvents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasListenToShellEvents = function() {
  return jspb.Message.getField(this, 53) != null;
};


/**
 * optional GetIsWindowMinimizedRequest get_is_window_minimized = 70;
 * @return {?proto.virtualdesktop.GetIsWindowMinimizedRequest}
 */
proto.virtualdesktop.Request.prototype.getGetIsWindowMinimized = function() {
  return /** @type{?proto.virtualdesktop.GetIsWindowMinimizedRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetIsWindowMinimizedRequest, 70));
};


/**
 * @param {?proto.virtualdesktop.GetIsWindowMinimizedRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setGetIsWindowMinimized = function(value) {
  return jspb.Message.setOneofWrapperField(this, 70, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearGetIsWindowMinimized = function() {
  return this.setGetIsWindowMinimized(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasGetIsWindowMinimized = function() {
  return jspb.Message.getField(this, 70) != null;
};


/**
 * optional GetWindowLocationRequest get_window_location = 71;
 * @return {?proto.virtualdesktop.GetWindowLocationRequest}
 */
proto.virtualdesktop.Request.prototype.getGetWindowLocation = function() {
  return /** @type{?proto.virtualdesktop.GetWindowLocationRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetWindowLocationRequest, 71));
};


/**
 * @param {?proto.virtualdesktop.GetWindowLocationRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setGetWindowLocation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 71, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearGetWindowLocation = function() {
  return this.setGetWindowLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasGetWindowLocation = function() {
  return jspb.Message.getField(this, 71) != null;
};


/**
 * optional SetWindowShowStateRequest set_window_show_state = 60;
 * @return {?proto.virtualdesktop.SetWindowShowStateRequest}
 */
proto.virtualdesktop.Request.prototype.getSetWindowShowState = function() {
  return /** @type{?proto.virtualdesktop.SetWindowShowStateRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.SetWindowShowStateRequest, 60));
};


/**
 * @param {?proto.virtualdesktop.SetWindowShowStateRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setSetWindowShowState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 60, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearSetWindowShowState = function() {
  return this.setSetWindowShowState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasSetWindowShowState = function() {
  return jspb.Message.getField(this, 60) != null;
};


/**
 * optional CloseWindowRequest close_window = 61;
 * @return {?proto.virtualdesktop.CloseWindowRequest}
 */
proto.virtualdesktop.Request.prototype.getCloseWindow = function() {
  return /** @type{?proto.virtualdesktop.CloseWindowRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.CloseWindowRequest, 61));
};


/**
 * @param {?proto.virtualdesktop.CloseWindowRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setCloseWindow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 61, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearCloseWindow = function() {
  return this.setCloseWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasCloseWindow = function() {
  return jspb.Message.getField(this, 61) != null;
};


/**
 * optional SetForegroundWindowRequest set_foreground_window = 62;
 * @return {?proto.virtualdesktop.SetForegroundWindowRequest}
 */
proto.virtualdesktop.Request.prototype.getSetForegroundWindow = function() {
  return /** @type{?proto.virtualdesktop.SetForegroundWindowRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.SetForegroundWindowRequest, 62));
};


/**
 * @param {?proto.virtualdesktop.SetForegroundWindowRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setSetForegroundWindow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 62, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearSetForegroundWindow = function() {
  return this.setSetForegroundWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasSetForegroundWindow = function() {
  return jspb.Message.getField(this, 62) != null;
};


/**
 * optional MoveWindowRequest move_window = 63;
 * @return {?proto.virtualdesktop.MoveWindowRequest}
 */
proto.virtualdesktop.Request.prototype.getMoveWindow = function() {
  return /** @type{?proto.virtualdesktop.MoveWindowRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.MoveWindowRequest, 63));
};


/**
 * @param {?proto.virtualdesktop.MoveWindowRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setMoveWindow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 63, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearMoveWindow = function() {
  return this.setMoveWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasMoveWindow = function() {
  return jspb.Message.getField(this, 63) != null;
};


/**
 * optional StopWindowFlashingRequest stop_window_flashing = 64;
 * @return {?proto.virtualdesktop.StopWindowFlashingRequest}
 */
proto.virtualdesktop.Request.prototype.getStopWindowFlashing = function() {
  return /** @type{?proto.virtualdesktop.StopWindowFlashingRequest} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.StopWindowFlashingRequest, 64));
};


/**
 * @param {?proto.virtualdesktop.StopWindowFlashingRequest|undefined} value
 * @return {!proto.virtualdesktop.Request} returns this
*/
proto.virtualdesktop.Request.prototype.setStopWindowFlashing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 64, proto.virtualdesktop.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Request} returns this
 */
proto.virtualdesktop.Request.prototype.clearStopWindowFlashing = function() {
  return this.setStopWindowFlashing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Request.prototype.hasStopWindowFlashing = function() {
  return jspb.Message.getField(this, 64) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.virtualdesktop.Response.oneofGroups_ = [[13,14,15,16,17,30,34,35,36,40,41,50,51,52,53,70,71,60]];

/**
 * @enum {number}
 */
proto.virtualdesktop.Response.DataCase = {
  DATA_NOT_SET: 0,
  SUCCESS: 13,
  CANCELED: 14,
  ERROR: 15,
  DROPPED_REQUEST: 16,
  GET_IS_ELEVATED: 17,
  GET_CURRENT_VIRTUAL_DESKTOP: 30,
  LISTEN_FOR_VIRTUAL_DESKTOP_CHANGED: 34,
  LISTEN_FOR_VIRTUAL_DESKTOP_CREATED: 35,
  LISTEN_FOR_VIRTUAL_DESKTOP_DELETED: 36,
  GET_WINDOW_VIRTUAL_DESKTOP_INDEX: 40,
  GET_WINDOW_IS_PINNED_TO_VIRTUAL_DESKTOP: 41,
  OPEN_WINDOWS_QUERY: 50,
  GET_FOREGROUND_WINDOW: 51,
  GET_DESKTOP_WINDOW: 52,
  LISTEN_TO_SHELL_EVENTS: 53,
  GET_IS_WINDOW_MINIMIZED: 70,
  GET_WINDOW_LOCATION: 71,
  SET_WINDOW_SHOW_STATE: 60
};

/**
 * @return {proto.virtualdesktop.Response.DataCase}
 */
proto.virtualdesktop.Response.prototype.getDataCase = function() {
  return /** @type {proto.virtualdesktop.Response.DataCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.Response.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    done: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    success: (f = msg.getSuccess()) && proto.virtualdesktop.SuccessResponse.toObject(includeInstance, f),
    canceled: (f = msg.getCanceled()) && proto.virtualdesktop.CanceledResponse.toObject(includeInstance, f),
    error: (f = msg.getError()) && proto.virtualdesktop.ErrorResponse.toObject(includeInstance, f),
    droppedRequest: (f = msg.getDroppedRequest()) && proto.virtualdesktop.DroppedRequestResponse.toObject(includeInstance, f),
    getIsElevated: (f = msg.getGetIsElevated()) && proto.virtualdesktop.GetIsElevatedResponse.toObject(includeInstance, f),
    getCurrentVirtualDesktop: (f = msg.getGetCurrentVirtualDesktop()) && proto.virtualdesktop.GetCurrentVirtualDesktopResponse.toObject(includeInstance, f),
    listenForVirtualDesktopChanged: (f = msg.getListenForVirtualDesktopChanged()) && proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.toObject(includeInstance, f),
    listenForVirtualDesktopCreated: (f = msg.getListenForVirtualDesktopCreated()) && proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.toObject(includeInstance, f),
    listenForVirtualDesktopDeleted: (f = msg.getListenForVirtualDesktopDeleted()) && proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.toObject(includeInstance, f),
    getWindowVirtualDesktopIndex: (f = msg.getGetWindowVirtualDesktopIndex()) && proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.toObject(includeInstance, f),
    getWindowIsPinnedToVirtualDesktop: (f = msg.getGetWindowIsPinnedToVirtualDesktop()) && proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.toObject(includeInstance, f),
    openWindowsQuery: (f = msg.getOpenWindowsQuery()) && proto.virtualdesktop.QueryOpenWindowsResponse.toObject(includeInstance, f),
    getForegroundWindow: (f = msg.getGetForegroundWindow()) && proto.virtualdesktop.GetForegroundWindowResponse.toObject(includeInstance, f),
    getDesktopWindow: (f = msg.getGetDesktopWindow()) && proto.virtualdesktop.GetDesktopWindowResponse.toObject(includeInstance, f),
    listenToShellEvents: (f = msg.getListenToShellEvents()) && proto.virtualdesktop.ListenToShellEventsResponse.toObject(includeInstance, f),
    getIsWindowMinimized: (f = msg.getGetIsWindowMinimized()) && proto.virtualdesktop.GetIsWindowMinimizedResponse.toObject(includeInstance, f),
    getWindowLocation: (f = msg.getGetWindowLocation()) && proto.virtualdesktop.GetWindowLocationResponse.toObject(includeInstance, f),
    setWindowShowState: (f = msg.getSetWindowShowState()) && proto.virtualdesktop.SetWindowShowStateResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.Response}
 */
proto.virtualdesktop.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.Response;
  return proto.virtualdesktop.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.Response}
 */
proto.virtualdesktop.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDone(value);
      break;
    case 13:
      var value = new proto.virtualdesktop.SuccessResponse;
      reader.readMessage(value,proto.virtualdesktop.SuccessResponse.deserializeBinaryFromReader);
      msg.setSuccess(value);
      break;
    case 14:
      var value = new proto.virtualdesktop.CanceledResponse;
      reader.readMessage(value,proto.virtualdesktop.CanceledResponse.deserializeBinaryFromReader);
      msg.setCanceled(value);
      break;
    case 15:
      var value = new proto.virtualdesktop.ErrorResponse;
      reader.readMessage(value,proto.virtualdesktop.ErrorResponse.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 16:
      var value = new proto.virtualdesktop.DroppedRequestResponse;
      reader.readMessage(value,proto.virtualdesktop.DroppedRequestResponse.deserializeBinaryFromReader);
      msg.setDroppedRequest(value);
      break;
    case 17:
      var value = new proto.virtualdesktop.GetIsElevatedResponse;
      reader.readMessage(value,proto.virtualdesktop.GetIsElevatedResponse.deserializeBinaryFromReader);
      msg.setGetIsElevated(value);
      break;
    case 30:
      var value = new proto.virtualdesktop.GetCurrentVirtualDesktopResponse;
      reader.readMessage(value,proto.virtualdesktop.GetCurrentVirtualDesktopResponse.deserializeBinaryFromReader);
      msg.setGetCurrentVirtualDesktop(value);
      break;
    case 34:
      var value = new proto.virtualdesktop.ListenForVirtualDesktopChangedResponse;
      reader.readMessage(value,proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.deserializeBinaryFromReader);
      msg.setListenForVirtualDesktopChanged(value);
      break;
    case 35:
      var value = new proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse;
      reader.readMessage(value,proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.deserializeBinaryFromReader);
      msg.setListenForVirtualDesktopCreated(value);
      break;
    case 36:
      var value = new proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse;
      reader.readMessage(value,proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.deserializeBinaryFromReader);
      msg.setListenForVirtualDesktopDeleted(value);
      break;
    case 40:
      var value = new proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse;
      reader.readMessage(value,proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.deserializeBinaryFromReader);
      msg.setGetWindowVirtualDesktopIndex(value);
      break;
    case 41:
      var value = new proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse;
      reader.readMessage(value,proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.deserializeBinaryFromReader);
      msg.setGetWindowIsPinnedToVirtualDesktop(value);
      break;
    case 50:
      var value = new proto.virtualdesktop.QueryOpenWindowsResponse;
      reader.readMessage(value,proto.virtualdesktop.QueryOpenWindowsResponse.deserializeBinaryFromReader);
      msg.setOpenWindowsQuery(value);
      break;
    case 51:
      var value = new proto.virtualdesktop.GetForegroundWindowResponse;
      reader.readMessage(value,proto.virtualdesktop.GetForegroundWindowResponse.deserializeBinaryFromReader);
      msg.setGetForegroundWindow(value);
      break;
    case 52:
      var value = new proto.virtualdesktop.GetDesktopWindowResponse;
      reader.readMessage(value,proto.virtualdesktop.GetDesktopWindowResponse.deserializeBinaryFromReader);
      msg.setGetDesktopWindow(value);
      break;
    case 53:
      var value = new proto.virtualdesktop.ListenToShellEventsResponse;
      reader.readMessage(value,proto.virtualdesktop.ListenToShellEventsResponse.deserializeBinaryFromReader);
      msg.setListenToShellEvents(value);
      break;
    case 70:
      var value = new proto.virtualdesktop.GetIsWindowMinimizedResponse;
      reader.readMessage(value,proto.virtualdesktop.GetIsWindowMinimizedResponse.deserializeBinaryFromReader);
      msg.setGetIsWindowMinimized(value);
      break;
    case 71:
      var value = new proto.virtualdesktop.GetWindowLocationResponse;
      reader.readMessage(value,proto.virtualdesktop.GetWindowLocationResponse.deserializeBinaryFromReader);
      msg.setGetWindowLocation(value);
      break;
    case 60:
      var value = new proto.virtualdesktop.SetWindowShowStateResponse;
      reader.readMessage(value,proto.virtualdesktop.SetWindowShowStateResponse.deserializeBinaryFromReader);
      msg.setSetWindowShowState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDone();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSuccess();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.virtualdesktop.SuccessResponse.serializeBinaryToWriter
    );
  }
  f = message.getCanceled();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.virtualdesktop.CanceledResponse.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.virtualdesktop.ErrorResponse.serializeBinaryToWriter
    );
  }
  f = message.getDroppedRequest();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.virtualdesktop.DroppedRequestResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetIsElevated();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.virtualdesktop.GetIsElevatedResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetCurrentVirtualDesktop();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.virtualdesktop.GetCurrentVirtualDesktopResponse.serializeBinaryToWriter
    );
  }
  f = message.getListenForVirtualDesktopChanged();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.serializeBinaryToWriter
    );
  }
  f = message.getListenForVirtualDesktopCreated();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.serializeBinaryToWriter
    );
  }
  f = message.getListenForVirtualDesktopDeleted();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetWindowVirtualDesktopIndex();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetWindowIsPinnedToVirtualDesktop();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.serializeBinaryToWriter
    );
  }
  f = message.getOpenWindowsQuery();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      proto.virtualdesktop.QueryOpenWindowsResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetForegroundWindow();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      proto.virtualdesktop.GetForegroundWindowResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetDesktopWindow();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      proto.virtualdesktop.GetDesktopWindowResponse.serializeBinaryToWriter
    );
  }
  f = message.getListenToShellEvents();
  if (f != null) {
    writer.writeMessage(
      53,
      f,
      proto.virtualdesktop.ListenToShellEventsResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetIsWindowMinimized();
  if (f != null) {
    writer.writeMessage(
      70,
      f,
      proto.virtualdesktop.GetIsWindowMinimizedResponse.serializeBinaryToWriter
    );
  }
  f = message.getGetWindowLocation();
  if (f != null) {
    writer.writeMessage(
      71,
      f,
      proto.virtualdesktop.GetWindowLocationResponse.serializeBinaryToWriter
    );
  }
  f = message.getSetWindowShowState();
  if (f != null) {
    writer.writeMessage(
      60,
      f,
      proto.virtualdesktop.SetWindowShowStateResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.virtualdesktop.Response.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool done = 2;
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.getDone = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.setDone = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional SuccessResponse success = 13;
 * @return {?proto.virtualdesktop.SuccessResponse}
 */
proto.virtualdesktop.Response.prototype.getSuccess = function() {
  return /** @type{?proto.virtualdesktop.SuccessResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.SuccessResponse, 13));
};


/**
 * @param {?proto.virtualdesktop.SuccessResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setSuccess = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearSuccess = function() {
  return this.setSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CanceledResponse canceled = 14;
 * @return {?proto.virtualdesktop.CanceledResponse}
 */
proto.virtualdesktop.Response.prototype.getCanceled = function() {
  return /** @type{?proto.virtualdesktop.CanceledResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.CanceledResponse, 14));
};


/**
 * @param {?proto.virtualdesktop.CanceledResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setCanceled = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearCanceled = function() {
  return this.setCanceled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasCanceled = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ErrorResponse error = 15;
 * @return {?proto.virtualdesktop.ErrorResponse}
 */
proto.virtualdesktop.Response.prototype.getError = function() {
  return /** @type{?proto.virtualdesktop.ErrorResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.ErrorResponse, 15));
};


/**
 * @param {?proto.virtualdesktop.ErrorResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasError = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional DroppedRequestResponse dropped_request = 16;
 * @return {?proto.virtualdesktop.DroppedRequestResponse}
 */
proto.virtualdesktop.Response.prototype.getDroppedRequest = function() {
  return /** @type{?proto.virtualdesktop.DroppedRequestResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.DroppedRequestResponse, 16));
};


/**
 * @param {?proto.virtualdesktop.DroppedRequestResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setDroppedRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearDroppedRequest = function() {
  return this.setDroppedRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasDroppedRequest = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional GetIsElevatedResponse get_is_elevated = 17;
 * @return {?proto.virtualdesktop.GetIsElevatedResponse}
 */
proto.virtualdesktop.Response.prototype.getGetIsElevated = function() {
  return /** @type{?proto.virtualdesktop.GetIsElevatedResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetIsElevatedResponse, 17));
};


/**
 * @param {?proto.virtualdesktop.GetIsElevatedResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setGetIsElevated = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearGetIsElevated = function() {
  return this.setGetIsElevated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasGetIsElevated = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional GetCurrentVirtualDesktopResponse get_current_virtual_desktop = 30;
 * @return {?proto.virtualdesktop.GetCurrentVirtualDesktopResponse}
 */
proto.virtualdesktop.Response.prototype.getGetCurrentVirtualDesktop = function() {
  return /** @type{?proto.virtualdesktop.GetCurrentVirtualDesktopResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetCurrentVirtualDesktopResponse, 30));
};


/**
 * @param {?proto.virtualdesktop.GetCurrentVirtualDesktopResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setGetCurrentVirtualDesktop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearGetCurrentVirtualDesktop = function() {
  return this.setGetCurrentVirtualDesktop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasGetCurrentVirtualDesktop = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional ListenForVirtualDesktopChangedResponse listen_for_virtual_desktop_changed = 34;
 * @return {?proto.virtualdesktop.ListenForVirtualDesktopChangedResponse}
 */
proto.virtualdesktop.Response.prototype.getListenForVirtualDesktopChanged = function() {
  return /** @type{?proto.virtualdesktop.ListenForVirtualDesktopChangedResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.ListenForVirtualDesktopChangedResponse, 34));
};


/**
 * @param {?proto.virtualdesktop.ListenForVirtualDesktopChangedResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setListenForVirtualDesktopChanged = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearListenForVirtualDesktopChanged = function() {
  return this.setListenForVirtualDesktopChanged(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasListenForVirtualDesktopChanged = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional ListenForVirtualDesktopCreatedResponse listen_for_virtual_desktop_created = 35;
 * @return {?proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse}
 */
proto.virtualdesktop.Response.prototype.getListenForVirtualDesktopCreated = function() {
  return /** @type{?proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse, 35));
};


/**
 * @param {?proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setListenForVirtualDesktopCreated = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearListenForVirtualDesktopCreated = function() {
  return this.setListenForVirtualDesktopCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasListenForVirtualDesktopCreated = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional ListenForVirtualDesktopDeletedResponse listen_for_virtual_desktop_deleted = 36;
 * @return {?proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse}
 */
proto.virtualdesktop.Response.prototype.getListenForVirtualDesktopDeleted = function() {
  return /** @type{?proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse, 36));
};


/**
 * @param {?proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setListenForVirtualDesktopDeleted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearListenForVirtualDesktopDeleted = function() {
  return this.setListenForVirtualDesktopDeleted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasListenForVirtualDesktopDeleted = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional GetWindowVirtualDesktopIndexResponse get_window_virtual_desktop_index = 40;
 * @return {?proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse}
 */
proto.virtualdesktop.Response.prototype.getGetWindowVirtualDesktopIndex = function() {
  return /** @type{?proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse, 40));
};


/**
 * @param {?proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setGetWindowVirtualDesktopIndex = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearGetWindowVirtualDesktopIndex = function() {
  return this.setGetWindowVirtualDesktopIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasGetWindowVirtualDesktopIndex = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional GetWindowIsPinnedToVirtualDesktopResponse get_window_is_pinned_to_virtual_desktop = 41;
 * @return {?proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse}
 */
proto.virtualdesktop.Response.prototype.getGetWindowIsPinnedToVirtualDesktop = function() {
  return /** @type{?proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse, 41));
};


/**
 * @param {?proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setGetWindowIsPinnedToVirtualDesktop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearGetWindowIsPinnedToVirtualDesktop = function() {
  return this.setGetWindowIsPinnedToVirtualDesktop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasGetWindowIsPinnedToVirtualDesktop = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional QueryOpenWindowsResponse open_windows_query = 50;
 * @return {?proto.virtualdesktop.QueryOpenWindowsResponse}
 */
proto.virtualdesktop.Response.prototype.getOpenWindowsQuery = function() {
  return /** @type{?proto.virtualdesktop.QueryOpenWindowsResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.QueryOpenWindowsResponse, 50));
};


/**
 * @param {?proto.virtualdesktop.QueryOpenWindowsResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setOpenWindowsQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 50, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearOpenWindowsQuery = function() {
  return this.setOpenWindowsQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasOpenWindowsQuery = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional GetForegroundWindowResponse get_foreground_window = 51;
 * @return {?proto.virtualdesktop.GetForegroundWindowResponse}
 */
proto.virtualdesktop.Response.prototype.getGetForegroundWindow = function() {
  return /** @type{?proto.virtualdesktop.GetForegroundWindowResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetForegroundWindowResponse, 51));
};


/**
 * @param {?proto.virtualdesktop.GetForegroundWindowResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setGetForegroundWindow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 51, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearGetForegroundWindow = function() {
  return this.setGetForegroundWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasGetForegroundWindow = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional GetDesktopWindowResponse get_desktop_window = 52;
 * @return {?proto.virtualdesktop.GetDesktopWindowResponse}
 */
proto.virtualdesktop.Response.prototype.getGetDesktopWindow = function() {
  return /** @type{?proto.virtualdesktop.GetDesktopWindowResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetDesktopWindowResponse, 52));
};


/**
 * @param {?proto.virtualdesktop.GetDesktopWindowResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setGetDesktopWindow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 52, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearGetDesktopWindow = function() {
  return this.setGetDesktopWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasGetDesktopWindow = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional ListenToShellEventsResponse listen_to_shell_events = 53;
 * @return {?proto.virtualdesktop.ListenToShellEventsResponse}
 */
proto.virtualdesktop.Response.prototype.getListenToShellEvents = function() {
  return /** @type{?proto.virtualdesktop.ListenToShellEventsResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.ListenToShellEventsResponse, 53));
};


/**
 * @param {?proto.virtualdesktop.ListenToShellEventsResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setListenToShellEvents = function(value) {
  return jspb.Message.setOneofWrapperField(this, 53, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearListenToShellEvents = function() {
  return this.setListenToShellEvents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasListenToShellEvents = function() {
  return jspb.Message.getField(this, 53) != null;
};


/**
 * optional GetIsWindowMinimizedResponse get_is_window_minimized = 70;
 * @return {?proto.virtualdesktop.GetIsWindowMinimizedResponse}
 */
proto.virtualdesktop.Response.prototype.getGetIsWindowMinimized = function() {
  return /** @type{?proto.virtualdesktop.GetIsWindowMinimizedResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetIsWindowMinimizedResponse, 70));
};


/**
 * @param {?proto.virtualdesktop.GetIsWindowMinimizedResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setGetIsWindowMinimized = function(value) {
  return jspb.Message.setOneofWrapperField(this, 70, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearGetIsWindowMinimized = function() {
  return this.setGetIsWindowMinimized(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasGetIsWindowMinimized = function() {
  return jspb.Message.getField(this, 70) != null;
};


/**
 * optional GetWindowLocationResponse get_window_location = 71;
 * @return {?proto.virtualdesktop.GetWindowLocationResponse}
 */
proto.virtualdesktop.Response.prototype.getGetWindowLocation = function() {
  return /** @type{?proto.virtualdesktop.GetWindowLocationResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.GetWindowLocationResponse, 71));
};


/**
 * @param {?proto.virtualdesktop.GetWindowLocationResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setGetWindowLocation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 71, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearGetWindowLocation = function() {
  return this.setGetWindowLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasGetWindowLocation = function() {
  return jspb.Message.getField(this, 71) != null;
};


/**
 * optional SetWindowShowStateResponse set_window_show_state = 60;
 * @return {?proto.virtualdesktop.SetWindowShowStateResponse}
 */
proto.virtualdesktop.Response.prototype.getSetWindowShowState = function() {
  return /** @type{?proto.virtualdesktop.SetWindowShowStateResponse} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.SetWindowShowStateResponse, 60));
};


/**
 * @param {?proto.virtualdesktop.SetWindowShowStateResponse|undefined} value
 * @return {!proto.virtualdesktop.Response} returns this
*/
proto.virtualdesktop.Response.prototype.setSetWindowShowState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 60, proto.virtualdesktop.Response.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.Response} returns this
 */
proto.virtualdesktop.Response.prototype.clearSetWindowShowState = function() {
  return this.setSetWindowShowState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.Response.prototype.hasSetWindowShowState = function() {
  return jspb.Message.getField(this, 60) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.SuccessResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.SuccessResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.SuccessResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.SuccessResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.SuccessResponse}
 */
proto.virtualdesktop.SuccessResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.SuccessResponse;
  return proto.virtualdesktop.SuccessResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.SuccessResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.SuccessResponse}
 */
proto.virtualdesktop.SuccessResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.SuccessResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.SuccessResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.SuccessResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.SuccessResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.ErrorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.ErrorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.ErrorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ErrorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorMessage: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.ErrorResponse}
 */
proto.virtualdesktop.ErrorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.ErrorResponse;
  return proto.virtualdesktop.ErrorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.ErrorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.ErrorResponse}
 */
proto.virtualdesktop.ErrorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.ErrorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.ErrorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.ErrorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ErrorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error_message = 1;
 * @return {string}
 */
proto.virtualdesktop.ErrorResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.virtualdesktop.ErrorResponse} returns this
 */
proto.virtualdesktop.ErrorResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.DroppedRequestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.DroppedRequestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.DroppedRequestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.DroppedRequestResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorMessage: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.DroppedRequestResponse}
 */
proto.virtualdesktop.DroppedRequestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.DroppedRequestResponse;
  return proto.virtualdesktop.DroppedRequestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.DroppedRequestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.DroppedRequestResponse}
 */
proto.virtualdesktop.DroppedRequestResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 2:
      var value = /** @type {!proto.virtualdesktop.DroppedRequestResponse.Reason} */ (reader.readEnum());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.DroppedRequestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.DroppedRequestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.DroppedRequestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.DroppedRequestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.virtualdesktop.DroppedRequestResponse.Reason = {
  PARSE_ERROR: 0,
  TOO_LARGE_REQUEST: 1
};

/**
 * optional string error_message = 1;
 * @return {string}
 */
proto.virtualdesktop.DroppedRequestResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.virtualdesktop.DroppedRequestResponse} returns this
 */
proto.virtualdesktop.DroppedRequestResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Reason reason = 2;
 * @return {!proto.virtualdesktop.DroppedRequestResponse.Reason}
 */
proto.virtualdesktop.DroppedRequestResponse.prototype.getReason = function() {
  return /** @type {!proto.virtualdesktop.DroppedRequestResponse.Reason} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.virtualdesktop.DroppedRequestResponse.Reason} value
 * @return {!proto.virtualdesktop.DroppedRequestResponse} returns this
 */
proto.virtualdesktop.DroppedRequestResponse.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.CancelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.CancelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.CancelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.CancelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.CancelRequest}
 */
proto.virtualdesktop.CancelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.CancelRequest;
  return proto.virtualdesktop.CancelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.CancelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.CancelRequest}
 */
proto.virtualdesktop.CancelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.CancelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.CancelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.CancelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.CancelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.CanceledResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.CanceledResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.CanceledResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.CanceledResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.CanceledResponse}
 */
proto.virtualdesktop.CanceledResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.CanceledResponse;
  return proto.virtualdesktop.CanceledResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.CanceledResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.CanceledResponse}
 */
proto.virtualdesktop.CanceledResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.CanceledResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.CanceledResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.CanceledResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.CanceledResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.LogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.LogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.LogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.LogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    logMessage: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.LogRequest}
 */
proto.virtualdesktop.LogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.LogRequest;
  return proto.virtualdesktop.LogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.LogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.LogRequest}
 */
proto.virtualdesktop.LogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.LogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.LogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.LogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.LogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string log_message = 1;
 * @return {string}
 */
proto.virtualdesktop.LogRequest.prototype.getLogMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.virtualdesktop.LogRequest} returns this
 */
proto.virtualdesktop.LogRequest.prototype.setLogMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.virtualdesktop.ListenToShellEventsRequest.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.virtualdesktop.ListenToShellEventsRequest.OptionalWantedShellTypeCase = {
  OPTIONAL_WANTED_SHELL_TYPE_NOT_SET: 0,
  WANTED_EVENT_TYPE: 2
};

/**
 * @return {proto.virtualdesktop.ListenToShellEventsRequest.OptionalWantedShellTypeCase}
 */
proto.virtualdesktop.ListenToShellEventsRequest.prototype.getOptionalWantedShellTypeCase = function() {
  return /** @type {proto.virtualdesktop.ListenToShellEventsRequest.OptionalWantedShellTypeCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.ListenToShellEventsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.ListenToShellEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.ListenToShellEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.ListenToShellEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenToShellEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    getSecondEventArg: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    wantedEventType: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.ListenToShellEventsRequest}
 */
proto.virtualdesktop.ListenToShellEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.ListenToShellEventsRequest;
  return proto.virtualdesktop.ListenToShellEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.ListenToShellEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.ListenToShellEventsRequest}
 */
proto.virtualdesktop.ListenToShellEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGetSecondEventArg(value);
      break;
    case 2:
      var value = /** @type {!proto.virtualdesktop.ShellEventType} */ (reader.readEnum());
      msg.setWantedEventType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.ListenToShellEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.ListenToShellEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.ListenToShellEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenToShellEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGetSecondEventArg();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {!proto.virtualdesktop.ShellEventType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional bool get_second_event_arg = 1;
 * @return {boolean}
 */
proto.virtualdesktop.ListenToShellEventsRequest.prototype.getGetSecondEventArg = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.ListenToShellEventsRequest} returns this
 */
proto.virtualdesktop.ListenToShellEventsRequest.prototype.setGetSecondEventArg = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional ShellEventType wanted_event_type = 2;
 * @return {!proto.virtualdesktop.ShellEventType}
 */
proto.virtualdesktop.ListenToShellEventsRequest.prototype.getWantedEventType = function() {
  return /** @type {!proto.virtualdesktop.ShellEventType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.virtualdesktop.ShellEventType} value
 * @return {!proto.virtualdesktop.ListenToShellEventsRequest} returns this
 */
proto.virtualdesktop.ListenToShellEventsRequest.prototype.setWantedEventType = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.virtualdesktop.ListenToShellEventsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.ListenToShellEventsRequest} returns this
 */
proto.virtualdesktop.ListenToShellEventsRequest.prototype.clearWantedEventType = function() {
  return jspb.Message.setOneofField(this, 2, proto.virtualdesktop.ListenToShellEventsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.ListenToShellEventsRequest.prototype.hasWantedEventType = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.ListenToShellEventsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.ListenToShellEventsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.ListenToShellEventsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenToShellEventsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: jspb.Message.getFieldWithDefault(msg, 2, 0),
    secondaryData: jspb.Message.getFieldWithDefault(msg, 3, 0),
    eventTypeCode: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.ListenToShellEventsResponse}
 */
proto.virtualdesktop.ListenToShellEventsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.ListenToShellEventsResponse;
  return proto.virtualdesktop.ListenToShellEventsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.ListenToShellEventsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.ListenToShellEventsResponse}
 */
proto.virtualdesktop.ListenToShellEventsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.virtualdesktop.ShellEventType} */ (reader.readEnum());
      msg.setEventType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSecondaryData(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEventTypeCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.ListenToShellEventsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.ListenToShellEventsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.ListenToShellEventsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenToShellEventsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getData();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSecondaryData();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEventTypeCode();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional ShellEventType event_type = 1;
 * @return {!proto.virtualdesktop.ShellEventType}
 */
proto.virtualdesktop.ListenToShellEventsResponse.prototype.getEventType = function() {
  return /** @type {!proto.virtualdesktop.ShellEventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.virtualdesktop.ShellEventType} value
 * @return {!proto.virtualdesktop.ListenToShellEventsResponse} returns this
 */
proto.virtualdesktop.ListenToShellEventsResponse.prototype.setEventType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 data = 2;
 * @return {number}
 */
proto.virtualdesktop.ListenToShellEventsResponse.prototype.getData = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.ListenToShellEventsResponse} returns this
 */
proto.virtualdesktop.ListenToShellEventsResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 secondary_data = 3;
 * @return {number}
 */
proto.virtualdesktop.ListenToShellEventsResponse.prototype.getSecondaryData = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.ListenToShellEventsResponse} returns this
 */
proto.virtualdesktop.ListenToShellEventsResponse.prototype.setSecondaryData = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 event_type_code = 4;
 * @return {number}
 */
proto.virtualdesktop.ListenToShellEventsResponse.prototype.getEventTypeCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.ListenToShellEventsResponse} returns this
 */
proto.virtualdesktop.ListenToShellEventsResponse.prototype.setEventTypeCode = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.MoveWindowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.MoveWindowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.MoveWindowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.MoveWindowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0),
    wantedLocation: (f = msg.getWantedLocation()) && proto.virtualdesktop.Rectangle.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.MoveWindowRequest}
 */
proto.virtualdesktop.MoveWindowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.MoveWindowRequest;
  return proto.virtualdesktop.MoveWindowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.MoveWindowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.MoveWindowRequest}
 */
proto.virtualdesktop.MoveWindowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    case 2:
      var value = new proto.virtualdesktop.Rectangle;
      reader.readMessage(value,proto.virtualdesktop.Rectangle.deserializeBinaryFromReader);
      msg.setWantedLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.MoveWindowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.MoveWindowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.MoveWindowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.MoveWindowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWantedLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.virtualdesktop.Rectangle.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.MoveWindowRequest.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.MoveWindowRequest} returns this
 */
proto.virtualdesktop.MoveWindowRequest.prototype.setWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Rectangle wanted_location = 2;
 * @return {?proto.virtualdesktop.Rectangle}
 */
proto.virtualdesktop.MoveWindowRequest.prototype.getWantedLocation = function() {
  return /** @type{?proto.virtualdesktop.Rectangle} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.Rectangle, 2));
};


/**
 * @param {?proto.virtualdesktop.Rectangle|undefined} value
 * @return {!proto.virtualdesktop.MoveWindowRequest} returns this
*/
proto.virtualdesktop.MoveWindowRequest.prototype.setWantedLocation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.MoveWindowRequest} returns this
 */
proto.virtualdesktop.MoveWindowRequest.prototype.clearWantedLocation = function() {
  return this.setWantedLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.MoveWindowRequest.prototype.hasWantedLocation = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetWindowLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetWindowLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetWindowLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetWindowLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0),
    extendedFrameBound: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetWindowLocationRequest}
 */
proto.virtualdesktop.GetWindowLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetWindowLocationRequest;
  return proto.virtualdesktop.GetWindowLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetWindowLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetWindowLocationRequest}
 */
proto.virtualdesktop.GetWindowLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExtendedFrameBound(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetWindowLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetWindowLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetWindowLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetWindowLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getExtendedFrameBound();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.GetWindowLocationRequest.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.GetWindowLocationRequest} returns this
 */
proto.virtualdesktop.GetWindowLocationRequest.prototype.setWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool extended_frame_bound = 2;
 * @return {boolean}
 */
proto.virtualdesktop.GetWindowLocationRequest.prototype.getExtendedFrameBound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.GetWindowLocationRequest} returns this
 */
proto.virtualdesktop.GetWindowLocationRequest.prototype.setExtendedFrameBound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetWindowLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetWindowLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetWindowLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetWindowLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bounds: (f = msg.getBounds()) && proto.virtualdesktop.Rectangle.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetWindowLocationResponse}
 */
proto.virtualdesktop.GetWindowLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetWindowLocationResponse;
  return proto.virtualdesktop.GetWindowLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetWindowLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetWindowLocationResponse}
 */
proto.virtualdesktop.GetWindowLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.virtualdesktop.Rectangle;
      reader.readMessage(value,proto.virtualdesktop.Rectangle.deserializeBinaryFromReader);
      msg.setBounds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetWindowLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetWindowLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetWindowLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetWindowLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBounds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.virtualdesktop.Rectangle.serializeBinaryToWriter
    );
  }
};


/**
 * optional Rectangle bounds = 1;
 * @return {?proto.virtualdesktop.Rectangle}
 */
proto.virtualdesktop.GetWindowLocationResponse.prototype.getBounds = function() {
  return /** @type{?proto.virtualdesktop.Rectangle} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.Rectangle, 1));
};


/**
 * @param {?proto.virtualdesktop.Rectangle|undefined} value
 * @return {!proto.virtualdesktop.GetWindowLocationResponse} returns this
*/
proto.virtualdesktop.GetWindowLocationResponse.prototype.setBounds = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.GetWindowLocationResponse} returns this
 */
proto.virtualdesktop.GetWindowLocationResponse.prototype.clearBounds = function() {
  return this.setBounds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.GetWindowLocationResponse.prototype.hasBounds = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.Rectangle.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.Rectangle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.Rectangle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.Rectangle.toObject = function(includeInstance, msg) {
  var f, obj = {
    top: jspb.Message.getFieldWithDefault(msg, 1, 0),
    left: jspb.Message.getFieldWithDefault(msg, 2, 0),
    width: jspb.Message.getFieldWithDefault(msg, 3, 0),
    height: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.Rectangle}
 */
proto.virtualdesktop.Rectangle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.Rectangle;
  return proto.virtualdesktop.Rectangle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.Rectangle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.Rectangle}
 */
proto.virtualdesktop.Rectangle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTop(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeft(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.Rectangle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.Rectangle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.Rectangle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.Rectangle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTop();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLeft();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 top = 1;
 * @return {number}
 */
proto.virtualdesktop.Rectangle.prototype.getTop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.Rectangle} returns this
 */
proto.virtualdesktop.Rectangle.prototype.setTop = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 left = 2;
 * @return {number}
 */
proto.virtualdesktop.Rectangle.prototype.getLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.Rectangle} returns this
 */
proto.virtualdesktop.Rectangle.prototype.setLeft = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 width = 3;
 * @return {number}
 */
proto.virtualdesktop.Rectangle.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.Rectangle} returns this
 */
proto.virtualdesktop.Rectangle.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 height = 4;
 * @return {number}
 */
proto.virtualdesktop.Rectangle.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.Rectangle} returns this
 */
proto.virtualdesktop.Rectangle.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetIsElevatedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetIsElevatedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetIsElevatedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetIsElevatedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetIsElevatedRequest}
 */
proto.virtualdesktop.GetIsElevatedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetIsElevatedRequest;
  return proto.virtualdesktop.GetIsElevatedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetIsElevatedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetIsElevatedRequest}
 */
proto.virtualdesktop.GetIsElevatedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetIsElevatedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetIsElevatedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetIsElevatedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetIsElevatedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetIsElevatedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetIsElevatedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetIsElevatedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetIsElevatedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isElevated: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetIsElevatedResponse}
 */
proto.virtualdesktop.GetIsElevatedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetIsElevatedResponse;
  return proto.virtualdesktop.GetIsElevatedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetIsElevatedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetIsElevatedResponse}
 */
proto.virtualdesktop.GetIsElevatedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsElevated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetIsElevatedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetIsElevatedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetIsElevatedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetIsElevatedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsElevated();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_elevated = 1;
 * @return {boolean}
 */
proto.virtualdesktop.GetIsElevatedResponse.prototype.getIsElevated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.GetIsElevatedResponse} returns this
 */
proto.virtualdesktop.GetIsElevatedResponse.prototype.setIsElevated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetDesktopWindowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetDesktopWindowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetDesktopWindowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetDesktopWindowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetDesktopWindowRequest}
 */
proto.virtualdesktop.GetDesktopWindowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetDesktopWindowRequest;
  return proto.virtualdesktop.GetDesktopWindowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetDesktopWindowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetDesktopWindowRequest}
 */
proto.virtualdesktop.GetDesktopWindowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetDesktopWindowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetDesktopWindowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetDesktopWindowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetDesktopWindowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetDesktopWindowResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetDesktopWindowResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetDesktopWindowResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetDesktopWindowResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    desktopWindowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetDesktopWindowResponse}
 */
proto.virtualdesktop.GetDesktopWindowResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetDesktopWindowResponse;
  return proto.virtualdesktop.GetDesktopWindowResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetDesktopWindowResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetDesktopWindowResponse}
 */
proto.virtualdesktop.GetDesktopWindowResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDesktopWindowHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetDesktopWindowResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetDesktopWindowResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetDesktopWindowResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetDesktopWindowResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDesktopWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 desktop_window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.GetDesktopWindowResponse.prototype.getDesktopWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.GetDesktopWindowResponse} returns this
 */
proto.virtualdesktop.GetDesktopWindowResponse.prototype.setDesktopWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetForegroundWindowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetForegroundWindowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetForegroundWindowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetForegroundWindowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetForegroundWindowRequest}
 */
proto.virtualdesktop.GetForegroundWindowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetForegroundWindowRequest;
  return proto.virtualdesktop.GetForegroundWindowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetForegroundWindowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetForegroundWindowRequest}
 */
proto.virtualdesktop.GetForegroundWindowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetForegroundWindowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetForegroundWindowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetForegroundWindowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetForegroundWindowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetForegroundWindowResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetForegroundWindowResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetForegroundWindowResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetForegroundWindowResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    foregroundWindowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetForegroundWindowResponse}
 */
proto.virtualdesktop.GetForegroundWindowResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetForegroundWindowResponse;
  return proto.virtualdesktop.GetForegroundWindowResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetForegroundWindowResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetForegroundWindowResponse}
 */
proto.virtualdesktop.GetForegroundWindowResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setForegroundWindowHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetForegroundWindowResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetForegroundWindowResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetForegroundWindowResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetForegroundWindowResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getForegroundWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 foreground_window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.GetForegroundWindowResponse.prototype.getForegroundWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.GetForegroundWindowResponse} returns this
 */
proto.virtualdesktop.GetForegroundWindowResponse.prototype.setForegroundWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.SetForegroundWindowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.SetForegroundWindowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.SetForegroundWindowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.SetForegroundWindowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.SetForegroundWindowRequest}
 */
proto.virtualdesktop.SetForegroundWindowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.SetForegroundWindowRequest;
  return proto.virtualdesktop.SetForegroundWindowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.SetForegroundWindowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.SetForegroundWindowRequest}
 */
proto.virtualdesktop.SetForegroundWindowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.SetForegroundWindowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.SetForegroundWindowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.SetForegroundWindowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.SetForegroundWindowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.SetForegroundWindowRequest.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.SetForegroundWindowRequest} returns this
 */
proto.virtualdesktop.SetForegroundWindowRequest.prototype.setWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetIsWindowMinimizedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetIsWindowMinimizedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetIsWindowMinimizedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetIsWindowMinimizedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetIsWindowMinimizedRequest}
 */
proto.virtualdesktop.GetIsWindowMinimizedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetIsWindowMinimizedRequest;
  return proto.virtualdesktop.GetIsWindowMinimizedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetIsWindowMinimizedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetIsWindowMinimizedRequest}
 */
proto.virtualdesktop.GetIsWindowMinimizedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetIsWindowMinimizedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetIsWindowMinimizedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetIsWindowMinimizedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetIsWindowMinimizedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.GetIsWindowMinimizedRequest.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.GetIsWindowMinimizedRequest} returns this
 */
proto.virtualdesktop.GetIsWindowMinimizedRequest.prototype.setWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetIsWindowMinimizedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetIsWindowMinimizedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetIsWindowMinimizedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetIsWindowMinimizedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isMinimized: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetIsWindowMinimizedResponse}
 */
proto.virtualdesktop.GetIsWindowMinimizedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetIsWindowMinimizedResponse;
  return proto.virtualdesktop.GetIsWindowMinimizedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetIsWindowMinimizedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetIsWindowMinimizedResponse}
 */
proto.virtualdesktop.GetIsWindowMinimizedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMinimized(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetIsWindowMinimizedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetIsWindowMinimizedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetIsWindowMinimizedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetIsWindowMinimizedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsMinimized();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_minimized = 1;
 * @return {boolean}
 */
proto.virtualdesktop.GetIsWindowMinimizedResponse.prototype.getIsMinimized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.GetIsWindowMinimizedResponse} returns this
 */
proto.virtualdesktop.GetIsWindowMinimizedResponse.prototype.setIsMinimized = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.CloseWindowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.CloseWindowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.CloseWindowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.CloseWindowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.CloseWindowRequest}
 */
proto.virtualdesktop.CloseWindowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.CloseWindowRequest;
  return proto.virtualdesktop.CloseWindowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.CloseWindowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.CloseWindowRequest}
 */
proto.virtualdesktop.CloseWindowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.CloseWindowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.CloseWindowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.CloseWindowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.CloseWindowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.CloseWindowRequest.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.CloseWindowRequest} returns this
 */
proto.virtualdesktop.CloseWindowRequest.prototype.setWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.SetWindowShowStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.SetWindowShowStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.SetWindowShowStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.SetWindowShowStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0),
    wantedState: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.SetWindowShowStateRequest}
 */
proto.virtualdesktop.SetWindowShowStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.SetWindowShowStateRequest;
  return proto.virtualdesktop.SetWindowShowStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.SetWindowShowStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.SetWindowShowStateRequest}
 */
proto.virtualdesktop.SetWindowShowStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    case 2:
      var value = /** @type {!proto.virtualdesktop.SetWindowShowStateRequest.ShowState} */ (reader.readEnum());
      msg.setWantedState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.SetWindowShowStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.SetWindowShowStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.SetWindowShowStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.SetWindowShowStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWantedState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.virtualdesktop.SetWindowShowStateRequest.ShowState = {
  HIDE: 0,
  FORCE_MINIMIZE: 11,
  MAXIMIZE: 3,
  MINIMIZE: 6,
  RESTORE: 9,
  SHOW: 5,
  SHOW_DEFAULT: 10,
  SHOW_MAXIMIZED: 3,
  SHOW_MINIMIZED: 2,
  SHOW_MINIMIZED_NO_ACTIVATE: 7,
  SHOW_NO_ACTIVATE: 8,
  SHOW_NORMAL_NO_ACTIVATE: 4,
  SHOW_NORMAL: 1
};

/**
 * optional int64 window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.SetWindowShowStateRequest.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.SetWindowShowStateRequest} returns this
 */
proto.virtualdesktop.SetWindowShowStateRequest.prototype.setWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ShowState wanted_state = 2;
 * @return {!proto.virtualdesktop.SetWindowShowStateRequest.ShowState}
 */
proto.virtualdesktop.SetWindowShowStateRequest.prototype.getWantedState = function() {
  return /** @type {!proto.virtualdesktop.SetWindowShowStateRequest.ShowState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.virtualdesktop.SetWindowShowStateRequest.ShowState} value
 * @return {!proto.virtualdesktop.SetWindowShowStateRequest} returns this
 */
proto.virtualdesktop.SetWindowShowStateRequest.prototype.setWantedState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.SetWindowShowStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.SetWindowShowStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.SetWindowShowStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.SetWindowShowStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    wasVisible: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.SetWindowShowStateResponse}
 */
proto.virtualdesktop.SetWindowShowStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.SetWindowShowStateResponse;
  return proto.virtualdesktop.SetWindowShowStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.SetWindowShowStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.SetWindowShowStateResponse}
 */
proto.virtualdesktop.SetWindowShowStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWasVisible(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.SetWindowShowStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.SetWindowShowStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.SetWindowShowStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.SetWindowShowStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWasVisible();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool was_visible = 1;
 * @return {boolean}
 */
proto.virtualdesktop.SetWindowShowStateResponse.prototype.getWasVisible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.SetWindowShowStateResponse} returns this
 */
proto.virtualdesktop.SetWindowShowStateResponse.prototype.setWasVisible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.virtualdesktop.OpenWindowsFilter.oneofGroups_ = [[1],[2],[3],[4],[5],[6],[7],[8],[9]];

/**
 * @enum {number}
 */
proto.virtualdesktop.OpenWindowsFilter.OptionalHasVirtualDesktopInfoCase = {
  OPTIONAL_HAS_VIRTUAL_DESKTOP_INFO_NOT_SET: 0,
  HAS_VIRTUAL_DESKTOP_INFO: 1
};

/**
 * @return {proto.virtualdesktop.OpenWindowsFilter.OptionalHasVirtualDesktopInfoCase}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getOptionalHasVirtualDesktopInfoCase = function() {
  return /** @type {proto.virtualdesktop.OpenWindowsFilter.OptionalHasVirtualDesktopInfoCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.OpenWindowsFilter.OptionalWindowHandleCase = {
  OPTIONAL_WINDOW_HANDLE_NOT_SET: 0,
  WINDOW_HANDLE: 2
};

/**
 * @return {proto.virtualdesktop.OpenWindowsFilter.OptionalWindowHandleCase}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getOptionalWindowHandleCase = function() {
  return /** @type {proto.virtualdesktop.OpenWindowsFilter.OptionalWindowHandleCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[1]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.OpenWindowsFilter.OptionalParentWindowHandleCase = {
  OPTIONAL_PARENT_WINDOW_HANDLE_NOT_SET: 0,
  PARENT_WINDOW_HANDLE: 3
};

/**
 * @return {proto.virtualdesktop.OpenWindowsFilter.OptionalParentWindowHandleCase}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getOptionalParentWindowHandleCase = function() {
  return /** @type {proto.virtualdesktop.OpenWindowsFilter.OptionalParentWindowHandleCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[2]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.OpenWindowsFilter.OptionalRootParentWindowHandleCase = {
  OPTIONAL_ROOT_PARENT_WINDOW_HANDLE_NOT_SET: 0,
  ROOT_PARENT_WINDOW_HANDLE: 4
};

/**
 * @return {proto.virtualdesktop.OpenWindowsFilter.OptionalRootParentWindowHandleCase}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getOptionalRootParentWindowHandleCase = function() {
  return /** @type {proto.virtualdesktop.OpenWindowsFilter.OptionalRootParentWindowHandleCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[3]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.OpenWindowsFilter.OptionalTitleCase = {
  OPTIONAL_TITLE_NOT_SET: 0,
  TITLE: 5
};

/**
 * @return {proto.virtualdesktop.OpenWindowsFilter.OptionalTitleCase}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getOptionalTitleCase = function() {
  return /** @type {proto.virtualdesktop.OpenWindowsFilter.OptionalTitleCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[4]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.OpenWindowsFilter.OptionalProcessIdCase = {
  OPTIONAL_PROCESS_ID_NOT_SET: 0,
  PROCESS_ID: 6
};

/**
 * @return {proto.virtualdesktop.OpenWindowsFilter.OptionalProcessIdCase}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getOptionalProcessIdCase = function() {
  return /** @type {proto.virtualdesktop.OpenWindowsFilter.OptionalProcessIdCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[5]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.OpenWindowsFilter.OptionalPinnedToAllVirtualDesktopsCase = {
  OPTIONAL_PINNED_TO_ALL_VIRTUAL_DESKTOPS_NOT_SET: 0,
  PINNED_TO_ALL_VIRTUAL_DESKTOPS: 7
};

/**
 * @return {proto.virtualdesktop.OpenWindowsFilter.OptionalPinnedToAllVirtualDesktopsCase}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getOptionalPinnedToAllVirtualDesktopsCase = function() {
  return /** @type {proto.virtualdesktop.OpenWindowsFilter.OptionalPinnedToAllVirtualDesktopsCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[6]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.OpenWindowsFilter.OptionalVirtualDesktopIndexCase = {
  OPTIONAL_VIRTUAL_DESKTOP_INDEX_NOT_SET: 0,
  VIRTUAL_DESKTOP_INDEX: 8
};

/**
 * @return {proto.virtualdesktop.OpenWindowsFilter.OptionalVirtualDesktopIndexCase}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getOptionalVirtualDesktopIndexCase = function() {
  return /** @type {proto.virtualdesktop.OpenWindowsFilter.OptionalVirtualDesktopIndexCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[7]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.OpenWindowsFilter.OptionalIsMinimizedCase = {
  OPTIONAL_IS_MINIMIZED_NOT_SET: 0,
  IS_MINIMIZED: 9
};

/**
 * @return {proto.virtualdesktop.OpenWindowsFilter.OptionalIsMinimizedCase}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getOptionalIsMinimizedCase = function() {
  return /** @type {proto.virtualdesktop.OpenWindowsFilter.OptionalIsMinimizedCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[8]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.OpenWindowsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.OpenWindowsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.OpenWindowsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    hasVirtualDesktopInfo: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    windowHandle: jspb.Message.getFieldWithDefault(msg, 2, 0),
    parentWindowHandle: jspb.Message.getFieldWithDefault(msg, 3, 0),
    rootParentWindowHandle: jspb.Message.getFieldWithDefault(msg, 4, 0),
    title: jspb.Message.getFieldWithDefault(msg, 5, ""),
    processId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pinnedToAllVirtualDesktops: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    virtualDesktopIndex: jspb.Message.getFieldWithDefault(msg, 8, 0),
    isMinimized: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.OpenWindowsFilter}
 */
proto.virtualdesktop.OpenWindowsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.OpenWindowsFilter;
  return proto.virtualdesktop.OpenWindowsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.OpenWindowsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.OpenWindowsFilter}
 */
proto.virtualdesktop.OpenWindowsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasVirtualDesktopInfo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParentWindowHandle(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRootParentWindowHandle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProcessId(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPinnedToAllVirtualDesktops(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVirtualDesktopIndex(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMinimized(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.OpenWindowsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.OpenWindowsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.OpenWindowsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional bool has_virtual_desktop_info = 1;
 * @return {boolean}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getHasVirtualDesktopInfo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.setHasVirtualDesktopInfo = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.clearHasVirtualDesktopInfo = function() {
  return jspb.Message.setOneofField(this, 1, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.hasHasVirtualDesktopInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 window_handle = 2;
 * @return {number}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.setWindowHandle = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.clearWindowHandle = function() {
  return jspb.Message.setOneofField(this, 2, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.hasWindowHandle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 parent_window_handle = 3;
 * @return {number}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getParentWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.setParentWindowHandle = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[2], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.clearParentWindowHandle = function() {
  return jspb.Message.setOneofField(this, 3, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[2], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.hasParentWindowHandle = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 root_parent_window_handle = 4;
 * @return {number}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getRootParentWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.setRootParentWindowHandle = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[3], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.clearRootParentWindowHandle = function() {
  return jspb.Message.setOneofField(this, 4, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[3], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.hasRootParentWindowHandle = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.setTitle = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[4], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.clearTitle = function() {
  return jspb.Message.setOneofField(this, 5, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[4], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 process_id = 6;
 * @return {number}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getProcessId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.setProcessId = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[5], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.clearProcessId = function() {
  return jspb.Message.setOneofField(this, 6, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[5], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.hasProcessId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool pinned_to_all_virtual_desktops = 7;
 * @return {boolean}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getPinnedToAllVirtualDesktops = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.setPinnedToAllVirtualDesktops = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[6], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.clearPinnedToAllVirtualDesktops = function() {
  return jspb.Message.setOneofField(this, 7, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[6], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.hasPinnedToAllVirtualDesktops = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 virtual_desktop_index = 8;
 * @return {number}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getVirtualDesktopIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.setVirtualDesktopIndex = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[7], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.clearVirtualDesktopIndex = function() {
  return jspb.Message.setOneofField(this, 8, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[7], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.hasVirtualDesktopIndex = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool is_minimized = 9;
 * @return {boolean}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.getIsMinimized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.setIsMinimized = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[8], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.OpenWindowsFilter} returns this
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.clearIsMinimized = function() {
  return jspb.Message.setOneofField(this, 9, proto.virtualdesktop.OpenWindowsFilter.oneofGroups_[8], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.OpenWindowsFilter.prototype.hasIsMinimized = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.QueryOpenWindowsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.QueryOpenWindowsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.QueryOpenWindowsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.QueryOpenWindowsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowsFilter: (f = msg.getWindowsFilter()) && proto.virtualdesktop.OpenWindowsFilter.toObject(includeInstance, f),
    wantedDataSpecifier: (f = msg.getWantedDataSpecifier()) && proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequest}
 */
proto.virtualdesktop.QueryOpenWindowsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.QueryOpenWindowsRequest;
  return proto.virtualdesktop.QueryOpenWindowsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.QueryOpenWindowsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequest}
 */
proto.virtualdesktop.QueryOpenWindowsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.virtualdesktop.OpenWindowsFilter;
      reader.readMessage(value,proto.virtualdesktop.OpenWindowsFilter.deserializeBinaryFromReader);
      msg.setWindowsFilter(value);
      break;
    case 2:
      var value = new proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier;
      reader.readMessage(value,proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.deserializeBinaryFromReader);
      msg.setWantedDataSpecifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.QueryOpenWindowsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.QueryOpenWindowsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.QueryOpenWindowsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.QueryOpenWindowsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowsFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.virtualdesktop.OpenWindowsFilter.serializeBinaryToWriter
    );
  }
  f = message.getWantedDataSpecifier();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional OpenWindowsFilter windows_filter = 1;
 * @return {?proto.virtualdesktop.OpenWindowsFilter}
 */
proto.virtualdesktop.QueryOpenWindowsRequest.prototype.getWindowsFilter = function() {
  return /** @type{?proto.virtualdesktop.OpenWindowsFilter} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.OpenWindowsFilter, 1));
};


/**
 * @param {?proto.virtualdesktop.OpenWindowsFilter|undefined} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequest} returns this
*/
proto.virtualdesktop.QueryOpenWindowsRequest.prototype.setWindowsFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequest} returns this
 */
proto.virtualdesktop.QueryOpenWindowsRequest.prototype.clearWindowsFilter = function() {
  return this.setWindowsFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsRequest.prototype.hasWindowsFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional QueryOpenWindowsRequestWantedDataSpecifier wanted_data_specifier = 2;
 * @return {?proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier}
 */
proto.virtualdesktop.QueryOpenWindowsRequest.prototype.getWantedDataSpecifier = function() {
  return /** @type{?proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier, 2));
};


/**
 * @param {?proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier|undefined} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequest} returns this
*/
proto.virtualdesktop.QueryOpenWindowsRequest.prototype.setWantedDataSpecifier = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequest} returns this
 */
proto.virtualdesktop.QueryOpenWindowsRequest.prototype.clearWantedDataSpecifier = function() {
  return this.setWantedDataSpecifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsRequest.prototype.hasWantedDataSpecifier = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    parentWindowHandle: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    rootParentWindowHandle: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    title: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    processId: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    pinnedToAllVirtualDesktops: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    virtualDesktopIndex: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isMinimized: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier}
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier;
  return proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier}
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setParentWindowHandle(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRootParentWindowHandle(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProcessId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPinnedToAllVirtualDesktops(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVirtualDesktopIndex(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMinimized(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParentWindowHandle();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRootParentWindowHandle();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getProcessId();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPinnedToAllVirtualDesktops();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getVirtualDesktopIndex();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsMinimized();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional bool parent_window_handle = 1;
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.getParentWindowHandle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier} returns this
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.setParentWindowHandle = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool root_parent_window_handle = 2;
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.getRootParentWindowHandle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier} returns this
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.setRootParentWindowHandle = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool title = 3;
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.getTitle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier} returns this
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.setTitle = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool process_id = 4;
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.getProcessId = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier} returns this
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.setProcessId = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool pinned_to_all_virtual_desktops = 5;
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.getPinnedToAllVirtualDesktops = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier} returns this
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.setPinnedToAllVirtualDesktops = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool virtual_desktop_index = 6;
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.getVirtualDesktopIndex = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier} returns this
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.setVirtualDesktopIndex = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_minimized = 7;
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.getIsMinimized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier} returns this
 */
proto.virtualdesktop.QueryOpenWindowsRequestWantedDataSpecifier.prototype.setIsMinimized = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_ = [[2],[3],[4],[5],[6],[7],[8]];

/**
 * @enum {number}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.OptionalParentWindowHandleCase = {
  OPTIONAL_PARENT_WINDOW_HANDLE_NOT_SET: 0,
  PARENT_WINDOW_HANDLE: 2
};

/**
 * @return {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalParentWindowHandleCase}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getOptionalParentWindowHandleCase = function() {
  return /** @type {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalParentWindowHandleCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.OptionalRootParentWindowHandleCase = {
  OPTIONAL_ROOT_PARENT_WINDOW_HANDLE_NOT_SET: 0,
  ROOT_PARENT_WINDOW_HANDLE: 3
};

/**
 * @return {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalRootParentWindowHandleCase}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getOptionalRootParentWindowHandleCase = function() {
  return /** @type {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalRootParentWindowHandleCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[1]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.OptionalTitleCase = {
  OPTIONAL_TITLE_NOT_SET: 0,
  TITLE: 4
};

/**
 * @return {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalTitleCase}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getOptionalTitleCase = function() {
  return /** @type {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalTitleCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[2]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.OptionalProcessIdCase = {
  OPTIONAL_PROCESS_ID_NOT_SET: 0,
  PROCESS_ID: 5
};

/**
 * @return {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalProcessIdCase}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getOptionalProcessIdCase = function() {
  return /** @type {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalProcessIdCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[3]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.OptionalPinnedToAllVirtualDesktopsCase = {
  OPTIONAL_PINNED_TO_ALL_VIRTUAL_DESKTOPS_NOT_SET: 0,
  PINNED_TO_ALL_VIRTUAL_DESKTOPS: 6
};

/**
 * @return {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalPinnedToAllVirtualDesktopsCase}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getOptionalPinnedToAllVirtualDesktopsCase = function() {
  return /** @type {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalPinnedToAllVirtualDesktopsCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[4]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.OptionalVirtualDesktopIndexCase = {
  OPTIONAL_VIRTUAL_DESKTOP_INDEX_NOT_SET: 0,
  VIRTUAL_DESKTOP_INDEX: 7
};

/**
 * @return {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalVirtualDesktopIndexCase}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getOptionalVirtualDesktopIndexCase = function() {
  return /** @type {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalVirtualDesktopIndexCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[5]));
};

/**
 * @enum {number}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.OptionalIsMinimizedCase = {
  OPTIONAL_IS_MINIMIZED_NOT_SET: 0,
  IS_MINIMIZED: 8
};

/**
 * @return {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalIsMinimizedCase}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getOptionalIsMinimizedCase = function() {
  return /** @type {proto.virtualdesktop.QueryOpenWindowsResponse.OptionalIsMinimizedCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[6]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.QueryOpenWindowsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.QueryOpenWindowsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.QueryOpenWindowsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0),
    parentWindowHandle: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rootParentWindowHandle: jspb.Message.getFieldWithDefault(msg, 3, 0),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    processId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pinnedToAllVirtualDesktops: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    virtualDesktopIndex: jspb.Message.getFieldWithDefault(msg, 7, 0),
    isMinimized: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.QueryOpenWindowsResponse;
  return proto.virtualdesktop.QueryOpenWindowsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.QueryOpenWindowsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParentWindowHandle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRootParentWindowHandle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProcessId(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPinnedToAllVirtualDesktops(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVirtualDesktopIndex(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMinimized(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.QueryOpenWindowsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.QueryOpenWindowsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.QueryOpenWindowsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional int64 window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.setWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 parent_window_handle = 2;
 * @return {number}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getParentWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.setParentWindowHandle = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.clearParentWindowHandle = function() {
  return jspb.Message.setOneofField(this, 2, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.hasParentWindowHandle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 root_parent_window_handle = 3;
 * @return {number}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getRootParentWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.setRootParentWindowHandle = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.clearRootParentWindowHandle = function() {
  return jspb.Message.setOneofField(this, 3, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.hasRootParentWindowHandle = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.setTitle = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[2], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.clearTitle = function() {
  return jspb.Message.setOneofField(this, 4, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[2], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 process_id = 5;
 * @return {number}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getProcessId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.setProcessId = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[3], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.clearProcessId = function() {
  return jspb.Message.setOneofField(this, 5, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[3], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.hasProcessId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool pinned_to_all_virtual_desktops = 6;
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getPinnedToAllVirtualDesktops = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.setPinnedToAllVirtualDesktops = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[4], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.clearPinnedToAllVirtualDesktops = function() {
  return jspb.Message.setOneofField(this, 6, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[4], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.hasPinnedToAllVirtualDesktops = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 virtual_desktop_index = 7;
 * @return {number}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getVirtualDesktopIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.setVirtualDesktopIndex = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[5], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.clearVirtualDesktopIndex = function() {
  return jspb.Message.setOneofField(this, 7, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[5], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.hasVirtualDesktopIndex = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool is_minimized = 8;
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.getIsMinimized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.setIsMinimized = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[6], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.QueryOpenWindowsResponse} returns this
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.clearIsMinimized = function() {
  return jspb.Message.setOneofField(this, 8, proto.virtualdesktop.QueryOpenWindowsResponse.oneofGroups_[6], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.QueryOpenWindowsResponse.prototype.hasIsMinimized = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetCurrentVirtualDesktopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetCurrentVirtualDesktopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetCurrentVirtualDesktopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetCurrentVirtualDesktopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetCurrentVirtualDesktopRequest}
 */
proto.virtualdesktop.GetCurrentVirtualDesktopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetCurrentVirtualDesktopRequest;
  return proto.virtualdesktop.GetCurrentVirtualDesktopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetCurrentVirtualDesktopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetCurrentVirtualDesktopRequest}
 */
proto.virtualdesktop.GetCurrentVirtualDesktopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetCurrentVirtualDesktopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetCurrentVirtualDesktopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetCurrentVirtualDesktopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetCurrentVirtualDesktopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetCurrentVirtualDesktopResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetCurrentVirtualDesktopResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetCurrentVirtualDesktopResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetCurrentVirtualDesktopResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentVirtualDesktopIndex: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetCurrentVirtualDesktopResponse}
 */
proto.virtualdesktop.GetCurrentVirtualDesktopResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetCurrentVirtualDesktopResponse;
  return proto.virtualdesktop.GetCurrentVirtualDesktopResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetCurrentVirtualDesktopResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetCurrentVirtualDesktopResponse}
 */
proto.virtualdesktop.GetCurrentVirtualDesktopResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentVirtualDesktopIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetCurrentVirtualDesktopResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetCurrentVirtualDesktopResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetCurrentVirtualDesktopResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetCurrentVirtualDesktopResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentVirtualDesktopIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 current_virtual_desktop_index = 1;
 * @return {number}
 */
proto.virtualdesktop.GetCurrentVirtualDesktopResponse.prototype.getCurrentVirtualDesktopIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.GetCurrentVirtualDesktopResponse} returns this
 */
proto.virtualdesktop.GetCurrentVirtualDesktopResponse.prototype.setCurrentVirtualDesktopIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.CreateVirtualDesktopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.CreateVirtualDesktopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.CreateVirtualDesktopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.CreateVirtualDesktopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    switchToTheCreatedDesktop: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.CreateVirtualDesktopRequest}
 */
proto.virtualdesktop.CreateVirtualDesktopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.CreateVirtualDesktopRequest;
  return proto.virtualdesktop.CreateVirtualDesktopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.CreateVirtualDesktopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.CreateVirtualDesktopRequest}
 */
proto.virtualdesktop.CreateVirtualDesktopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSwitchToTheCreatedDesktop(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.CreateVirtualDesktopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.CreateVirtualDesktopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.CreateVirtualDesktopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.CreateVirtualDesktopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwitchToTheCreatedDesktop();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool switch_to_the_created_desktop = 1;
 * @return {boolean}
 */
proto.virtualdesktop.CreateVirtualDesktopRequest.prototype.getSwitchToTheCreatedDesktop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.CreateVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.CreateVirtualDesktopRequest.prototype.setSwitchToTheCreatedDesktop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.oneofGroups_ = [[14,15]];

/**
 * @enum {number}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.DesktopToRemoveCase = {
  DESKTOP_TO_REMOVE_NOT_SET: 0,
  CURRENT_DESKTOP: 14,
  VIRTUAL_DESKTOP_INDEX: 15
};

/**
 * @return {proto.virtualdesktop.DeleteVirtualDesktopRequest.DesktopToRemoveCase}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.getDesktopToRemoveCase = function() {
  return /** @type {proto.virtualdesktop.DeleteVirtualDesktopRequest.DesktopToRemoveCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.DeleteVirtualDesktopRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.DeleteVirtualDesktopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.DeleteVirtualDesktopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    preferFallingBackToTheLeft: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    currentDesktop: (f = msg.getCurrentDesktop()) && proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.toObject(includeInstance, f),
    virtualDesktopIndex: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.DeleteVirtualDesktopRequest}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.DeleteVirtualDesktopRequest;
  return proto.virtualdesktop.DeleteVirtualDesktopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.DeleteVirtualDesktopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.DeleteVirtualDesktopRequest}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreferFallingBackToTheLeft(value);
      break;
    case 14:
      var value = new proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop;
      reader.readMessage(value,proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.deserializeBinaryFromReader);
      msg.setCurrentDesktop(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVirtualDesktopIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.DeleteVirtualDesktopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.DeleteVirtualDesktopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreferFallingBackToTheLeft();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCurrentDesktop();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
};


/**
 * optional bool prefer_falling_back_to_the_left = 1;
 * @return {boolean}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.getPreferFallingBackToTheLeft = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.DeleteVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.setPreferFallingBackToTheLeft = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional DeleteVirtualDesktopRequestCurrentDesktop current_desktop = 14;
 * @return {?proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.getCurrentDesktop = function() {
  return /** @type{?proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop, 14));
};


/**
 * @param {?proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop|undefined} value
 * @return {!proto.virtualdesktop.DeleteVirtualDesktopRequest} returns this
*/
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.setCurrentDesktop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.virtualdesktop.DeleteVirtualDesktopRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.DeleteVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.clearCurrentDesktop = function() {
  return this.setCurrentDesktop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.hasCurrentDesktop = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 virtual_desktop_index = 15;
 * @return {number}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.getVirtualDesktopIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.DeleteVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.setVirtualDesktopIndex = function(value) {
  return jspb.Message.setOneofField(this, 15, proto.virtualdesktop.DeleteVirtualDesktopRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.DeleteVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.clearVirtualDesktopIndex = function() {
  return jspb.Message.setOneofField(this, 15, proto.virtualdesktop.DeleteVirtualDesktopRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequest.prototype.hasVirtualDesktopIndex = function() {
  return jspb.Message.getField(this, 15) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop;
  return proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.DeleteVirtualDesktopRequestCurrentDesktop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.oneofGroups_ = [[13,14,15]];

/**
 * @enum {number}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.ChangeCase = {
  CHANGE_NOT_SET: 0,
  WANTED_VIRTUAL_DESKTOP_INDEX: 13,
  CHANGE_RIGHT: 14,
  CHANGE_LEFT: 15
};

/**
 * @return {proto.virtualdesktop.ChangeVirtualDesktopRequest.ChangeCase}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.getChangeCase = function() {
  return /** @type {proto.virtualdesktop.ChangeVirtualDesktopRequest.ChangeCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.ChangeVirtualDesktopRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.ChangeVirtualDesktopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.ChangeVirtualDesktopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    smoothChange: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    wantedVirtualDesktopIndex: jspb.Message.getFieldWithDefault(msg, 13, 0),
    changeRight: jspb.Message.getFieldWithDefault(msg, 14, 0),
    changeLeft: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.ChangeVirtualDesktopRequest}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.ChangeVirtualDesktopRequest;
  return proto.virtualdesktop.ChangeVirtualDesktopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.ChangeVirtualDesktopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.ChangeVirtualDesktopRequest}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSmoothChange(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWantedVirtualDesktopIndex(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChangeRight(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChangeLeft(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.ChangeVirtualDesktopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.ChangeVirtualDesktopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmoothChange();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
};


/**
 * optional bool smooth_change = 1;
 * @return {boolean}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.getSmoothChange = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.ChangeVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.setSmoothChange = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 wanted_virtual_desktop_index = 13;
 * @return {number}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.getWantedVirtualDesktopIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.ChangeVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.setWantedVirtualDesktopIndex = function(value) {
  return jspb.Message.setOneofField(this, 13, proto.virtualdesktop.ChangeVirtualDesktopRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.ChangeVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.clearWantedVirtualDesktopIndex = function() {
  return jspb.Message.setOneofField(this, 13, proto.virtualdesktop.ChangeVirtualDesktopRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.hasWantedVirtualDesktopIndex = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 change_right = 14;
 * @return {number}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.getChangeRight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.ChangeVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.setChangeRight = function(value) {
  return jspb.Message.setOneofField(this, 14, proto.virtualdesktop.ChangeVirtualDesktopRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.ChangeVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.clearChangeRight = function() {
  return jspb.Message.setOneofField(this, 14, proto.virtualdesktop.ChangeVirtualDesktopRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.hasChangeRight = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 change_left = 15;
 * @return {number}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.getChangeLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.ChangeVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.setChangeLeft = function(value) {
  return jspb.Message.setOneofField(this, 15, proto.virtualdesktop.ChangeVirtualDesktopRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.ChangeVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.clearChangeLeft = function() {
  return jspb.Message.setOneofField(this, 15, proto.virtualdesktop.ChangeVirtualDesktopRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.ChangeVirtualDesktopRequest.prototype.hasChangeLeft = function() {
  return jspb.Message.getField(this, 15) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopChangedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopChangedRequest}
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.ListenForVirtualDesktopChangedRequest;
  return proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopChangedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopChangedRequest}
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopChangedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopChangedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    oldCurrentVirtualDesktopIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    newCurrentVirtualDesktopIndex: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopChangedResponse}
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.ListenForVirtualDesktopChangedResponse;
  return proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopChangedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopChangedResponse}
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOldCurrentVirtualDesktopIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNewCurrentVirtualDesktopIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopChangedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOldCurrentVirtualDesktopIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getNewCurrentVirtualDesktopIndex();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 old_current_virtual_desktop_index = 1;
 * @return {number}
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.prototype.getOldCurrentVirtualDesktopIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopChangedResponse} returns this
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.prototype.setOldCurrentVirtualDesktopIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 new_current_virtual_desktop_index = 2;
 * @return {number}
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.prototype.getNewCurrentVirtualDesktopIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopChangedResponse} returns this
 */
proto.virtualdesktop.ListenForVirtualDesktopChangedResponse.prototype.setNewCurrentVirtualDesktopIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest}
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest;
  return proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest}
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    indexOfDeletedVirtualDesktop: jspb.Message.getFieldWithDefault(msg, 1, 0),
    indexOfFallbackVirtualDesktop: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse}
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse;
  return proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse}
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndexOfDeletedVirtualDesktop(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndexOfFallbackVirtualDesktop(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndexOfDeletedVirtualDesktop();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIndexOfFallbackVirtualDesktop();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 index_of_deleted_virtual_desktop = 1;
 * @return {number}
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.prototype.getIndexOfDeletedVirtualDesktop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse} returns this
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.prototype.setIndexOfDeletedVirtualDesktop = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 index_of_fallback_virtual_desktop = 2;
 * @return {number}
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.prototype.getIndexOfFallbackVirtualDesktop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse} returns this
 */
proto.virtualdesktop.ListenForVirtualDesktopDeletedResponse.prototype.setIndexOfFallbackVirtualDesktop = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest}
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest;
  return proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest}
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    indexOfCreatedVirtualDesktop: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse}
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse;
  return proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse}
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndexOfCreatedVirtualDesktop(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndexOfCreatedVirtualDesktop();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 index_of_created_virtual_desktop = 1;
 * @return {number}
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.prototype.getIndexOfCreatedVirtualDesktop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse} returns this
 */
proto.virtualdesktop.ListenForVirtualDesktopCreatedResponse.prototype.setIndexOfCreatedVirtualDesktop = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stopWindowFlashing: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest}
 */
proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest;
  return proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest}
 */
proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStopWindowFlashing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStopWindowFlashing();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest} returns this
 */
proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.prototype.setWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool stop_window_flashing = 2;
 * @return {boolean}
 */
proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.prototype.getStopWindowFlashing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest} returns this
 */
proto.virtualdesktop.PinWindowToAllVirtualDesktopsRequest.prototype.setStopWindowFlashing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.ShouldMoveAsWellCase = {
  SHOULD_MOVE_AS_WELL_NOT_SET: 0,
  JUST_UNPIN: 2,
  MOVE_IF_UNPINNED: 3,
  MOVE_UNCONDITIONALLY: 4
};

/**
 * @return {proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.ShouldMoveAsWellCase}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.getShouldMoveAsWellCase = function() {
  return /** @type {proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.ShouldMoveAsWellCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0),
    justUnpin: (f = msg.getJustUnpin()) && proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.toObject(includeInstance, f),
    moveIfUnpinned: (f = msg.getMoveIfUnpinned()) && proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.toObject(includeInstance, f),
    moveUnconditionally: (f = msg.getMoveUnconditionally()) && proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest;
  return proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    case 2:
      var value = new proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin;
      reader.readMessage(value,proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.deserializeBinaryFromReader);
      msg.setJustUnpin(value);
      break;
    case 3:
      var value = new proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned;
      reader.readMessage(value,proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.deserializeBinaryFromReader);
      msg.setMoveIfUnpinned(value);
      break;
    case 4:
      var value = new proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally;
      reader.readMessage(value,proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.deserializeBinaryFromReader);
      msg.setMoveUnconditionally(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getJustUnpin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.serializeBinaryToWriter
    );
  }
  f = message.getMoveIfUnpinned();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.serializeBinaryToWriter
    );
  }
  f = message.getMoveUnconditionally();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest} returns this
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.setWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional UnpinWindowFromAllVirtualDesktopsRequestJustUnpin just_unpin = 2;
 * @return {?proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.getJustUnpin = function() {
  return /** @type{?proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin, 2));
};


/**
 * @param {?proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin|undefined} value
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest} returns this
*/
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.setJustUnpin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest} returns this
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.clearJustUnpin = function() {
  return this.setJustUnpin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.hasJustUnpin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned move_if_unpinned = 3;
 * @return {?proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.getMoveIfUnpinned = function() {
  return /** @type{?proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned, 3));
};


/**
 * @param {?proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned|undefined} value
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest} returns this
*/
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.setMoveIfUnpinned = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest} returns this
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.clearMoveIfUnpinned = function() {
  return this.setMoveIfUnpinned(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.hasMoveIfUnpinned = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally move_unconditionally = 4;
 * @return {?proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.getMoveUnconditionally = function() {
  return /** @type{?proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally, 4));
};


/**
 * @param {?proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally|undefined} value
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest} returns this
*/
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.setMoveUnconditionally = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest} returns this
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.clearMoveUnconditionally = function() {
  return this.setMoveUnconditionally(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequest.prototype.hasMoveUnconditionally = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin;
  return proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestJustUnpin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetVirtualDesktopIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    moveOptions: (f = msg.getMoveOptions()) && proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned;
  return proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetVirtualDesktopIndex(value);
      break;
    case 2:
      var value = new proto.virtualdesktop.MoveWindowToVirtualDesktopOptions;
      reader.readMessage(value,proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.deserializeBinaryFromReader);
      msg.setMoveOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetVirtualDesktopIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMoveOptions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 target_virtual_desktop_index = 1;
 * @return {number}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.prototype.getTargetVirtualDesktopIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned} returns this
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.prototype.setTargetVirtualDesktopIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MoveWindowToVirtualDesktopOptions move_options = 2;
 * @return {?proto.virtualdesktop.MoveWindowToVirtualDesktopOptions}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.prototype.getMoveOptions = function() {
  return /** @type{?proto.virtualdesktop.MoveWindowToVirtualDesktopOptions} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.MoveWindowToVirtualDesktopOptions, 2));
};


/**
 * @param {?proto.virtualdesktop.MoveWindowToVirtualDesktopOptions|undefined} value
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned} returns this
*/
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.prototype.setMoveOptions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned} returns this
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.prototype.clearMoveOptions = function() {
  return this.setMoveOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveIfUnpinned.prototype.hasMoveOptions = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetVirtualDesktopIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    moveOptions: (f = msg.getMoveOptions()) && proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally;
  return proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetVirtualDesktopIndex(value);
      break;
    case 2:
      var value = new proto.virtualdesktop.MoveWindowToVirtualDesktopOptions;
      reader.readMessage(value,proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.deserializeBinaryFromReader);
      msg.setMoveOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetVirtualDesktopIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMoveOptions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 target_virtual_desktop_index = 1;
 * @return {number}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.prototype.getTargetVirtualDesktopIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally} returns this
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.prototype.setTargetVirtualDesktopIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MoveWindowToVirtualDesktopOptions move_options = 2;
 * @return {?proto.virtualdesktop.MoveWindowToVirtualDesktopOptions}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.prototype.getMoveOptions = function() {
  return /** @type{?proto.virtualdesktop.MoveWindowToVirtualDesktopOptions} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.MoveWindowToVirtualDesktopOptions, 2));
};


/**
 * @param {?proto.virtualdesktop.MoveWindowToVirtualDesktopOptions|undefined} value
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally} returns this
*/
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.prototype.setMoveOptions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally} returns this
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.prototype.clearMoveOptions = function() {
  return this.setMoveOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.UnpinWindowFromAllVirtualDesktopsRequestMoveUnconditionally.prototype.hasMoveOptions = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.oneofGroups_ = [[13,14,15]];

/**
 * @enum {number}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.ChangeCase = {
  CHANGE_NOT_SET: 0,
  WANTED_VIRTUAL_DESKTOP_INDEX: 13,
  CHANGE_RIGHT: 14,
  CHANGE_LEFT: 15
};

/**
 * @return {proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.ChangeCase}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.getChangeCase = function() {
  return /** @type {proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.ChangeCase} */(jspb.Message.computeOneofCase(this, proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0),
    moveOptions: (f = msg.getMoveOptions()) && proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.toObject(includeInstance, f),
    wantedVirtualDesktopIndex: jspb.Message.getFieldWithDefault(msg, 13, 0),
    changeRight: jspb.Message.getFieldWithDefault(msg, 14, 0),
    changeLeft: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.MoveWindowToVirtualDesktopRequest;
  return proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    case 2:
      var value = new proto.virtualdesktop.MoveWindowToVirtualDesktopOptions;
      reader.readMessage(value,proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.deserializeBinaryFromReader);
      msg.setMoveOptions(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWantedVirtualDesktopIndex(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChangeRight(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChangeLeft(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMoveOptions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
};


/**
 * optional int64 window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.setWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MoveWindowToVirtualDesktopOptions move_options = 2;
 * @return {?proto.virtualdesktop.MoveWindowToVirtualDesktopOptions}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.getMoveOptions = function() {
  return /** @type{?proto.virtualdesktop.MoveWindowToVirtualDesktopOptions} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.MoveWindowToVirtualDesktopOptions, 2));
};


/**
 * @param {?proto.virtualdesktop.MoveWindowToVirtualDesktopOptions|undefined} value
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} returns this
*/
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.setMoveOptions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.clearMoveOptions = function() {
  return this.setMoveOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.hasMoveOptions = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 wanted_virtual_desktop_index = 13;
 * @return {number}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.getWantedVirtualDesktopIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.setWantedVirtualDesktopIndex = function(value) {
  return jspb.Message.setOneofField(this, 13, proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.clearWantedVirtualDesktopIndex = function() {
  return jspb.Message.setOneofField(this, 13, proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.hasWantedVirtualDesktopIndex = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 change_right = 14;
 * @return {number}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.getChangeRight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.setChangeRight = function(value) {
  return jspb.Message.setOneofField(this, 14, proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.clearChangeRight = function() {
  return jspb.Message.setOneofField(this, 14, proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.hasChangeRight = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 change_left = 15;
 * @return {number}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.getChangeLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.setChangeLeft = function(value) {
  return jspb.Message.setOneofField(this, 15, proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.clearChangeLeft = function() {
  return jspb.Message.setOneofField(this, 15, proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopRequest.prototype.hasChangeLeft = function() {
  return jspb.Message.getField(this, 15) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.MoveWindowToVirtualDesktopOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    dontMoveIfAlreadyAtTarget: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    stopWindowFlashing: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopOptions}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.MoveWindowToVirtualDesktopOptions;
  return proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.MoveWindowToVirtualDesktopOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopOptions}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDontMoveIfAlreadyAtTarget(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStopWindowFlashing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.MoveWindowToVirtualDesktopOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDontMoveIfAlreadyAtTarget();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getStopWindowFlashing();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool dont_move_if_already_at_target = 1;
 * @return {boolean}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.prototype.getDontMoveIfAlreadyAtTarget = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopOptions} returns this
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.prototype.setDontMoveIfAlreadyAtTarget = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool stop_window_flashing = 2;
 * @return {boolean}
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.prototype.getStopWindowFlashing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.MoveWindowToVirtualDesktopOptions} returns this
 */
proto.virtualdesktop.MoveWindowToVirtualDesktopOptions.prototype.setStopWindowFlashing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest}
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest;
  return proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest}
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest} returns this
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexRequest.prototype.setWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    virtualDesktopIndex: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse}
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse;
  return proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse}
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVirtualDesktopIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVirtualDesktopIndex();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 virtual_desktop_index = 1;
 * @return {number}
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.prototype.getVirtualDesktopIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse} returns this
 */
proto.virtualdesktop.GetWindowVirtualDesktopIndexResponse.prototype.setVirtualDesktopIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowHandle: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest}
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest;
  return proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest}
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWindowHandle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowHandle();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 window_handle = 1;
 * @return {number}
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.prototype.getWindowHandle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest} returns this
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopRequest.prototype.setWindowHandle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isPinned: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse}
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse;
  return proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse}
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPinned(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsPinned();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_pinned = 1;
 * @return {boolean}
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.prototype.getIsPinned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse} returns this
 */
proto.virtualdesktop.GetWindowIsPinnedToVirtualDesktopResponse.prototype.setIsPinned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.virtualdesktop.StopWindowFlashingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.virtualdesktop.StopWindowFlashingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.virtualdesktop.StopWindowFlashingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.StopWindowFlashingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowsFilter: (f = msg.getWindowsFilter()) && proto.virtualdesktop.OpenWindowsFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.virtualdesktop.StopWindowFlashingRequest}
 */
proto.virtualdesktop.StopWindowFlashingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.virtualdesktop.StopWindowFlashingRequest;
  return proto.virtualdesktop.StopWindowFlashingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.virtualdesktop.StopWindowFlashingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.virtualdesktop.StopWindowFlashingRequest}
 */
proto.virtualdesktop.StopWindowFlashingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.virtualdesktop.OpenWindowsFilter;
      reader.readMessage(value,proto.virtualdesktop.OpenWindowsFilter.deserializeBinaryFromReader);
      msg.setWindowsFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.virtualdesktop.StopWindowFlashingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.virtualdesktop.StopWindowFlashingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.virtualdesktop.StopWindowFlashingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.virtualdesktop.StopWindowFlashingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowsFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.virtualdesktop.OpenWindowsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional OpenWindowsFilter windows_filter = 1;
 * @return {?proto.virtualdesktop.OpenWindowsFilter}
 */
proto.virtualdesktop.StopWindowFlashingRequest.prototype.getWindowsFilter = function() {
  return /** @type{?proto.virtualdesktop.OpenWindowsFilter} */ (
    jspb.Message.getWrapperField(this, proto.virtualdesktop.OpenWindowsFilter, 1));
};


/**
 * @param {?proto.virtualdesktop.OpenWindowsFilter|undefined} value
 * @return {!proto.virtualdesktop.StopWindowFlashingRequest} returns this
*/
proto.virtualdesktop.StopWindowFlashingRequest.prototype.setWindowsFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.virtualdesktop.StopWindowFlashingRequest} returns this
 */
proto.virtualdesktop.StopWindowFlashingRequest.prototype.clearWindowsFilter = function() {
  return this.setWindowsFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.virtualdesktop.StopWindowFlashingRequest.prototype.hasWindowsFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.virtualdesktop.ShellEventType = {
  UNKNOWN: 0,
  WINDOW_CREATED: 1,
  WINDOW_DESTROYED: 2,
  ACTIVATE_SHELL_WINDOW: 3,
  WINDOW_ACTIVATED: 4,
  GET_MIN_RECT: 5,
  REDRAW: 6,
  TASK_MAN: 7,
  LANGUAGE: 8,
  SYS_MENU: 9,
  END_TASK: 10,
  ACCESSIBILITY_STATE: 11,
  APP_COMMAND: 12,
  WINDOW_REPLACED: 13,
  WINDOW_REPLACING: 14,
  MONITOR_CHANGED: 16,
  RUDE_APP_ACTIVATED: 17,
  FLASH: 18
};

goog.object.extend(exports, proto.virtualdesktop);
