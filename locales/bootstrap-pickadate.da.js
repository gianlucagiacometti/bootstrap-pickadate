/**
 * Bootstrap Pickadate Danish locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "da",
        "months": [
            "januar",
            "februar",
            "marts",
            "april",
            "maj",
            "juni",
            "juli",
            "august",
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
            "aug",
            "sep",
            "okt",
            "nov",
            "dec"
        ],
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
        "clear": "slet",
        "close": "luk",
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
    window.bootstrapPickadateLocales["da_DK"] = locale;
    window.bootstrapPickadateLocales["da"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("da_DK", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("da", locale);
    }
})(window);

// END OF FILE
