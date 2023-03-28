"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Debug = exports.Info = exports.RequestMeta = void 0;
class RequestMeta {
}
exports.RequestMeta = RequestMeta;
function Info(message, meta) {
    let msg = '';
    if (meta === null || meta === void 0 ? void 0 : meta.TID) {
        msg += `[INFO] tid=${meta.TID} ${message}`;
    }
    else {
        msg += `[INFO] ${message}`;
    }
    console.log(msg);
}
exports.Info = Info;
function Debug(message, data, meta) {
    let payload = {
        message,
        TID: meta === null || meta === void 0 ? void 0 : meta.TID,
        data,
    };
    console.log(JSON.stringify(payload));
}
exports.Debug = Debug;
function Error(message, errorObject, meta) {
    let msg = '';
    if (meta === null || meta === void 0 ? void 0 : meta.TID) {
        msg += `[ERROR] tid=${meta.TID} ${message}`;
    }
    else {
        msg += `[ERROR] ${message}`;
    }
    msg += ` ` + JSON.stringify(errorObject);
    console.log(msg);
}
exports.Error = Error;
//# sourceMappingURL=logger.js.map