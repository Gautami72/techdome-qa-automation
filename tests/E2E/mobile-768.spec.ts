import { test, expect } from '@playwright/test';

test.fail(
  'Known defect: Homepage has horizontal overflow at 768px width',
  async ({ page }) => {
    await page.setViewportSize({
      width: 768,
      height: 1024
    });

    await page.goto('https://techdome.io/');

    await expect(page).toHaveTitle(/Techdome/i);

    const viewportWidth = await page.evaluate(
      () => window.innerWidth
    );

    const pageWidth = await page
      .locator('body')
      .evaluate((body) => body.scrollWidth);

    console.log('Viewport width:', viewportWidth);
    console.log('Page width:', pageWidth);

    expect(pageWidth).toBeLessThanOrEqual(viewportWidth);
  }
);