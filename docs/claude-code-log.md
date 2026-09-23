# Claude Code / AI Usage Log

## Purpose

This document records the AI-assisted development used during the QA automation assessment. Each interaction includes the problem considered, the AI assistance received, and the human judgment applied before accepting or modifying the suggestion.

---

## Interaction 1 — Playwright Framework Setup

### Prompt / Task

I needed to create an automated QA framework for the Techdome website using Playwright and TypeScript, with separate coverage for E2E, integration, security, and load testing.

### AI Output / Assistance

The AI suggested a Playwright project structure with:

* `tests/E2E/`
* `tests/security/`
* `tests/load/`
* `docs/`
* Playwright configuration
* GitHub Actions CI configuration

### My Judgment Call

I reviewed the proposed structure against the assessment requirements rather than accepting it blindly. I kept the test categories separate and verified that the tests were focused on actual Techdome website functionality.

---

## Interaction 2 — E2E Test Design

### Prompt / Task

I needed to identify meaningful user journeys on the Techdome website and automate them using Playwright.

### AI Output / Assistance

The AI suggested E2E scenarios covering:

* Homepage navigation
* Company navigation
* Blog/Insights
* Case Studies
* Contact and scheduling
* Mobile responsiveness

### My Judgment Call

I selected scenarios based on actual functionality available on the Techdome website. I did not use generic test cases such as only checking that a page opens. I also included user-facing workflows such as searching Case Studies and scheduling a call.

---

## Interaction 3 — Security Test Design

### Prompt / Task

I needed security-focused automated checks for the assessment.

### AI Output / Assistance

The AI suggested checking:

* Script injection through user input
* HTTP security headers
* Safe handling of potentially malicious input

### My Judgment Call

I kept the tests limited to safe, non-destructive security validation. I verified that the tests were relevant to the application's forms and HTTP responses rather than adding unrelated security tests.

---

## Interaction 4 — Load Test Constraint

### Prompt / Task

I needed to implement the assessment's load-testing requirement without exceeding the specified concurrency.

### AI Output / Assistance

The AI recommended using Playwright to simulate exactly 5 concurrent users and measure page response times and HTTP failures.

### My Judgment Call

I specifically checked the concurrency value because the assessment requires exactly 5 concurrent users. I did not increase the number of users for a larger stress test because doing so would violate the assessment constraint. I also documented response times, HTTP status results, and the p95 threshold in `docs/load-test-results.md`.

---

## Interaction 5 — CI / GitHub Actions Troubleshooting

### Prompt / Task

The GitHub Actions Playwright job was taking too long and eventually exceeded the configured job timeout.

### AI Output / Assistance

The AI helped identify that the Playwright configuration was running multiple browser projects and that this increased the CI execution time. It suggested using Chromium for the assessment CI run to keep the execution within the available time.

### My Judgment Call

I ran the Playwright tests locally before changing the CI configuration. The Chromium project completed successfully locally, so I used Chromium for the CI configuration rather than making an unverified change. I also checked that the assessment's required test categories remained represented.

---

## Human Review and Validation

I did not treat AI-generated suggestions as automatically correct.

Before accepting changes, I considered:

* Whether the scenario matched actual Techdome functionality.
* Whether the test was appropriate for its test type.
* Whether the assessment constraints were satisfied.
* Whether the load test stayed at exactly 5 concurrent users.
* Whether failures represented real application behavior or test implementation problems.
* Whether known defects should be documented instead of hidden.
* Whether tests passed locally before changes were committed.

The final implementation reflects human review and decisions rather than unmodified AI-generated output.
