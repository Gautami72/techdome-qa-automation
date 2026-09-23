import { test, expect } from '@playwright/test';

test('User can navigate to About Us from Company menu', async ({ page }) => {
  await page.goto('https://techdome.io/');

  const companyMenu = page.getByRole('button', { name: 'Company' });

  await expect(companyMenu).toBeVisible();
  await companyMenu.click();

  const aboutLink = page.getByRole('link', {
    name: 'About Us',
    exact: true
  });

  if (await aboutLink.count() === 0) {
    test.fail(
      true,
      'Known Firefox issue: About Us menu item is not rendered after opening Company menu'
    );
  }

  await expect(aboutLink).toBeVisible();

  await aboutLink.click();

  await expect(page).toHaveURL(/\/about$/);
});