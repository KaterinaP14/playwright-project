import { test, expect } from '@playwright/test';

test('Search computers', async ({ page }) => {
  await page.goto('https://computer-database.gatling.io/computers');

  const number = 'ACE';

 
  await page.getByRole('searchbox', { name: 'Filter by computer name...' }).click();
  await page.getByRole('searchbox', { name: 'Filter by computer name...' }).fill(number);
  await page.getByRole('searchbox', { name: 'Filter by computer name...' }).press('Enter');




  
  test('Verify the results are correct after filtering a computer', async ({page})=>{
    const searchinput = page.getByPlaceholder('Filter by computer name');
    await searchinput.fill("ACE");
    const filterByNameButton = page.getByRole('button', { name: 'Filter by name' });
    await filterByNameButton.click();
 
    const computerLinks  = page.locator('tbody td a');
    await expect(computerLinks).toHaveCount(6);
 
     var numberOfComputerLinks= await computerLinks.count();
     const filterMessage = page.getByRole('heading', { name: 'computers found'});  
     await expect(filterMessage).toHaveText(`${numberOfComputerLinks} computers found`);
     await expect(filterMessage).toContainText(await numberOfComputerLinks.toString());
   
})

});