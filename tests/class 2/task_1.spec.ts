import { test, expect } from '@playwright/test';

test.describe("Login page", () =>{


test('test with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL ("https://www.saucedemo.com/inventory.html");


  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();


  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL ("https://www.saucedemo.com/cart.html");

  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();


  await expect(page).toHaveURL ("https://www.saucedemo.com");
});
});