"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = exports.isValue = exports.isDate = exports.isNumeric = exports.isBoolean = exports.isTrueFull = exports.isTrue = exports.isFalse = exports.isEqual = exports.isNumber = exports.isObjectFull = exports.isObject = exports.hasLength = exports.isNill = exports.isNil = exports.isNull = exports.isUndefined = void 0;
const objKeys_1 = require("../object/objKeys");
const string_1 = require("./string");
const isUndefined = (val) => typeof val === 'undefined';
exports.isUndefined = isUndefined;
const isNull = (val) => val === null;
exports.isNull = isNull;
const isNil = (val) => (0, exports.isUndefined)(val) || (0, exports.isNull)(val);
exports.isNil = isNil;
const isNill = (...args) => args.some((val) => (0, exports.isNil)(val));
exports.isNill = isNill;
const hasLength = (val) => val.length > 0;
exports.hasLength = hasLength;
const isObject = (val) => typeof val === 'object' && !(0, exports.isNull)(val);
exports.isObject = isObject;
const isObjectFull = (val) => (0, exports.isObject)(val) && (0, exports.hasLength)((0, objKeys_1.objKeys)(val));
exports.isObjectFull = isObjectFull;
const isNumber = (val) => typeof val === 'number' && !Number.isNaN(val) && Number.isFinite(val);
exports.isNumber = isNumber;
const isEqual = (val, eq) => val === eq;
exports.isEqual = isEqual;
const isFalse = (val) => val === false;
exports.isFalse = isFalse;
const isTrue = (val) => val === true;
exports.isTrue = isTrue;
const isTrueFull = (val) => val === true || val === 'true';
exports.isTrueFull = isTrueFull;
const isBoolean = (val) => typeof val === 'boolean';
exports.isBoolean = isBoolean;
const isNumeric = (val) => /^[+-]?([0-9]*[.])?[0-9]+$/.test(val);
exports.isNumeric = isNumeric;
const isDate = (val) => val instanceof Date;
exports.isDate = isDate;
const isValue = (val) => (0, string_1.isStringFull)(val) || (0, exports.isNumber)(val) || (0, exports.isBoolean)(val) || (0, exports.isDate)(val);
exports.isValue = isValue;
const isFunction = (val) => typeof val === 'function';
exports.isFunction = isFunction;
//# sourceMappingURL=checks.js.map