"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyName = exports.objKeys = void 0;
const objKeys = (val) => Object.keys(val);
exports.objKeys = objKeys;
const getPropertyName = (obj, expression) => {
    try {
        const res = {};
        Object.keys(obj).map((k) => {
            res[k] = () => k;
        });
        return expression(res)();
    }
    catch (e) {
        throw new Error(`${expression} not found!`);
    }
};
exports.getPropertyName = getPropertyName;
//# sourceMappingURL=objKeys.js.map