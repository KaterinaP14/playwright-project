import { test } from '@playwright/test';
import { LoginPage } from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/quipu_e2e/pages/LoginPage.ts';

test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('katerinapanovap@gmail.com', '123456');
  await loginPage.assertLoginSuccessful();
});












/*import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('testuser@example.com', 'Password123');
  await expect(page).toHaveURL(/controller=my-account/);
});*/