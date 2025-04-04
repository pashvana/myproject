import { test,expect, Locator, Page, selectors, request } from '@playwright/test';

import ENV from "C:/Users/HussaiS2/PlaywrightAutomation/src/tests/utils/env";
import dotenv from 'dotenv';
dotenv.config();

import * as fs from "fs";
export var authtoken :any;
export var dactoken:any;
export var rbearer:any;



export class Reportingservice_page {
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
     
   }
   async getbearertoken(){
    await new Promise(f => setTimeout(f, 12000));
    await this. page.reload();
     //Gerring Bearer Token and User Dac Token for APi Request
     // uncomment when needs to test API testing
     //const responsePromise = await this.page.waitForRequest('https://userdac.dev.powersuite.unifysquare.com/api/v1/tenantDacSettings/16c94e3a-bf75-43b6-ab3f-3252f4c9052d')
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


async PowerSuite_Login_Unifysquare_Account(){
  console.log(process.env.BASE_URL);
  console.log(process.env.USERID);
  console.log(process.env.PASSWORD);
  await this.page.goto(ENV.BASE_URL!);
  console.log(ENV.BASE_URL);
  await this.page.goto(ENV.BASE_URL!);
     await this.email.fill(ENV.USERID!);
     await this.submit.click();
     await this.email2.fill(ENV.USERID!);
     await this.next.click();
     await this.password.fill(ENV.PASSWORD!);
     await this.ms2.click();
   // await this.ms3.click()  
   await new Promise(f => setTimeout(f, 1000));
   await this.ms4.click();
 
}
async Switch_To_Unisys_demo_Tenant(){
    await this.tenantdropdown.click();
   await this.search.fill("Unisys-Demo");
   await this.tenantselection.first().click();
   await new Promise(f => setTimeout(f, 12000));
   
   }
 
   async API_Call_To_ReportingService({request}:any)
   {
        const response = await  request.get('https://reportingservice-dev.unifysquare.com/api/v1/voicequality/16c94e3a-bf75-43b6-ab3f-3252f4c9052d/details?platform=Teams&mediaType=audio&granularity=Week&periods=61&callScenarios=All&cacheBuster=true&startDate=2023-12-10T00:00:00.000Z',{
        //const response = await  request.get('https://reportingservice-dev.unifysquare.com/api/v1/voicequality/e8f8cb9d-b410-4e66-ae3e-1284e3d93a2a/details?platform=Teams&mediaType=audio&granularity=Week&periods=61&callScenarios=All&cacheBuster=true&startDate=2023-12-10T00:00:00.000Z',{

            headers: {
            
         'Authorization': authtoken,
         'user-dac':dactoken,
        // "Content-Type": "text/plain"
       
        
    } 
  });
      expect (response.status()).toBe(200);
      const statuses = await response.json();
      const flowvalue = JSON.stringify(statuses);
     console.log(flowvalue);  
   }
   async API_Call_To_ReportingService_UsageAndAdaption({request}:any)
   {
        const response1 = await  request.get('https://reportingservice-dev.unifysquare.com/api/v1/usageandadoption/16c94e3a-bf75-43b6-ab3f-3252f4c9052d/metrics/ConferenceCount/bydimensiontype/MediaType?startDate=2024-11-17&granularity=Week&periods=14&platform=Teams',{
        
          headers: {
            
         'Authorization': authtoken,
         'user-dac':dactoken,
        // "Content-Type": "text/plain"
    } 
  });
      expect (response1.status()).toBe(200);
      const statuses = await response1.json();
      const flowvalue = JSON.stringify(statuses);
     console.log(flowvalue);  
   }

   async API_Call_To_ReportingService_UserAttribute({request}:any)
   {
        const response2 = await  request.get('https://reportingservice-dev.unifysquare.com/api/v1/userAttribute/16c94e3a-bf75-43b6-ab3f-3252f4c9052d',{
        
          headers: {
            
         'Authorization': authtoken,
         'user-dac':dactoken,
       
    } 
  });
      expect (response2.status()).toBe(200);
      const statuses = await response2.json();
      const flowvalue = JSON.stringify(statuses);
     console.log(flowvalue);  
   }

   async API_Call_To_ReportingService_SiteController({request}:any)
   {
        const response3 = await  request.get('https://api.dev.powersuite.unifysquare.com/pnms/api/16c94e3a-bf75-43b6-ab3f-3252f4c9052d/Site',{
        
          headers: {
            
         'Authorization': authtoken,
         'user-dac':dactoken,
       
    } 
  });
      expect (response3.status()).toBe(200);
      const statuses = await response3.json();
      const flowvalue = JSON.stringify(statuses);
     console.log(flowvalue);  
   }

   async API_Call_To_ReportingService_MDX_Query({request}:any)
   {
       const example = '{"mdxQuery": "SELECT { [Measures].[Calls], [Measures].[Poor Calls], [Measures].[% Poor Calls]}ON COLUMNS,NON EMPTY [Date].[Week].&[2024-07-14T00:00:00] : [Date].[Week].&[2024-09-01T00:00:00] *{ [Quality].[ScenarioId].&[5], [Quality].[ScenarioId].&[6], [Quality].[ScenarioId].&[7], [Quality].[ScenarioId].&[8], [Quality].[ScenarioId].&[11], [Quality].[ScenarioId].&[12], [Quality].[ScenarioId].&[13], [Quality].[ScenarioId].&[16], [Quality].[ScenarioId].&[17], [Quality].[ScenarioId].&[18], [Quality].[ScenarioId].&[19] } ON ROWS FROM (SELECT FILTER([Client Version].[Client Type].[Client Type].allmembers,instr( [Client Version].[Client Type].currentmember.PROPERTIES("Member_Caption"), "PS_" ) = 0) ON COLUMNS FROM [Model]) WHERE ([Platform].[Platform].&[Teams])"}'
        const response3 = await  request.get('https://reportingservice-dev.unifysquare.com/api/v1/ExecuteMdxQuery/16c94e3a-bf75-43b6-ab3f-3252f4c9052d',{
        
          headers: {
            
         'Authorization': authtoken,
         'user-dac':dactoken,
       
    } ,
    data: example
  });
      expect (response3.status()).toBe(200);
      const statuses = await response3.json();
      const flowvalue = JSON.stringify(statuses);
     console.log(flowvalue);  
   }
}
