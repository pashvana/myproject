import { expect, FrameLocator, Locator, Page, selectors } from '@playwright/test';
import { times } from 'lodash';
var numberOfWidgets;
var numberOfWidgetsafterrestore:number;
export class MonitoringDashboard_page {
    readonly page: Page;
    readonly selectdashboard: Locator;
    readonly Monitoringdashboard: Locator;
    readonly platforms :Locator;
    readonly hours:Locator;
    readonly timeduration :Locator;
    readonly KPIWidget :Locator;
    readonly KPIheadername:Locator;
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
   //readonly UsageandAdaption:Locator;
  
    readonly Zoom: Locator;
    //Locators for Timeperiod
    readonly timedropdown :Locator;
    readonly selectmonth:Locator;
    readonly previous:Locator;
    readonly Next :Locator;
    readonly searchwidget :Locator;
    readonly dropdownitem :Locator;
    private tenantdropdown:Locator;
    private search:Locator;
    private tenantselection:Locator;
    

constructor(page: Page) {
    this.page = page;
  
    this.selectdashboard = page.locator('[ng-if="selectedDashboard"]');
    this.Monitoringdashboard = page.locator('//a[contains(normalize-space(), "Monitoring Dashboard")]');
    this.platforms = page.locator('//a[@id=CollabToolPopover]//span[contains(text(),Platforms)]');
    this.hours =page.locator('//div[@class="collapse navbar-collapse"]//div/button');

    this.timeduration = page.frameLocator('iFrame').locator('//div[@class="collapse navbar-collapse"]//button');
    this.KPIWidget = this.page.frameLocator('iFrame').locator('//div[@class="kpi-widget configurable-module draggable"]');
    this.KPIheadername = this.page.frameLocator('iFrame').locator('//div[@class="kpi-header draggable"]//span[contains(@style,"white-space:")]');
    this.platforms = this.page.frameLocator('iFrame').locator('//a[@id="CollabToolPopover"]');
    this.close = this.page.frameLocator('iFrame').locator('//button[@title="Close"]');
    this.settings = this.page.frameLocator('iFrame').locator("//a[@id='OpenDashboardSettingsPopover']");
    this.resetlayout = this.page.frameLocator('iFrame').locator("//span[contains(text(),'Remove All')]");
    this.restorewidget = this.page.frameLocator("iFrame").locator('//button[@title="Restore default dashboard layout."]');
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
    this.searchwidget = this.page.frameLocator('iFrame').locator('//input[@class="my-2 form-control form-control-sm"]');
    this.dropdownitem = this.page.frameLocator('iFrame').locator('//button[@class="dropdown-item"]');

//Locators for Tenant selection
this.tenantdropdown = page.locator('[ng-if="currentTenant"]');
this.search = page.locator('//input[@ng-model="tenantFilter"]');
this.tenantselection = page.locator('//span[@class="capitalize"]');  }


async Navigate_To_UnisysDemo_Tenant(){
  await this.tenantdropdown.click();
       await this.search.fill("Unisys-Demo");
       await this.tenantselection.first().click();
}
async Navigate_To_Monitoring_Dashboard_Page(){
    //Click on Dashboards dropdown and select Monitoring Dashboard
    await this.selectdashboard.click();
    await this.Monitoringdashboard.click();

}
async Monitoring_Dashboard_Page(){
     //Wait for UI elements to be loaded and visible
    await this.page.waitForLoadState('domcontentloaded');
    //await this.platforms.click();
    await new Promise(f => setTimeout(f, 10000));
    await this.timeduration.nth(1).click();
    const responseSite = await this.page.waitForResponse((responseSite) => 
  //  responseSite.url().includes("https://powersuite-api-dev.unifysquare.com/synthetics-realtimedata/v1/RuleStatus/"));
    responseSite.url().includes("https://powersuite-api.unifysquare.com/synthetics-realtimedata/v1/RuleStatus/"));

    //Store response body in a variable
    await expect.soft(responseSite.status()).toBe(200);

    //Verify platform option on page
    await this.platforms.click();
    await this.Zoom.click(); // Unselecting the Zoom
    await this.confirm.click();

    await this.KPIWidget.nth(1).waitFor();
      var numberOfWidgets =  await this.KPIWidget.count();
        console.log("Number of widgets:"+numberOfWidgets);//testing purpose printing
            for (let i = 0; i < numberOfWidgets; i++){
              var widgetNameLog = await this.KPIheadername.nth(i).textContent();
     
                console.log(widgetNameLog);
            }
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
       async Monitoring_Dashboard_Remove_widgets_Page(){
         
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
      //  await this.msteams.click();
        //Verify the count of widgets after restored the widget
       await this.KPIheadername.nth(2).waitFor();
       numberOfWidgetsafterrestore =  await this.KPIWidget.count();
       console.log("Number of widgets after restore:"+numberOfWidgetsafterrestore);
       expect.soft(numberOfWidgetsafterrestore).toBeGreaterThan(1) //****** */
    
      }
      async Monitoring_Dashboard_add_search_widget_(){
         
        //Click on setting then remove the all widgets
        for (const li of await this.page.locator("[class='gritter-close']").all())
        await li.click();
        await this.settings.click();
        await this.resetlayout.click();
        await this.searchwidget.fill("Availability by Room");
        const itemname = await this.dropdownitem.textContent();
        expect.soft(itemname).toBe('Availability by Room');
        await this.dropdownitem.click();
        var WidgetsName =  await this.KPIheadername.textContent();
        console.log(WidgetsName);
        expect.soft(WidgetsName).toBe('Availability by Room');
      
      }
   
}