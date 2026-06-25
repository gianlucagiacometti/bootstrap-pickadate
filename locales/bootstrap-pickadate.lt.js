/**
 * Bootstrap Pickadate Lietuviškai locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "lt",
        "months": [
            "Sausis",
            "Vasaris",
            "Kovas",
            "Balandis",
            "Gegužė",
            "Birželis",
            "Liepa",
            "Rugpjūtis",
            "Rugsėjis",
            "Spalis",
            "Lapkritis",
            "Gruodis"
        ],
        "monthsShort": [
            "Sau",
            "Vas",
            "Kov",
            "Bal",
            "Geg",
            "Bir",
            "Lie",
            "Rgp",
            "Rgs",
            "Spa",
            "Lap",
            "Grd"
        ],
        "weekdays": [
            "Sekmadienis",
            "Pirmadienis",
            "Antradienis",
            "Trečiadienis",
            "Ketvirtadienis",
            "Penktadienis",
            "Šeštadienis"
        ],
        "weekdaysShort": [
            "Sk",
            "Pr",
            "An",
            "Tr",
            "Kt",
            "Pn",
            "Št"
        ],
        "today": "Šiandien",
        "clear": "Išvalyti",
        "close": "Uždaryti",
        "previousMonth": "Ankstesnis mėnuo",
        "nextMonth": "Sekantis mėnuo",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Pasirinkite mėnesį",
        "selectYear": "Pasirinkite metus",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "yyyy !m. mmmm d !d.",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["lt_LT"] = locale;
    window.bootstrapPickadateLocales["lt"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("lt_LT", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("lt", locale);
    }
})(window);

// END OF FILE
