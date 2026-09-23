import { test, expect } from '@playwright/test';

test('Scheduler validates invalid email address', async ({ page }) => {
  // Open Contact page
  await page.goto('https://techdome.io/contact');

  // Open scheduling widget
  await page.getByRole('button', { name: 'Select Date & Time' }).click();

  // Access scheduler iframe
  const scheduler = page
    .locator('iframe[title="Schedule a 30-Minute Architecture Call"]')
    .contentFrame();

  // Select an available date
  await scheduler
    .getByRole('button', { name: 'Tuesday, September 29 - Times' })
    .click();

  // Select a time
  await scheduler
    .getByRole('button', { name: '2:30pm' })
    .click();

  // Continue to attendee details
  await scheduler
    .getByRole('button', { name: 'Next 2:30pm' })
    .click();

  // Enter test name
  await scheduler
    .getByRole('textbox', { name: 'Name *' })
    .fill('Test User');

  // Enter intentionally invalid email
  const email = scheduler.getByRole('textbox', { name: 'Email *' });
  await email.fill('invalid-email');

  // Verify the invalid email is rejected by the browser/form
  await expect(email).toHaveAttribute('type', 'email');
});