/**
 * Bootstrap Pickadate Georgian locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "ge_GEO",
        "months": [
            "იანვარი",
            "თებერვალი",
            "მარტი",
            "აპრილი",
            "მაისი",
            "ივნისი",
            "ივლისი",
            "აგვისტო",
            "სექტემბერი",
            "ოქტომბერი",
            "ნოემბერი",
            "დეკემბერი"
        ],
        "monthsShort": [
            "იან",
            "თებ",
            "მარტ",
            "აპრ",
            "მაი",
            "ივნ",
            "ივლ",
            "აგვ",
            "სექტ",
            "ოქტ",
            "ნოემ",
            "დეკ"
        ],
        "monthShortFormat": "mm mmm",
        "weekdays": [
            "კვირა",
            "ორშაბათი",
            "სამშაბათი",
            "ოთხშაბათი",
            "ხუშაბათი",
            "პარასკევი",
            "შაბათი"
        ],
        "weekdaysShort": [
            "კვ",
            "ორ",
            "სამ",
            "ოთხ",
            "ხუთ",
            "პარ",
            "შაბ"
        ],
        "today": "დღეს",
        "clear": "გასუფთავება",
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
    window.bootstrapPickadateLocales["ge_GEO"] = locale;
    window.bootstrapPickadateLocales["ge"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("ge_GEO", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("ge", locale);
    }
})(window);

// END OF FILE
