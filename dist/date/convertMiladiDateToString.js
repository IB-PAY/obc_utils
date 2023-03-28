"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMiladiDateToStringV2 = exports.convertMiladiDateToString = void 0;
const moment = require("jalali-moment");
function convertMiladiDateToString(date) {
    let result = null;
    if (date) {
        date = new Date(date);
        const dd = String(date.getDate()).padStart(2, '0'), mm = String(date.getMonth() + 1).padStart(2, '0'), yyyy = date.getFullYear(), seconds = date.getSeconds(), minutes = date.getMinutes(), hour = date.getHours();
        result = `${yyyy}-${mm}-${dd} ${hour}:${minutes}:${seconds}`;
    }
    return result;
}
exports.convertMiladiDateToString = convertMiladiDateToString;
function convertMiladiDateToStringV2(input) {
    const defaultOptions = {
        format: 'YYYY-MM-DD',
        locale: 'en'
    }, options = Object.assign(Object.assign({}, defaultOptions), input);
    return moment(options.miladiDate, 'YYYY-MM-DD').locale(options.locale).format(options.format);
}
exports.convertMiladiDateToStringV2 = convertMiladiDateToStringV2;
//# sourceMappingURL=convertMiladiDateToString.js.map