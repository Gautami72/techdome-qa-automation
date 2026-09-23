import { test, expect } from '@playwright/test';

test('Third-party scheduling integration loads successfully', async ({ page }) => {
  const responses: number[] = [];

  page.on('response', (response) => {
    responses.push(response.status());
  });

  await page.goto('https://techdome.io/contact');

  await page.getByRole('button', { name: 'Select Date & Time' }).click();

  const schedulerFrame = page.locator(
    'iframe[title="Schedule a 30-Minute Architecture Call"]'
  );

  await expect(schedulerFrame).toBeVisible();

  const frameUrl = await schedulerFrame.getAttribute('src');

  expect(frameUrl).toBeTruthy();

  console.log('Scheduler URL:', frameUrl);
  console.log('HTTP responses captured:', responses.length);

  expect(responses.every((status) => status < 500)).toBeTruthy();
});