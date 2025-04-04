import { expect, Locator, Page, selectors } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import path from 'path';
import fs from 'fs';
import { assert } from 'console';


export class Insightcenter{
    readonly page : Page
    readonly selectdashboard : Locator;
    readonly selectinsight :Locator;
    readonly Experience :Locator;
    private Policies :Locator;
    readonly FilterAll :Locator;
    readonly statusall :Locator;
    readonly done : Locator;
    readonly vulcard: Locator;
    readonly details : Locator;
    readonly History : Locator;
    readonly cancelbutton : Locator;
    readonly deviceconfigfit : Locator;
    readonly devicerefresh : Locator;
    readonly impact :Locator;
    readonly personaFinance :Locator;
    readonly personasales :Locator;
    readonly impacttotal :Locator;
    readonly vulpercebtage :Locator;
    readonly deviceconfigfitimpact :Locator;
    readonly devicerefreshimpact:Locator;
    readonly configpercentage :Locator;
    readonly refreshpercentage: Locator;
    private tenantdropdown:Locator;
    private search:Locator;
    private tenantselection :Locator;
    //Elements for poor calls
    private poorcallscard :Locator;
    private all:Locator;
    private opsdashboardlink :Locator;
    private events :Locator;
    private eventschartpoint :Locator;
    private view :Locator;
    private Listview :Locator;
    private Tablesearch :Locator;
    private profilefilter:Locator;
    private downloadoptions :Locator;
    private clearallfields :Locator;
    private exportalldata:Locator;
    private exportvisibledata:Locator;
    private Geography :Locator;
    private EMEA :Locator;
    //Locators for Policies cards
    private teamcompilance:Locator;
    private Exceptionstoexpire:Locator;
    private policymanagementlink :Locator;
    private poorcalssdaychart:Locator;
    private daychartpoints :Locator;
    
