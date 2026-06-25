/**
 * Bootstrap Pickadate Japanese locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "ja",
        "months": [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ],
        "monthsShort": [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ],
        "monthShortFormat": "mmm",
        "weekdays": [
            "日曜日",
            "月曜日",
            "火曜日",
            "水曜日",
            "木曜日",
            "金曜日",
            "土曜日"
        ],
        "weekdaysShort": [
            "日",
            "月",
            "火",
            "水",
            "木",
            "金",
            "土"
        ],
        "today": "今日",
        "clear": "消去",
        "close": "閉じる",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "yyyy年mm月dd日",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["ja_JP"] = locale;
    window.bootstrapPickadateLocales["ja"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("ja_JP", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("ja", locale);
    }
})(window);

// END OF FILE
