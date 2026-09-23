# Techdome QA Automation Assignment

## Overview

This project contains an automated QA test suite for the Techdome website using Playwright with TypeScript.

The framework covers:

* End-to-end (E2E) testing
* Integration testing
* Security testing
* Mobile responsiveness testing
* Load/performance testing

**Application under test:** https://techdome.io/

## Technology Stack

* Playwright
* TypeScript
* Node.js
* GitHub Actions
* Playwright HTML Report

## Test Coverage

The current Chromium suite contains **15 automated tests**.

### E2E Testing

The E2E suite covers:

* Homepage navigation
* Company navigation
* Insights / Blog navigation
* Case Studies search
* Contact and scheduling workflow
* Mobile responsiveness
* Scheduler validation

There are at least **8 E2E-focused tests** covering these user journeys.

### Integration Testing

Integration coverage includes:

* Scheduling integration loading
* Network request validation
* Scheduler attendee form interaction

There are **3 integration-focused tests**.

### Security Testing

Security coverage includes:

* Script injection handling
* HTTP security headers
* Cookie security validation

There are **3 security tests**.

### Load Testing

The load test uses **exactly 5 concurrent users**, as required by the assessment.

It tests:

* Homepage
* Contact page
* HTTP response status
* Response-time threshold
* p95 response time

Detailed results are documented in:

`docs/load-test-results.md`

## Project Structure

```text
techdome-qa-automation/
│
├── tests/
│   ├── E2E/
│   │   ├── blogs.spec.ts
│   │   ├── case-studies.spec.ts
│   │   ├── contact-scheduling.spec.ts
│   │   ├── form-network.spec.ts
│   │   ├── homepage.spec.ts
│   │   ├── mobile-375.spec.ts
│   │   ├── mobile-768.spec.ts
│   │   ├── navigation.spec.ts
│   │   ├── scheduler-form-integration.spec.ts
│   │   ├── scheduler-integration.spec.ts
│   │   └── scheduler-validation.spec.ts
│   │
│   ├── load/
│   │   └── homepage-load.spec.ts
│   │
│   └── security/
│       ├── script-injection.spec.ts
│       ├── security-headers.spec.ts
│       └── security-cookie.spec.ts
│
├── docs/
│   ├── bugs.md
│   ├── claude-code-log.md
│   ├── load-test-results.md
│   └── user-story-map.md
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── package.json
├── playwright.config.ts
└── README.md
```

## How to Run the Tests

### Install dependencies

```bash
npm ci
```

### Run the complete test suite

```bash
npx playwright test
```

The repository is configured to run the Chromium test project by default.

### Run Chromium tests explicitly

```bash
npx playwright test --project=chromium
```

### Run security tests

```bash
npx playwright test tests/security
```

### View the HTML report

After a test run, Playwright generates an HTML report.

```bash
npx playwright show-report
```

## CI/CD

GitHub Actions runs the Playwright test suite automatically when changes are pushed to the `main` branch or when a pull request targets `main`.

The workflow:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs project dependencies.
4. Installs Playwright browsers.
5. Runs the Chromium Playwright test suite.
6. Uploads the Playwright report when available.

## Defects Found

A responsive UI defect involving horizontal overflow was identified at mobile viewport sizes.

The issue is documented in:

`docs/bugs.md`

The corresponding automated tests are:

* `mobile-375.spec.ts`
* `mobile-768.spec.ts`

## Test Documentation

### User Story Map

`docs/user-story-map.md`

Contains the user stories, acceptance criteria, test types, and automation traceability.

### AI / Claude Code Usage Log

`docs/claude-code-log.md`

Contains five AI-assisted development interactions and the human judgment applied to each.

### Load Test Results

`docs/load-test-results.md`

Contains the load-test configuration, response-time measurements, error counts, acceptance criteria, and result.

## Current Validation

The current test suite has been validated locally.

**Latest local result: 15 passed**

The load test reported:

* Concurrent users: **5**
* HTTP 5xx errors: **0**
* Latest measured p95 response time: **1615 ms**
* Required p95 threshold: **less than 3000 ms**

The repository can be executed from the project root with:

```bash
npx playwright test
```
