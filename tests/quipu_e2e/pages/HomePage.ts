import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) { }

  async search(term: string) {
    await this.page.fill('#search_query_top', term);
    await this.page.click('button[name="submit_search"]');
  }

  async openFirstProductAndAddToCart() {

    await this.page.click('.product_img_link');
    await this.page.click('button[name="Submit"]');
    await this.page.waitForSelector('.layer_cart_product');
  }

  async selectTab(tab: string) {
    await this.page.getByRole('link', { name: tab, exact: true }).click();

  }
}