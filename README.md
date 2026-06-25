# bootstrap-pickadate

Bootstrap Pickadate is a small date picker for Bootstrap 5.3 and modern browsers.

It is intentionally limited to dates. It does not provide time picking, recurrence, event scheduling, remote loading, or other calendar-application features.

## Requirements

- Bootstrap >= 5.3
- Bootstrap Icons ^1 for the default navigation icons
- Modern browsers with ECMAScript 2017 support

## Files

```text
bootstrap-pickadate.css
bootstrap-pickadate.min.css
bootstrap-pickadate.less
bootstrap-pickadate.js
bootstrap-pickadate.min.js
locales/bootstrap-pickadate.en.js
locales/bootstrap-pickadate.it.js
locales/bootstrap-pickadate.it_IT.js
...
```

There is no `/src` and no `/dist`. The readable files are the source of truth. The `.min` files are generated from them.

## Script order

```html
<link rel="stylesheet" href="/assets/bootstrap-pickadate/bootstrap-pickadate.css">
<script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="/assets/bootstrap-pickadate/bootstrap-pickadate.js"></script>
<script src="/assets/bootstrap-pickadate/locales/bootstrap-pickadate.it.js"></script>
```

The component itself does not require jQuery.

## Basic usage

```html
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
<input id="event_date" name="event_date" type="hidden" value="">
```

The visible field uses the active locale format. In this first checkpoint the bundled locale files default to `dd/mm/yyyy`; the original long pickadate-style format from the uploaded translations is preserved as `longFormat` for future use. The hidden field always receives ISO format:

```text
yyyy-mm-dd
```

## Range usage

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

## Data attributes

| Attribute | Description |
|---|---|
| `data-bs-pickadate-locale` | Locale code. Use `current` to follow `bsPickadate.defaultLocale`. |
| `data-bs-pickadate-default-locale` | Field-level fallback locale. |
| `data-bs-pickadate-format` | Visible value format override. |
| `data-bs-pickadate-hidden-target` | CSS selector for the hidden ISO input. |
| `data-bs-pickadate-min` | Minimum selectable ISO date. |
| `data-bs-pickadate-max` | Maximum selectable ISO date. |
| `data-bs-pickadate-range-role` | `start` or `end`. |
| `data-bs-pickadate-range-pair` | CSS selector for the paired range input. |
| `data-bs-pickadate-today-button` | `true` or `false`. |
| `data-bs-pickadate-clear-button` | `true` or `false`. |
| `data-bs-pickadate-close-button` | `true` or `false`. |
| `data-bs-pickadate-auto-close` | `true` or `false`. |
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

Locale files are bundled under `locales/` and register themselves in:

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

## Minified files

Run:

```bash
npm run build
```

The build script updates the `.min.js` and `.min.css` files in place.

## Versioning

The intended version line follows Bootstrap compatibility:

```text
5.3.x targets Bootstrap 5.3.x
```

This first checkpoint is marked as `5.3.0-alpha.1`.
