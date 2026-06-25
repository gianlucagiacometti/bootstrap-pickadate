/**
 * Bootstrap Pickadate Brazilian Portuguese locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "pt_BR",
        "months": [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro"
        ],
        "monthsShort": [
            "jan",
            "fev",
            "mar",
            "abr",
            "mai",
            "jun",
            "jul",
            "ago",
            "set",
            "out",
            "nov",
            "dez"
        ],
        "monthShortFormat": "mm mmm",
        "weekdays": [
            "domingo",
            "segunda-feira",
            "terça-feira",
            "quarta-feira",
            "quinta-feira",
            "sexta-feira",
            "sábado"
        ],
        "weekdaysShort": [
            "dom",
            "seg",
            "ter",
            "qua",
            "qui",
            "sex",
            "sab"
        ],
        "today": "hoje",
        "clear": "limpar",
        "close": "fechar",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "dddd, d !de mmmm !de yyyy",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["pt_BR"] = locale;
    window.bootstrapPickadateLocales["pt"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("pt_BR", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("pt", locale);
    }
})(window);

// END OF FILE
