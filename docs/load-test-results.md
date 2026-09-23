# Load Test Results

## Test Objective

Verify that the Techdome homepage and contact page can handle exactly 5 concurrent users without HTTP 5xx errors and with a p95 response time below 3 seconds.

## Test Configuration

- **Concurrent users:** 5
- **Pages tested:** Homepage and Contact page
- **Total page requests:** 10
- **Maximum concurrent users:** 5
- **Tool:** Playwright
- **Browser:** Chromium
- **Environment:** Techdome production website

## Results

| User | Homepage Status | Contact Status | Response Time |
|------|-----------------|----------------|---------------|
| 1 | 200 | 200 | 984 ms |
| 2 | 200 | 200 | 940 ms |
| 3 | 200 | 200 | 935 ms |
| 4 | 200 | 200 | 887 ms |
| 5 | 200 | 200 | 934 ms |

## Summary

- **p95 response time:** 984 ms
- **Required p95:** < 3000 ms
- **HTTP 5xx errors:** 0
- **Concurrent users:** 5
- **Total requests:** 10
- **Result:** PASS

## Acceptance Criteria

| Requirement | Actual | Result |
|-------------|--------|--------|
| Exactly 5 concurrent users | 5 | PASS |
| Homepage tested | Yes | PASS |
| Contact page tested | Yes | PASS |
| p95 < 3000 ms | 984 ms | PASS |
| Zero HTTP 5xx errors | 0 | PASS |

## Conclusion

The load test completed successfully with exactly 5 concurrent users accessing the homepage and contact page. All requests returned HTTP 200 responses, no HTTP 5xx errors were observed, and the measured p95 response time of 984 ms was below the required 3000 ms threshold.