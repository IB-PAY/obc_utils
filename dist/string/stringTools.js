"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashedCharacters = exports.getCapitalizeCharacters = exports.capitalizeFirstLetter = void 0;
function getCapitalizeCharacters(input) {
    return input.split(/(?=[A-Z])/).reduce((a, b) => a + b[0], '');
}
exports.getCapitalizeCharacters = getCapitalizeCharacters;
function getDashedCharacters(input) {
    return input.split(/(?=[-,_])/g).reduce((a, b) => a + b.replace(/[-,_]/g, '')[0], '');
}
exports.getDashedCharacters = getDashedCharacters;
function capitalizeFirstLetter(input) {
    return `${input.charAt(0).toUpperCase()}${input.slice(1)}`;
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
//# sourceMappingURL=stringTools.js.map