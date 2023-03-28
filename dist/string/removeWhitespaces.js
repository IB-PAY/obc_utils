"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveWhitespaces = void 0;
function RemoveWhitespaces(input) {
    if (typeof input === 'string') {
        input = input.replace(/[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff,\u2000,\u2001,\u2002,\u2003,\u2004,\u2005,\u2006,\u2007,\u2008,\u2009,\u200a,\u200b,\u200c,\u200d,\u200e,\u200f]/g, '');
    }
    return input;
}
exports.RemoveWhitespaces = RemoveWhitespaces;
//# sourceMappingURL=removeWhitespaces.js.map