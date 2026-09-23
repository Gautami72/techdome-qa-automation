import { test, expect } from '@playwright/test';

test('User can search and clear case studies', async ({ page }) => {
  // Open homepage
  await page.goto('https://techdome.io/');

  // Open case studies
  await page.getByRole('link', { name: "See what we've built" }).click();

  // Select Enterprise & ERP category
  await page.getByRole('tab', { name: 'Enterprise & ERP' }).click();

  // Search for automation
  const searchBox = page.getByRole('textbox', {
    name: /Search by title, tech stack/i
  });

  await searchBox.fill('automation');

  // Verify search value
  await expect(searchBox).toHaveValue('automation');

  // Verify filtered results are displayed
  await expect(
    page.getByText(/Showing 3 verified case/i)
  ).toBeVisible();

  // Clear search
  await page.getByRole('button', { name: 'Clear search' }).click();

  // Verify search is cleared
  await expect(searchBox).toHaveValue('');
});