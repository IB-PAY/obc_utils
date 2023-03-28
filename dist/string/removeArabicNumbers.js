"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveArabicNumbers = void 0;
function RemoveArabicNumbers(input) {
    if (typeof input === 'string') {
        input = input.trim();
        input = input
            .replace(/۰/g, '0')
            .replace(/۱/g, '1')
            .replace(/۲/g, '2')
            .replace(/۳/g, '3')
            .replace(/۴/g, '4')
            .replace(/۵/g, '5')
            .replace(/۶/g, '6')
            .replace(/۷/g, '7')
            .replace(/۸/g, '8')
            .replace(/۹/g, '9');
    }
    return input;
}
exports.RemoveArabicNumbers = RemoveArabicNumbers;
//# sourceMappingURL=removeArabicNumbers.js.map