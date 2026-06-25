/**
 * Bootstrap Pickadate Romanian locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "ro",
        "months": [
            "ianuarie",
            "februarie",
            "martie",
            "aprilie",
            "mai",
            "iunie",
            "iulie",
            "august",
            "septembrie",
            "octombrie",
            "noiembrie",
            "decembrie"
        ],
        "monthsShort": [
            "ian",
            "feb",
            "mar",
            "apr",
            "mai",
            "iun",
            "iul",
            "aug",
            "sep",
            "oct",
            "noi",
            "dec"
        ],
        "weekdays": [
            "duminică",
            "luni",
            "marţi",
            "miercuri",
            "joi",
            "vineri",
            "sâmbătă"
        ],
        "weekdaysShort": [
            "D",
            "L",
            "Ma",
            "Mi",
            "J",
            "V",
            "S"
        ],
        "today": "azi",
        "clear": "șterge",
        "close": "Close",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "dd mmmm yyyy",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["ro_RO"] = locale;
    window.bootstrapPickadateLocales["ro"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("ro_RO", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("ro", locale);
    }
})(window);

// END OF FILE
