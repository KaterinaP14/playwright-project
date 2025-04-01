import { test, expect } from '@playwright/test';
import * as fs from 'fs'
const DATA = JSON.parse(fs.readFileSync('C:/Users/kater/OneDrive/Desktop/playwright/tests/class 2/parameterized/locators.json','utf-8'));


test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator(DATA.username).click();
  
});

