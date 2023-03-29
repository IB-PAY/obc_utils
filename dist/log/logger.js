"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.ErrorRequestMeta = exports.Debug = exports.DebugRequestMeta = exports.Info = exports.InfoRequestMeta = void 0;
const Sentry = require("@sentry/node");
const bootstrap_1 = require("./bootstrap");
(0, bootstrap_1.loggerBootstrap)();
class InfoRequestMeta {
}
exports.InfoRequestMeta = InfoRequestMeta;
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
class DebugRequestMeta {
}
exports.DebugRequestMeta = DebugRequestMeta;
function Debug(message, data, meta) {
    let payload = {
        message,
        TID: meta === null || meta === void 0 ? void 0 : meta.TID,
        data,
        meta
    };
    console.log(JSON.stringify(payload));
}
exports.Debug = Debug;
class ErrorRequestMeta {
}
exports.ErrorRequestMeta = ErrorRequestMeta;
function Error(message, errorObject, meta) {
    let msg = '';
    if (meta === null || meta === void 0 ? void 0 : meta.TID) {
        msg += `[ERROR] tid=${(meta === null || meta === void 0 ? void 0 : meta.TID) || "*"} ${message}`;
    }
    else {
        msg += `[ERROR] ${message}`;
    }
    if (Object.keys(errorObject).length >= 1) {
        msg += ` ` + JSON.stringify(errorObject);
    }
    if (errorObject === null || errorObject === void 0 ? void 0 : errorObject.message) {
        msg += ` ` + errorToJson(errorObject);
    }
    if (bootstrap_1.allowRemoteLogStorage) {
        const jsonError = {
            name: errorObject.name,
            message: errorObject.message,
            stack: errorObject.stack,
            sentry: true
        };
        Sentry.captureMessage(JSON.stringify(jsonError));
    }
    console.log(msg);
}
exports.Error = Error;
function errorToJson(error) {
    var obj = {
        name: error.name,
        message: error.message,
        stack: error.stack
    };
    return JSON.stringify(obj);
}
//# sourceMappingURL=logger.js.map