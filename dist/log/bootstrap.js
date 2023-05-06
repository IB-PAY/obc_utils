"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerBootstrap = void 0;
const process_1 = require("process");
const Sentry = require("@sentry/node");
const config_1 = require("./config");
let sentryAddress = process_1.env.SENTRY_URL;
function loggerBootstrap() {
    if (config_1.allowRemoteLogStorage) {
        if (sentryAddress) {
            Sentry.init({
                dsn: sentryAddress,
            });
        }
        else {
            console.log("[INFO] Sentry Address is not set. Sentry will not be enabled.");
        }
        console.log("[INFO] Remote debugging <Sentry> Enabled");
    }
    else {
        console.log("[INFO] Remote debugging <Sentry> Disabled");
    }
}
exports.loggerBootstrap = loggerBootstrap;
//# sourceMappingURL=bootstrap.js.map