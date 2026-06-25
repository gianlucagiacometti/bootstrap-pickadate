/**
 * Bootstrap Pickadate Finnish locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "fi_FI",
        "months": [
            "tammikuu",
            "helmikuu",
            "maaliskuu",
            "huhtikuu",
            "toukokuu",
            "kesäkuu",
            "heinäkuu",
            "elokuu",
            "syyskuu",
            "lokakuu",
            "marraskuu",
            "joulukuu"
        ],
        "monthsShort": [
            "tammi",
            "helmi",
            "maalis",
            "huhti",
            "touko",
            "kesä",
            "heinä",
            "elo",
            "syys",
            "loka",
            "marras",
            "joulu"
        ],
        "monthShortFormat": "mmm",
        "weekdays": [
            "sunnuntai",
            "maanantai",
            "tiistai",
            "keskiviikko",
            "torstai",
            "perjantai",
            "lauantai"
        ],
        "weekdaysShort": [
            "su",
            "ma",
            "ti",
            "ke",
            "to",
            "pe",
            "la"
        ],
        "today": "tänään",
        "clear": "tyhjennä",
        "close": "Close",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "d.m.yyyy",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["fi_FI"] = locale;
    window.bootstrapPickadateLocales["fi"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("fi_FI", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("fi", locale);
    }
})(window);

// END OF FILE
