import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Search for a valid product', async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto('http://www.automationpractice.pl/index.php');
  await homePage.search('dress');
  await expect(page.locator('.product_list')).toBeVisible();
});