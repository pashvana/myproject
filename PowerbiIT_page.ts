import { expect, Locator, Page, selectors, } from '@playwright/test';

import * as dotenv from 'dotenv';
import * as fs from "fs";
import { parse } from 'csv-parse/sync';
import path from 'path';
import csv from 'csv-parser';
var persona
var devicemodel;
var personaindex;
var devicemodelindex;
var csvcolumns;
var department;
var departmentindex
let rows1:object;
var PersonaUI;

dotenv.config({
  path:'./.env'
  
});

  export class powerbiIT_page {
    readonly page: Page;
    
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
    readonly monthall: Locator;


    constructor(page: Page) {
        this.page = page;
        
      
        this.date1= page.locator('//div[@title="6/1/2023"]//child::div//child::span');
        this.Selectall = page.locator('//div[@title="Select all"]//child::div//child::span');
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
     this.resetok = page.locator("//button[@id='okButton']");
     this.monthall= page.locator('[class="slicer-restatement"]').nth(2);
      }
     async Powerbi_IT_Validation(){
      const resetcheck = await this.reset.isEnabled();
      console.log(resetcheck);
      if (resetcheck == true) {
       await this.reset.click();
       await this.resetok.click();
      }else{
         console.log("Reset is disbaled")
     }
     await this.monthall.click();
     await new Promise(f => setTimeout(f, 7000));
     await this.date1.click();
     await this.monthall.click();
     await this.Selectall.nth(1).click();
     await this.Selectall.nth(2).click();
        await new Promise(f => setTimeout(f, 5000));
        PersonaUI = await this.IT.textContent();
        console.log(PersonaUI);
        await this.IT.click({ force: true });
     await new Promise(f => setTimeout(f, 5000));
     await this.hover1.click();
     await new Promise(f => setTimeout(f, 2000));
     await this.moreopt.click();
     await this.exportdata.click();
     await this.summarydata.click();
     await this.fileformat.click();
     await this.csv.click();
     //await this.export.click();
     const downloadPromise1 = this. page.waitForEvent('download');
     await this.export.click();
   const download1 = await downloadPromise1;
  
   // Wait for the download process to complete and save the downloaded file somewhere.
   await download1.saveAs('c://Users//hussais2//Downloads//' + download1.suggestedFilename());
   await new Promise(f => setTimeout(f, 9000));
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
      departmentindex = csvcolumns.indexOf("Department")

      console.log(csvcolumns.indexOf("Device Model"));
      console.log(csvcolumns.indexOf("Persona"));
     // console.log(abc);
      persona = abc[9][personaindex];//persona value will fetch
      console.log("Persona CSV column name"+persona);
     // var hello1 = abc[9][7]; // Device model value will fetch
     // console.log(hello1);
     devicemodel= abc[9][devicemodelindex];//persona value will fetch
     console.log("Device Model CSV column name"+ devicemodel);
     department= abc[9][departmentindex];//persona value will fetch
     console.log("Device Model CSV column name"+ department);



   const records1 = parse(fs.readFileSync(path.join('c://Users//hussais2//Downloads//', 'Average of Flow, Balance, Velocity by Date.csv')), {
    columns: true,
    skip_empty_lines: true
  });
  console.log("***********")
  for (const record1 of records1) {
    console.log("Persona dynamically from UI:"+PersonaUI);
  console.log("Persona dynamically from csv:"+record1[persona])
    if (record1[persona] == PersonaUI){
  
      console.log("Test Passed")
    }
      else{
        console.log("Test Failed")
       }
      }}
    async Powerbi_Persona_Dept_Validation(){
      await new Promise(f => setTimeout(f, 5000));
    //Department and Persona filter combination
      var DepartmentUI = await this.dept_cloud.textContent();
        console.log(DepartmentUI);
       await this.dept_cloud.click();
      await new Promise(f => setTimeout(f, 5000));
      await this.hover1.click();
      await new Promise(f => setTimeout(f, 2000));
      await this.moreopt.click();
      await this.exportdata.click();
      await this.summarydata.click();
      await this.fileformat.click();
      await this.csv.click();
      const downloadPromise2 = this. page.waitForEvent('download');
      await this.export.click();
    const download2 = await downloadPromise2;
   
    // Wait for the download process to complete and save the downloaded file somewhere.
    await download2.saveAs('c://Users//hussais2//Downloads//' + download2.suggestedFilename());
    await new Promise(f => setTimeout(f, 7000));
   
    const records2 = parse(fs.readFileSync(path.join('c://Users//hussais2//Downloads//', 'Average of Flow, Balance, Velocity by Date.csv')), {
     columns: true,
     skip_empty_lines: true
   });
   console.log("***********")
   for (const record_A of records2) {
    console.log("Persona dynamically from UI:"+PersonaUI);
    console.log("Department dynamically from UI:"+DepartmentUI);
    console.log("Persona dynamically from csv:"+record_A[persona])
     console.log("Persona is " +PersonaUI +"Department is :"+record_A[department]);

     if (record_A[persona] == PersonaUI && record_A[department] == DepartmentUI){
   
       console.log("Test Passed")
     }
       else{
         console.log("TestFailed")
        }
     
         }
   //await new Promise(() => {});
   
     }}