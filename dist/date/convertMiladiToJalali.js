"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMiladiDateWithLocalTimeZone = exports.getMiladiDateWithLocalTime = exports.convertMiladiToJalali = void 0;
const moment = require("jalali-moment");
function convertMiladiToJalali(input) {
    const defaultOptions = {
        format: 'YYYY/MM/DD'
    }, options = Object.assign(Object.assign({}, defaultOptions), input);
    return moment(options.miladiDate, 'YYYY-MM-DD').locale('fa').format(options.format);
}
exports.convertMiladiToJalali = convertMiladiToJalali;
function getMiladiDateWithLocalTime(input) {
    const defaultOptions = {
        format: 'YYYY-MM-DD hh:mm:ss'
    }, options = Object.assign(Object.assign({}, defaultOptions), input);
    return moment(options.miladiDate, 'YYYY-MM-DD').add(3.5, 'hour').format(options.format);
}
exports.getMiladiDateWithLocalTime = getMiladiDateWithLocalTime;
function getMiladiDateWithLocalTimeZone(date) {
    const local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return local.toJSON();
}
exports.getMiladiDateWithLocalTimeZone = getMiladiDateWithLocalTimeZone;
//# sourceMappingURL=convertMiladiToJalali.js.map