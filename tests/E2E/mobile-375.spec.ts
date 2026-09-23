import { test, expect } from '@playwright/test';

test.fail(
  'Known defect: Homepage has horizontal overflow at 375px width',
  async ({ page }) => {
    await page.setViewportSize({
      width: 375,
      height: 812
    });

    await page.goto('https://techdome.io/');

    await expect(page).toHaveTitle(/Techdome/i);

    const pageWidth = await page
      .locator('body')
      .evaluate((body) => body.scrollWidth);

    const viewportWidth = await page.evaluate(
      () => window.innerWidth
    );

    expect(pageWidth).toBeLessThanOrEqual(viewportWidth);
  }
);