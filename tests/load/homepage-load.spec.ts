import { test, expect } from '@playwright/test';

test('5 concurrent users load homepage and contact page within 3 seconds', async ({
  request,
  browserName
}) => {
  test.skip(
    browserName !== 'chromium',
    'Load test runs once in Chromium only'
  );

  const userCount = 5;

  const results = await Promise.all(
    Array.from({ length: userCount }, async (_, index) => {
      const user = index + 1;

      const startTime = Date.now();

      const [homepageResponse, contactResponse] = await Promise.all([
        request.get('https://techdome.io/'),
        request.get('https://techdome.io/contact')
      ]);

      const duration = Date.now() - startTime;

      return {
        user,
        homepageStatus: homepageResponse.status(),
        contactStatus: contactResponse.status(),
        duration
      };
    })
  );

  const durations = results
    .map((result) => result.duration)
    .sort((a, b) => a - b);

  const p95Index = Math.ceil(durations.length * 0.95) - 1;
  const p95 = durations[p95Index];

  const serverErrors = results.filter(
    (result) =>
      result.homepageStatus >= 500 ||
      result.contactStatus >= 500
  );

  console.log('Load test results:', results);
  console.log('Sorted response times:', durations);
  console.log('p95 response time:', p95, 'ms');
  console.log('5xx errors:', serverErrors.length);

  expect(serverErrors).toHaveLength(0);
  expect(p95).toBeLessThan(3000);
});