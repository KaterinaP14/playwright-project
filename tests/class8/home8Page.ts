import { Locator, Page } from "@playwright/test";

export class Home8Page{
    readonly page: Page;
    readonly createAccountBtn:Locator
    readonly sucessMsgBanner:Locator
    readonly product:Locator

    constructor(page: Page){
        this.page = page;
        this.createAccountBtn = page.getByRole('link', { name: 'Create an Account' });
        this.sucessMsgBanner = page.locator(".alert-message");
       
    }

    async clickOnCreteAcount(){
        await this.createAccountBtn.click()
    }

    getBanner():Locator{
       return this.sucessMsgBanner 
    }

 
}