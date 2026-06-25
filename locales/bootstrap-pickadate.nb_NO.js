/**
 * Bootstrap Pickadate Norwegian locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "nb_NO",
        "months": [
            "januar",
            "februar",
            "mars",
            "april",
            "mai",
            "juni",
            "juli",
            "august",
            "september",
            "oktober",
            "november",
            "desember"
        ],
        "monthsShort": [
            "jan",
            "feb",
            "mar",
            "apr",
            "mai",
            "jun",
            "jul",
            "aug",
            "sep",
            "okt",
            "nov",
            "des"
        ],
        "monthShortFormat": "mmm",
        "weekdays": [
            "søndag",
            "mandag",
            "tirsdag",
            "onsdag",
            "torsdag",
            "fredag",
            "lørdag"
        ],
        "weekdaysShort": [
            "søn",
            "man",
            "tir",
            "ons",
            "tor",
            "fre",
            "lør"
        ],
        "today": "i dag",
        "clear": "nullstill",
        "close": "lukk",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "dd. mmm. yyyy",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["nb_NO"] = locale;
    window.bootstrapPickadateLocales["nb"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("nb_NO", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("nb", locale);
    }
})(window);

// END OF FILE
