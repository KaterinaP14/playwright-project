import { test, expect, type Page } from '@playwright/test';
import * as fs from 'fs';
const DATA = JSON.parse(fs.readFileSync('C:/Users/kater/OneDrive/Desktop/playwright/tests/class 2/data_driven/data.json', 'utf-8'));


DATA.forEach((user)=>{
    test(`test ${user.firstname}`, async ({ page }) => {
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.getByPlaceholder('First Name').fill(user.firstname);
        await page.getByPlaceholder('Last Name').fill(user.lastname);
            
    });
});


