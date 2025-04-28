import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly tanks: Locator;
  readonly top: Locator;
  readonly montanaSizeS: Locator;
  readonly montanaColorBlue: Locator;
  readonly addToCartBtn: Locator;
  readonly successMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.top = page.getByRole('menuitem', { name: ' Men' })
    this.tanks = page.getByRole('menuitem', { name: 'Tanks' })
    this.montanaSizeS = page.getByLabel('M', { exact: true })
    this.montanaColorBlue = page.getByLabel('Blue')
    this.addToCartBtn = page.getByText('Add to Cart') 
    this.successMsg = page.getByRole('alert');
  }

  async goto() {
    await this.page.goto('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html');
  }

  async navigateToMenTops() {
    await this.top.click()
  }

  async clickTops(){
    await this.tanks.click()


  }

  async addToCart() {
    /*const saleFilter = this.page.locator('[role="tab"].filter-options-title', { hasText: 'Sale' });
  
    if (await saleFilter.getAttribute('aria-expanded') === 'true') {
      await saleFilter.click(); 
    }
  
    await this.addToCartBtn.scrollIntoViewIfNeeded();
    await this.addToCartBtn.click({ force: true });*/
    await this.page.getByRole('link',{name:'Atlas Fitness Tank', exact:true}).first().click()
 
    //await this.page.locator ("[class*='product-item-details']").nth(0).hover()
   // await this.page.getByText ("Add to Cart").first().click()

    
    
  }

  async verifySuccessMessage() {
 await this.successMsg.scrollIntoViewIfNeeded();
 await expect(this.successMsg).toContainText('You added Atlas Fitness Tank to your shopping cart.');
  }
}
