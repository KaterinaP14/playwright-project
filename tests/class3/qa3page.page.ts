import { expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';
const login = JSON.parse(fs.readFileSync('C:/Users/kater/OneDrive/Desktop/playwright/tests/class3/locators3.json', 'utf-8'));

export class DemoQa {
    readonly page: Page;
    readonly firstName: Locator;
    //readonly lastName: Locator;
   // readonly login: Locator;



    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('input[placeholder="First Name"]');
       // this.password= page.locator(login.password);
       // this.login = page.locator(login.loginBtn);
      }

      async goto() {
        await this.page.goto('https://demoqa.com/automation-practice-form');
      }
    
      async getByPlaceholder(firstName) {
        await this.firstName.waitFor({ state: 'visible' });
        await this.firstName.fill(firstName);
    }

   // async getByPlaceholder(lastName) {
     //   await this.lastName.fill(lastName);
    //}

    //  async clickLogin(){
    //    await this.login.click();
    //  }

      async FileForm(firstName){
          await this.goto();
          await this.getByPlaceholder(firstName);
          //await this.getByPlaceholder(pass);
          //await this.clickLogin();
      }


}