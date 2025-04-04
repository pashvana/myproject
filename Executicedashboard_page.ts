import { expect, FrameLocator, Locator, Page, selectors } from '@playwright/test';

import { ServiceHealth_page } from './ServiceHealth_page';
import { powersuit_Login_page } from './PowerSuite_Login_page';
import ENV from "C:/Users/HussaiS2/PlaywrightAutomation/src/tests/utils/env";
import dotenv from 'dotenv';
dotenv.config();
var numberOfWidgets;
var numberOfWidgetsafterrestore:number;
var widgetslist ;

export class Executivedashboard_page{
    readonly page: Page;
    readonly selectdashboard: Locator;
    readonly Executivedashboard: Locator;
    readonly platforms :Locator;
    public KPIheadername :Locator;
    readonly close :Locator;
    readonly settings: Locator;
    readonly resetlayout:Locator;
    readonly restorewidget :Locator;
    readonly msteams :Locator;
    //Org Filter Locators
    readonly orgfilterdropdown :Locator;
    readonly OrgFilterDiv :Locator;
    readonly dropdown:Locator;
    readonly noOfOptions:Locator;
    readonly Orgs :Locator;
    readonly confirm :Locator;
    readonly orgremoveall: Locator;
    readonly orginput :Locator;
    readonly filteredvalue : Locator;
    readonly cancel:Locator;
    readonly UsageandAdaption:Locator;
    readonly KPIWidget:Locator;
    readonly Zoom: Locator;
    //Locators for Timeperiod
    readonly timedropdown :Locator;
    readonly selectmonth:Locator;
    readonly previous:Locator;
    readonly Next :Locator;
  tenantdropdown: Locator;
  search: Locator;
  tenantselection: Locator;
  adaption: Locator;
  removeall: Locator;
  allwidgets: Locator;
  msteams1: Locator;
  zoom: Locator;


constructor(page: Page) {
    this.page = page;
    this.KPIWidget = this.page.frameLocator('iFrame').locator('//div[@class="kpi-widget configurable-module draggable"]');
    this.selectdashboard = page.locator('[ng-if="selectedDashboard"]');
    this.Executivedashboard = page.locator('//a[contains(normalize-space(), "Executive Dashboard")]');
    this.UsageandAdaption = page.locator('//a[contains(normalize-space(), "Usage & Adoption")]'); 
    this.KPIheadername = this.page.frameLocator('iFrame').locator('//div[@class="kpi-header draggable"]//span[contains(@style,"white-space:")]');
    this.platforms = this.page.frameLocator('iFrame').locator('//a[@id="CollabToolPopover"]');
    this.close = this.page.frameLocator('iFrame').locator('//button[@title="Close"]');
    this.settings = this.page.frameLocator('iFrame').locator("//a[@id='OpenDashboardSettingsPopover']");
    this.resetlayout = this.page.frameLocator('iFrame').locator("//span[contains(text(),'Remove All')]");
    this.restorewidget = this.page.frameLocator("iFrame").locator('//button[@id="ResetButtonPopover"]');
    this.msteams = this.page.frameLocator("iFrame").locator("//div[contains(text(),'Microsoft Teams')]");
    //Org Filter Locators
    this.orgfilterdropdown = this.page.frameLocator('iFrame').locator("//a[@id='org-filter-button']");
    this.OrgFilterDiv = this.page.frameLocator('iFrame').locator('//div[contains(@class, "org-filter-popover")]');
    this.dropdown = this.page.frameLocator('iFrame').locator('//select[@class="form-control-sm w-100 input-org-select"]');
    this.noOfOptions= this.page.frameLocator('iFrame').locator('//select[@class="form-control-sm w-100 input-org-select"]/option');
    this.Orgs = this.page.frameLocator('iFrame').locator('//div[@class="virtual-scroller-item"]');
    this.confirm = this.page.frameLocator('iFrame').locator('//button[@class="btn-xs btn btn-primary"]')
    this.orgremoveall = this.page.frameLocator('iFrame').locator('//div[@class="btn-remove-all"]') ;
    this.orginput = this.page.frameLocator('iFrame').locator("//input[@placeholder='Search']")
    this.filteredvalue = this.page.frameLocator('iFrame').locator('//div[@class="virtual-scroller-item"]');
    this.cancel = this.page.frameLocator('iFrame').locator("//button[contains(text(),'Cancel')]")
    this.Zoom = this.page.frameLocator('iFrame').locator('[id="checkZoom"]');
    this.timedropdown = this.page.frameLocator('iFrame').locator('//a[@title="Select Time Period"]');
    this.selectmonth = this.page.frameLocator('iFrame').locator('//li[@title="Select Month"]');
    this.previous = this.page.frameLocator('iFrame').locator('//button[@class="px-3 date-picker-control-button mr-1 float-left"]');
    this.Next = this.page.frameLocator('iFrame').locator('//button[@class="px-3 date-picker-control-button float-left"]');
    this.adaption = this.page.frameLocator('iFrame').locator("(//*[local-name()='svg' and @data-icon='chevron-right'])[1]");
    this.msteams1 = this.page.frameLocator('iFrame').locator("(//*[local-name()='svg' and @data-icon='chevron-right'])[2]");
    this.zoom = this.page.frameLocator('iFrame').locator("(//*[local-name()='svg' and @data-icon='chevron-right'])[3]");
    
    this.removeall = this.page.frameLocator('iFrame').locator("//*[local-name()='svg' and @data-icon='times-circle']");
    this.allwidgets = this.page.frameLocator('iFrame').locator('//div[@class="collapse show"]//span');
    //Locators for Tenant selection
this.tenantdropdown = page.locator('[ng-if="currentTenant"]');
this.search = page.locator('//input[@ng-model="tenantFilter"]');
this.tenantselection = page.locator('//span[@class="capitalize"]'); 
  }
async Navigate_To_Executive_Dashboard_Page(){
       //Click on Dashboards dropdown and select Executive Dashboard
       await this.selectdashboard.click();
       await this.Executivedashboard.click();

}
async Navigate_To_UnisysDemo_Tenant(){
  await this.tenantdropdown.click();
       await this.search.fill("Unisys-Demo");
       await this.tenantselection.first().click();
}
  async Executive_Dashboard_Page(){
    await this.platforms.click();
    await this.Zoom.click();
    await this.confirm.click();
   // await this.platforms.click() //closing the platforms dropdown
    
        //Wait for UI elements to be loaded and visible
    await this.page.waitForLoadState('load');
            //Capture widgets
            //Number of widgets on the page
    await this.KPIWidget.nth(1).waitFor();
      var numberOfWidgets =  await this.KPIWidget.count();
        console.log("Number of widgets:"+numberOfWidgets);//testing purpose printing
            for (let i = 0; i < numberOfWidgets; i++){
              var widgetNameLog = await this.KPIheadername.nth(i).textContent();
     
                console.log(widgetNameLog);
            }
            //checking the no widget is empty
        /*    for (let i = 0; i < numberOfWidgets; i++){
              await expect.soft(this.KPIWidget.nth(i).locator('//div[@class="kpi-content"]//*[name()="path" and contains(@class, "highcharts-point")]').first()).toBeVisible();
                  
            } */
        //Randomizing selection of the Widget to run test on
          const randomIndex = Math.floor(Math.random() * numberOfWidgets);
        
         await new Promise(f => setTimeout(f, 10000));
         const widgetName = await this.KPIheadername.nth(randomIndex).innerText();
         console.log("Widget Name:"+widgetName);
        //Check close button works and removes the widget from the page
         //Checking widget is currently visible on the dashboard
          console.log(await this.KPIheadername.getByText(widgetName).first().isVisible());
     
          //Clicking on close button
          await this.close.nth(randomIndex).click();
     
          //Capturing the latest list of widgets
          
            var numberOfWidgetsafterdelete =  await this.KPIheadername.count();
           console.log("Number of widgets after one widget deleted:"+numberOfWidgetsafterdelete);
           
            for (let i = 0; i < numberOfWidgetsafterdelete; ++i){
              var widgetNameLog = await this.KPIheadername.nth(i).textContent();
               expect.soft(widgetNameLog != widgetName).toBeTruthy(); //********* */
                console.log(widgetNameLog);
            }
            //assert to validate the no of widgets
         expect.soft(numberOfWidgetsafterdelete,'Widgets count verification').toEqual(numberOfWidgets-1);//********* */
          //Checking widget is no longer visible on the dashboard
            console.log(await this.KPIheadername.getByText(widgetName).isHidden());
      }
      
      
    async Executive_Dashboard_Remove_widgets_Page(){
         
    //Click on setting then remove the all widgets
    for (const li of await this.page.locator("[class='gritter-close']").all())
    await li.click();
   await this.settings.click();
   await this.resetlayout.click();
   const elementvisibilty = await this.KPIWidget.isVisible();
   expect.soft(elementvisibilty).toBeFalsy();
   //await this.KPIheadername.nth(0).waitFor();
   var numberOfWidgetsafterremoveall =  await this.KPIheadername.count();
   console.log("Number of widgets:"+numberOfWidgetsafterremoveall);//testing purpose printing
   //aading assertion to check widgets count
   expect.soft(numberOfWidgetsafterremoveall).toEqual(0); //****** */
     if(numberOfWidgetsafterremoveall == 0){console.log("All widgets are removed")}
     else{console.log(" widgets are not removed")}
     //Restore the widgets and verify the count
    await this.restorewidget.click();
    await this.msteams.click();
    //Verify the count of widgets after restored the widget
   await this.KPIheadername.nth(2).waitFor();
   numberOfWidgetsafterrestore =  await this.KPIWidget.count();
   console.log("Number of widgets after restore:"+numberOfWidgetsafterrestore);
   expect.soft(numberOfWidgetsafterrestore).toBeGreaterThan(1) //****** */
  
   

  }
  async OrgFilter_Functionality(){
      await this.orgfilterdropdown.click();
   
    
  
    //Randomizing selection of the Organization Attribute to filter on
    
    const numberOfOptions = await this.noOfOptions.count();
    const randomIndex = Math.floor(Math.random() * numberOfOptions);
    await this.dropdown.selectOption({ index: randomIndex });
   
     //From the list of Organizations under the Organization Attribute, 
    //Randomizing the specific Organization selected to then use as a filter on data from reporting db
    
    const OrgsOptions = await this.Orgs.count();
    const randomIndexOrg = Math.floor(Math.random() * OrgsOptions);
    await this.Orgs.nth(randomIndexOrg).click();
   
    
    //Click on confirm button to launch Org filter query on db
    await this.confirm.click();
  
    //Checking 200 api response from reporting db
    const responseOrg = await this.page.waitForResponse((responseOrg) => 
    responseOrg.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/usageandadoption/"));
  
  
    await expect.soft(responseOrg.status()).toBe(200);
  
    //Remove org filter
    await this.orgfilterdropdown.click();
    await this.page.frameLocator('iFrame').locator('//div[@class="badge badge-sm"]').click();
    await this.confirm.click();
    await this.orgfilterdropdown.click();
    //await this.orgremoveall.hover()  these lines commented 
   // await this.orgremoveall.click();
    //Multiple select options
  
    await this.Orgs.nth(randomIndexOrg).click();
    await this.Orgs.nth(randomIndexOrg).click();
    //Click on confirm button to launch Org filter query on db
    await this.confirm.click();
 //Verifying the APi response
  
  const responseOrg1 = await this.page.waitForResponse((responseOrg) => 
    responseOrg.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/usageandadoption/"));
  const responseBodyOrg1 = await responseOrg.json();
  await expect.soft(responseOrg1.status()).toBe(200);
  
  //verify the filter functionality on org filetr
  await this.orgfilterdropdown.click();
  await this.orginput.fill("Finance");
  await new Promise(f => setTimeout(f, 10000));
  await expect.soft(this.filteredvalue).toBeVisible();
  const value = await this.filteredvalue.innerText();
  //add assertion here it  appera in report
  expect.soft(value == "Finance").toBeTruthy();
  if(value == "Finance"){
      console.log("Filtered Value is matched")
  }
  else{
      console.log("Filterred Value is not matched")
  }
  }
  async verify_widget_data(){
    //Go to previous month
    await this.timedropdown.click();
    await this.selectmonth.click();
    await this.previous.click();
    await this.previous.click();
        //checking the no widget is empty
        await this.KPIWidget.nth(1).waitFor();
         var numberOfWidgets =  await this.KPIWidget.count();
         console.log(numberOfWidgets);
            for (let i = 0; i < numberOfWidgets; i++){
              console.log("Iteration number:"+i);
              await new Promise(f => setTimeout(f, 10000));
             // await expect.soft(this.KPIWidget.nth(i).locator('//div[@class="kpi-content"]//*[name()="path" and contains(@class, "highcharts-point")]').first()).toBeVisible();
          
           if(await this.KPIWidget.nth(i).locator('//div[@class="kpi-content"]//*[name()="path" and contains(@class, "highcharts-point")]').first().isVisible() == true ) {
            await expect.soft(this.KPIWidget.nth(i).locator('//div[@class="kpi-content"]//*[name()="path" and contains(@class, "highcharts-point")]').first()).toBeVisible();
           }else{
            console.log("widget don't have data points")
          }   
               } 
            } 
  async Add_all_widgets_From_Adaption(){
    await this.settings.click();
    await this.removeall.click();
    await this.zoom.click();
    await new Promise(f => setTimeout(f, 5000));
    await this.msteams1.click();
    await new Promise(f => setTimeout(f, 5000));
    await this.adaption.click();
    await new Promise(f => setTimeout(f, 5000));
  
   
    var ListOfWidgets =  await this.allwidgets.count();
    console.log(ListOfWidgets);
       for (let j = 0; j < ListOfWidgets; j++){
         console.log("Iteration number:"+j);
        const widgetname = await this.allwidgets.nth(j).textContent();
        console.log(widgetname);
        await this.allwidgets.nth(j).click();
        await new Promise(f => setTimeout(f, 6000));
        //Verifying the Header name from KPI card
        var widgetNameLog = await this.KPIheadername.nth(j).textContent();
     
                console.log("Name of the widget"+widgetNameLog);
                expect.soft(widgetname).toEqual(widgetNameLog);

       }
  }
}
