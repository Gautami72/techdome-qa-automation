# Bugs Found

## BUG-001 — Homepage Horizontal Overflow on Mobile Viewports

**Severity:** Medium
**Priority:** Medium
**Status:** Open
**Area:** Homepage / Responsive UI
**Tested Browser:** Chromium

### Description

The Techdome homepage has horizontal content overflow when viewed at narrow viewport widths.

The issue was observed during responsive automation testing at:

* 375 × 812
* 768 × 1024

### Steps to Reproduce

1. Open the Techdome homepage.
2. Set the browser viewport width to 375px.
3. Check whether the page content extends beyond the viewport horizontally.
4. Repeat the test with a 768px viewport width.

### Expected Result

The homepage should fit within the available viewport width without unintended horizontal scrolling.

### Actual Result

The homepage has horizontal overflow at the tested viewport widths.

### Impact

Users accessing the website on smaller screens may experience unintended horizontal scrolling, which can make content harder to access and indicates a responsive layout issue.

### Automation Coverage

The issue is covered by:

* `tests/E2E/mobile-375.spec.ts`
* `tests/E2E/mobile-768.spec.ts`

The tests intentionally document the known defect rather than hiding the failure.

### Suggested Investigation

Review the homepage elements whose rendered width exceeds the viewport. Check responsive CSS, fixed-width elements, containers, images, and third-party components for widths that are not adapting to smaller screens.

---

## Bug Summary

| Bug ID  | Area                       | Severity | Status |
| ------- | -------------------------- | -------- | ------ |
| BUG-001 | Homepage responsive layout | Medium   | Open   |
