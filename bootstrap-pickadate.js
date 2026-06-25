/**
 * Bootstrap Pickadate date picker component.
 *
 * Fast cached-DOM refactor.
 */

"use strict";

(function(window, document) {
    const COMPONENT_PROPERTY = "bsPickadate";
    const DEFAULT_LOCALE = "en";
    const INSERTED_ANIMATION = "bootstrapPickadateInserted";
    const DAY_COUNT = 42;
    const INTERVAL_MODE = "interval";

    if (!window || !document) {
        return;
    }

    window.bootstrapPickadateLocales = window.bootstrapPickadateLocales || {};
    window.FORM = window.FORM || {};
    window.FORM.pickadate = window.FORM.pickadate || {};

    const defaultEnglishLocale = {
        code: "en",
        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        monthsShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        weekdays: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        weekdaysShort: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ],
        today: "Today",
        clear: "Clear",
        close: "Close",
        previousMonth: "Previous month",
        nextMonth: "Next month",
        previousYear: "Previous year",
        nextYear: "Next year",
        selectMonth: "Select a month",
        selectYear: "Select a year",
        firstDay: 1,
        format: "dd/mm/yyyy",
        monthShortFormat: "mmm",
        direction: "ltr"
    };

    window.bootstrapPickadateLocales.en = window.bootstrapPickadateLocales.en || defaultEnglishLocale;

    const defaultOptions = {
        locale: "current",
        defaultLocale: DEFAULT_LOCALE,
        format: "",
        hiddenTarget: "",
        hiddenStartTarget: "",
        hiddenEndTarget: "",
        mode: "single",
        intervalSeparator: " - ",
        min: "",
        max: "",
        rangeRole: "",
        rangePair: "",
        todayButton: true,
        clearButton: true,
        closeButton: true,
        autoClose: true,
        readonly: false,
        dropdownWidth: "",
        yearRange: 100
    };

    function isString(value) {
        return typeof value === "string" || value instanceof String;
    }

    function isElement(value) {
        return value && value.nodeType === 1;
    }

    function toBoolean(value, fallback) {
        if (value === undefined || value === null || value === "") {
            return fallback;
        }

        if (typeof value === "boolean") {
            return value;
        }

        const normalised = String(value).toLowerCase();

        if (["true", "1", "yes", "on"].indexOf(normalised) !== -1) {
            return true;
        }

        if (["false", "0", "no", "off"].indexOf(normalised) !== -1) {
            return false;
        }

        return fallback;
    }

    function pad(number) {
        return String(number).padStart(2, "0");
    }

    function canonicalLocale(locale) {
        if (!locale) {
            return "";
        }

        const parts = String(locale).replace(/-/g, "_").split("_").filter(Boolean);

        if (!parts.length) {
            return "";
        }

        const base = parts.shift().toLowerCase();

        if (!parts.length) {
            return base;
        }

        const region = parts.shift().toUpperCase();
        const extra = parts.map(function(part) {
            return part.toLowerCase();
        });

        return [base, region].concat(extra).join("_");
    }

    function baseLocale(locale) {
        const canonical = canonicalLocale(locale);
        const parts = canonical.split("_");

        return parts[0] || "";
    }

    function unique(values) {
        const result = [];

        values.forEach(function(value) {
            if (value && result.indexOf(value) === -1) {
                result.push(value);
            }
        });

        return result;
    }

    function localeCandidates(locale, defaultLocale) {
        const canonical = canonicalLocale(locale);
        const fallback = canonicalLocale(defaultLocale || bsPickadate.defaultLocale || DEFAULT_LOCALE);

        return unique([
            canonical,
            baseLocale(canonical),
            fallback,
            baseLocale(fallback),
            DEFAULT_LOCALE
        ]);
    }

    function getLocale(locale, defaultLocale) {
        const candidates = localeCandidates(locale, defaultLocale);

        for (let index = 0; index < candidates.length; index++) {
            if (window.bootstrapPickadateLocales[candidates[index]]) {
                return window.bootstrapPickadateLocales[candidates[index]];
            }
        }

        return window.bootstrapPickadateLocales.en;
    }

    function cloneDate(date) {
        if (!date) {
            return null;
        }

        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    function startOfDay(date) {
        if (!date) {
            return null;
        }

        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    function compareDates(first, second) {
        if (!first || !second) {
            return 0;
        }

        const firstTime = startOfDay(first).getTime();
        const secondTime = startOfDay(second).getTime();

        if (firstTime < secondTime) {
            return -1;
        }

        if (firstTime > secondTime) {
            return 1;
        }

        return 0;
    }

    function isIsoDate(value) {
        if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            return false;
        }

        return Boolean(isoToDate(value));
    }

    function isoToDate(value) {
        if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            return null;
        }

        const parts = value.split("-").map(function(part) {
            return parseInt(part, 10);
        });
        const date = new Date(parts[0], parts[1] - 1, parts[2]);

        if (date.getFullYear() !== parts[0] || date.getMonth() !== parts[1] - 1 || date.getDate() !== parts[2]) {
            return null;
        }

        return date;
    }

    function dateToIso(date) {
        if (!date) {
            return "";
        }

        return [
            date.getFullYear(),
            pad(date.getMonth() + 1),
            pad(date.getDate())
        ].join("-");
    }

    function getNumericFormatOrder(format) {
        const lowerFormat = String(format || "dd/mm/yyyy").toLowerCase();
        const matches = lowerFormat.match(/yyyy|yy|mm|m|dd|d/g) || [];
        const order = [];

        matches.forEach(function(match) {
            const token = match.charAt(0);

            if (order.indexOf(token) === -1) {
                order.push(token);
            }
        });

        if (order.indexOf("y") === -1 || order.indexOf("m") === -1 || order.indexOf("d") === -1) {
            return ["d", "m", "y"];
        }

        return order.slice(0, 3);
    }

    function parseDateText(value, locale, format) {
        if (!value) {
            return null;
        }

        const trimmed = String(value).trim();

        if (!trimmed) {
            return null;
        }

        if (isIsoDate(trimmed)) {
            return isoToDate(trimmed);
        }

        const numericParts = trimmed.match(/\d+/g);

        if (!numericParts || numericParts.length !== 3) {
            return null;
        }

        const order = getNumericFormatOrder(format || (locale && locale.format) || "dd/mm/yyyy");
        const values = {};

        order.forEach(function(token, index) {
            values[token] = parseInt(numericParts[index], 10);
        });

        let year = values.y;

        if (year < 100) {
            year += year >= 70 ? 1900 : 2000;
        }

        if (!year || !values.m || !values.d) {
            return null;
        }

        const date = new Date(year, values.m - 1, values.d);

        if (date.getFullYear() !== year || date.getMonth() !== values.m - 1 || date.getDate() !== values.d) {
            return null;
        }

        return date;
    }

    function formatDate(date, locale, forcedFormat) {
        if (!date) {
            return "";
        }

        const usedLocale = locale || window.bootstrapPickadateLocales.en;
        const format = forcedFormat || usedLocale.format || "dd/mm/yyyy";
        const replacements = {
            yyyy: String(date.getFullYear()),
            yy: String(date.getFullYear()).slice(-2),
            mmmm: usedLocale.months[date.getMonth()],
            mmm: usedLocale.monthsShort[date.getMonth()],
            mm: pad(date.getMonth() + 1),
            m: String(date.getMonth() + 1),
            dddd: usedLocale.weekdays[date.getDay()],
            ddd: usedLocale.weekdaysShort[date.getDay()],
            dd: pad(date.getDate()),
            d: String(date.getDate())
        };

        return format.replace(/yyyy|mmmm|dddd|mmm|ddd|yy|mm|dd|m|d/g, function(token) {
            return replacements[token];
        });
    }

    function formatMonthSelectLabel(index, locale) {
        const usedLocale = locale || window.bootstrapPickadateLocales.en;
        const format = usedLocale.monthShortFormat || "mmm";
        const replacements = {
            mmmm: usedLocale.months[index],
            mmm: usedLocale.monthsShort[index],
            mm: pad(index + 1),
            m: String(index + 1)
        };

        return format.replace(/mmmm|mmm|mm|m/g, function(token) {
            return replacements[token];
        });
    }

    function formatMonthSelectOption(index, locale, useFullLabel) {
        const usedLocale = locale || window.bootstrapPickadateLocales.en;

        if (useFullLabel) {
            return usedLocale.months[index];
        }

        return formatMonthSelectLabel(index, usedLocale);
    }

    function createElement(tagName, className, attributes, text) {
        const element = document.createElement(tagName);

        if (className) {
            element.className = className;
        }

        Object.keys(attributes || {}).forEach(function(name) {
            if (attributes[name] !== null && attributes[name] !== undefined) {
                element.setAttribute(name, attributes[name]);
            }
        });

        if (text !== undefined && text !== null) {
            element.textContent = text;
        }

        return element;
    }

    function randomIndex() {
        return String(Date.now()) + String(Math.floor(Math.random() * 1000)).padStart(3, "0");
    }

    function getInputId(input) {
        if (!input.id) {
            input.id = "bootstrap-pickadate-" + randomIndex();
        }

        return input.id;
    }

    function mergeOptions() {
        const result = {};

        Array.prototype.slice.call(arguments).forEach(function(source) {
            Object.keys(source || {}).forEach(function(key) {
                if (source[key] !== undefined) {
                    result[key] = source[key];
                }
            });
        });

        return result;
    }

    function maxDate(first, second) {
        if (!first) {
            return cloneDate(second);
        }

        if (!second) {
            return cloneDate(first);
        }

        return compareDates(first, second) >= 0 ? cloneDate(first) : cloneDate(second);
    }

    function minDate(first, second) {
        if (!first) {
            return cloneDate(second);
        }

        if (!second) {
            return cloneDate(first);
        }

        return compareDates(first, second) <= 0 ? cloneDate(first) : cloneDate(second);
    }

    function normaliseYearRange(value) {
        const parsed = parseInt(value, 10);

        if (Number.isNaN(parsed) || parsed < 1) {
            return 100;
        }

        return parsed;
    }

    class bsPickadate {
        constructor(input, randomIndexValue, parameters) {
            if (typeof randomIndexValue === "object" && parameters === undefined) {
                parameters = randomIndexValue;
                randomIndexValue = "";
            }

            this.input = isString(input) ? document.getElementById(input) : input;

            if (!isElement(this.input) || this.input.tagName.toLowerCase() !== "input") {
                throw new Error("bsPickadate needs an input element.");
            }

            this.index = randomIndexValue || this.input.dataset.bsPickadateIndex || randomIndex();
            this.input.dataset.bsPickadateIndex = this.index;
            this.inputId = getInputId(this.input);
            this.options = mergeOptions(defaultOptions, this.readDataOptions(), parameters || {});
            this.options.todayButton = toBoolean(this.options.todayButton, true);
            this.options.clearButton = toBoolean(this.options.clearButton, true);
            this.options.closeButton = toBoolean(this.options.closeButton, true);
            this.options.autoClose = toBoolean(this.options.autoClose, true);
            this.options.readonly = toBoolean(this.options.readonly, false);
            this.options.yearRange = normaliseYearRange(this.options.yearRange);
            this.options.mode = this.options.mode === INTERVAL_MODE ? INTERVAL_MODE : "single";
            this.localeCode = this.resolveLocaleCode(this.options.locale, this.options.defaultLocale);
            this.locale = getLocale(this.localeCode, this.options.defaultLocale);
            this.baseMinDate = isoToDate(this.options.min);
            this.baseMaxDate = isoToDate(this.options.max);
            this.runtimeMinDate = null;
            this.runtimeMaxDate = null;
            this.selectedDate = null;
            this.intervalStartDate = null;
            this.intervalEndDate = null;
            this.intervalHoverDate = null;
            this.viewDate = startOfDay(new Date());
            this.lastValue = "";
            this.isOpen = false;
            this.silent = false;
            this.destroyed = false;
            this.bound = {};
            this.elements = {};
            this.dayButtons = [];
            this.months = [];
            this.hiddenInput = this.findHiddenInput();
            this.hiddenStartInput = this.findTargetInput(this.options.hiddenStartTarget);
            this.hiddenEndInput = this.findTargetInput(this.options.hiddenEndTarget);

            this.bindInput();
            this.restoreInitialValue();
            this.syncInput(false);
            this.buildDropdown();
            this.register();
        }

        readDataOptions() {
            const dataset = this.input.dataset;

            return {
                locale: dataset.bsPickadateLocale,
                defaultLocale: dataset.bsPickadateDefaultLocale,
                format: dataset.bsPickadateFormat,
                hiddenTarget: dataset.bsPickadateHiddenTarget,
                hiddenStartTarget: dataset.bsPickadateHiddenStartTarget,
                hiddenEndTarget: dataset.bsPickadateHiddenEndTarget,
                mode: dataset.bsPickadateMode,
                intervalSeparator: dataset.bsPickadateIntervalSeparator,
                min: dataset.bsPickadateMin,
                max: dataset.bsPickadateMax,
                rangeRole: dataset.bsPickadateRangeRole,
                rangePair: dataset.bsPickadateRangePair,
                todayButton: dataset.bsPickadateTodayButton,
                clearButton: dataset.bsPickadateClearButton,
                closeButton: dataset.bsPickadateCloseButton,
                autoClose: dataset.bsPickadateAutoClose,
                readonly: dataset.bsPickadateReadonly,
                dropdownWidth: dataset.bsPickadateDropdownWidth,
                yearRange: dataset.bsPickadateYearRange
            };
        }

        resolveLocaleCode(locale, defaultLocale) {
            if (!locale || locale === "current") {
                return canonicalLocale(bsPickadate.defaultLocale || defaultLocale || DEFAULT_LOCALE);
            }

            return canonicalLocale(locale);
        }

        findHiddenInput() {
            if (!this.options.hiddenTarget) {
                return null;
            }

            const hidden = document.querySelector(this.options.hiddenTarget);

            if (!hidden || hidden.tagName.toLowerCase() !== "input") {
                return null;
            }

            return hidden;
        }

        findTargetInput(selector) {
            if (!selector) {
                return null;
            }

            const target = document.querySelector(selector);

            if (!target || target.tagName.toLowerCase() !== "input") {
                return null;
            }

            return target;
        }

        isIntervalMode() {
            return this.options.mode === INTERVAL_MODE;
        }

        getNextMonth(date) {
            return new Date(date.getFullYear(), date.getMonth() + 1, 1);
        }

        getIntervalValue() {
            const start = dateToIso(this.intervalStartDate);
            const end = dateToIso(this.intervalEndDate);

            if (!start && !end) {
                return "";
            }

            return start + "/" + end;
        }

        parseIntervalValue(value) {
            if (!value) {
                return [null, null];
            }

            const parts = String(value).split(/[\/|,]/).map(function(part) {
                return part.trim();
            });

            return [isoToDate(parts[0] || ""), isoToDate(parts[1] || "")];
        }

        register() {
            this.input[COMPONENT_PROPERTY] = this;
            this.input.dataset.bsPickadateInitialised = "true";
            window.FORM.pickadate[this.inputId] = this;
        }

        unregister() {
            if (this.input[COMPONENT_PROPERTY] === this) {
                delete this.input[COMPONENT_PROPERTY];
            }

            if (window.FORM.pickadate[this.inputId] === this) {
                delete window.FORM.pickadate[this.inputId];
            }

            delete this.input.dataset.bsPickadateInitialised;
        }

        restoreInitialValue() {
            if (this.isIntervalMode()) {
                const hiddenStartValue = this.hiddenStartInput ? this.hiddenStartInput.value : "";
                const hiddenEndValue = this.hiddenEndInput ? this.hiddenEndInput.value : "";
                const hiddenValue = this.hiddenInput ? this.hiddenInput.value : "";
                const dataValue = this.input.dataset.bsPickadateValue || "";
                let startDate = isoToDate(hiddenStartValue);
                let endDate = isoToDate(hiddenEndValue);

                if (!startDate && !endDate) {
                    const parsed = this.parseIntervalValue(hiddenValue || dataValue);
                    startDate = parsed[0];
                    endDate = parsed[1];
                }

                if (startDate && this.isSelectable(startDate)) {
                    this.intervalStartDate = startDate;
                    this.viewDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
                }

                if (endDate && this.isSelectable(endDate)) {
                    this.intervalEndDate = endDate;
                }

                if (this.intervalStartDate && this.intervalEndDate && compareDates(this.intervalEndDate, this.intervalStartDate) < 0) {
                    const temporary = this.intervalStartDate;
                    this.intervalStartDate = this.intervalEndDate;
                    this.intervalEndDate = temporary;
                }

                return;
            }

            const hiddenValue = this.hiddenInput ? this.hiddenInput.value : "";
            const dataValue = this.input.dataset.bsPickadateValue || "";
            const visibleValue = this.input.value || "";
            const date = isoToDate(hiddenValue) || isoToDate(dataValue) || parseDateText(visibleValue, this.locale, this.getFormat());

            if (date && this.isSelectable(date)) {
                this.selectedDate = date;
                this.viewDate = cloneDate(date);
            }
        }


        bindInput() {
            this.bound.focus = this.open.bind(this);
            this.bound.click = this.open.bind(this);
            this.bound.change = this.handleInputChange.bind(this);
            this.bound.keydown = this.handleKeydown.bind(this);
            this.bound.documentMouseDown = this.handleDocumentMouseDown.bind(this);
            this.bound.resize = this.positionDropdown.bind(this);
            this.bound.scroll = this.positionDropdown.bind(this);

            this.input.setAttribute("autocomplete", "off");

            if (this.options.readonly) {
                this.input.setAttribute("readonly", "readonly");
            }

            this.input.addEventListener("focus", this.bound.focus);
            this.input.addEventListener("click", this.bound.click);
            this.input.addEventListener("change", this.bound.change);
            this.input.addEventListener("keydown", this.bound.keydown);
            this.bindInputGroupButtons();
        }

        bindInputGroupButtons() {
            const inputGroup = this.input.closest(".input-group");

            if (!inputGroup) {
                return;
            }

            const buttons = inputGroup.querySelectorAll("[data-bs-pickadate-toggle], [data-bs-pickadate-clear]");

            Array.prototype.forEach.call(buttons, function(button) {
                const toggleTarget = button.getAttribute("data-bs-pickadate-toggle");
                const clearTarget = button.getAttribute("data-bs-pickadate-clear");
                const target = toggleTarget || clearTarget || "";

                if (target && target !== "#" + this.inputId) {
                    return;
                }

                const handler = function(event) {
                    event.preventDefault();
                    event.stopPropagation();

                    if (button.hasAttribute("data-bs-pickadate-clear")) {
                        this.clear();
                        return;
                    }

                    this.toggle();
                }.bind(this);

                button.addEventListener("click", handler);
                this.bound["button-" + Object.keys(this.bound).length] = {
                    element: button,
                    type: "click",
                    handler: handler
                };
            }.bind(this));
        }

        buildDropdown() {
            const dropdown = createElement("div", "bootstrap-pickadate-dropdown card shadow", {
                role: "dialog",
                "aria-modal": "false",
                "aria-label": "Date picker"
            });
            const body = createElement("div", "card-body p-2 bootstrap-pickadate-calendar");
            const header = createElement("div", "bootstrap-pickadate-header d-flex align-items-center gap-1 mb-2");
            const previousYear = this.createNavigationButton("bi-chevron-double-left", "previousYear", -12);
            const previousMonth = this.createNavigationButton("bi-chevron-left", "previousMonth", -1);
            const monthSelect = createElement("select", "form-select form-select-sm bootstrap-pickadate-month");
            const yearSelect = createElement("select", "form-select form-select-sm bootstrap-pickadate-year");
            const nextMonth = this.createNavigationButton("bi-chevron-right", "nextMonth", 1);
            const nextYear = this.createNavigationButton("bi-chevron-double-right", "nextYear", 12);
            const monthsWrapper = createElement("div", this.isIntervalMode() ? "bootstrap-pickadate-months d-flex flex-column flex-md-row gap-2" : "bootstrap-pickadate-months");
            const footer = createElement("div", "bootstrap-pickadate-footer d-flex justify-content-between gap-1 mt-2");

            dropdown.dataset.bsPickadateOwner = this.inputId;
            monthSelect.addEventListener("pointerdown", function() {
                this.populateMonthSelect(true);
            }.bind(this));
            monthSelect.addEventListener("focus", function() {
                this.populateMonthSelect(true);
            }.bind(this));
            monthSelect.addEventListener("blur", function() {
                this.populateMonthSelect(false);
            }.bind(this));
            monthSelect.addEventListener("change", function(event) {
                event.preventDefault();
                this.setViewMonth(parseInt(monthSelect.value, 10));
                this.populateMonthSelect(false);
            }.bind(this));
            yearSelect.addEventListener("change", function(event) {
                event.preventDefault();
                this.setViewYear(parseInt(yearSelect.value, 10));
            }.bind(this));

            header.appendChild(previousYear);
            header.appendChild(previousMonth);
            header.appendChild(monthSelect);
            header.appendChild(yearSelect);
            header.appendChild(nextMonth);
            header.appendChild(nextYear);
            body.appendChild(header);
            body.appendChild(monthsWrapper);
            body.appendChild(footer);
            dropdown.appendChild(body);
            document.body.appendChild(dropdown);

            this.elements.dropdown = dropdown;
            this.elements.body = body;
            this.elements.header = header;
            this.elements.monthSelect = monthSelect;
            this.elements.yearSelect = yearSelect;
            this.elements.monthsWrapper = monthsWrapper;
            this.elements.footer = footer;
            this.createCalendarPanel(0);

            if (this.isIntervalMode()) {
                this.createCalendarPanel(1);
            }

            this.buildFooter();
            this.updateLocaleText();
            this.updateCalendar();
        }

        createCalendarPanel(offset) {
            const panel = createElement("div", "bootstrap-pickadate-month-panel flex-fill");
            const title = createElement("div", this.isIntervalMode() ? "bootstrap-pickadate-month-title text-center fw-semibold small mb-1" : "bootstrap-pickadate-month-title text-center fw-semibold small mb-1 d-none");
            const table = createElement("table", "table table-sm mb-0 bootstrap-pickadate-table");
            const thead = createElement("thead");
            const tbody = createElement("tbody");
            const weekdaysRow = createElement("tr");
            const buttons = [];

            thead.appendChild(weekdaysRow);

            for (let row = 0; row < 6; row++) {
                const tr = createElement("tr");

                for (let col = 0; col < 7; col++) {
                    const td = createElement("td", "text-center p-0");
                    const button = createElement("button", "btn btn-sm bootstrap-pickadate-day", {
                        type: "button"
                    });

                    button.addEventListener("click", function(event) {
                        event.preventDefault();
                        event.stopPropagation();
                        this.handleDayClick(button);
                    }.bind(this));

                    button.addEventListener("mouseenter", function() {
                        this.handleDayHover(button);
                    }.bind(this));

                    button.addEventListener("mouseleave", function() {
                        this.handleDayHover(null);
                    }.bind(this));
                    buttons.push(button);
                    this.dayButtons.push(button);
                    td.appendChild(button);
                    tr.appendChild(td);
                }

                tbody.appendChild(tr);
            }

            table.appendChild(thead);
            table.appendChild(tbody);
            panel.appendChild(title);
            panel.appendChild(table);
            this.elements.monthsWrapper.appendChild(panel);
            this.months.push({
                offset: offset,
                panel: panel,
                title: title,
                weekdaysRow: weekdaysRow,
                buttons: buttons
            });
        }


        createNavigationButton(iconName, labelKey, deltaMonths) {
            const label = this.locale[labelKey] || labelKey;
            const button = createElement("button", "btn btn-sm btn-outline-secondary bootstrap-pickadate-nav", {
                type: "button",
                "aria-label": label,
                title: label,
                "data-bs-pickadate-navigation": String(deltaMonths)
            });
            const icon = createElement("i", "bi " + iconName);

            button.appendChild(icon);
            button.addEventListener("click", function(event) {
                event.preventDefault();
                event.stopPropagation();
                this.moveMonth(deltaMonths);
            }.bind(this));

            return button;
        }

        buildFooter() {
            const footer = this.elements.footer;

            footer.innerHTML = "";

            if (this.options.todayButton) {
                const todayButton = createElement("button", "btn btn-sm btn-outline-secondary", {
                    type: "button",
                    "data-bs-pickadate-action": "today"
                }, this.locale.today || "Today");

                todayButton.addEventListener("click", function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.today();
                }.bind(this));
                footer.appendChild(todayButton);
                this.elements.todayButton = todayButton;
            }

            footer.appendChild(createElement("span", "flex-grow-1"));

            if (this.options.clearButton) {
                const clearButton = createElement("button", "btn btn-sm btn-outline-secondary", {
                    type: "button",
                    "data-bs-pickadate-action": "clear"
                }, this.locale.clear || "Clear");

                clearButton.addEventListener("click", function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.clear();
                }.bind(this));
                footer.appendChild(clearButton);
                this.elements.clearButton = clearButton;
            }

            if (this.options.closeButton) {
                const closeButton = createElement("button", "btn btn-sm btn-outline-secondary", {
                    type: "button",
                    "data-bs-pickadate-action": "close"
                }, this.locale.close || "Close");

                closeButton.addEventListener("click", function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.close();
                }.bind(this));
                footer.appendChild(closeButton);
                this.elements.closeButton = closeButton;
            }
        }

        updateLocaleText() {
            const firstDay = parseInt(this.locale.firstDay || 0, 10);
            const monthSelect = this.elements.monthSelect;
            const yearSelect = this.elements.yearSelect;

            this.months.forEach(function(month) {
                month.weekdaysRow.innerHTML = "";

                for (let index = 0; index < 7; index++) {
                    const dayIndex = (firstDay + index) % 7;
                    const header = createElement("th", "text-center fw-normal", {
                        scope: "col",
                        title: this.locale.weekdays[dayIndex]
                    }, this.locale.weekdaysShort[dayIndex]);

                    month.weekdaysRow.appendChild(header);
                }
            }.bind(this));

            monthSelect.setAttribute("aria-label", this.locale.selectMonth || "Select a month");
            this.populateMonthSelect(false);

            yearSelect.setAttribute("aria-label", this.locale.selectYear || "Select a year");
            this.updateNavigationLabels();
            this.updateFooterLabels();
        }


        populateMonthSelect(useFullLabels) {
            const monthSelect = this.elements.monthSelect;
            const value = monthSelect.value || String(this.viewDate.getMonth());

            monthSelect.innerHTML = "";

            this.locale.months.forEach(function(month, index) {
                monthSelect.appendChild(createElement("option", "", {
                    value: String(index),
                    title: month
                }, formatMonthSelectOption(index, this.locale, useFullLabels)));
            }.bind(this));

            monthSelect.value = value;
        }

        updateNavigationLabels() {
            const buttons = this.elements.header.querySelectorAll("[data-bs-pickadate-navigation]");

            Array.prototype.forEach.call(buttons, function(button) {
                const delta = parseInt(button.getAttribute("data-bs-pickadate-navigation"), 10);
                let label = "";

                if (delta === -12) {
                    label = this.locale.previousYear || "Previous year";
                } else if (delta === -1) {
                    label = this.locale.previousMonth || "Previous month";
                } else if (delta === 1) {
                    label = this.locale.nextMonth || "Next month";
                } else if (delta === 12) {
                    label = this.locale.nextYear || "Next year";
                }

                button.setAttribute("aria-label", label);
                button.setAttribute("title", label);
            }.bind(this));
        }

        updateFooterLabels() {
            if (this.elements.todayButton) {
                this.elements.todayButton.textContent = this.locale.today || "Today";
            }

            if (this.elements.clearButton) {
                this.elements.clearButton.textContent = this.locale.clear || "Clear";
            }

            if (this.elements.closeButton) {
                this.elements.closeButton.textContent = this.locale.close || "Close";
            }
        }

        handleKeydown(event) {
            if (event.key === "Escape") {
                event.preventDefault();
                this.close();
                return;
            }

            if (event.key === "ArrowDown") {
                event.preventDefault();
                this.open();
                return;
            }

            if (event.key === "Enter") {
                event.preventDefault();
                this.handleInputChange();
                this.close();
            }
        }

        handleInputChange() {
            if (this.silent) {
                return;
            }

            const value = this.input.value.trim();

            if (!value) {
                this.clear();
                return;
            }

            if (this.isIntervalMode()) {
                const parsed = this.parseIntervalValue(value);

                if (parsed[0]) {
                    this.value(dateToIso(parsed[0]) + "/" + dateToIso(parsed[1]));
                    return;
                }
            }

            const date = parseDateText(value, this.locale, this.getFormat());

            if (date && this.isSelectable(date)) {
                this.selectDate(date);
                return;
            }

            this.syncInput(false);
        }

        handleDocumentMouseDown(event) {
            if (!this.elements.dropdown) {
                return;
            }

            if (event.target === this.input || this.elements.dropdown.contains(event.target)) {
                return;
            }

            const inputGroup = this.input.closest(".input-group");

            if (inputGroup && inputGroup.contains(event.target)) {
                return;
            }

            this.close();
        }

        getFormat() {
            return this.options.format || this.locale.format || "dd/mm/yyyy";
        }

        getEffectiveMinDate() {
            return maxDate(this.baseMinDate, this.runtimeMinDate);
        }

        getEffectiveMaxDate() {
            return minDate(this.baseMaxDate, this.runtimeMaxDate);
        }

        isSelectable(date) {
            const min = this.getEffectiveMinDate();
            const max = this.getEffectiveMaxDate();

            if (min && compareDates(date, min) < 0) {
                return false;
            }

            if (max && compareDates(date, max) > 0) {
                return false;
            }

            return true;
        }

        toggle() {
            if (this.isOpen) {
                this.close();
                return;
            }

            this.open();
        }

        open() {
            if (this.destroyed || this.input.disabled || this.input.hasAttribute("disabled")) {
                return;
            }

            this.isOpen = true;
            this.updateCalendar();
            this.positionDropdown();
            this.elements.dropdown.classList.add("show");
            document.addEventListener("mousedown", this.bound.documentMouseDown);
            window.addEventListener("resize", this.bound.resize);
            window.addEventListener("scroll", this.bound.scroll, true);
        }

        close() {
            if (!this.isOpen) {
                return;
            }

            this.isOpen = false;
            this.elements.dropdown.classList.remove("show");
            document.removeEventListener("mousedown", this.bound.documentMouseDown);
            window.removeEventListener("resize", this.bound.resize);
            window.removeEventListener("scroll", this.bound.scroll, true);
        }

        positionDropdown() {
            if (!this.elements.dropdown || !this.isOpen) {
                return;
            }

            const rect = this.input.getBoundingClientRect();
            const group = this.input.closest(".input-group");
            const groupRect = group ? group.getBoundingClientRect() : rect;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const defaultWidth = this.isIntervalMode() ? "min(43rem, calc(100vw - 1rem))" : "22rem";
            const dropdownWidth = this.options.dropdownWidth || defaultWidth;

            this.elements.dropdown.style.width = dropdownWidth;

            const viewportPadding = 8;
            const dropdownWidthPixels = this.elements.dropdown.offsetWidth || groupRect.width;
            const maximumLeft = scrollLeft + window.innerWidth - dropdownWidthPixels - viewportPadding;
            const preferredLeft = groupRect.left + scrollLeft;
            const left = Math.max(scrollLeft + viewportPadding, Math.min(preferredLeft, maximumLeft));

            this.elements.dropdown.style.left = left + "px";

            const dropdownHeight = this.elements.dropdown.offsetHeight || 360;
            const belowTop = groupRect.bottom + scrollTop + 4;
            const aboveTop = groupRect.top + scrollTop - dropdownHeight - 4;
            const hasSpaceBelow = groupRect.bottom + dropdownHeight + 8 <= window.innerHeight;

            this.elements.dropdown.style.top = (hasSpaceBelow || aboveTop < scrollTop ? belowTop : aboveTop) + "px";
        }

        updateCalendar() {
            this.updateYearOptions();
            this.elements.monthSelect.value = String(this.viewDate.getMonth());
            this.elements.yearSelect.value = String(this.viewDate.getFullYear());
            this.elements.dropdown.dir = this.locale.direction || "ltr";

            const firstDay = parseInt(this.locale.firstDay || 0, 10);

            this.months.forEach(function(month) {
                const monthDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + month.offset, 1);
                const gridStart = this.getGridStart(firstDay, monthDate);

                month.title.textContent = this.locale.months[monthDate.getMonth()] + " " + monthDate.getFullYear();

                for (let index = 0; index < DAY_COUNT; index++) {
                    const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + index);
                    this.updateDayButton(month.buttons[index], date, monthDate, month.offset);
                }
            }.bind(this));

            this.positionDropdown();
        }


        updateYearOptions() {
            const currentYear = this.viewDate.getFullYear();
            const min = this.getEffectiveMinDate();
            const max = this.getEffectiveMaxDate();
            const minYear = min ? min.getFullYear() : currentYear - this.options.yearRange;
            const maxYear = max ? max.getFullYear() : currentYear + this.options.yearRange;
            const yearSelect = this.elements.yearSelect;

            if (yearSelect.dataset.minYear === String(minYear) && yearSelect.dataset.maxYear === String(maxYear)) {
                return;
            }

            yearSelect.innerHTML = "";
            yearSelect.dataset.minYear = String(minYear);
            yearSelect.dataset.maxYear = String(maxYear);

            for (let year = minYear; year <= maxYear; year++) {
                yearSelect.appendChild(createElement("option", "", {
                    value: String(year)
                }, String(year)));
            }
        }

        getGridStart(firstDay, viewDate) {
            const usedViewDate = viewDate || this.viewDate;
            const firstOfMonth = new Date(usedViewDate.getFullYear(), usedViewDate.getMonth(), 1);
            const offset = (firstOfMonth.getDay() - firstDay + 7) % 7;

            return new Date(usedViewDate.getFullYear(), usedViewDate.getMonth(), 1 - offset);
        }


        updateDayButton(button, date, monthDate, monthOffset) {
            const iso = dateToIso(date);
            const usedMonthDate = monthDate || this.viewDate;
            const usedMonthOffset = Number.isInteger(monthOffset) ? monthOffset : 0;
            const isCurrentMonth = date.getFullYear() === usedMonthDate.getFullYear() && date.getMonth() === usedMonthDate.getMonth();
            const isHiddenIntervalOverlap = this.isHiddenIntervalOverlapDay(date, usedMonthDate, usedMonthOffset);
            const isSelected = !this.isIntervalMode() && this.selectedDate && compareDates(date, this.selectedDate) === 0;
            const intervalRange = this.getVisibleIntervalRange();
            const isIntervalStart = this.isIntervalMode() && this.intervalStartDate && compareDates(date, this.intervalStartDate) === 0;
            const isIntervalEnd = this.isIntervalMode() && this.intervalEndDate && compareDates(date, this.intervalEndDate) === 0;
            const isInInterval = intervalRange.start && intervalRange.end && compareDates(date, intervalRange.start) >= 0 && compareDates(date, intervalRange.end) <= 0;
            const isPreviewInterval = this.isIntervalMode() && !this.intervalEndDate && this.intervalHoverDate && isInInterval;
            const isToday = compareDates(date, new Date()) === 0;
            const selectable = this.isSelectable(date);
            const classes = ["btn", "btn-sm", "bootstrap-pickadate-day"];

            if (isSelected || isInInterval) {
                classes.push("btn-primary");
            } else if (isToday) {
                classes.push("btn-outline-primary");
            } else {
                classes.push("btn-outline-secondary");
            }

            if (isIntervalStart) {
                classes.push("bootstrap-pickadate-interval-start");
            }

            if (isIntervalEnd) {
                classes.push("bootstrap-pickadate-interval-end");
            }

            if (isInInterval) {
                classes.push("bootstrap-pickadate-in-range");
            }

            if (isPreviewInterval) {
                classes.push("bootstrap-pickadate-preview-range");
            }

            if (!isCurrentMonth) {
                classes.push("bootstrap-pickadate-other-month");
            }

            if (isHiddenIntervalOverlap) {
                classes.push("bootstrap-pickadate-hidden-overlap");
            }

            button.className = classes.join(" ");
            button.textContent = String(date.getDate());
            button.dataset.bsPickadateDate = iso;
            button.setAttribute("aria-label", formatDate(date, this.locale, this.getFormat()));
            button.disabled = !selectable || isHiddenIntervalOverlap;
            button.tabIndex = isHiddenIntervalOverlap ? -1 : 0;
            button.setAttribute("aria-hidden", isHiddenIntervalOverlap ? "true" : "false");
        }

        isHiddenIntervalOverlapDay(date, monthDate, monthOffset) {
            if (!this.isIntervalMode()) {
                return false;
            }

            if (monthOffset === 0) {
                const nextMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 1);

                return date.getFullYear() === nextMonth.getFullYear() && date.getMonth() === nextMonth.getMonth();
            }

            if (monthOffset === 1) {
                const previousMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() - 1, 1);

                return date.getFullYear() === previousMonth.getFullYear() && date.getMonth() === previousMonth.getMonth();
            }

            return false;
        }

        getVisibleIntervalRange() {
            if (!this.isIntervalMode() || !this.intervalStartDate) {
                return {
                    start: null,
                    end: null
                };
            }

            if (this.intervalEndDate) {
                return {
                    start: this.intervalStartDate,
                    end: this.intervalEndDate
                };
            }

            if (!this.intervalHoverDate) {
                return {
                    start: this.intervalStartDate,
                    end: this.intervalStartDate
                };
            }

            if (compareDates(this.intervalHoverDate, this.intervalStartDate) < 0) {
                return {
                    start: this.intervalHoverDate,
                    end: this.intervalStartDate
                };
            }

            return {
                start: this.intervalStartDate,
                end: this.intervalHoverDate
            };
        }


        updateDayStatesOnly() {
            if (this.isIntervalMode()) {
                this.updateCalendar();
                return;
            }

            for (let index = 0; index < this.dayButtons.length; index++) {
                const button = this.dayButtons[index];
                const date = isoToDate(button.dataset.bsPickadateDate);

                if (date) {
                    this.updateDayButton(button, date);
                }
            }
        }


        handleDayHover(button) {
            if (!this.isIntervalMode() || !this.intervalStartDate || this.intervalEndDate) {
                return;
            }

            const date = button ? isoToDate(button.dataset.bsPickadateDate) : null;

            if (date && !this.isSelectable(date)) {
                return;
            }

            const oldValue = dateToIso(this.intervalHoverDate);
            const newValue = dateToIso(date);

            if (oldValue === newValue) {
                return;
            }

            this.intervalHoverDate = cloneDate(date);
            this.updateDayStatesOnly();
        }


        handleDayClick(button) {
            const date = isoToDate(button.dataset.bsPickadateDate);

            if (!date) {
                return;
            }

            if (this.isIntervalMode()) {
                this.selectIntervalDate(date);
                return;
            }

            this.selectDate(date, false, this.options.autoClose);

            if (this.options.autoClose) {
                this.close();
            }
        }

        selectIntervalDate(date) {
            if (!date || !this.isSelectable(date)) {
                return this;
            }

            if (!this.intervalStartDate || this.intervalEndDate) {
                this.intervalStartDate = cloneDate(date);
                this.intervalEndDate = null;
                this.intervalHoverDate = null;
                this.viewDate = new Date(date.getFullYear(), date.getMonth(), 1);
                this.syncInput(true);
                this.updateCalendar();
                return this;
            }

            if (compareDates(date, this.intervalStartDate) < 0) {
                this.intervalEndDate = cloneDate(this.intervalStartDate);
                this.intervalStartDate = cloneDate(date);
            } else {
                this.intervalEndDate = cloneDate(date);
            }

            this.intervalHoverDate = null;
            this.syncInput(true);
            this.updateDayStatesOnly();

            if (this.options.autoClose) {
                this.close();
            }

            return this;
        }


        setViewMonth(month) {
            if (!Number.isInteger(month)) {
                return;
            }

            this.viewDate = new Date(this.viewDate.getFullYear(), month, 1);
            this.updateCalendar();
        }

        setViewYear(year) {
            if (!Number.isInteger(year)) {
                return;
            }

            this.viewDate = new Date(year, this.viewDate.getMonth(), 1);
            this.updateCalendar();
        }

        moveMonth(delta) {
            this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + delta, 1);
            this.updateCalendar();
        }

        moveYear(delta) {
            this.moveMonth(delta * 12);
        }

        selectDate(date, skipRangeSync, skipRender) {
            if (!date || !this.isSelectable(date)) {
                return this;
            }

            const oldValue = dateToIso(this.selectedDate);
            this.selectedDate = cloneDate(date);
            this.viewDate = cloneDate(date);
            const changed = this.syncInput(false);

            if (changed || oldValue !== dateToIso(this.selectedDate)) {
                this.dispatchChange();
            }

            if (!skipRangeSync) {
                this.syncRangePair();
            }

            if (this.isOpen && !skipRender) {
                this.updateCalendar();
            } else if (this.isOpen) {
                this.updateDayStatesOnly();
            }

            return this;
        }

        syncInput(dispatchChange) {
            let iso = "";
            let visibleValue = "";

            if (this.isIntervalMode()) {
                const startIso = dateToIso(this.intervalStartDate);
                const endIso = dateToIso(this.intervalEndDate);
                iso = this.getIntervalValue();

                if (this.intervalStartDate && this.intervalEndDate) {
                    visibleValue = formatDate(this.intervalStartDate, this.locale, this.getFormat()) + this.options.intervalSeparator + formatDate(this.intervalEndDate, this.locale, this.getFormat());
                } else if (this.intervalStartDate) {
                    visibleValue = formatDate(this.intervalStartDate, this.locale, this.getFormat()) + this.options.intervalSeparator;
                }

                if (this.hiddenStartInput) {
                    this.hiddenStartInput.value = startIso;
                }

                if (this.hiddenEndInput) {
                    this.hiddenEndInput.value = endIso;
                }
            } else {
                iso = dateToIso(this.selectedDate);
                visibleValue = this.selectedDate ? formatDate(this.selectedDate, this.locale, this.getFormat()) : "";
            }

            const changed = iso !== this.lastValue;

            this.silent = true;
            this.input.value = visibleValue;
            this.input.dataset.bsPickadateValue = iso;

            if (this.hiddenInput) {
                this.hiddenInput.value = iso;
            }

            this.lastValue = iso;
            this.silent = false;

            if (dispatchChange && changed) {
                this.dispatchChange();
            }

            return changed;
        }


        dispatchChange() {
            const inputEvent = new Event("input", {
                bubbles: true
            });
            const changeEvent = new Event("change", {
                bubbles: true
            });

            this.input.dispatchEvent(inputEvent);
            this.input.dispatchEvent(changeEvent);

            if (this.hiddenInput) {
                this.hiddenInput.dispatchEvent(inputEvent);
                this.hiddenInput.dispatchEvent(changeEvent);
            }

            if (this.hiddenStartInput) {
                this.hiddenStartInput.dispatchEvent(inputEvent);
                this.hiddenStartInput.dispatchEvent(changeEvent);
            }

            if (this.hiddenEndInput) {
                this.hiddenEndInput.dispatchEvent(inputEvent);
                this.hiddenEndInput.dispatchEvent(changeEvent);
            }
        }

        clear(skipRangeSync) {
            const changed = Boolean(this.selectedDate || this.intervalStartDate || this.intervalEndDate || this.lastValue);
            this.selectedDate = null;
            this.intervalStartDate = null;
            this.intervalEndDate = null;
            this.intervalHoverDate = null;
            this.syncInput(false);

            if (changed) {
                this.dispatchChange();
            }

            if (!skipRangeSync && !this.isIntervalMode()) {
                this.syncRangePair();
            }

            if (this.isOpen) {
                this.updateDayStatesOnly();
            }

            return this;
        }


        today() {
            const today = startOfDay(new Date());

            if (this.isIntervalMode()) {
                if (this.isSelectable(today)) {
                    this.selectIntervalDate(today);
                } else {
                    this.viewDate = new Date(today.getFullYear(), today.getMonth(), 1);

                    if (this.isOpen) {
                        this.updateCalendar();
                    }
                }

                return this;
            }

            if (this.isSelectable(today)) {
                this.selectDate(today, false, this.options.autoClose);

                if (this.options.autoClose) {
                    this.close();
                }
            } else {
                this.viewDate = today;

                if (this.isOpen) {
                    this.updateCalendar();
                }
            }

            return this;
        }


        value(value) {
            if (value === undefined) {
                return this.isIntervalMode() ? this.getIntervalValue() : dateToIso(this.selectedDate);
            }

            if (value === null || value === "") {
                return this.clear();
            }

            if (this.isIntervalMode()) {
                const parsed = this.parseIntervalValue(value);

                if (parsed[0] && this.isSelectable(parsed[0])) {
                    this.intervalStartDate = parsed[0];
                    this.intervalHoverDate = null;
                    this.viewDate = new Date(parsed[0].getFullYear(), parsed[0].getMonth(), 1);
                }

                if (parsed[1] && this.isSelectable(parsed[1])) {
                    this.intervalEndDate = parsed[1];
                    this.intervalHoverDate = null;
                }

                if (this.intervalStartDate && this.intervalEndDate && compareDates(this.intervalEndDate, this.intervalStartDate) < 0) {
                    const temporary = this.intervalStartDate;
                    this.intervalStartDate = this.intervalEndDate;
                    this.intervalEndDate = temporary;
                }

                this.syncInput(true);

                if (this.isOpen) {
                    this.updateCalendar();
                }

                return this;
            }

            const date = isString(value) ? isoToDate(value) : value;

            if (date && this.isSelectable(date)) {
                return this.selectDate(date);
            }

            return this;
        }


        setMin(value) {
            this.runtimeMinDate = value ? isoToDate(value) || cloneDate(value) : null;
            this.enforceBounds();

            if (this.isOpen) {
                this.updateCalendar();
            }

            return this;
        }

        setMax(value) {
            this.runtimeMaxDate = value ? isoToDate(value) || cloneDate(value) : null;
            this.enforceBounds();

            if (this.isOpen) {
                this.updateCalendar();
            }

            return this;
        }

        enforceBounds() {
            if (this.selectedDate && !this.isSelectable(this.selectedDate)) {
                this.clear(true);
            }
        }

        getRangePairInstance() {
            if (!this.options.rangePair) {
                return null;
            }

            const pairInput = document.querySelector(this.options.rangePair);

            if (!pairInput) {
                return null;
            }

            if (!pairInput[COMPONENT_PROPERTY] && pairInput.classList.contains("bootstrap-pickadate")) {
                new bsPickadate(pairInput);
            }

            return pairInput[COMPONENT_PROPERTY] || null;
        }

        syncRangePair() {
            const pair = this.getRangePairInstance();

            if (!pair) {
                return;
            }

            const role = String(this.options.rangeRole || "").toLowerCase();
            const value = dateToIso(this.selectedDate);

            if (role === "start") {
                pair.setMin(value || null);

                if (this.selectedDate && pair.selectedDate && compareDates(pair.selectedDate, this.selectedDate) < 0) {
                    pair.clear(true);
                }
            }

            if (role === "end") {
                pair.setMax(value || null);

                if (this.selectedDate && pair.selectedDate && compareDates(pair.selectedDate, this.selectedDate) > 0) {
                    pair.clear(true);
                }
            }
        }

        refreshLocale(locale) {
            this.localeCode = this.resolveLocaleCode(locale || this.options.locale, this.options.defaultLocale);
            this.locale = getLocale(this.localeCode, this.options.defaultLocale);
            this.syncInput(false);
            this.updateLocaleText();
            this.updateCalendar();

            return this;
        }

        refresh() {
            this.options = mergeOptions(this.options, this.readDataOptions());
            this.options.todayButton = toBoolean(this.options.todayButton, true);
            this.options.clearButton = toBoolean(this.options.clearButton, true);
            this.options.closeButton = toBoolean(this.options.closeButton, true);
            this.options.autoClose = toBoolean(this.options.autoClose, true);
            this.options.readonly = toBoolean(this.options.readonly, false);
            this.options.yearRange = normaliseYearRange(this.options.yearRange);
            this.options.mode = this.options.mode === INTERVAL_MODE ? INTERVAL_MODE : "single";
            this.localeCode = this.resolveLocaleCode(this.options.locale, this.options.defaultLocale);
            this.locale = getLocale(this.localeCode, this.options.defaultLocale);
            this.baseMinDate = isoToDate(this.options.min);
            this.baseMaxDate = isoToDate(this.options.max);
            this.hiddenInput = this.findHiddenInput();
            this.hiddenStartInput = this.findTargetInput(this.options.hiddenStartTarget);
            this.hiddenEndInput = this.findTargetInput(this.options.hiddenEndTarget);
            this.buildFooter();
            this.updateLocaleText();
            this.updateCalendar();

            return this;
        }

        destroy() {
            this.close();
            this.destroyed = true;
            this.input.removeEventListener("focus", this.bound.focus);
            this.input.removeEventListener("click", this.bound.click);
            this.input.removeEventListener("change", this.bound.change);
            this.input.removeEventListener("keydown", this.bound.keydown);

            Object.keys(this.bound).forEach(function(key) {
                const binding = this.bound[key];

                if (binding && binding.element && binding.type && binding.handler) {
                    binding.element.removeEventListener(binding.type, binding.handler);
                }
            }.bind(this));

            if (this.elements.dropdown && this.elements.dropdown.parentNode) {
                this.elements.dropdown.parentNode.removeChild(this.elements.dropdown);
            }

            this.unregister();
            return this.input;
        }

        static registerLocale(locale, settings) {
            const canonical = canonicalLocale(locale);

            if (!canonical || !settings) {
                return;
            }

            const merged = mergeOptions(defaultEnglishLocale, settings, {
                code: canonical
            });

            window.bootstrapPickadateLocales[canonical] = merged;

            const base = baseLocale(canonical);

            if (base && !window.bootstrapPickadateLocales[base]) {
                window.bootstrapPickadateLocales[base] = merged;
            }
        }

        static hasLocale(locale) {
            const candidates = localeCandidates(locale, bsPickadate.defaultLocale);

            for (let index = 0; index < candidates.length; index++) {
                if (window.bootstrapPickadateLocales[candidates[index]]) {
                    return true;
                }
            }

            return false;
        }

        static getLocale(locale, defaultLocale) {
            return getLocale(locale, defaultLocale);
        }

        static localeCandidates(locale, defaultLocale) {
            return localeCandidates(locale, defaultLocale);
        }

        static setDefaultLocale(locale) {
            bsPickadate.defaultLocale = canonicalLocale(locale) || DEFAULT_LOCALE;
        }

        static refreshAll(locale) {
            Object.keys(window.FORM.pickadate || {}).forEach(function(key) {
                const instance = window.FORM.pickadate[key];

                if (instance && typeof instance.refreshLocale === "function") {
                    instance.refreshLocale(locale || "current");
                }
            });
        }

        static initialise(selector, options) {
            const elements = document.querySelectorAll(selector || "input.bootstrap-pickadate");
            const instances = [];

            Array.prototype.forEach.call(elements, function(element) {
                if (!element[COMPONENT_PROPERTY]) {
                    instances.push(new bsPickadate(element, options || {}));
                } else {
                    instances.push(element[COMPONENT_PROPERTY]);
                }
            });

            return instances;
        }
    }

    bsPickadate.defaultLocale = DEFAULT_LOCALE;
    bsPickadate.version = "5.3.0-alpha.3";

    function initialiseInput(input) {
        if (!input || input[COMPONENT_PROPERTY]) {
            return;
        }

        new bsPickadate(input);
    }

    function initialiseDocument() {
        const inputs = document.querySelectorAll("input.bootstrap-pickadate");

        Array.prototype.forEach.call(inputs, initialiseInput);
    }

    document.addEventListener("DOMContentLoaded", initialiseDocument);
    document.addEventListener("animationstart", function(event) {
        if (event.animationName === INSERTED_ANIMATION && event.target && event.target.matches("input.bootstrap-pickadate")) {
            initialiseInput(event.target);
        }
    });

    window.bsPickadate = bsPickadate;
})(window, document);

// END OF FILE
