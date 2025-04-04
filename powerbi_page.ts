import { expect, Locator, Page, selectors, } from '@playwright/test';

import * as dotenv from 'dotenv';
import * as fs from "fs";
import { parse } from 'csv-parse/sync';
import path from 'path';
import csv from 'csv-parser';

 let rows1:object;
 
 var persona
var devicemodel;
var personaindex;
var devicemodelindex;
var csvcolumns;
var department;
var departmentlindex;


dotenv.config({
  path:'./.env'
  
});

  export class powerbi_page {
    readonly page: Page;
    readonly email: Locator;
    readonly email1: Locator;
    readonly password: Locator;
    readonly submit: Locator;
    readonly tenant:Locator;
    readonly ms3 :Locator;
    readonly ms4:Locator;
    readonly ms2:Locator;
    readonly monthall:Locator;
    readonly weekall:Locator;
    readonly date1 : Locator;
    readonly hover1 :Locator;
    readonly moreopt : Locator;
    readonly exportdata : Locator;
    readonly summarydata : Locator;
    readonly export :Locator;
    readonly Finance :Locator;
    readonly Selectall: Locator;
    readonly IT :Locator;
    readonly dept_dws:Locator;
    readonly dept_cloud :Locator;
    readonly fileformat:  Locator;
    readonly csv :Locator;
    readonly reset :Locator;
    readonly resetok :Locator;


    constructor(page: Page) {
        this.page = page;
        this.email = page.locator("id=email");
        this.email1 = page.locator('//input[@id="1-email"]');
        this.submit = page.locator('[id="submitBtn"]');
        this.password = page.locator('[id="i0118"]');
        this.tenant = page.locator('[ng-if="currentTenant"]');
        this.ms2 = page.getByRole('button', { name: 'Sign in' });
        this.ms3= page.getByLabel('Don\'t show this again');
       //this.ms4=page.getByRole('button', { name: 'Yes' })
       this.ms4 =page.locator('[id="idBtn_Back"]');
       this.monthall= page.locator('[class="slicer-restatement"]').nth(2);
       this.weekall= page.locator('[class="slicer-restatement"]').nth(1);
       this.date1= page.locator('//div[@title="5/1/2023"]//child::div//child::span');
       this.Selectall = page.locator('//div[@title="Select all"]//child::div//child::span');
       this.Finance = page.locator("//span[contains(text(),'Finance')]");
       this.IT = page.locator("//span[contains(text(),'IT')]");
       this.hover1 = page.locator('[class="interactive-grid innerContainer"]');
       this.moreopt = page.locator('[data-testid="visual-more-options-btn"]');
       this.exportdata = page.locator("//span[normalize-space()='Export data']");
       this.summarydata = page.locator("//span[@class='fluentTheme-sm-reg exportTypeRadioButtonDescription']");
       this.export = page.locator("//button[@aria-label='Export']");
       this.dept_dws = page.locator("//span[contains(text(),'DWS Prod Eng Data/Machine Lrng')]");
       this.dept_cloud = page.locator("//span[contains(text(),'Cloud Managed Services')]");
       this.fileformat = page.locator("[data-testid='pbi-dropdown-trigger-container']");
      this.csv = page.locator(" //span[contains(text(),'.csv (30,000-row max)')]");
      this.reset = page.locator("[data-testid='reset-to-default-btn']");
     this.resetok = page.locator("//button[@id='okButton']");
      }
     async Powerbi_Login(){
    await this.page.goto(process.env.powersuiteURL);// changed URL from PowerBI to POwerSuite
     await this.email.fill(process.env.USERID);
     await this.submit.nth(0).click();
    await this.email1.fill(process.env.powerbiuser);
     await this.password.fill(process.env.PASSWORD);
     await this.ms2.click();
   // await this.ms3.click()  
   await new Promise(f => setTimeout(f, 1000));
   await this.ms4.click();
     }
     async Powerbi_Finance_data(){
   await new Promise(f => setTimeout(f, 9000));
   const resetcheck = await this.reset.isEnabled();
   console.log(resetcheck);
   if (resetcheck == true) {
    await this.reset.click();
    await this.resetok.click();
   }else{ console.log("Reset is disbaled")
  }
    
    await new Promise(f => setTimeout(f, 7000));
    await this.monthall.click();
   await new Promise(f => setTimeout(f, 2000));
   await this.date1.click();
   await this.monthall.click();
   await this.Selectall.nth(1).click();
   await this.Selectall.nth(2).click();
   const PersonaUI = await this.Finance.textContent();
   console.log(PersonaUI);
   await this.Finance.click({ force: true });
   await new Promise(f => setTimeout(f, 5000));
   await this.hover1.click();
   await new Promise(f => setTimeout(f, 2000));
   await this.moreopt.click();
   await this.exportdata.click();
   await this.summarydata.click();
   await this.fileformat.click();
   await this.csv.click();
   //await this.export.click();
   const downloadPromise = this. page.waitForEvent('download');
   await this.export.click();
 const download = await downloadPromise;

 // Wait for the download process to complete and save the downloaded file somewhere.
 await download.saveAs('c://Users//hussais2//Downloads//' + download.suggestedFilename());
 await new Promise(f => setTimeout(f, 7000));
 console.log("*****Reading csv file columns & Fetching  the column names******")

       rows1 = fs.createReadStream('c://Users//hussais2//Downloads//Average of Flow, Balance, Velocity by Date.csv')
        .pipe(csv())
        .on('data', (row) => {
         // console.log(row);
         
        })
        .on('end', () => {
          console.log('CSV file successfully processed.');
          console.log(typeof(rows1));
          
        });
        await new Promise(f => setTimeout(f, 5000));
        const abc = Object.values(rows1);
          console.log(typeof(abc));
          csvcolumns = abc[9];
          console.log(csvcolumns);
          console.log(typeof(csvcolumns));
          personaindex = csvcolumns.indexOf("Persona")
          devicemodelindex = csvcolumns.indexOf("Device Model")
          departmentlindex = csvcolumns.indexOf("Department")

          console.log(csvcolumns.indexOf("Device Model"));
          console.log(csvcolumns.indexOf("Persona"));
         // console.log(abc);
          persona = abc[9][personaindex];//persona value will fetch
          console.log("Persona CSV column name"+persona);
         // var hello1 = abc[9][7]; // Device model value will fetch
         // console.log(hello1);
         devicemodel= abc[9][devicemodelindex];//persona value will fetch
         console.log("Device Model CSV column name"+ devicemodel);
         department= abc[9][departmentlindex];//persona value will fetch
         console.log("Device Model CSV column name"+ department);
 
 

 const records = parse(fs.readFileSync(path.join('c://Users//hussais2//Downloads//', 'Average of Flow, Balance, Velocity by Date.csv')), {
  columns: true,
  skip_empty_lines: true
});
console.log("***********")
for (const record of records) {
  console.log("Persona dynamically from UI:"+PersonaUI);
  console.log("Persona dynamically from csv:"+record[persona])
  
  if (record[persona] == PersonaUI){

    console.log("Test Passed")
  }
    else{
      console.log("Test Failed")
     }    
      }
      
   }
   
}
