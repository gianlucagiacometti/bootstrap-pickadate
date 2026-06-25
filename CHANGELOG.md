Bootstrap Pickadate
===================

Version 5.3.0 (2026-06-25, Bootstrap 5.3.x)
===========================================

### Added

- Added same-input interval mode with two side-by-side months for booking-style date interval selection.
- Added interval hover preview so users can see the range before choosing the end date.
- Added interval styling for selected start, end, and in-range days.
- Added hidden interval targets:
  - `data-bs-pickadate-hidden-target` for the combined ISO interval value.
  - `data-bs-pickadate-hidden-start-target` for the interval start date.
  - `data-bs-pickadate-hidden-end-target` for the interval end date.
- Added locale-level `monthShortFormat` for compact month selector labels.
- Added compact month selector formatting tokens:
  - `m`
  - `mm`
  - `mmm`
  - `mmmm`
- Added two-month interval layout with duplicated neighbouring-month days hidden at the month boundary.

### Changed

- Refactored the core picker logic so the dropdown, month panels, day buttons, and event bindings are created once and updated in place.
- Improved picker responsiveness by avoiding full dropdown rebuilds during ordinary clicks and navigation.
- Changed interval reset behaviour: after selecting a complete interval, clicking a new date immediately starts a new interval from that date.
- Improved dropdown positioning so the picker uses a compact component width rather than blindly following the input width.
- Improved calendar grid layout with fixed square day cells and consistent horizontal/vertical spacing.
- Improved locale month display in compact controls. For example:
  - English: `Feb 02`
  - Italian: `02 feb`

### Fixed

- Fixed the Close button reopening the picker because focus was returned to the input after closing.
- Fixed delayed click response caused by excessive DOM rebuilding.
- Fixed interval selection visual confusion caused by duplicated adjacent-month days in two-month mode.
- Fixed dropdown/container width mismatches when the input was narrower than the calendar grid.
- Fixed clipped long month names in compact month controls by using locale-configurable short month display.

### Notes

- This version keeps the component focused on date selection only. It does not introduce time picking.
- The plain JavaScript API and data-attribute initialisation remain the primary interface.
- Existing two-input range mode remains supported separately from the new same-input interval mode.
- The global `window.FORM.pickadate` registry is preserved for consistency with the Bootstrap Select component architecture.


Version 5.3.0-alpha.1 (2026-06-24, Bootstrap 5.3.x)
===================================================

- First development checkpoint.
- Single date picker.
- Start/end range support.
- Min/max dates.
- Today, clear, and close controls.
- Month/year navigation.
- Hidden ISO value support.
- Bundled locale files.
- Destroy/reinitialise support.
