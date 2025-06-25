import {expect, test} from '@playwright/test';


import { RegistrationFormPage } from 'C:/Users/kater/OneDrive/Desktop/playwright/tests/class10/registrationFormPage.ts';

var registrationFormPage:RegistrationFormPage

test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    registrationFormPage = new RegistrationFormPage(page);
});

test('Fill the registration form', async({page})=>{
    
    await registrationFormPage.enterFirstName("Katerina")
    await registrationFormPage.enterLastName("P")
    await registrationFormPage.enterEmail("mail22@mail.com")
    await registrationFormPage.selectGender()
    await registrationFormPage.enterMobile("1234567890")        
   // await registrationFormPage.enterDateOfBirth("2023-10-01")
    await registrationFormPage.enterSubject("English")  
    await registrationFormPage.selectHobbies ()
    //await registrationFormPage.uploadPicture("C:/Users/kater/OneDrive/Desktop/playwright/tests/class10/picture.png")
    await registrationFormPage.enterCurrentAddress("Test address")  
    await registrationFormPage.selectState("NCR")
    await registrationFormPage.selectCity("Delhi")  
    await registrationFormPage.clickSubmit()
    await expect(page.getByText("Thanks for submitting the form")).toBeVisible()
   
});
