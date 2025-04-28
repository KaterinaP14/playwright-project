import { Locator, Page } from "@playwright/test";

export class CreateAccountPage{
    readonly page:Page
   private readonly FirstNameinput:Locator
   private readonly LastNameInput:Locator
   private readonly EmailInput:Locator  
   private readonly PasswordInput:Locator
   private readonly confirmPasswordInput:Locator
   private readonly CreateAccountBtn:Locator

    constructor(page:Page){
        this.page = page
        this.FirstNameinput = page.getByRole('textbox',{name:"First Name*"})
        this.LastNameInput = page.getByRole('textbox',{name:"Last Name*"})
        this.EmailInput = page.getByRole('textbox', { name: 'Email*' })
        this.PasswordInput = page.getByRole('textbox', { name: 'Password*', exact: true })
        this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm Password*' })
        this.CreateAccountBtn =  page.getByRole('button',{name: 'Create an Account'})
    }

    async enterFistname(enterFirstName:string){
        await this.FirstNameinput.fill(enterFirstName)
    }

    async enterLastname(enterFistname:string){
        await this.LastNameInput.fill(enterFistname)
    }

    async enteremail(enterEmail:string){
        await this.EmailInput.fill(enterEmail)
    }

    async enterpassword(enterPassword:string){
        await this.PasswordInput.fill(enterPassword)
    }
    
    async confirmpassword(confirmPassword:string){
        await this.confirmPasswordInput.fill(confirmPassword)
    }
    
    async clickcreateAccount(){
        await this.CreateAccountBtn.click()
    }
}