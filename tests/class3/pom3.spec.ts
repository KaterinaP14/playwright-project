import { test, expect } from '@playwright/test';
import { DemoQa } from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/class3/qa3page.page.ts';
import * as fs from 'fs';
const users = JSON.parse(fs.readFileSync('C:/Users/kater/OneDrive/Desktop/playwright/tests/class3/locator_data3.json', 'utf-8'));

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

users.forEach((user) => {
    test(`pom test ${user.firstName}`, async ({ page }) => {
        const demoQA = new DemoQa(page);

        await demoQA.goto();
        await demoQA.getByPlaceholder(user.firstName);
        await delay(3000);
        //await DemoQa.getByPlaceholder(user.lastName);
       
    });
});






/*

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('.card-up').first().click();
  await page.locator('span').filter({ hasText: 'Forms' }).locator('div').first().click();
  await page.getByText('Practice Form').click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Gjore');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Zaharchev');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('name@example.com').fill('gjore.zaharchev@gmail.com');
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').click();
  await page.getByPlaceholder('Mobile Number').fill('1234567890');
  await page.locator('#dateOfBirth-wrapper div').filter({ hasText: 'Date of Birth' }).click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('ma');
  await page.getByText('Maths', { exact: true }).click();
  await page.locator('#subjectsInput').fill('a');
  await page.getByText('Accounting', { exact: true }).click();
  await page.getByText('MathsAccounting').click();
  await page.getByText('MathsAccounting').click();
  await page.getByText('Sports').click();
  await page.getByText('Reading').click();
  await page.getByText('Music').click();
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('a');
  await page.getByText('Select State').click();
  await page.getByText('NCR', { exact: true }).click();
  await page.getByText('Select City').click();
  await page.getByText('Delhi', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('tbody')).toContainText('Gjore Zaharchev');
  await page.getByRole('button', { name: 'Close' }).click();
});
*/