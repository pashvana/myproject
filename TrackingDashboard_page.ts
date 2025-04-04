import { expect, Locator, Page, selectors, } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import path from 'path';
import fs from 'fs';

export class TrackingDashboard_page{
    private page:Page;
    selectdashboard: Locator;
    Trackingdashboard: Locator;
    platforms: Locator;
    hours: Locator;
    tenantdropdown: Locator;
    search: Locator;
    tenantselection: Locator;
    daysrange: Locator;
    daysrange1: Locator;
    selectgroup: Locator;
    groupname: Locator;
    paneltimerange: Locator;
    overallexp: Locator;
    panelheader: Locator;
    tablerows: Locator;
    tableUser: Locator;
    gridmenubutton: Locator;
    exportvisibledata: Locator;
     Qualitydropdown: Locator;
    widgetclose1: Locator;
    widgetclose2: Locator;
    restorewidget: Locator;
    expsummary: Locator;
    poorandbadexp: Locator;

    constructor(page: Page) {
        this.page = page;
        this.selectdashboard = page.locator('[ng-if="selectedDashboard"]');
        this.Trackingdashboard = page.locator('//a[contains(normalize-space(), "Tracking Dashboard")]');
        this.platforms = page.locator('//a[@id=CollabToolPopover]//span[contains(text(),Platforms)]');
        this.hours =page.locator('//div[@class="collapse navbar-collapse"]//div/button');
         //Locators for Tenant selection
        this.tenantdropdown = page.locator('[ng-if="currentTenant"]');
        this.search = page.locator('//input[@ng-model="tenantFilter"]');
        this.tenantselection = page.locator('//span[@class="capitalize"]');
        //Locators for time range
        this.selectgroup = page.locator('//span[@class="dropdown-inline"]');
        this.daysrange = page.locator('//button[contains(text(),"30 days")]');
        this.daysrange1 = page.locator('//button[contains(text(),"48 hours")]');
       // this.groupname = page.locator("//a[contains(text(),'Test Group')]");  this is for unifysquare tenant
       //this.groupname = page.locator("//a[contains(text(),'Group Test bug')]");
       this.groupname = page.locator("//a[contains(text(),'Chris Testing')]");
        this.paneltimerange = page.locator('//span[@class="panel-title-time-span"]');
        this.overallexp = page.locator("//div[@class='ui-grid-header-cell-row']//div[@role='columnheader']//span[contains(text(),'Overall Experience')]")
        this.panelheader = page.locator("//div[@class='panel-body']").nth(0);
        
        this.tablerows = page.locator("//div[@class='panel-body']//div[@class='ui-grid-viewport']//div[@role='row']");
        this.tableUser = page.locator("//div[@class='panel-body']//div[@class='ui-grid-viewport']//div[@role='row']/div/div[@tooltip-placement='top']");
        this.gridmenubutton = page.locator("//i[@class='ui-grid-icon-menu']");
        this.exportvisibledata = page.locator("//button[contains(text(),'Export visible data as CSV')]");
        this.Qualitydropdown = page.locator("[placeholder='Filter for column']");
        this.widgetclose1 = page.locator("//div[@class='panel-heading-buttons']").first();
        this.widgetclose2 = page.locator("//div[@class='panel-heading-buttons']").nth(1);
        this.restorewidget = page.locator("  //button[@class='btn btn-white btn-sm']");
        this.expsummary = page.locator("//span[contains(text(),'Experience Summary')]");
        this.poorandbadexp = page.locator("//div[@class='panel-body']//div[@class='ui-grid-viewport']//div[@role='row']");
   
    }
async Navigate_To_Tracking_Dashboard(){
      await this.selectdashboard.click();
      await this.Trackingdashboard.click();

}
async Navigate_To_Unifysquare_Tenant(){
       await this.tenantdropdown.click();
       await this.search.fill("Unifysquare");
       await this.tenantselection.first().click();
       await new Promise(f => setTimeout(f, 3000));
       
}
async Tracking_Dashboard_Select_group_Action(){
  await this.selectgroup.click();
  await this.groupname.first().click();
  
  const groupname = (await this.selectgroup.textContent())?.trim();
 // expect.soft(groupname).toBe("Chris's Test Group"); this line for unifusqure tenant
 expect.soft(groupname).toBe("Chris Testing");  //This is for unisys-demo tenant
}
async Tracking_Dashboard_TimePeriod_Actions(){
        
        //Click on 48 Hours period and verify the API response
        await this.daysrange1.click();
        const responseSite = await this.page.waitForResponse((responseSite) => 
        responseSite.url().includes("https://powersuite-dev.unifysquare.com/api/helpdesk/search-call-history"));
        expect.soft(responseSite.status()).toBe(200);
        //Verify the Panel time range is applied based on filter
        const paneltimerage1 = (await this.paneltimerange.nth(0).textContent())?.includes("48 hours");
        expect.soft(paneltimerage1).toBe(true);
        //Click on 30 Days period and verify the API response
        await this.daysrange.click();
        const responseSite1 = await this.page.waitForResponse((responseSite1) => 
        responseSite1.url().includes("https://powersuite-dev.unifysquare.com/api/helpdesk/search-call-history"));
        expect.soft(responseSite1.status()).toBe(200);
        const paneltimerage2 = (await this.paneltimerange.nth(0).textContent())?.includes("30 days");
        expect.soft(paneltimerage2).toBe(true);
        //await new Promise(() => {});
     }

async Tracking_Dashboard_Filter_Functionality(){
    //console.log(await this.tablerows.nth(0));
    //await this.page.locator("//div[@class='panel-body']//div[@class='progress']//div//span").nth(0).waitFor();
    await new Promise(f => setTimeout(f, 10000));
    var firstRowUser = await this.tableUser.nth(0).textContent();
    console.log("********"+firstRowUser);
    const firstRowUser1 = await this.tableUser.nth(1).textContent();
    console.log(firstRowUser1);
    await new Promise(f => setTimeout(f, 10000));
    await this.tableUser.nth(0).click({force:true});
    if(await this.Qualitydropdown.nth(0).isVisible()){
      await this.Qualitydropdown.nth(0).click();
      await this.Qualitydropdown.nth(0).selectOption({label:"Bad"});
    }
    else{
      firstRowUser = firstRowUser1
      await this.tableUser.nth(1).click({force:true});
    await this.Qualitydropdown.nth(0).click();
    await this.Qualitydropdown.nth(0).selectOption({label:"Bad"});}
   // await this.page.locator('//div[contains(text(),"firstRoUser")]').click();
   //Click Grid menu button to download only visble data
   await this.gridmenubutton.nth(1).click();
   //Click on Export visible data as CSV
  // const downloadPromise = this. page.waitForEvent('download');
  //await this.Qualitydropdown.selectOption({label:"Bad"});

   await this.exportvisibledata.click();
   //Download and Read CSV file
   const downloadPromise = this. page.waitForEvent('download');
   const download = await downloadPromise;

       // Wait for the download process to complete and save the downloaded file somewhere.
       const file = download.suggestedFilename();
      console.log(file)
       await download.saveAs('c://Users//hussais2//Downloads//' + download.suggestedFilename());
       
       const records = parse(fs.readFileSync(path.join('c://Users//hussais2//Downloads//', file)), {
         columns: true,
         skip_empty_lines: true
       });
       
       
       for (const record of records) 
       {
         //console.log(record.FQDN);
          var Username = record.User
          expect.soft(Username).toEqual(firstRowUser);
          var Quality1 = record.Quality
          expect.soft(Quality1).toEqual("Bad");
          console.log(Quality1);  
         }

    
    //await new Promise(() => {});
}

async Widget_Close_and_restore(){
    //Removing the both the widgets
    await this.widgetclose1.click();
    await this.widgetclose2.click();
    await new Promise(f => setTimeout(f, 5000));
    const headervisible = await this.expsummary.isVisible()
    console.log(headervisible);
   expect.soft(headervisible).toEqual(false)
    //Restoring the all the widgets
  await this.restorewidget.click();
  await new Promise(f => setTimeout(f, 5000));
  const headervisible1 = await this.expsummary.isVisible();
  expect.soft(headervisible1).toEqual(true)
  
}
async verify_Helpdesk_page_Navigation(){
    //await this.daysrange.click(); commented for unisys-demo tenant ,un comment when runninng for unify square tenant
    await this.widgetclose1.click();
    const matchingelements = await this.poorandbadexp.count();
    console.log("Total rows are:"+matchingelements);
    let numberofelements:number = (matchingelements+1)/2;
    await new Promise(f => setTimeout(f, 5000));
    //await this.poorandbadexp.nth(numberofelements+3).click({force:true});
    //const rowname = await this.page.locator("//div[@class='panel-body']//div[@class='ui-grid-viewport']//div[@role='row'])[12]/div[1]").textContent();
   // console.log(rowname);
    await this.page.locator("//div[@class='panel-body']//div[@class='ui-grid-viewport']//div[@role='row']//div[2]").nth(0).click({force:true});
    const pagePromise = this.page.waitForEvent('popup');
    const newTab = await pagePromise;
    await newTab.waitForLoadState();
    await new Promise(f => setTimeout(f, 10000));
    await newTab.reload();
    await new Promise(f => setTimeout(f, 10000));
    await newTab.waitForLoadState('domcontentloaded');
    const title1 = await newTab.title();
    console.log(title1)
    await expect(title1).toEqual("[Dev] Help Desk - PowerSuite");
   // await new Promise(() => {});

}
}
