import { test, expect } from '@playwright/test';

test('Contact page loads the scheduling integration successfully', async ({ page }) => {
  const requests: string[] = [];

  page.on('request', (request) => {
    requests.push(request.url());
  });

  await page.goto('https://techdome.io/contact');

  await page.getByRole('button', { name: 'Select Date & Time' }).click();

  const schedulerFrame = page.locator(
    'iframe[title="Schedule a 30-Minute Architecture Call"]'
  );

  await expect(schedulerFrame).toBeVisible();

  expect(requests.length).toBeGreaterThan(0);

  console.log('Network requests captured:', requests.length);
});