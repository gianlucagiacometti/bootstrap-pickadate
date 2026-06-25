/**
 * Bootstrap Pickadate Polish locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "pl_PL",
        "months": [
            "styczeń",
            "luty",
            "marzec",
            "kwiecień",
            "maj",
            "czerwiec",
            "lipiec",
            "sierpień",
            "wrzesień",
            "październik",
            "listopad",
            "grudzień"
        ],
        "monthsShort": [
            "sty",
            "lut",
            "mar",
            "kwi",
            "maj",
            "cze",
            "lip",
            "sie",
            "wrz",
            "paź",
            "lis",
            "gru"
        ],
        "weekdays": [
            "niedziela",
            "poniedziałek",
            "wtorek",
            "środa",
            "czwartek",
            "piątek",
            "sobota"
        ],
        "weekdaysShort": [
            "niedz.",
            "pn.",
            "wt.",
            "śr.",
            "cz.",
            "pt.",
            "sob."
        ],
        "today": "Dzisiaj",
        "clear": "Usuń",
        "close": "Zamknij",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "d mmmm yyyy",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["pl_PL"] = locale;
    window.bootstrapPickadateLocales["pl"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("pl_PL", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("pl", locale);
    }
})(window);

// END OF FILE
