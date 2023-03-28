"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimString = void 0;
function trimString(name) {
    try {
        if (name == null) {
            return '';
        }
        return name.trim();
    }
    catch (error) {
        console.log('trimString error : ', error);
    }
}
exports.trimString = trimString;
//# sourceMappingURL=trimString.js.map