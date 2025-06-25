import { expect, Locator, Page } from '@playwright/test';
import { assert } from 'console';

export class DressesPage {
  readonly page: Page;


  constructor(page: Page) {
    this.page = page;

  }
  async selectItem(dressName: string) {
    await this.page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });



    await this.page.locator('.product-container').nth(2).hover();
    await this.page.getByRole('link', { name: 'More' }).click();
  }

  async addToCart(color: string) {

    await this.page.locator('select#group_1').selectOption('2');
    await this.page.locator('a[title="' + color + '"]').click();
    await this.page.locator('#add_to_cart button').click()
  }

  async assertProductAdded() {
    await expect(this.page.locator('#layer_cart')).toContainText('Product successfully added to your shopping cart');
  }

}