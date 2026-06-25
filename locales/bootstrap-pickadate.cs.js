/**
 * Bootstrap Pickadate Czech locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "cs",
        "months": [
            "leden",
            "únor",
            "březen",
            "duben",
            "květen",
            "červen",
            "červenec",
            "srpen",
            "září",
            "říjen",
            "listopad",
            "prosinec"
        ],
        "monthsShort": [
            "led",
            "úno",
            "bře",
            "dub",
            "kvě",
            "čer",
            "čvc",
            "srp",
            "zář",
            "říj",
            "lis",
            "pro"
        ],
        "weekdays": [
            "neděle",
            "pondělí",
            "úterý",
            "středa",
            "čtvrtek",
            "pátek",
            "sobota"
        ],
        "weekdaysShort": [
            "ne",
            "po",
            "út",
            "st",
            "čt",
            "pá",
            "so"
        ],
        "today": "dnes",
        "clear": "vymazat",
        "close": "zavřít",
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
    window.bootstrapPickadateLocales["cs_CZ"] = locale;
    window.bootstrapPickadateLocales["cs"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("cs_CZ", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("cs", locale);
    }
})(window);

// END OF FILE
