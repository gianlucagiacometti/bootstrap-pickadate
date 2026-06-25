/**
 * Bootstrap Pickadate Ukrainian locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "uk_UA",
        "months": [
            "січень",
            "лютий",
            "березень",
            "квітень",
            "травень",
            "червень",
            "липень",
            "серпень",
            "вересень",
            "жовтень",
            "листопад",
            "грудень"
        ],
        "monthsShort": [
            "січ",
            "лют",
            "бер",
            "кві",
            "тра",
            "чер",
            "лип",
            "сер",
            "вер",
            "жов",
            "лис",
            "гру"
        ],
        "weekdays": [
            "неділя",
            "понеділок",
            "вівторок",
            "середа",
            "четвер",
            "п‘ятниця",
            "субота"
        ],
        "weekdaysShort": [
            "нд",
            "пн",
            "вт",
            "ср",
            "чт",
            "пт",
            "сб"
        ],
        "today": "сьогодні",
        "clear": "викреслити",
        "close": "Close",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "dd mmmm yyyy p.",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["uk_UA"] = locale;
    window.bootstrapPickadateLocales["uk"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("uk_UA", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("uk", locale);
    }
})(window);

// END OF FILE
