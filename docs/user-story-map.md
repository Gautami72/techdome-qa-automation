# Techdome QA User Story Map

## Purpose

This story map documents the main user journeys identified on the Techdome website and maps them to the automated QA coverage.

Application under test: https://techdome.io/

---

## US-001 — Explore the Techdome Website

### User Story

As a visitor, I want to navigate through the Techdome website so that I can learn about the company and its services.

### Acceptance Criteria

* Homepage loads successfully.
* Main navigation is accessible.
* Company pages can be opened.
* Users can navigate from the homepage to other important sections.

### Test Type

* E2E
* Functional
* Smoke

### Automation Coverage

* `tests/E2E/homepage.spec.ts`
* `tests/E2E/navigation.spec.ts`

---

## US-002 — Read Techdome Insights

### User Story

As a visitor, I want to access Techdome's insights and blog content so that I can learn more about technology and the company's expertise.

### Acceptance Criteria

* Insights/blog content is accessible.
* A user can open a blog article.
* The selected article loads successfully.

### Test Type

* E2E
* Functional

### Automation Coverage

* `tests/E2E/blogs.spec.ts`

---

## US-003 — Search Case Studies

### User Story

As a visitor, I want to search and clear case-study results so that I can find relevant Techdome projects.

### Acceptance Criteria

* Case Studies page loads.
* Search functionality accepts a search term.
* Results can be displayed.
* Search can be cleared.

### Test Type

* E2E
* Functional

### Automation Coverage

* `tests/E2E/case-studies.spec.ts`

---

## US-004 — Schedule an Architecture Call

### User Story

As a potential customer, I want to schedule an architecture/product discussion so that I can connect with the Techdome team.

### Acceptance Criteria

* Contact page loads.
* Scheduling integration loads successfully.
* Available dates/times can be selected.
* User details can be entered.
* Valid information is accepted.
* Invalid email input is rejected.

### Test Type

* E2E
* Integration
* Validation

### Automation Coverage

* `tests/E2E/contact-scheduling.spec.ts`
* `tests/E2E/form-network.spec.ts`
* `tests/E2E/scheduler-integration.spec.ts`
* `tests/E2E/scheduler-form-integration.spec.ts`
* `tests/E2E/scheduler-validation.spec.ts`

---

## US-005 — Use the Website on Mobile Devices

### User Story

As a mobile visitor, I want the Techdome website to fit my screen so that I can use the website without horizontal scrolling.

### Acceptance Criteria

* Homepage should fit within the viewport.
* Content should not unintentionally overflow horizontally.
* Layout should remain usable at mobile viewport sizes.

### Test Type

* E2E
* Responsive / Mobile

### Automation Coverage

* `tests/E2E/mobile-375.spec.ts`
* `tests/E2E/mobile-768.spec.ts`

### Known Observation

Horizontal overflow was observed at the tested mobile viewport sizes. This is documented separately in `docs/bugs.md`.

---

## US-006 — Protect User Input

### User Story

As a website user, I want my input to be handled safely so that unexpected scripts are not executed.

### Acceptance Criteria

* Script-like input should not execute as JavaScript.
* User input should be handled safely by the application.

### Test Type

* Security

### Automation Coverage

* `tests/security/script-injection.spec.ts`

---

## US-007 — Verify Security Headers

### User Story

As a website owner, I want appropriate HTTP security headers so that common browser-based security risks are reduced.

### Acceptance Criteria

* Homepage returns the expected security-related HTTP headers.
* Missing or incorrect headers should be identified by automated checks.

### Test Type

* Security

### Automation Coverage

* `tests/security/security-headers.spec.ts`

---

## US-008 — Handle Concurrent Users

### User Story

As a website owner, I want the website to remain responsive when multiple users access important pages at the same time.

### Acceptance Criteria

* Exactly 5 concurrent users are simulated.
* Homepage is requested by all users.
* Contact page is requested by all users.
* No HTTP 5xx errors should occur.
* p95 response time should remain below 3 seconds.

### Test Type

* Load / Performance

### Automation Coverage

* `tests/load/homepage-load.spec.ts`

### Constraint

The load test intentionally uses exactly 5 concurrent users as required by the assessment.

---

# Test Coverage Summary

| Area                  | Test Coverage            |
| --------------------- | ------------------------ |
| Homepage navigation   | E2E                      |
| Company navigation    | E2E                      |
| Insights / Blog       | E2E                      |
| Case Studies          | E2E                      |
| Contact / Scheduling  | E2E + Integration        |
| Form validation       | Integration / Functional |
| Mobile responsiveness | E2E / Responsive         |
| Script injection      | Security                 |
| Security headers      | Security                 |
| Concurrent users      | Load / Performance       |

# Traceability

Each user story is connected to automated tests so that the expected user behavior can be traced from requirement to implementation and test result.
