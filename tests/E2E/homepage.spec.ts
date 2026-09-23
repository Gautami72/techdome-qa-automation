import { test, expect } from '@playwright/test';

test(
  'User can navigate from homepage to contact page using Book a product teardown',
  async ({ page, browserName }) => {
    test.skip(
      browserName === 'firefox',
      'Known Firefox issue: Book a product teardown navigation does not complete reliably in Firefox'
    );

    await page.goto('https://techdome.io/');

    const teardownLink = page.getByRole('link', {
      name: 'Book a product teardown'
    });

    await expect(teardownLink).toBeVisible();
    await teardownLink.click();

    await expect(page).toHaveURL(/\/contact$/);
  }
);