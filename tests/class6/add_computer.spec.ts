import { test, expect } from '@playwright/test';

test.describe('Computer Database Tests', () => {

  test('display correct title', async ({ page }) => {
    await page.goto('https://computer-database.gatling.io/computers');
    await expect(page).toHaveTitle('Computers database');
  });

  test('add a new computer', async ({ page }) => {
    await page.goto('https://computer-database.gatling.io/computers');
    await page.getByRole('link', { name: 'Add a new computer' }).click();
    await page.getByRole('textbox', { name: 'Computer name' }).fill('KaterinaPP');
    await page.getByRole('textbox', { name: 'Introduced' }).fill('2022-03-02');
    await page.getByRole('textbox', { name: 'Discontinued' }).fill('2022-04-05');
    await page.getByLabel('Company').selectOption('3');
    await page.getByRole('button', { name: 'Create this computer' }).click();

    await expect(page.locator(".alert-message")).toContainText("KaterinaPP");
    await expect(page.locator(".alert-message")).toHaveText("Done ! Computer KaterinaPP has been created");
  });

});
