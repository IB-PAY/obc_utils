"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnhandledException = void 0;
class UnhandledException {
    constructor(className, func, error, date = new Date()) {
        this.className = className;
        this.func = func;
        this.error = error;
        this.date = date;
    }
}
exports.UnhandledException = UnhandledException;
//# sourceMappingURL=unhandledError.js.map