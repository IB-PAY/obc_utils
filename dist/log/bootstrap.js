"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerBootstrap = exports.allowRemoteLogStorage = void 0;
const process_1 = require("process");
const Sentry = require("@sentry/node");
exports.allowRemoteLogStorage = process_1.env.REMOTE_ERROR_LOG_STORAGE === 'true';
let sentryAddress = process_1.env.SENTRY_URL;
function loggerBootstrap() {
    if (exports.allowRemoteLogStorage) {
        if (sentryAddress) {
            Sentry.init({
                dsn: sentryAddress,
            });
        }
        else {
            console.log("[INFO] Sentry Address is not set. Sentry will not be enabled.");
        }
        console.log("[INFO] Remote debuging <Sentry> Enabled");
    }
    else {
        console.log("[INFO] Remote debuging <Sentry> Disabled");
    }
}
exports.loggerBootstrap = loggerBootstrap;
//# sourceMappingURL=bootstrap.js.map