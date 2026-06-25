/**
 * Bootstrap Pickadate Icelandic locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "is",
        "months": [
            "janúar",
            "febrúar",
            "mars",
            "apríl",
            "maí",
            "júní",
            "júlí",
            "ágúst",
            "september",
            "október",
            "nóvember",
            "desember"
        ],
        "monthsShort": [
            "jan",
            "feb",
            "mar",
            "apr",
            "maí",
            "jún",
            "júl",
            "ágú",
            "sep",
            "okt",
            "nóv",
            "des"
        ],
        "monthShortFormat": "mmm",
        "weekdays": [
            "sunnudagur",
            "mánudagur",
            "þriðjudagur",
            "miðvikudagur",
            "fimmtudagur",
            "föstudagur",
            "laugardagur"
        ],
        "weekdaysShort": [
            "sun",
            "mán",
            "þri",
            "mið",
            "fim",
            "fös",
            "lau"
        ],
        "today": "Í dag",
        "clear": "Hreinsa",
        "close": "Close",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "dd. mmmm yyyy",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["is_IS"] = locale;
    window.bootstrapPickadateLocales["is"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("is_IS", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("is", locale);
    }
})(window);

// END OF FILE
