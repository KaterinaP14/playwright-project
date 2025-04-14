import { test, expect } from '@playwright/test';
import computers from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/class6/computers.json';

test.describe('Computer Database Tests', () => {
    computers.forEach((computer) => {


  test(`add a new computer ${computer.name}`, async ({ page }) => {
    await page.goto('https://computer-database.gatling.io/computers');
    await page.getByRole('link', { name: 'Add a new computer' }).click();
    await page.getByRole('textbox', { name: 'Computer name' }).fill(computer.name);
    await page.getByRole('textbox', { name: 'Introduced' }).fill(computer.introduced);
    await page.getByRole('textbox', { name: 'Discontinued' }).fill(computer.discontinued);
    await page.getByLabel('Company').selectOption(computer.company);
    await page.getByRole('button', { name: 'Create this computer' }).click();



  await expect(page.locator(".alert-message")).toContainText(`${computer.name}`);
  await expect(page.locator(".alert-message")).toHaveText(`Done ! Computer ${computer.name} has been created`);
  });

});
});
