import { expect, FrameLocator, Locator, Page, selectors } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { assert } from 'console';

export class HelpDesk_page{
    readonly page: Page;
    searchbox: Locator;
    matchedlist: Locator;
    matchedname: Locator;
    historydropdown: Locator;
    selectdashboard: Locator;
    Helpdeskdashboard: Locator;
    dayshistory: Locator;
    callsummarytab: Locator;
    Insightstab: Locator;
    insightmessage: Locator;
    Analysischart: Locator;
    ModalityCharts: Locator;
    Devices: Locator;
    QualityHistory: Locator;
    hoveritem: Locator;
    Currentuser: Locator;
    Otheruser: Locator;
    Exportoption: Locator;
    poor: Locator;
    bad: Locator;
    good: Locator;
    ColumnQuality: Locator;
    tablefirstrow: Locator;
   tablelastrow: Locator;
   ColumnNetwork: Locator;
   userlocation: Locator;

    constructor (page:Page){
        this.page = page;
        this.selectdashboard = page.locator('[ng-if="selectedDashboard"]');
     this.Helpdeskdashboard = page.locator('//a[contains(normalize-space(), "Help Desk")]');
     this.searchbox = page.frameLocator('iframe').locator('//input[@autocomplete="new-password"]');
     this.matchedlist = page.frameLocator('iframe').locator('//div[@id="SearchBar"]');
     this.matchedname = page.frameLocator('iframe').locator("//div[@id='SearchBar']/a/span");
     this.historydropdown = page.frameLocator('iframe').locator('//div[@class="dropdown"]');
     this.dayshistory = page.frameLocator('iframe').locator("//button[@class='dropdown-item']");
     this.callsummarytab = page.frameLocator('iframe').locator("//a[contains(text(),'Call Summary')]");
     this.Insightstab = page.frameLocator('iframe').locator("//a[contains(text(),'Insights')]");
     this.insightmessage = page.frameLocator('iframe').locator('//div[@class="callout callout-danger"]/div');
     this.Analysischart = page.frameLocator('iframe').locator("//a[contains(text(),'Analysis Charts')]");
     this.ModalityCharts = page.frameLocator('iframe').locator("//a[contains(text(),'Modality Charts')]");
     this.Devices = page.frameLocator('iframe').locator("//a[contains(text(),'Devices')]");
     this.QualityHistory = page.frameLocator('iframe').locator("//a[contains(text(),'Quality History')]");
     this.Currentuser = page.frameLocator('iframe').locator("//button[contains(text(),'Current User')]");
     this.Otheruser = page.frameLocator('iframe').locator("//button[contains(text(),'Other User')]");
     this.hoveritem = page.frameLocator('iframe').locator("(//*[name()='g'][@class='highcharts-series highcharts-series-1 highcharts-bar-series highcharts-tracker'])")
     this.Exportoption = page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='download']");
    //Locators for call type
    this.poor = page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='triangle-exclamation']");
    this.bad = page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='circle-exclamation']");
    this.good = page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='check']");
    this.ColumnQuality= page.frameLocator('iframe').locator("//div[@class='rt-resizable-header-content']/div[contains(text(),'Quality')]");
    this.tablefirstrow = page.frameLocator('iframe').locator('//div[@role="row"]').nth(1);
    this.tablelastrow = page.frameLocator('iframe').locator('//div[@role="row"]').last();
    this.ColumnNetwork= page.frameLocator('iframe').locator("//div[@class='rt-resizable-header-content']/div[contains(text(),'Network')]");
    this.userlocation = page.frameLocator('iframe').locator("//h4[contains(text(),'User Locations')]");
   }
    
    async Navigate_To_HelpDesk_Dashboard(){
        await this.selectdashboard.click();
        await this.Helpdeskdashboard.click();
    }

    async Serach_User_Combinations(){
       
       await new Promise(f => setTimeout(f, 5000));
       //click on history dropdown and select 3o Days History
       await this.historydropdown.click();
       await this.dayshistory.last().click();
       //Serach for user
       const test =  await this.searchbox.isVisible();
       console.log(test);
        await this.searchbox.click();
        await this.searchbox.fill("smith");
        await new Promise(f => setTimeout(f, 8000));
        expect.soft(this.matchedlist).toBeVisible();
        
        const matchingnames = await this.matchedname.allInnerTexts();
        console.log("Matched list of users from search for 'Smith'"+matchingnames);
        //Clearing the second name and filling the email address
        await this.searchbox.clear();
        await this.searchbox.fill('john-smith@unisys-demo.com');
        await new Promise(f => setTimeout(f, 3000));
       // expect.soft(this.matchedname.textContent()).toEqual('john-smith@unisys-demo.com');
        await this.page.keyboard.press('Enter');
        await new Promise(f => setTimeout(f, 10000));
    }
  async Verify_Call_summary_Tab_Data(){
        //verfying the call summary tab ->Insights tab
        
       expect.soft(this.callsummarytab).toBeVisible();
       expect.soft(this.Insightstab).toBeVisible();
       await new Promise(f => setTimeout(f, 10000));
       const Insightmessagescount = await this.insightmessage.count();
       console.log("Total Insight message/Danger sign messages are :"+Insightmessagescount);
       for(let i=0;i<Insightmessagescount;i++){
        const messagedetails = await this.insightmessage.nth(i).textContent();
        console.log("Insight Message details are :"+messagedetails);
       }
       //Take screenshot of Analysis chart
       await this.Analysischart.click();
       //await this.hoveritem.nth(0).hover();
       await new Promise(f => setTimeout(f, 5000));
       await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/HelpDesk/Analysischart.png' });
       
       //Take screenshot of Modality chart
       await this.ModalityCharts.click();
       await new Promise(f => setTimeout(f, 5000));
       //await this.hoveritem.nth(0).hover();
       await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/HelpDesk/ModalityChart.png' });
       

        //Take screenshot of Devices
        await this.Devices.click();
        await new Promise(f => setTimeout(f, 5000));
        await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/HelpDesk/Devices.png' });
 
      //Take screenshot of Quality History-All Users
      await this.QualityHistory.click();
      await new Promise(f => setTimeout(f, 5000));
      await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/HelpDesk/QH-AllUsers.png' });
        //Take screenshot of Quality History-Current User
        await this.Currentuser.click();
        await new Promise(f => setTimeout(f, 5000));
        await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/HelpDesk/QH-CurrentUser.png' });

        //Take screenshot of Quality History-All Users
        await this.Otheruser.click();
        await new Promise(f => setTimeout(f, 5000));
        await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/HelpDesk/QH-OtherUsers.png' });

    }
 async Verify_Export_option(){

    await this.page.mouse.wheel(0,300)
    await new Promise(f => setTimeout(f, 10000));
    //await this.Exportoption.scrollIntoViewIfNeeded();
    const downloadPromise = this. page.waitForEvent('download');
    await this.Exportoption.click();
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
         var totalrec = record.Type
         
      console.log(totalrec);  
             }
             await this.tablefirstrow.click();
 }
 async verify_sort_table_Conference_Users(){
    await this.ColumnQuality.click();
    const tabledata = await this.tablefirstrow.textContent();
    console.log(tabledata);
    await this.ColumnQuality.click();
    const tabledata1 = await this.tablefirstrow.textContent();
    console.log(tabledata1);
    await this.ColumnQuality.click();
    const tabledata3 = await this.tablefirstrow.textContent();
    console.log(tabledata3);
    
   

 }
 async Verify_Sort_Conference_details(){
   await this.page.mouse.wheel(0,600);
   const tabledata = await this.tablelastrow.textContent();
   console.log("Last row data before sorting"+tabledata);
   await this.ColumnNetwork.click();
   const tabledata1 = await this.tablelastrow.textContent();
   console.log("Last row data before sorting"+tabledata1);
   await this.ColumnNetwork.click();
   const tabledata2 = await this.tablelastrow.textContent();
   console.log("Last row data before sorting"+tabledata2);
   await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/HelpDesk/Conference Details.png' });
   await this.tablelastrow.click();
   await this.page.mouse.wheel(0,300)
   await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/HelpDesk/Conference Details1.png' });
   //Capturing user locations
   await this.userlocation.click();
   await this.page.mouse.wheel(0,500)
   await new Promise(f => setTimeout(f, 8000));
   await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/HelpDesk/User Location.png' });
   
}

 async Verify_Export_option_Conference_Details(){

   //await this.page.mouse.wheel(0,300)
   await new Promise(f => setTimeout(f, 10000));
   //await this.Exportoption.scrollIntoViewIfNeeded();
   const downloadPromise = this. page.waitForEvent('download');
   await this.Exportoption.last().click();
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
        var totalrec = record.User
        
     console.log(totalrec);  
            }
 }
}