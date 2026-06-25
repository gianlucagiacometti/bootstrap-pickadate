/**
 * Bootstrap Pickadate Dutch locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "nl",
        "months": [
            "januari",
            "februari",
            "maart",
            "april",
            "mei",
            "juni",
            "juli",
            "augustus",
            "september",
            "oktober",
            "november",
            "december"
        ],
        "monthsShort": [
            "jan",
            "feb",
            "mrt",
            "apr",
            "mei",
            "jun",
            "jul",
            "aug",
            "sep",
            "okt",
            "nov",
            "dec"
        ],
        "monthShortFormat": "mm mmm",
        "weekdays": [
            "zondag",
            "maandag",
            "dinsdag",
            "woensdag",
            "donderdag",
            "vrijdag",
            "zaterdag"
        ],
        "weekdaysShort": [
            "zo",
            "ma",
            "di",
            "wo",
            "do",
            "vr",
            "za"
        ],
        "today": "vandaag",
        "clear": "wissen",
        "close": "sluiten",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "dddd d mmmm yyyy",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["nl_NL"] = locale;
    window.bootstrapPickadateLocales["nl"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("nl_NL", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("nl", locale);
    }
})(window);

// END OF FILE
