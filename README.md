# bootstrap-pickadate

Bootstrap Pickadate is a small date picker for Bootstrap 5.3 and modern browsers.

It is intentionally focused on date selection. It does not provide time picking, recurrence, event scheduling, remote loading, or calendar-application features.

## Requirements

- Bootstrap 5.3.x
- Bootstrap Icons ^1 for the default navigation icons

## Files

Typical package files:

```text
bootstrap-pickadate.css
bootstrap-pickadate.less
bootstrap-pickadate.js
locales/bootstrap-pickadate.<locale>.js
```

Load the CSS first, then Bootstrap, then Bootstrap Pickadate, then any locale files you need.

```html
<link rel="stylesheet" href="bootstrap-pickadate.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="bootstrap-pickadate.js"></script>
<script src="locales/bootstrap-pickadate.it.js"></script>
```

## Basic usage

```html
<label for="event_date_display" class="form-label">Date</label>
<div class="input-group">
    <input
        id="event_date_display"
        type="text"
        class="form-control bootstrap-pickadate"
        data-bs-pickadate-locale="current"
        data-bs-pickadate-hidden-target="#event_date"
    >
    <button class="btn btn-outline-secondary" type="button" data-bs-pickadate-toggle="#event_date_display">
        <i class="bi bi-calendar-date"></i>
    </button>
    <button class="btn btn-outline-secondary" type="button" data-bs-pickadate-clear="#event_date_display">
        <i class="bi bi-x-lg"></i>
    </button>
</div>
<input id="event_date" name="event_date" type="hidden">
```

The visible field uses the active locale format. The hidden field receives an ISO date:

```text
yyyy-mm-dd
```

## Two-input range usage

Use two separate visible inputs when the form needs independent start and end fields.

```html
<input
    id="date_from_display"
    class="form-control bootstrap-pickadate"
    data-bs-pickadate-hidden-target="#date_from"
    data-bs-pickadate-range-role="start"
    data-bs-pickadate-range-pair="#date_to_display"
>
<input id="date_from" name="date_from" type="hidden">

<input
    id="date_to_display"
    class="form-control bootstrap-pickadate"
    data-bs-pickadate-hidden-target="#date_to"
    data-bs-pickadate-range-role="end"
    data-bs-pickadate-range-pair="#date_from_display"
>
<input id="date_to" name="date_to" type="hidden">
```

When the start date changes, the end picker receives that date as its runtime minimum. When the end date changes, the start picker receives that date as its runtime maximum.

## Same-input interval usage

Use interval mode when one field should select a complete date interval, like booking/travel forms.

```html
<input
    id="booking_dates_display"
    class="form-control bootstrap-pickadate"
    data-bs-pickadate-mode="interval"
    data-bs-pickadate-hidden-target="#booking_dates"
    data-bs-pickadate-hidden-start-target="#booking_start"
    data-bs-pickadate-hidden-end-target="#booking_end"
>
<input id="booking_dates" name="booking_dates" type="hidden">
<input id="booking_start" name="booking_start" type="hidden">
<input id="booking_end" name="booking_end" type="hidden">
```

The combined hidden interval value is stored as:

```text
yyyy-mm-dd/yyyy-mm-dd
```

Interval behaviour:

```text
First click: choose start date.
Hover: preview the possible interval.
Second click: choose end date.
Further click after a complete interval: reset and start a new interval immediately.
```

In interval mode the picker shows two side-by-side months. Duplicated overlap days between the first and second month are hidden to avoid visual confusion.

## Data attributes

