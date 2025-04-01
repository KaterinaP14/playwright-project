import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';
const login = JSON.parse(fs.readFileSync('C:/Users/kater/OneDrive/Desktop/playwright/tests/class 2/pom/locators.json', 'utf-8'));


export class SaucedemoPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly login: Locator;


    constructor(page: Page) {
        this.page = page;
        this.username = page.locator(login.username);
        this.password= page.locator(login.password);
        this.login = page.locator(login.loginBtn);
      }

      async goto() {
        await this.page.goto('https://saucedemo.com');
      }
    
      async typeUsername(user) {
        await this.username.fill(user);
    }

    async typePassword(pass) {
        await this.password.fill(pass);
    }

      async clickLogin(){
        await this.login.click();
      }

      async loginForm(user, pass){
          await this.goto();
          await this.typeUsername(user);
          await this.typePassword(pass);
          await this.clickLogin();
      }


}