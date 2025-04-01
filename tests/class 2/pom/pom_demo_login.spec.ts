import { test, expect} from '@playwright/test';
import { SaucedemoPage } from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/class 2/pom/pom_page.ts';
import * as fs from 'fs';
const users = JSON.parse(fs.readFileSync('C:/Users/kater/OneDrive/Desktop/playwright/tests/class 2/pom/pom_login.json', 'utf-8'));


users.forEach((user) => {
    test(`pom test ${user.username}`, async ({ page }) => {
        const sauceDemoPage = new SaucedemoPage(page);

        await sauceDemoPage.goto();
        await sauceDemoPage.typeUsername(user.username);
        await sauceDemoPage.typePassword(user.password);
        await sauceDemoPage.clickLogin();
    });
});


