/**
 * Bootstrap Pickadate Basque locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "eu_ES",
        "months": [
            "urtarrila",
            "otsaila",
            "martxoa",
            "apirila",
            "maiatza",
            "ekaina",
            "uztaila",
            "abuztua",
            "iraila",
            "urria",
            "azaroa",
            "abendua"
        ],
        "monthsShort": [
            "urt",
            "ots",
            "mar",
            "api",
            "mai",
            "eka",
            "uzt",
            "abu",
            "ira",
            "urr",
            "aza",
            "abe"
        ],
        "weekdays": [
            "igandea",
            "astelehena",
            "asteartea",
            "asteazkena",
            "osteguna",
            "ostirala",
            "larunbata"
        ],
        "weekdaysShort": [
            "ig.",
            "al.",
            "ar.",
            "az.",
            "og.",
            "or.",
            "lr."
        ],
        "today": "gaur",
        "clear": "garbitu",
        "close": "Close",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "dddd, yyyy(e)ko mmmmren da",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["eu_ES"] = locale;
    window.bootstrapPickadateLocales["eu"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("eu_ES", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("eu", locale);
    }
})(window);

// END OF FILE
