/**
 * Bootstrap Pickadate Vietnamese locale.
 */

"use strict";

(function(window) {
    const locale = {
        "code": "vi",
        "months": [
            "Tháng Một",
            "Tháng Hai",
            "Tháng Ba",
            "Tháng Tư",
            "Tháng Năm",
            "Tháng Sáu",
            "Tháng Bảy",
            "Tháng Tám",
            "Tháng Chín",
            "Tháng Mười",
            "Tháng Mười Một",
            "Tháng Mười Hai"
        ],
        "monthsShort": [
            "Một",
            "Hai",
            "Ba",
            "Tư",
            "Năm",
            "Sáu",
            "Bảy",
            "Tám",
            "Chín",
            "Mười",
            "Mười Một",
            "Mười Hai"
        ],
        "monthShortFormat": "mmm",
        "weekdays": [
            "Chủ Nhật",
            "Thứ Hai",
            "Thứ Ba",
            "Thứ Tư",
            "Thứ Năm",
            "Thứ Sáu",
            "Thứ Bảy"
        ],
        "weekdaysShort": [
            "C.Nhật",
            "T.Hai",
            "T.Ba",
            "T.Tư",
            "T.Năm",
            "T.Sáu",
            "T.Bảy"
        ],
        "today": "Hôm Nay",
        "clear": "Xoá",
        "close": "Đóng",
        "previousMonth": "Previous month",
        "nextMonth": "Next month",
        "previousYear": "Previous year",
        "nextYear": "Next year",
        "selectMonth": "Select a month",
        "selectYear": "Select a year",
        "firstDay": 1,
        "format": "dd/mm/yyyy",
        "longFormat": "Bạn chọn: dddd, dd mmmm, yyyy",
        "direction": "ltr"
    };

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.bootstrapPickadateLocales["vi_VN"] = locale;
    window.bootstrapPickadateLocales["vi"] = locale;
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("vi_VN", locale);
    }
    if (window.bsPickadate && typeof window.bsPickadate.registerLocale === "function") {
        window.bsPickadate.registerLocale("vi", locale);
    }
})(window);

// END OF FILE
