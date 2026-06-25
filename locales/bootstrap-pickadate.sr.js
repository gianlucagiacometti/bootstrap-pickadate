/**
 * Bootstrap Pickadate Serbian (Latin) locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "sr",
        "months": [
            "januar",
            "februar",
            "mart",
            "april",
            "maj",
            "jun",
            "juli",
            "avgust",
            "septembar",
            "oktobar",
            "novembar",
            "decembar"
        ],
        "monthsShort": [
            "jan.",
            "feb.",
            "mart",
            "apr.",
            "maj",
            "jun",
            "jul",
            "avg.",
            "sept.",
            "okt.",
            "nov.",
            "dec."
        ],
        "monthShortFormat": "mmm",
        "weekdays": [
            "nedelja",
            "ponedeljak",
            "utorak",
            "sreda",
            "četvrtak",
            "petak",
            "subota"
        ],
        "weekdaysShort": [
            "ned.",
            "pon.",
            "ut.",
            "sr.",
            "čet.",
            "pet.",
            "sub."
        ],
        "today": "danas",
        "clear": "izbriši",
        "close": "zatvori",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "d. MMMM yyyy.",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["sr_RS_lt"] = locale;
    window.bootstrapPickadateLocales["sr"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("sr_RS_lt", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("sr", locale);
    }
})(window);

// END OF FILE
