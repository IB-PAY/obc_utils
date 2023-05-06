"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logFormat = exports.allowRemoteLogStorage = void 0;
const process_1 = require("process");
exports.allowRemoteLogStorage = process_1.env.REMOTE_ERROR_LOG_STORAGE === 'true';
exports.logFormat = process_1.env.LOG_FORMAT || 'json';
//# sourceMappingURL=config.js.map