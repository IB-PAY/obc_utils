"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(_a) {
        var { message } = _a, args = __rest(_a, ["message"]);
        super();
        this.message = message;
        this.name = this.constructor.name;
        for (const arg in args) {
            this[arg] = args[arg];
        }
        this.date = new Date();
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=customError.js.map