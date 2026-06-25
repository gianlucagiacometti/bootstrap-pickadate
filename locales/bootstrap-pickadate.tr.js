/**
 * Bootstrap Pickadate Turkish locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "tr",
        "months": [
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmuz",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık"
        ],
        "monthsShort": [
            "Oca",
            "Şub",
            "Mar",
            "Nis",
            "May",
            "Haz",
            "Tem",
            "Ağu",
            "Eyl",
            "Eki",
            "Kas",
            "Ara"
        ],
        "monthShortFormat": "mm mmm",
        "weekdays": [
            "Pazar",
            "Pazartesi",
            "Salı",
            "Çarşamba",
            "Perşembe",
            "Cuma",
            "Cumartesi"
        ],
        "weekdaysShort": [
            "Pzr",
            "Pzt",
            "Sal",
            "Çrş",
            "Prş",
            "Cum",
            "Cmt"
        ],
        "today": "Bugün",
        "clear": "Sil",
        "close": "Kapat",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "dd mmmm yyyy dddd",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["tr_TR"] = locale;
    window.bootstrapPickadateLocales["tr"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("tr_TR", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("tr", locale);
    }
})(window);

// END OF FILE
