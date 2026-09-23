import { test, expect } from '@playwright/test';

test('User can open a blog article from Insights', async ({ page }) => {
  // Open the Insights / Blogs page
  await page.goto('https://techdome.io/insights');

  // Verify the Insights page loaded
  await expect(page).toHaveURL('https://techdome.io/insights');

  // Find the blog article
  const article = page.getByRole('link', {
    name: 'Optimizing Next.js 15'
  });

  // Verify the article is visible
  await expect(article).toBeVisible();

  // Open the article
  await article.click();

  // Verify we left the Insights page
  await expect(page).not.toHaveURL('https://techdome.io/insights');
});