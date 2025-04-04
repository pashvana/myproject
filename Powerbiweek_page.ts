import { expect, Locator, Page, selectors, } from '@playwright/test';

import * as dotenv from 'dotenv';
import * as fs from "fs";
import { parse } from 'csv-parse/sync';
import path from 'path';
import csv from 'csv-parser';
 var hello;
 let rows1:object;
 var abc;
 var persona
var devicemodel;
var personaindex;
var devicemodelindex;
var csvcolumns;




dotenv.config({
  path:'./.env'
  
});

  export class powerbiweek_page {
    readonly page: Page;
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
    readonly dell :Locator;
    readonly hp:Locator;
    readonly Selectallweek :Locator;


    constructor(page: Page) {
        this.page = page;
       this.monthall= page.locator('[class="slicer-restatement"]').nth(1);
       this.weekall= page.locator('[class="slicer-restatement"]').nth(1);
       this.date1= page.locator('//div[@title="5/7/2023"]//child::div//child::span');
       //this.date2= page.locator('//div[@title="5/7/2023"]//child::div//child::span');
       this.Selectall = page.locator("//span[contains(text(),'Select all')]");
       this.Selectallweek = page.locator('//span[@class="slicerText"]');
       this.Finance = page.locator("//span[contains(text(),'Finance')]");
       this.IT = page.locator("//span[contains(text(),'IT')]");
       this.hover1 = page.locator('[class="interactive-grid innerContainer"]');
       this.moreopt = page.locator('[data-testid="visual-more-options-btn"]');
       this.exportdata = page.locator("//span[normalize-space()='Export data']");
       this.summarydata = page.locator("//span[@class='fluentTheme-sm-reg exportTypeRadioButtonDescription']");
       this.export = page.locator("//button[@aria-label='Export']");
       this.dept_dws = page.locator("//span[contains(text(),'DWS')]");
       this.dept_cloud = page.locator("//span[contains(text(),'Cloud Managed Services')]");
       this.fileformat = page.locator("[data-testid='pbi-dropdown-trigger-container']");
      this.csv = page.locator(" //span[contains(text(),'.csv (30,000-row max)')]");
      this.reset = page.locator("[data-testid='reset-to-default-btn']");
      this.dell = page.locator('//div[@class="slicerItemContainer" and @data-row-index="1"]');
      this.hp = page.locator('//div[@class="slicerItemContainer" and @data-row-index="2"]');
     // this.hp = page.locator('//div[@title="HP EliteBook x360 830 G6"]');
      this.resetok = page.locator("//button[@id='okButton']");
      }
     async Powerbi_Week_data(){
    
       await new Promise(f => setTimeout(f, 9000));
       const resetcheck = await this.reset.isEnabled();
   console.log(resetcheck);
   if (resetcheck == true) {
    await this.reset.click();
    await this.resetok.click();
   }else{ console.log("Reset is disbaled")
  }
        await this.weekall.click();
        await this.Selectallweek.nth(16).click();//added extra action 4/5/24
        await this.date1.click();
        await this.weekall.click();
        await this.Selectall.nth(0).click();//added extra action 4/5/24
        const devicemodel1 = await this.dell.nth(0).textContent();
        console.log(devicemodel1);
        await this.dell.nth(0).click();
        //await this.dell.nth(1).click();
         await new Promise(f => setTimeout(f, 5000));
        await this.hover1.click();
        await new Promise(f => setTimeout(f, 2000));
        await this.moreopt.click();
        await this.exportdata.click();
        await this.summarydata.click();
        await this.fileformat.click();
        await this.csv.click();
       //await this.export.click();
       const downloadPromise = this.page.waitForEvent('download');
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
         // console.log(typeof(rows1));
          
        });
        await new Promise(f => setTimeout(f, 5000));
        const abc = Object.values(rows1);
          console.log(typeof(abc));
          csvcolumns = abc[9];
          console.log(csvcolumns);
          console.log(typeof(csvcolumns));
          personaindex = csvcolumns.indexOf("Persona")
          devicemodelindex = csvcolumns.indexOf("Device Model")

          console.log(csvcolumns.indexOf("Device Model"));
          console.log(csvcolumns.indexOf("Persona"));
         // console.log(abc);
          persona = abc[9][personaindex];//persona value will fetch
          console.log("Persona CSV column name"+persona);
         // var hello1 = abc[9][7]; // Device model value will fetch
         // console.log(hello1);
         devicemodel= abc[9][devicemodelindex];//Device model value will fetch
         console.log("Device Model CSV column name"+ devicemodel);
 
      console.log("***********")
  const records = parse(fs.readFileSync(path.join('c://Users//hussais2//Downloads//', 'Average of Flow, Balance, Velocity by Date.csv')), {
  columns: true,
  skip_empty_lines: true
}); 


for (const record of records) {
  console.log("Device model dynamically from UI:"+devicemodel1);
 console.log("Device model dynamically from csv:"+record[devicemodel])
  if (record[devicemodel] == devicemodel1){

    console.log("Test Passed");
  
  }
    else{
      console.log("TestFailed")
     }    
    }}
      async Powerbi_Week_data_devicemodel(){
        await new Promise(f => setTimeout(f, 9000));
        const resetcheck = await this.reset.isEnabled();
        console.log(resetcheck);
        if (resetcheck == true) {
         await this.reset.click();
         await this.resetok.click();
        }else{ console.log("Reset is disbaled")
       }
        await new Promise(f => setTimeout(f, 9000));
        await this.weekall.click();
        await this.Selectallweek.nth(16).click(); //added extra line 4/5/24
        await this.date1.click();
        await this.weekall.click();
        await this.Selectall.nth(0).click();//added extra action 4/5/24
        const devicemodel2 = await this.hp.nth(0).textContent();
        console.log(devicemodel2);
        await this.page.mouse.down();
        await new Promise(f => setTimeout(f, 2000));
        await this.hp.nth(0).click({ force: true });
       // await this.dell.nth(3).click();
        await new Promise(f => setTimeout(f, 5000));
        await this.hover1.click();
        await new Promise(f => setTimeout(f, 9000));
        await this.moreopt.click();
        await this.exportdata.click();
        await this.summarydata.click();
        await this.fileformat.click();
        await this.csv.click();
       //await this.export.click();
       const downloadPromise = this.page.waitForEvent('download');
       await this.export.click();
       const download = await downloadPromise;

        // Wait for the download process to complete and save the downloaded file somewhere.
      await download.saveAs('c://Users//hussais2//Downloads//' + download.suggestedFilename());
      await new Promise(f => setTimeout(f, 7000));

   const records1 = parse(fs.readFileSync(path.join('c://Users//hussais2//Downloads//', 'Average of Flow, Balance, Velocity by Date.csv')), {
  columns: true,
  skip_empty_lines: true
});
console.log("***********")
for (const record1 of records1) {
  console.log("Device model"+record1["Device Model"]);

 console.log("Device model dynamically from UI:"+devicemodel2);
 console.log("Device model dynamically from csv:"+record1[devicemodel])
  if (record1[devicemodel] == devicemodel2){

    console.log("Test Passed")
  }
    else{
      //console.error();
      
      console.log("TestFailed")
     }    
      }
    }}
  