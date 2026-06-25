/**
 * Bootstrap Pickadate Slovenian locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "sl_SI",
        "months": [
            "januar",
            "februar",
            "marec",
            "april",
            "maj",
            "junij",
            "julij",
            "avgust",
            "september",
            "oktober",
            "november",
            "december"
        ],
        "monthsShort": [
            "jan",
            "feb",
            "mar",
            "apr",
            "maj",
            "jun",
            "jul",
            "avg",
            "sep",
            "okt",
            "nov",
            "dec"
        ],
        "monthShortFormat": "mmm",
        "weekdays": [
            "nedelja",
            "ponedeljek",
            "torek",
            "sreda",
            "četrtek",
            "petek",
            "sobota"
        ],
        "weekdaysShort": [
            "ned",
            "pon",
            "tor",
            "sre",
            "čet",
            "pet",
            "sob"
        ],
        "today": "danes",
        "clear": "izbriši",
        "close": "zapri",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "d. mmmm yyyy",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["sl_SI"] = locale;
    window.bootstrapPickadateLocales["sl"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("sl_SI", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("sl", locale);
    }
})(window);

// END OF FILE