| Attribute | Description |
|---|---|
| `data-bs-pickadate-mode` | Picker mode. Use `date` for a single date or `interval` for same-input interval selection. Defaults to `date`. |
| `data-bs-pickadate-locale` | Locale code. Use `current` to follow `bsPickadate.defaultLocale`. |
| `data-bs-pickadate-default-locale` | Field-level fallback locale. |
| `data-bs-pickadate-format` | Visible value format override. |
| `data-bs-pickadate-hidden-target` | CSS selector for the hidden ISO date input, or combined interval input in interval mode. |
| `data-bs-pickadate-hidden-start-target` | CSS selector for the interval start ISO input. |
| `data-bs-pickadate-hidden-end-target` | CSS selector for the interval end ISO input. |
| `data-bs-pickadate-min` | Minimum selectable ISO date. |
| `data-bs-pickadate-max` | Maximum selectable ISO date. |
| `data-bs-pickadate-range-role` | `start` or `end` for two-input range mode. |
| `data-bs-pickadate-range-pair` | CSS selector for the paired range input. |
| `data-bs-pickadate-today-button` | `true` or `false`. |
| `data-bs-pickadate-clear-button` | `true` or `false`. |
| `data-bs-pickadate-close-button` | `true` or `false`. |
| `data-bs-pickadate-auto-close` | `true` or `false`. |
| `data-bs-pickadate-dropdown-width` | Optional CSS width for the dropdown. |
| `data-bs-pickadate-year-range` | Number of years shown around the current year when no min/max exists. |

## JavaScript API

```js
const picker = new bsPickadate("event_date_display", {
    locale: "it",
    hiddenTarget: "#event_date",
    min: "2026-01-01",
    max: "2026-12-31"
});

picker.value("2026-06-24");
picker.value();
picker.clear();
picker.today();
picker.open();
picker.close();
picker.setMin("2026-01-01");
picker.setMax("2026-12-31");
picker.destroy();
```

## Locale handling

Locale files register themselves in:

```js
window.bootstrapPickadateLocales
```

The fallback chain is:

```text
selected full locale -> selected base language -> configured default -> en
```

For example:

```text
pt_BR -> pt -> it -> en
```

A website can set the active language after a navbar language change:

```js
bsPickadate.setDefaultLocale("it");
bsPickadate.refreshAll();
```

## Month selector format

Locales can define a compact month label format for the month selector:

```js
monthShortFormat: "mm mmm"
```

Supported tokens:

| Token | Meaning | Example |
|---|---|---|
| `m` | Month number without leading zero | `2` |
| `mm` | Month number with leading zero | `02` |
| `mmm` | Short month name | `Feb`, `feb` |
| `mmmm` | Full month name | `February`, `febbraio` |

Examples:

```js
// English
monthShortFormat: "mmm mm" // Feb 02

// Italian
monthShortFormat: "mm mmm" // 02 feb
```

The full month name is still available to the component for labels and accessibility.

## Global registry

Bootstrap Pickadate keeps active instances in:

```js
window.FORM.pickadate
```

This keeps the component consistent with the Bootstrap Select architecture used in related packages.

## Optional jQuery integration

Bootstrap Pickadate is a plain JavaScript component and does not require jQuery.

If you want a jQuery-style application layer, `gianlucagiacometti/web-toolbox` provides `jquery-bootstrap-pickadate`. The wrapper keeps Bootstrap Pickadate as the underlying component and adds jQuery initialisation plus method-style calls.

```bash
composer require gianlucagiacometti/web-toolbox
```

Suggested script order:

```html
<link rel="stylesheet" href="/assets/bootstrap-pickadate/bootstrap-pickadate.css">
<script src="/assets/jquery/jquery.min.js"></script>
<script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="/assets/bootstrap-pickadate/bootstrap-pickadate.js"></script>
<script src="/assets/bootstrap-pickadate/locales/bootstrap-pickadate.it.js"></script>
<script src="/assets/jquery-bootstrap-pickadate/jquery-bootstrap-pickadate.js"></script>
```

```js
$("input.bootstrap-pickadate").jqueryBootstrapPickadate({
    locale: "current"
});
```

## Versioning

The intended version line follows Bootstrap compatibility:

```text
5.3.x targets Bootstrap 5.3.x
```

Version `5.3.0` introduces the cached-DOM refactor and same-input interval mode.
