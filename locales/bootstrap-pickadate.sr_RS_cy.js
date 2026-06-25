/**
 * Bootstrap Pickadate Serbian (Cyrillic) locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "sr_RS_cy",
        "months": [
            "јануар",
            "фебруар",
            "март",
            "април",
            "мај",
            "јун",
            "јул",
            "август",
            "септембар",
            "октобар",
            "новембар",
            "децембар"
        ],
        "monthsShort": [
            "јан.",
            "феб.",
            "март",
            "апр.",
            "мај",
            "јун",
            "јул",
            "авг.",
            "септ.",
            "окт.",
            "нов.",
            "дец."
        ],
        "monthShortFormat": "mm mmm",
        "weekdays": [
            "недеља",
            "понедељак",
            "уторак",
            "среда",
            "четвртак",
            "петак",
            "субота"
        ],
        "weekdaysShort": [
            "нед.",
            "пон.",
            "ут.",
            "ср.",
            "чет.",
            "пет.",
            "суб."
        ],
        "today": "данас",
        "clear": "избриши",
        "close": "затвори",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "d. MMMM yyyy.",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["sr_RS_cy"] = locale;
    window.bootstrapPickadateLocales["sr"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("sr_RS_cy", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("sr", locale);
    }
})(window);

// END OF FILE
