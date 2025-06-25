import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/quipu_e2e/pages/LoginPage.ts';
import { DressesPage } from '../pages/DressesPage';

test('User can add a dress to the cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const dressesPage = new DressesPage(page);

  

  await loginPage.goto();
  await homePage.selectTab('Dresses');
  await dressesPage.selectItem('Printed Summer Dress');
  await dressesPage.addToCart('Yellow');
  await dressesPage.assertProductAdded();

});


