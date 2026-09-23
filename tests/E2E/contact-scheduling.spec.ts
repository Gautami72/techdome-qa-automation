import { test, expect } from '@playwright/test';

test(
  'User can select a date and time for an architecture call',
  async ({ page, browserName }) => {
    test.skip(
      browserName === 'firefox',
      'Known Firefox issue: Calendly date/time controls do not reliably render in Firefox'
    );

    await page.goto('https://techdome.io/contact');

    await page.getByRole('button', { name: 'Select Date & Time' }).click();

    const scheduler = page
      .locator('iframe[title="Schedule a 30-Minute Architecture Call"]')
      .contentFrame();

    await scheduler
      .getByRole('button', { name: 'Tuesday, September 29 - Times' })
      .click();

    await scheduler
      .getByRole('button', { name: '1:00pm' })
      .click();

    await scheduler
      .getByRole('button', { name: 'Next 1:00pm' })
      .click();

    await expect(
      scheduler.getByRole('textbox', { name: 'Name *' })
    ).toBeVisible();

    await expect(
      scheduler.getByRole('textbox', { name: 'Email *' })
    ).toBeVisible();
  }
);