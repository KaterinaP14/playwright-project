import {expect, test} from '@playwright/test';
//import { Home8Page } from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/class8/home8Page.ts';
import { CreateAccountPage } from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/class8/createAccountPage.ts';
import { CartPage } from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/class8/cartPage.ts';
import addProductToCart from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/class8/addProductToCart.json';
import { Home8Page } from './home8Page';
import { MagentoHomePage } from './magentoHomePage';



var home8Page:Home8Page
var createAccountPage:CreateAccountPage
var cartPage:CartPage
var magentnto:MagentoHomePage

 
test.beforeEach(async ({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/customer/account/create/");
    home8Page = new Home8Page(page)
    createAccountPage = new CreateAccountPage(page)
    cartPage = new CartPage(page)
})

test('create account for user', async({page})=>{
    
    await createAccountPage.enterFistname("katerina")
    await createAccountPage.enterLastname("Panova")
    await createAccountPage.enteremail("mail1@mail.com")
    await createAccountPage.enterpassword('123qwe!@#')
    await createAccountPage.confirmpassword('123qwe!@#')
    await createAccountPage.clickcreateAccount()
    //await expect(home8Page.getBanner()).toHaveText("Thank you for registering")
})


addProductToCart.forEach((product) => {
    test(`add and verify that the product is added ${product.cartPage}`, async ({ page }) => {
      await page.goto("https://magento.softwaretestingboard.com/");
      
      magentnto = new MagentoHomePage(page)
      home8Page = new Home8Page(page)
      cartPage = new CartPage(page)

      await magentnto.navigateToMenTops();
      await magentnto.clickTanks();
      await cartPage.addToCart();
      await page.waitForTimeout(5000)
      await cartPage.montanaSizeS.click();
      await cartPage.montanaColorBlue.click();
      await cartPage.addToCartBtn.click();
      await cartPage.verifySuccessMessage();
    });
  });
  

