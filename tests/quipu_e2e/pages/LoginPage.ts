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


