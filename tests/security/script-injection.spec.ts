import { test, expect } from '@playwright/test';

test('Scheduler should not execute script injection in name field', async ({ page }) => {
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

  const nameField = scheduler.getByRole('textbox', {
    name: 'Name *'
  });

  await expect(nameField).toBeVisible();

  let dialogTriggered = false;

  page.on('dialog', async (dialog) => {
    dialogTriggered = true;
    await dialog.dismiss();
  });

  await nameField.fill("<script>alert('XSS')</script>");

  await expect(nameField).toHaveValue("<script>alert('XSS')</script>");

  expect(dialogTriggered).toBeFalsy();
});