/**
 * Bootstrap Pickadate Greek locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "el",
        "months": [
            "Ιανουάριος",
            "Φεβρουάριος",
            "Μάρτιος",
            "Απρίλιος",
            "Μάιος",
            "Ιούνιος",
            "Ιούλιος",
            "Αύγουστος",
            "Σεπτέμβριος",
            "Οκτώβριος",
            "Νοέμβριος",
            "Δεκέμβριος"
        ],
        "monthsShort": [
            "Ιαν",
            "Φεβ",
            "Μαρ",
            "Απρ",
            "Μαι",
            "Ιουν",
            "Ιουλ",
            "Αυγ",
            "Σεπ",
            "Οκτ",
            "Νοε",
            "Δεκ"
        ],
        "monthShortFormat": "mm mmm",
        "weekdays": [
            "Κυριακή",
            "Δευτέρα",
            "Τρίτη",
            "Τετάρτη",
            "Πέμπτη",
            "Παρασκευή",
            "Σάββατο"
        ],
        "weekdaysShort": [
            "Κυρ",
            "Δευ",
            "Τρι",
            "Τετ",
            "Πεμ",
            "Παρ",
            "Σαβ"
        ],
        "today": "σήμερα",
        "clear": "Διαγραφή",
        "close": "Close",
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
    window.bootstrapPickadateLocales["el_GR"] = locale;
    window.bootstrapPickadateLocales["el"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("el_GR", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("el", locale);
    }
})(window);

// END OF FILE