    constructor(page: Page) {
    this.page = page;
    //Locatior for Vulnerability detection cards
    this.selectdashboard = page.locator('[ng-if="selectedDashboard"]');
    this.selectinsight = page.locator('//a[contains(normalize-space(), "Insights Center")]');
    this.Experience =page.locator('//td[contains(text(),"Experience")]');
    this.Policies =page.locator('//td[contains(text(),"Policies")]');
    this.FilterAll = page.locator('[data-tag="menu-show"]');
    this.statusall = page.locator('[type="checkbox"]').first();
    this.done = page.locator('[label="Done"]');
    this.vulcard = page.locator('//span[contains(text(),"Vulnerability Detection")]').nth(0);
    this.impact = page.locator('//span[contains(text(),"Vulnerability Detection")]//following::td[2]')
    this.details = page.locator('//uib-tab-heading[contains(text(),"Detail")]');
    this.History = page.locator('//uib-tab-heading[contains(text(),"History")]');
    this.cancelbutton = page.locator('//span[contains(text(),"Cancel")]');
    this.impacttotal = page.locator('//span[contains(text(),"Vulnerability Detection")]//following::span[6]')
    this.vulpercebtage = page.locator('//span[contains(text(),"Vulnerability Detection")]//following::span[3]')
    //Locators for Device Config. Persona Fit
   this.deviceconfigfit = page.locator('//span[contains(text(),"Device Config.")]').first();
   this.deviceconfigfitimpact = page.locator('//span[contains(text(),"Device Config.")]//following::span[5]');
   this.configpercentage = page.locator('//span[contains(text(),"Device Config.")]//following::span[2]');
   // Locators for Device Refresh
   this.devicerefresh = page.locator('//span[contains(text(),"Device Refresh")]').first();
   this.personaFinance = page.locator("//following::strong[contains(text(),'Finance')]");
   this.personasales = page.locator("//following::strong[contains(text(),'Sales')]");
   this.devicerefreshimpact = page.locator('//span[contains(text(),"Device Refresh")]//following::span[6]')
   this.refreshpercentage = page.locator('//span[contains(text(),"Device Refresh")]//following::span[3]')
  //Locators for Poor calls
   this.poorcallscard = page.locator('//span[contains(text(),"Poor calls")]').first();
   this.all = page.locator('//td[contains(text(),"All")]');
   this.opsdashboardlink = page.locator("//h4[contains(text(),'Operations Dashboard')]")
   this.events = page.locator("//uib-tab-heading[contains(text(),'Events')]");
   this.eventschartpoint = page.locator("[class='highcharts-point']");
   this.daychartpoints = page.locator("[class='highcharts-point highcharts-color-1']");
  
  
   //Locators for Tenant selection
  this.tenantdropdown = page.locator('[ng-if="currentTenant"]');
  this.search = page.locator('//input[@ng-model="tenantFilter"]');
  this.tenantselection = page.locator('//span[@class="capitalize"]');
  //Locators for Tiles view and List view
  this.view = page.locator("//span[@class='dropdown-inline']");
  this.Listview = page.locator("//span[@class='fa-fw fa fa-list-ul m-r-10']");
  this.Tablesearch = page.locator("//div[@class='ui-grid-filter-container']//div//input");
  this.profilefilter = page.locator("//div[@id='1718099961046-0-uiGrid-00I4-cell']");
  this.downloadoptions = page.locator("[class='ui-grid-icon-menu']");
  this.clearallfields = page.locator("//button[contains(text(),'Clear all filters')]");
 this.exportalldata = page.locator("//button[contains(text(),'Export all data as CSV')]");
 this.exportvisibledata = page.locator("//button[contains(text(),'Export visible data as CSV')]");
 this.Geography = page.locator("[id='tree-dropdown']");
  this.EMEA = page.locator("//div[contains(text(),'EMEA')]");
//Locators for Policies cards
this.teamcompilance = page.locator("//span[contains(text(),'Teams compliance')]");
this.Exceptionstoexpire = page.locator("//span[contains(text(),'Exceptions to expire')]");
this.policymanagementlink = page.locator("//h4[contains(text(),'Policy Management')]");
this.poorcalssdaychart = page.locator("[class='btn btn-default btn-sm semi-bold']");


  }
  async Navigate_To_InsightCenter_Dashboard(){
       await this.selectdashboard.click();
       await this.selectinsight.click();
       await this.tenantdropdown.click();
       await this.search.fill("Unisys-Demo");
       await this.tenantselection.first().click();
       await new Promise(f => setTimeout(f, 3000));
       await this.FilterAll.click();
       await this.statusall.check();
       await this.done.click();
  }

