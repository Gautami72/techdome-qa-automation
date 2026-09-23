@'
# Techdome QA Automation Assignment

## Overview

This project contains an automated QA test suite for the Techdome website using Playwright with TypeScript.

The framework covers end-to-end UI testing, integration testing, security checks, mobile responsiveness, and load testing.

Application under test:

https://techdome.io/

## Technology Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- Playwright HTML Report

## Project Structure

```text
tests/
├── E2E/
│   ├── blogs.spec.ts
│   ├── case-studies.spec.ts
│   ├── contact-scheduling.spec.ts
│   ├── form-network.spec.ts
│   ├── homepage.spec.ts
│   ├── mobile-375.spec.ts
│   ├── mobile-768.spec.ts
│   ├── navigation.spec.ts
│   ├── scheduler-form-integration.spec.ts
│   ├── scheduler-integration.spec.ts
│   └── scheduler-validation.spec.ts
│
├── load/
│   └── homepage-load.spec.ts
│
└── security/
    ├── script-injection.spec.ts
    └── security-headers.spec.ts

docs/
└── load-test-results.md

.github/
└── workflows/
    └── playwright.yml