"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasValue = exports.isIn = exports.containsAll = exports.isArrayStrings = exports.isArrayFull = void 0;
const checks_1 = require("./checks");
const string_1 = require("./string");
const isArrayFull = (val) => Array.isArray(val) && (0, checks_1.hasLength)(val);
exports.isArrayFull = isArrayFull;
const isArrayStrings = (val) => (0, exports.isArrayFull)(val) && val.every((v) => (0, string_1.isStringFull)(v));
exports.isArrayStrings = isArrayStrings;
const containsAll = (arr1, arr2) => arr1.every((element) => arr2.includes(element));
exports.containsAll = containsAll;
const isIn = (val, arr = []) => (0, exports.isArrayFull)(arr) && arr.some((o) => (0, checks_1.isEqual)(val, o));
exports.isIn = isIn;
const hasValue = (val) => (0, exports.isArrayFull)(val) ? val.every((o) => (0, checks_1.isValue)(o)) : (0, checks_1.isValue)(val);
exports.hasValue = hasValue;
//# sourceMappingURL=array.js.map