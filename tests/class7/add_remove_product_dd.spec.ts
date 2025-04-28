import { test, expect } from '@playwright/test';
import { Computer } from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/class7/add_remove_page.ts';
import * as fs from 'fs';
const computers = JSON.parse(fs.readFileSync('C:/Users/kater/OneDrive/Desktop/playwright/tests/class7/new_com.json', 'utf-8'));

//test.describe('Computer Database Tests1', () => {
computers.forEach((computer) => {
test(`add a new computer ${computer.name}`, async ({ page }) => {
  const computerPage = new Computer(page);
  await computerPage.gotoHomePage();
  await computerPage.clickAddNewComputer();
  await computerPage.fillComputerForm(computer.name, computer.introduced, computer.discontinued, computer.company);
  await computerPage.createComputer();
  await expect(computerPage.baner).toContainText(computer.name);

});

});

test('delete computer1233', async ({ page }) => {

  const computerPage = new Computer(page);
  await computerPage.gotoHomePage();
  await computerPage.clikOnComputerName("ACE");
  await computerPage.deleteComputer();
  
  await expect(computerPage.getMessageFromBaner()).toHaveText("Done ! Computer ACE has been deleted");
});
