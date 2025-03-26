import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.letskodeit.com/practice');
  await page.getByRole('textbox', { name: 'Start Typing...' }).click();
  await page.locator('#bmwcheck').check();
  await page.locator('#hondacheck').check();
  await page.locator('#benzradio').check();
  await page.getByRole('button', { name: 'Show' }).click();
  await page.getByRole('button', { name: 'Hide' }).click();
  await page.locator('#carselect').selectOption('benz');
  await page.getByRole('textbox', { name: 'Start Typing...' }).click();
  await page.getByRole('textbox', { name: 'Start Typing...' }).fill('be');
  await page.getByText('Cucumber').click();
  await page.getByRole('textbox', { name: 'Start Typing...' }).click();
});
//dss