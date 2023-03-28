"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveArabicCharacters = void 0;
function RemoveArabicCharacters(input) {
    if (typeof input === 'string') {
        input = input.trim();
        input = input.replace(/[ی,ي]/g, 'ی');
        input = input.replace(/[ک,ك]/g, 'ک');
    }
    return input;
}
exports.RemoveArabicCharacters = RemoveArabicCharacters;
//# sourceMappingURL=removeArabicCharacters.js.map