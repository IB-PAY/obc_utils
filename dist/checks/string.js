"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJsonString = exports.stringSimilarityPercent = exports.isEqualNormalizedString = exports.isDateString = exports.isStringFull = exports.isString = void 0;
const checks_1 = require("./checks");
const normalizeStringForCompare_1 = require("../string/normalizeStringForCompare");
const isString = (val) => typeof val === 'string';
exports.isString = isString;
const isStringFull = (val) => (0, exports.isString)(val) && (0, checks_1.hasLength)(val);
exports.isStringFull = isStringFull;
const isDateString = (val) => (0, exports.isStringFull)(val) && /^\d{4}-[01]\d-[0-3]\d(?:T[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[-+][0-2]\d(?::?[0-5]\d)?)?)?$/g.test(val);
exports.isDateString = isDateString;
const isEqualNormalizedString = (val, eq) => (0, normalizeStringForCompare_1.normalizeStringForCompare)(val) === (0, normalizeStringForCompare_1.normalizeStringForCompare)(eq);
exports.isEqualNormalizedString = isEqualNormalizedString;
const stringSimilarityPercent = (val, eq) => ((0, exports.isEqualNormalizedString)(val, eq) ? 100 : 0);
exports.stringSimilarityPercent = stringSimilarityPercent;
const isJsonString = (str) => {
    let result = false;
    try {
        const obj = JSON.parse(str);
        if (obj && typeof obj === 'object') {
            result = true;
        }
    }
    catch (e) {
        result = false;
    }
    return result;
};
exports.isJsonString = isJsonString;
//# sourceMappingURL=string.js.map