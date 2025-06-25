import { Page, Locator, expect } from '@playwright/test';

export class RegistrationFormPage {
  readonly page: Page;
  readonly firstname: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly gender: Locator;
  readonly mobile: Locator;
  readonly dateOfBirth: Locator;        
  readonly subject: Locator;
  readonly hobbies: Locator;
  readonly picture: Locator;
  readonly currentAddress: Locator;
  readonly  state: Locator;
  readonly city: Locator;       
  readonly submit: Locator;    

  constructor(page: Page) {
    this.page = page;
    this.firstname = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');         
    this.email = page.getByPlaceholder('name@example.com');
    this.gender = page.getByRole('radio', { name: 'Female', exact: true });
    this.mobile = page.getByPlaceholder('Mobile Number');
    this.dateOfBirth = page.getByPlaceholder('Date of Birth');
    this.subject = page.locator('#subjectsInput');
    this.hobbies = page.getByRole('checkbox', { name: 'Reading', exact: true });    
    this.picture = page.getByLabel('Picture');
    this.currentAddress = page.getByPlaceholder('Current Address');   
    this.state = page.locator('#react-select-3-input');
    this.city = page.locator('#react-select-4-input');
    this.submit = page.getByRole('button', { name: 'Submit' });
  }

    async enterFirstName(firstname: string) {
        await this.firstname.fill(firstname);
    }
    
    async enterLastName(lastname: string) {
        await this.lastName.fill(lastname);
    }   

    async enterEmail(email: string) {
        await this.email.fill(email);
    }

   async selectGender() {
        await this.gender.check({force: true});
     }

    async enterMobile(mobile: string) {
        await this.mobile.fill(mobile);
    }

   // async enterDateOfBirth(date: string) {
   ///     await this.dateOfBirth.fill(date);
   // }

    async enterSubject(subject: string) {
        await this.subject.scrollIntoViewIfNeeded();
        await this.subject.fill(subject);
        await this.subject.press('Enter'); 

    }
    
    async selectHobbies() {
        await this.hobbies.check({force: true});
      }

    async uploadPicture(picture: string) {
        await this.picture.setInputFiles(picture);
    }   

    async enterCurrentAddress(address: string) {
        await this.currentAddress.fill(address);
    }   

    async selectState(state: string) {
        await this.state.fill(state);
        await this.state.press('Enter');
    }   

    async selectCity(city: string) {
      await this.city.fill(city);
      await this.city.press('Enter');
    }

    async clickSubmit() {
        await this.submit.click();
    }
}

