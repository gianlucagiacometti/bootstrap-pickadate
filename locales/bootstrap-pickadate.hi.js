/**
 * Bootstrap Pickadate jQuery.extend( jQuery.fn.pickadate.defaults, { locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "hi",
        "months": [
            "जनवरी",
            "फरवरी",
            "मार्च",
            "अप्रैल",
            "मई",
            "जून",
            "जुलाई",
            "अगस्त",
            "सितम्बर",
            "अक्टूबर",
            "नवम्बर",
            "दिसम्बर"
        ],
        "monthsShort": [
            "जन",
            "फर",
            "मार्च",
            "अप्रैल",
            "मई",
            "जून",
            "जु",
            "अग",
            "सित",
            "अक्टू",
            "नव",
            "दिस"
        ],
        "monthShortFormat": "mm mmm",
        "weekdays": [
            "रविवार",
            "सोमवार",
            "मंगलवार",
            "बुधवार",
            "गुरुवार",
            "शुक्रवार",
            "शनिवार"
        ],
        "weekdaysShort": [
            "रवि",
            "सोम",
            "मंगल",
            "बुध",
            "गुरु",
            "शुक्र",
            "शनि"
        ],
        "today": "आज की तारीख चयन करें",
        "clear": "चुनी हुई तारीख को मिटाएँ",
        "close": "विंडो बंद करे",
        "previousMonth": "पिछले माह का चयन करें",
        "nextMonth": "अगले माह का चयन करें",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "किसि एक महीने का चयन करें",
        "selectYear": "किसि एक वर्ष का चयन करें",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["hi_IN"] = locale;
    window.bootstrapPickadateLocales["hi"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("hi_IN", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("hi", locale);
    }
})(window);

// END OF FILE
