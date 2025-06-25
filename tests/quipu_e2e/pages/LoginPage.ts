import { expect, Locator, Page } from '@playwright/test';
import { assert } from 'console';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: ' Sign in' });
  }

  async goto() {
    await this.page.goto('http://www.automationpractice.pl/index.php'); 
    await this.page.getByRole('link', { name: 'Sign in' }).click();
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
async assertLoginSuccessful() {
     await expect(this.page).toHaveURL('http://www.automationpractice.pl/index.php?controller=my-account');
  }
}





















/*import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('http://www.automationpractice.pl/index.php');
  }

  async login(email: string, password: string) {  
        await page.locator('#email').fill('testuser@example.com');
  //await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: ' Sign in' }).click();






   // await this.page.waitForSelector('#email', { timeout: 10000 });
   // await this.page.fill('#email', email);
   // await this.page.fill('#passwd', password);
   // await this.page.click('#SubmitLogin');
  }
}*/