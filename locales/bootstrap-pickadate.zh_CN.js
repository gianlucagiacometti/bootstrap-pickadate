/**
 * Bootstrap Pickadate Simplified Chinese locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "zh_CN",
        "months": [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
        ],
        "monthsShort": [
            "一",
            "二",
            "三",
            "四",
            "五",
            "六",
            "七",
            "八",
            "九",
            "十",
            "十一",
            "十二"
        ],
        "monthShortFormat": "mmm",
        "weekdays": [
            "星期日",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六"
        ],
        "weekdaysShort": [
            "日",
            "一",
            "二",
            "三",
            "四",
            "五",
            "六"
        ],
        "today": "今天",
        "clear": "清除",
        "close": "关闭",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "yyyy 年 mm 月 dd 日",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["zh_CN"] = locale;
    window.bootstrapPickadateLocales["zh"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("zh_CN", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("zh", locale);
    }
})(window);

// END OF FILE
