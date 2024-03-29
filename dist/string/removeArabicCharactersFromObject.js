"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveArabicCharactersFromObject = void 0;
function RemoveArabicCharactersFromObject(input) {
    for (const prop in input) {
        if (typeof input[prop] === 'string') {
            input[prop] = input[prop].trim();
            input[prop] = input[prop].replace(/[ی,ي]/g, 'ی');
            input[prop] = input[prop].replace(/[ک,ك]/g, 'ک');
        }
    }
    return input;
}
exports.RemoveArabicCharactersFromObject = RemoveArabicCharactersFromObject;
//# sourceMappingURL=removeArabicCharactersFromObject.js.map