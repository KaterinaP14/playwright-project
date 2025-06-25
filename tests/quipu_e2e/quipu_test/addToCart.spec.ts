import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/quipu_e2e/pages/LoginPage.ts';
import { DressesPage } from '../pages/DressesPage';

test('test', async ({ page }) => {


  // Navigate to the login page
   const loginPage = new LoginPage(page);
   const homePage = new HomePage(page);
   const dressesPage = new DressesPage(page);

   
     await loginPage.goto();


  //await page.goto('http://www.automationpractice.pl/index.php');
  //await page.getByRole('link', { name: 'Dresses', exact: true }).click();
  await homePage.selectTab('Dresses');

  //await page.evaluate(() => {
 //   window.scrollBy(0, window.innerHeight);
  //});

  //await page.locator('.product-container').nth(2).hover();
  //await page.getByRole('link', { name: 'More' }).click();
  await dressesPage.selectItem('Printed Summer Dress');

  //await page.locator('select#group_1').selectOption('2');
//  await page.locator('a[title="Yellow"]').click();

 // await page.locator('#add_to_cart button').click()

  await dressesPage.addToCart('Yellow');
  await dressesPage.assertProductAdded();


  //await expect(page.locator('#layer_cart')).toContainText('Product successfully added to your shopping cart');

});


