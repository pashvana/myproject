import { test,expect, Locator, Page, selectors, } from '@playwright/test';

import ENV from "C:/Users/HussaiS2/PlaywrightAutomation/src/tests/utils/env";
import dotenv from 'dotenv';
dotenv.config();



//import config from 'C:/Users/HussaiS2/PlaywrightAutomation/playwright.config';
//import * as dotenv from 'dotenv';
import * as fs from "fs";
export var authtoken:any ;
export var dactoken:any;
export var rbearer:any;

/*
dotenv.config({
  //path:'C:/Users/HussaiS2/PlaywrightAutomation/tests/.env.preview',

  path:'C:/Users/HussaiS2/PlaywrightAutomation/src/tests/utils.env.${process.env.TEST_ENV}'
});
   
  */


export class powersuit_Login_page {
    readonly page: Page;
    readonly email: Locator;
    readonly email1: Locator;
    readonly email2 :Locator;
    readonly password: Locator;
    readonly submit: Locator;
    readonly tenant:Locator;
    readonly ms2:Locator;
    readonly ms4:Locator;
    readonly next :Locator;
  tenantdropdown: any;
  search: any;
  tenantselection: any;

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator('//input[@type="email"]');
        this.email1 = page.locator("//input[@id='1-email']");
        this.email2 = page.locator("//input[@id='i0116']");
        this.submit = page.locator('//button[@type="submit"]');
        this.password = page.locator('//input[@type="password"]');
        this.tenant = page.locator('[ng-if="currentTenant"]');
        this.ms2 = page.getByRole('button', { name: 'Sign in' });
       // this.ms3= page.getByLabel('Don\'t show this again');
       //this.ms4=page.getByRole('button', { name: 'Yes' })
       this.ms4 =page.locator('[id="idBtn_Back"]');
       this.next = page.locator("//input[@id='idSIButton9']");
        //Locators for Tenant selection
  this.tenantdropdown = page.locator('[ng-if="currentTenant"]');
  this.search = page.locator('//input[@ng-model="tenantFilter"]');
  this.tenantselection = page.locator('//span[@class="capitalize"]');

     }
   async PowerSuite_Login(){
    
     await this.page.goto(process.env.powersuiteURL!);
     await this.email.fill(process.env.powersuiteuser!);
     await this.submit.click();
     await this.email1.fill(process.env.powersuiteuser!);
     
     await this.password.fill(process.env.powersuitepassword!);
     await this.submit.click();
     const currentTenant = await this.tenant.allInnerTexts();
     
     
     //Gerring Bearer Token and User Dac Token for APi Request
     /* uncomment when needs to test API testing
     const responsePromise = await this.page.waitForRequest('https://userdac.dev.powersuite.unifysquare.com/api/v1/tenantDacSettings/16c94e3a-bf75-43b6-ab3f-3252f4c9052d')
     // await page.context().storageState({ path: authFile });
     await this. page.reload();
     const response = await responsePromise;
    
      authtoken = await response.headerValue("authorization");
      rbearer = authtoken?.slice(7);
     console.log(rbearer);
     console.log("*******************************************");
     await console.log(await response.headerValue("user-dac"));
     dactoken = await response.headerValue("user-dac");
     const jsonData = JSON.stringify(authtoken);
     const jsonData1 = JSON.stringify(dactoken);
     fs.writeFileSync('AuthenticationCredentialsJSON.json', jsonData);
     fs.writeFileSync('userdac.json',jsonData1);
   
   }

  
   */
   

}

async PowerSuite_Login_Unifysquare_Account(){
  console.log(process.env.BASE_URL);
  console.log(process.env.USERID);
  console.log(process.env.PASSWORD);
  await this.page.goto(ENV.BASE_URL!);
  console.log(ENV.BASE_URL);
  //await this.page.goto(ENV.BASE_URL); below line is the correct one for dynamic env selection
  await this.page.goto(process.env.BASE_URL as string)
     await this.email.fill(ENV.USERID!);
     await this.submit.click();
     await this.email2.fill(ENV.USERID!);
     await this.next.click();
     await this.password.fill(ENV.PASSWORD!);
     await this.ms2.click();
   // await this.ms3.click()  
   await new Promise(f => setTimeout(f, 1000));
   await this.ms4.click();
  // for (const li of await this.page.locator("[class='gritter-close']").all())
   // await li.click();
  const currentDate: Date = new Date();
  console.log(currentDate);
}
async Switch_To_Unisys_demo_Tenant(){
  await this.tenantdropdown.click();
 await this.search.fill("Unisys-Demo");
 await this.tenantselection.first().click();
 await new Promise(f => setTimeout(f, 12000));
 
 }
 async Switch_To_Unisys_Tenant(){
  await this.tenantdropdown.click();
 await this.search.fill("Unisys");
 await this.tenantselection.first().click();
 await new Promise(f => setTimeout(f, 12000));
 
 }
 async Switch_To_UnifySquare_Nestlé_Tenant(){
  await this.tenantdropdown.click();
 await this.search.fill("UnifySquare-Nestlé");
 await this.tenantselection.first().click();
 await new Promise(f => setTimeout(f, 12000));
 
 }
 async Navigate_To_Unifysquare_Tenant(){
  await this.tenantdropdown.click();
  await this.search.fill("Unifysquare");
  await this.tenantselection.first().click();
  await new Promise(f => setTimeout(f, 3000));
  
}
}