  async InsightCenter_Vulnerability_Detection(){
    
       await this.Experience.click();
       
       await this.vulcard.click();
       await this.details.click();
       await new Promise(f => setTimeout(f, 2000));
       const downloadPromise = this. page.waitForEvent('download');
       await this.page.locator('[label="Download All Vulnerabilities"]').click()
       const download = await downloadPromise;

       // Wait for the download process to complete and save the downloaded file somewhere.
       const file = download.suggestedFilename();
       console.log(file)
      await download.saveAs('c://Users//hussais2//Downloads//' + download.suggestedFilename());

      const records = parse(fs.readFileSync(path.join('c://Users//hussais2//Downloads//', file)), {
        columns: true,
        skip_empty_lines: true
      });
      var n1 =0

      for (const record of records) {
        
        //console.log(record.FQDN);
        //var totalrec = record.FQDN
        var n2 = n1+1
            n1= n2;
          //  console.log(n2);  
        }
        //console.log(typeof(totalrec));
        console.log(n2);
      
       await this.History.click();
       //verifying the response for History Tab
       const responseSite = await this.page.waitForResponse((responseSite) => 
        responseSite.url().includes("https://powersuite-api-dev.unifysquare.com/insights-center/v2/"));
        
        //Store response body in a variable
        const responseSiteBody = await responseSite.json();
         await expect.soft(responseSite.status()).toBe(200);
       await this.cancelbutton.first().click();
       const Effecteddevices:number =+(await this.impacttotal.first().textContent()).slice(0,3);
       console.log(Effecteddevices);
       const Totaleddevices:number =+(await this.impacttotal.first().textContent()).slice(11,14);
       console.log(Totaleddevices);
       var impactxl:number = n2;
      // var impactUI1:number = +(await this.impact.first().textContent()).slice(0,3);
      // console.log(impactUI1)
      expect.soft(Totaleddevices,'Valnerability devices should match').toEqual(impactxl);
       if (Totaleddevices == impactxl){
        console.log("Vulnerability values matched");
        
     } else { console.log("Vulnerability Values are not matched")}
       //await new Promise(() => {});
       //getting percentage
       const devicepercentage1 = (Effecteddevices/Totaleddevices*100).toFixed(2);
       console.log(devicepercentage1);
       const devicepercentageUI1 = (await this.vulpercebtage.first().textContent()).slice(0,5);
       console.log(devicepercentageUI1);
       expect.soft(devicepercentage1,'Vulnerabilty Percentage Values are matching the records').toEqual(devicepercentageUI1);
       if (devicepercentage1 == devicepercentageUI1){
        console.log("Percentage values matched")
     } else { console.log("Percentage Values are not matched")}
      
    }
    async InsightCenter_Device_config_Persona_Fit(){
        await this.Experience.click();
        await this.deviceconfigfit.click();
        await this.details.click();
        await new Promise(f => setTimeout(f, 2000));
        const downloadPromise = this. page.waitForEvent('download');
       await this.page.locator('[label="Download All Suggestions"]').click()

       const download = await downloadPromise;

       // Wait for the download process to complete and save the downloaded file somewhere.
       const file = download.suggestedFilename();
      console.log(file)
       await download.saveAs('c://Users//hussais2//Downloads//' + download.suggestedFilename());
       
       const records = parse(fs.readFileSync(path.join('c://Users//hussais2//Downloads//', file)), {
         columns: true,
         skip_empty_lines: true
       });
       var n1 =0
       
       for (const record of records) 
       {
         //console.log(record.FQDN);
          var totalrec = record.FQDN
          var n2 = n1+1
          n1= n2;
          //console.log(n2);  
         }
              //console.log(typeof(totalrec));
              console.log("config persona Fit  "+n2);

       await this.History.click();
        const responseSite = await this.page.waitForResponse((responseSite) => 
        responseSite.url().includes("https://powersuite-api-dev.unifysquare.com/insights-center/v2/"));
        
        //Store response body in a variable
        //const responseSiteBody = await responseSite.json();
        await expect.soft(responseSite.status()).toBe(200);
        await this.cancelbutton.first().click();
        var impactxl1:number = n2;
    
      const Effecteddevices123:string =await this.deviceconfigfitimpact.first().textContent();
      console.log("****"+Effecteddevices123)
      const splii = Effecteddevices123.split(" ");
      //console.log(splii[0]);
      //console.log(splii[1]);
      const Effecteddevices1233 = splii[0].match(/(\d+)/)
      if (Effecteddevices1233) {
        console.log("Effected  values:" +Effecteddevices1233[0]);
    }
    const Effecteddevices12334 = splii[1].match(/(\d+)/)
      if (Effecteddevices12334) {
        console.log("Total Values:"+Effecteddevices12334[0]);
    }
    //Percentage calculations
    const effected:number =+Effecteddevices1233[0]
    const effecTotalted:number = +(Effecteddevices12334[0]);
    expect.soft(effecTotalted,'Device Config Persona Fit Values are matched').toEqual(impactxl1);
       if (effecTotalted == impactxl1){
        console.log("Device Config Persona Fit Values values matched")
     } else { console.log("Device Config Persona Fit Values are not matched")}
     const devicepercentage1 = (effected/effecTotalted*100).toFixed(2);
     console.log(devicepercentage1);
     const devicepercentageUI1 = (await this.configpercentage.first().textContent()).slice(0,5);
     console.log(devicepercentageUI1);
     expect.soft(devicepercentage1,'Device Config Persona Fit Percentage Values are matched').toEqual(devicepercentageUI1);
     if (devicepercentage1 == devicepercentageUI1){
      console.log("Device Config. Percentage values matched")
   } else { console.log("Device Config. Percentage Values are not matched")}

    }
    async InsightCenter_Device_Refresh(){
        await this.Experience.click();
        await this.devicerefresh.click();
        await new Promise(f => setTimeout(f, 2000));
        await this.details.click();
        await new Promise(f => setTimeout(f, 2000));
        const downloadPromise = this. page.waitForEvent('download');
       await this.page.locator('[label="Download All Devices"]').click();
       const download = await downloadPromise;

       // Wait for the download process to complete and save the downloaded file somewhere.
       const file = download.suggestedFilename();
       console.log(file)
       await download.saveAs('c://Users//hussais2//Downloads//' + download.suggestedFilename());
       
       const records = parse(fs.readFileSync(path.join('c://Users//hussais2//Downloads//', file)), {
         columns: true,
         skip_empty_lines: true
       });
       var n1 =0
       
       for (const record of records) {
         
         //console.log(record.FQDN);
         var totalrec = record.FQDN
         var n2 = n1+1
        n1= n2;
      //console.log(n2);  
             }
        console.log(typeof(totalrec));
         console.log("Device Refresh  "+n2);
         var impactxl2:number = n2;
         await new Promise(f => setTimeout(f, 2000));
         await this.History.click();
          const responseSite = await this.page.waitForResponse((responseSite) => 
            responseSite.url().includes("https://powersuite-api-dev.unifysquare.com/insights-center/v2/"));
            
            //Store response body in a variable
           // const responseSiteBody = await responseSite.json();
           // await expect.soft(responseSite.status()).toBe(200);
            await this.cancelbutton.first().click();
            const EffecteddevicesDevice:string =await this.devicerefreshimpact.first().textContent();
            console.log("****"+EffecteddevicesDevice)
            const splii = EffecteddevicesDevice.split(" ");
            //console.log(splii[0]);
            //console.log(splii[1]);
            const Effecteddevicesrefresg1 = splii[0].match(/(\d+)/)
   
            console.log("Effected  values:" +Effecteddevicesrefresg1[0]);
            const Effecteddevicesrefresg2 = splii[1].match(/(\d+)/)
            console.log("Total Values:"+Effecteddevicesrefresg2[0]);
          
          const effected:number = +(Effecteddevicesrefresg1[0])
          expect.soft(effected,'Device Refresh values matched').toEqual(impactxl2);
       if (effected == impactxl2){
        console.log("Device Refresh values matched")
     } else { console.log("Device Refresha  Values are not matched")}
     //percentage
     const refresheffected:number =+Effecteddevicesrefresg1[0]
     const effecTotalted:number = +(Effecteddevicesrefresg2[0])
        
     
      const devicepercentage1 = (refresheffected/effecTotalted*100).toFixed(2);
      console.log(devicepercentage1);
      const devicepercentageUI1 = (await this.refreshpercentage.first().textContent()).slice(0,5);
      console.log(devicepercentageUI1);
      expect.soft(devicepercentage1,'Device Refresh Percentage values matched').toEqual(devicepercentageUI1);
      if (devicepercentage1 == devicepercentageUI1){
       console.log("Device Refresh Percentage values matched")
    } else { console.log("Device Refresh Percentage Values are not matched")}
    
    }
  
     
     async InsightCenter_Device_config_Persona_Fit_persona(){
      await this.Experience.click();
      await this.personaFinance.nth(1).click();
      await this.details.click();
}
async InsightCenter_Poor_Calls(){
  //Clicking on the all cards
  await this.all.click();
  //Clicking on First Poor calls card
  await this.poorcallscard.click();
  //await expect(this.page).toHaveURL('/operations-dashboard/')
  await this.opsdashboardlink.click();
 const dashboardname = await this.selectdashboard.textContent();
 const dashboard1 = dashboardname.replace(/\s/g, "");
 console.log(dashboard1);
 expect.soft(dashboard1).toBe('OperationsDashboard');
 await this.page.goBack();
 await this.events.click();
  const responseSite = await this.page.waitForResponse((responseSite) => 
  responseSite.url().includes("https://powersuite-api-dev.unifysquare.com/insights-center/v2/"));
   //Store response body in a variable
  const responseSiteBody = await responseSite.json();
  await expect.soft(responseSite.status()).toBe(200);
  //Verifiyng the day chart on Events
  await this.poorcalssdaychart.click();
  await expect.soft(this.daychartpoints.nth(1)).toBeVisible();
  await this.cancelbutton.first().click();

}
async InsightCenter_Policy_TeamCompliance_Card(){
  await this.Policies.click();
  await this.teamcompilance.click();
  await this.policymanagementlink.click();
  const dashboardname = await this.selectdashboard.textContent();
  const dashboard1 = dashboardname.replace(/\s/g, "");
  console.log(dashboard1);
  expect.soft(dashboard1).toBe('PolicyManagement');
  await this.page.goBack();
  await this.History.click();
  const responseSite = await this.page.waitForResponse((responseSite) => 
    responseSite.url().includes("https://powersuite-api-dev.unifysquare.com/insights-center/v2/"));
    
    //Store response body in a variable
    const responseSiteBody = await responseSite.json();
    
    await expect.soft(responseSite.status()).toBe(200);
  await this.cancelbutton.nth(0).click();


}
async InsightCenter_Policy_ExceptionToExpire_Card(){
  await this.Policies.click();
  await this.Exceptionstoexpire.click();
  await this.policymanagementlink.click();
  const dashboardname = await this.selectdashboard.textContent();
  const dashboard1 = dashboardname.replace(/\s/g, "");
  console.log(dashboard1);
  expect.soft(dashboard1).toBe('PolicyManagement');
  await this.page.goBack();
  await this.page.goBack();
  await this.History.click();
  const responseSite = await this.page.waitForResponse((responseSite) => 
    responseSite.url().includes("https://powersuite-api-dev.unifysquare.com/insights-center/v2/"));
    
    //Store response body in a variable
    const responseSiteBody = await responseSite.json();
    
    await expect.soft(responseSite.status()).toBe(200);
  await this.cancelbutton.nth(0).click();


}
async InsightCenter_List_View(){
  await this.view.first().click();
  await this.Listview.click();
  await this.Tablesearch.nth(0).waitFor();
  await this.Tablesearch.nth(1).click();
  await this.Tablesearch.nth(1).fill("Poor calls");
  await this.downloadoptions.click();
  const downloadPromise = this. page.waitForEvent('download');
  await this.exportvisibledata.click();
 const download = await downloadPromise;

 // Wait for the download process to complete and save the downloaded file somewhere.
 const file = download.suggestedFilename();
 console.log(file)
 await download.saveAs('c://Users//hussais2//Downloads//' + download.suggestedFilename());

 const records = parse(fs.readFileSync(path.join('c://Users//hussais2//Downloads//', file)), {
  columns: true,
  skip_empty_lines: true
 });
 

 for (const record of records) {
  
  //console.log(record.FQDN);
  var rec = record.Profile
      //console.log(rec);  
      await expect.soft(rec).toEqual('Poor calls');
  }
  
 
 await this.downloadoptions.click();
 await this.clearallfields.nth(0).click();
 //Verify Geography on Flat table
/*
 await this.Geography.click();
 await this.EMEA.click();
 const responseSite = await this.page.waitForResponse((responseSite) => 
  responseSite.url().includes("https://powersuite-api-dev.unifysquare.com/insights-center/v2/problems/"));
  
  //Store response body in a variable
  const responseSiteBody = await responseSite.json();
  
  await expect.soft(responseSite.status()).toBe(200);
*/

}
}