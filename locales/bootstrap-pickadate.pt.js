/**
 * Bootstrap Pickadate Portuguese locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "pt",
        "months": [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
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
        "weekdays": [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado"
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
        "today": "Hoje",
        "clear": "Limpar",
        "close": "Fechar",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "d !de mmmm !de yyyy",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["pt_PT"] = locale;
    window.bootstrapPickadateLocales["pt"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("pt_PT", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("pt", locale);
    }
})(window);

// END OF FILE
