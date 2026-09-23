import { test, expect } from '@playwright/test';

test(
  'Scheduler attendee form accepts valid user details',
  async ({ page, browserName }) => {
    test.skip(
      browserName === 'firefox',
      'Known Firefox issue: Calendly date/time controls do not reliably render in Firefox'
    );

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

    const scheduler = schedulerFrame.contentFrame();

    await scheduler
      .getByRole('button', { name: 'Tuesday, September 29 - Times' })
      .click();

    await scheduler
      .getByRole('button', { name: '1:00pm' })
      .click();

    await scheduler
      .getByRole('button', { name: 'Next 1:00pm' })
      .click();

    const nameField = scheduler.getByRole('textbox', {
      name: 'Name *'
    });

    const emailField = scheduler.getByRole('textbox', {
      name: 'Email *'
    });

    await expect(nameField).toBeVisible();
    await expect(emailField).toBeVisible();

    await nameField.fill('Test User');
    await emailField.fill('test@example.com');

    await expect(nameField).toHaveValue('Test User');
    await expect(emailField).toHaveValue('test@example.com');

    expect(requests.length).toBeGreaterThan(0);

    console.log('Network requests captured:', requests.length);
  }
);