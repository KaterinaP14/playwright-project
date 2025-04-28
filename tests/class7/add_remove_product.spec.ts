import { test, expect } from '@playwright/test';
import { Computer } from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/class7/add_remove_page.ts';

test.describe('Computer  tests', () => {
  test('add1  computer', async ({ page }) => {
    const comp = new Computer(page);

    await comp.gotoHomePage();
    await comp.clickAddNewComputer();
    await comp.fillComputerForm('NewComp', '2021-01-04', '2021-02-03', '3');
    await comp.createComputer();
    
  });

  test('delete1 computer', async ({ page }) => {
    const comp = new Computer(page);

    await comp.gotoHomePage();
   // await comp.searchAndOpenComputer('AN/FSQ-32');
    await comp.deleteComputer();
   // await comp.expectSuccessMessage('Done ! Computer AN/FSQ-32 has been deleted');
  });
});