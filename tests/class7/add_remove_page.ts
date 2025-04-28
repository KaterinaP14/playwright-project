import { Page, Locator } from '@playwright/test';

import * as fs from 'fs';
const com = JSON.parse(fs.readFileSync('C:/Users/kater/OneDrive/Desktop/playwright/tests/class7/new_comuters.json', 'utf-8'));

export class Computer {
  public readonly baner: Locator

  constructor(public page: Page) {
    this.baner = page.locator(".alert-message")
  }

  async gotoHomePage() {
    await this.page.goto('https://computer-database.gatling.io/computers');
  }

  async clickAddNewComputer() {
    await this.page.getByRole('link', { name: 'Add a new computer' }).click();
  }

  async fillComputerForm(name: string, introduced: string, discontinued: string, company: string) {
    await this.page.getByRole('textbox', { name: 'Computer name' }).fill(name);
    await this.page.getByRole('textbox', { name: 'Introduced' }).fill(introduced);
    await this.page.getByRole('textbox', { name: 'Discontinued' }).fill(discontinued);
    await this.page.getByLabel('Company').selectOption(company);
  }

  async createComputer() {
    await this.page.getByRole('button', { name: 'Create this computer' }).click();
  }

  async clikOnComputerName(name: string) {
    await this.page.getByRole('link', { name }).click();
  }

  async deleteComputer() {
    await this.page.getByRole('button', { name: 'Delete this computer' }).click();
  }
   getMessageFromBaner(){
    return this.baner
  }

  
}