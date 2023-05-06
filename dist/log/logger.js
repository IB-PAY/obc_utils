"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.ErrorRequestMeta = exports.Debug = exports.DebugRequestMeta = exports.Info = exports.InfoRequestMeta = exports.loggingOptions = void 0;
const os_1 = require("os");
const Sentry = require("@sentry/node");
const bootstrap_1 = require("./bootstrap");
const config_1 = require("./config");
(0, bootstrap_1.loggerBootstrap)();
class loggingOptions {
}
exports.loggingOptions = loggingOptions;
class InfoRequestMeta {
}
exports.InfoRequestMeta = InfoRequestMeta;
function Info(message, meta) {
    const jsonError = {
        level: "INFO",
        TID: meta === null || meta === void 0 ? void 0 : meta.TID,
        message,
        meta,
        os: (0, os_1.hostname)(),
        os_release: (0, os_1.release)(),
        date: new Date().toISOString()
    };
    logging(jsonError);
}
exports.Info = Info;
class DebugRequestMeta {
}
exports.DebugRequestMeta = DebugRequestMeta;
function Debug(message, debugValues, meta) {
    let debugPayload = {
        level: "DEBUG",
        TID: (meta === null || meta === void 0 ? void 0 : meta.TID) || (debugValues === null || debugValues === void 0 ? void 0 : debugValues.TID),
        message,
        debug: debugValues,
        os: (0, os_1.hostname)(),
        os_release: (0, os_1.release)(),
        date: new Date().toISOString()
    };
    logging(debugPayload);
}
exports.Debug = Debug;
class ErrorRequestMeta {
}
exports.ErrorRequestMeta = ErrorRequestMeta;
function Error(message, errorOptions, meta) {
    const jsonError = Object.assign(Object.assign({ level: "ERROR", TID: (meta === null || meta === void 0 ? void 0 : meta.TID) || (errorOptions === null || errorOptions === void 0 ? void 0 : errorOptions.TID), message }, errorOptions), { meta, os: (0, os_1.hostname)(), os_release: (0, os_1.release)(), date: new Date().toISOString() });
    logging(jsonError);
}
exports.Error = Error;
function logging(logObject) {
    if (config_1.allowRemoteLogStorage) {
        Sentry.captureMessage(JSON.stringify(logObject));
    }
    if (config_1.logFormat !== 'json') {
        let message = `[${logObject.level}] ${logObject.message}`;
        console.log(message);
    }
    else {
        console.log(JSON.stringify(logObject));
    }
}
//# sourceMappingURL=logger.js.map