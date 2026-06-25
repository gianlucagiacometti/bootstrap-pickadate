/**
 * Bootstrap Pickadate Catalan locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "ca_ES",
        "months": [
            "Gener",
            "Febrer",
            "Març",
            "Abril",
            "Maig",
            "juny",
            "Juliol",
            "Agost",
            "Setembre",
            "Octubre",
            "Novembre",
            "Desembre"
        ],
        "monthsShort": [
            "Gen",
            "Feb",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Oct",
            "Nov",
            "Des"
        ],
        "monthShortFormat": "mmm",
        "weekdays": [
            "diumenge",
            "dilluns",
            "dimarts",
            "dimecres",
            "dijous",
            "divendres",
            "dissabte"
        ],
        "weekdaysShort": [
            "diu",
            "dil",
            "dim",
            "dmc",
            "dij",
            "div",
            "dis"
        ],
        "today": "avui",
        "clear": "esborra",
        "close": "tanca",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "dddd d !de mmmm !de yyyy",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["ca_ES"] = locale;
    window.bootstrapPickadateLocales["ca"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("ca_ES", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("ca", locale);
    }
})(window);

// END OF FILE
