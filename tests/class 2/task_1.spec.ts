import { test, expect } from '@playwright/test';

test.describe("Login page", () =>{


test('test with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL ("https://www.saucedemo.com/inventory.html");

//})

  //test('test buy 2 products', async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();


  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL ("https://www.saucedemo.com/cart.html");

  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  await expect(page).toHaveURL ("https://www.saucedemo.com");
});

});


test.describe("Invalid Login page", () =>{
   
    
    test('test with invalid user, valid pass', async ({ page }) => {  // dali tuka moze kakoexpect result da se stavi error porakata i kako se pravi toa?
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('katerina');  // gresen user name, tocen pass
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce'); 
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="error"]').click();
        await page.locator('[data-test="error"]').click();
        
        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
    
    test('test with valid user, invalid pass', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user'); //tocen user name gresen pass
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('dada');
        await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="error"]').click();

        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
      });

      test('test with empty user and pass', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="login-button"]').click();

        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Epic sadface: Username is required');
      });


      test('test with inavalid user and invalid pass', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('wasdsada');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('sdsad');
        await page.locator('[data-test="login-button"]').click();

        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
      });

    
    });