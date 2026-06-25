/**
 * Bootstrap Pickadate Swedish locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "sv_SE",
        "months": [
            "januari",
            "februari",
            "mars",
            "april",
            "maj",
            "juni",
            "juli",
            "augusti",
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
        "monthShortFormat": "mmm",
        "weekdays": [
            "söndag",
            "måndag",
            "tisdag",
            "onsdag",
            "torsdag",
            "fredag",
            "lördag"
        ],
        "weekdaysShort": [
            "sön",
            "mån",
            "tis",
            "ons",
            "tor",
            "fre",
            "lör"
        ],
        "today": "Idag",
        "clear": "Rensa",
        "close": "Stäng",
        "previousMonth": "Föregående månad",
        "nextMonth": "Nästa månad",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Välj månad",
        "selectYear": "Välj år",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "yyyy-mm-dd",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["sv_SE"] = locale;
    window.bootstrapPickadateLocales["sv"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("sv_SE", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("sv", locale);
    }
})(window);

// END OF FILE
