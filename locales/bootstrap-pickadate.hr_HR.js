/**
 * Bootstrap Pickadate Croatian locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "hr_HR",
        "months": [
            "siječanj",
            "veljača",
            "ožujak",
            "travanj",
            "svibanj",
            "lipanj",
            "srpanj",
            "kolovoz",
            "rujan",
            "listopad",
            "studeni",
            "prosinac"
        ],
        "monthsShort": [
            "sij",
            "velj",
            "ožu",
            "tra",
            "svi",
            "lip",
            "srp",
            "kol",
            "ruj",
            "lis",
            "stu",
            "pro"
        ],
        "monthShortFormat": "mmm",
        "weekdays": [
            "nedjelja",
            "ponedjeljak",
            "utorak",
            "srijeda",
            "četvrtak",
            "petak",
            "subota"
        ],
        "weekdaysShort": [
            "ned",
            "pon",
            "uto",
            "sri",
            "čet",
            "pet",
            "sub"
        ],
        "today": "Danas",
        "clear": "Izbriši",
        "close": "Zatvori",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "d. mmmm yyyy.",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["hr_HR"] = locale;
    window.bootstrapPickadateLocales["hr"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("hr_HR", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("hr", locale);
    }
})(window);

// END OF FILE
