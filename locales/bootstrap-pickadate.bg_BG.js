/**
 * Bootstrap Pickadate Bulgarian locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "bg_BG",
        "months": [
            "януари",
            "февруари",
            "март",
            "април",
            "май",
            "юни",
            "юли",
            "август",
            "септември",
            "октомври",
            "ноември",
            "декември"
        ],
        "monthsShort": [
            "янр",
            "фев",
            "мар",
            "апр",
            "май",
            "юни",
            "юли",
            "авг",
            "сеп",
            "окт",
            "ное",
            "дек"
        ],
        "monthShortFormat": "mmm",
        "weekdays": [
            "неделя",
            "понеделник",
            "вторник",
            "сряда",
            "четвъртък",
            "петък",
            "събота"
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
        "today": "днес",
        "clear": "изтривам",
        "close": "Close",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "d mmmm yyyy г.",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["bg_BG"] = locale;
    window.bootstrapPickadateLocales["bg"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("bg_BG", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("bg", locale);
    }
})(window);

// END OF FILE
