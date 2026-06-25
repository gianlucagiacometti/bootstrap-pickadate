/**
 * Bootstrap Pickadate Estonian locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "et_EE",
        "months": [
            "jaanuar",
            "veebruar",
            "märts",
            "aprill",
            "mai",
            "juuni",
            "juuli",
            "august",
            "september",
            "oktoober",
            "november",
            "detsember"
        ],
        "monthsShort": [
            "jaan",
            "veebr",
            "märts",
            "apr",
            "mai",
            "juuni",
            "juuli",
            "aug",
            "sept",
            "okt",
            "nov",
            "dets"
        ],
        "monthShortFormat": "mmm",
        "weekdays": [
            "pühapäev",
            "esmaspäev",
            "teisipäev",
            "kolmapäev",
            "neljapäev",
            "reede",
            "laupäev"
        ],
        "weekdaysShort": [
            "püh",
            "esm",
            "tei",
            "kol",
            "nel",
            "ree",
            "lau"
        ],
        "today": "täna",
        "clear": "kustuta",
        "close": "Close",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "d. mmmm yyyy. a",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["et_EE"] = locale;
    window.bootstrapPickadateLocales["et"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("et_EE", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("et", locale);
    }
})(window);

// END OF FILE
