import { expect, Locator, Page, selectors, } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import path from 'path';
import fs from 'fs';

export class CallExplorer_page{
    private page:Page;
    selectdashboard: Locator;
    CallExplore: Locator;
    platforms: Locator;
    hours: Locator;
    tenantdropdown: Locator;
    search: Locator;
    tenantselection: Locator;
    ReportSearch: Locator;
    FirstReport: Locator;
    QueryRange: Locator;
    Run: Locator;
    NoOfEvents: Locator;
    TagAppSharing: Locator;
    TagAudio: Locator;
    TagCallFailure: Locator;
    TagVideo: Locator;
    TagALL: Locator;
    TagEcho: Locator;
    InputType: Locator;
    Export: Locator;
    reportbackdropdown: Locator;
    reportsbacklink: Locator;
    ExportRequestpage: Locator;
    jobID: Locator;
    RequestDate: Locator;
    RequestedBy: Locator;
    Size: Locator;
    Status: Locator;
    CaptureJobId: Locator;
    EventsGraph: Locator;
    EventTime: Locator;
    gridMenu: Locator;
    ExportVisibleData: Locator;
    Platform!: Locator;
    searchPlatform: Locator;
    setgridcolumns: Locator;
    TagAudioConfeences: Locator;
    selectdropdownCallid: Locator;
    TagMultipleUsers: Locator;



    constructor(page: Page) {
        this.page = page;
        this.selectdashboard = page.locator('[ng-if="selectedDashboard"]');
        this.CallExplore = page.locator('//a[contains(normalize-space(), "Call Explorer")]');
        this.platforms = page.locator('//a[@id=CollabToolPopover]//span[contains(text(),Platforms)]');
        this.hours =page.locator('//div[@class="collapse navbar-collapse"]//div/button');
         //Locators for Tenant selection
        this.tenantdropdown = page.locator('[ng-if="currentTenant"]');
        this.search = page.locator('//input[@ng-model="tenantFilter"]');
        this.tenantselection = page.locator('//span[@class="capitalize"]');
        //Locator for Call Explorer Page
        this.ReportSearch = page.locator('//div[@class="m-t-15 m-b-20 input-group"]//input');
        this.FirstReport = page.locator('(//ul[@class="nav nav-pills nav-stacked report-ui-list"]//li)[1]//a');
        this.QueryRange = page.locator("(//div[@class='form-group'])[3]/select");
        this.InputType = page.locator("(//div[@class='form-group'])[6]//input");
        this.Run =page.locator("[class='btn btn-sm btn-primary']");
        this.setgridcolumns = page.locator("//input[@ng-model='queryComposer.overwriteSelectedColumns']");
        this.NoOfEvents = page.locator('//div[@class="btn-group"]//button');
        //Locators for tags
        this.TagAppSharing = page.locator('//ul[@class="m-t-15 list-inline"]//button[contains(text(),"App Sharing")]');
        this.TagAudio = page.locator('//ul[@class="m-t-15 list-inline"]//button[contains(text(),"Audio")]');
        this.TagEcho = page.locator('//ul[@class="m-t-15 list-inline"]//button[contains(text(),"Echo")]');
        this.TagCallFailure = page.locator('//ul[@class="m-t-15 list-inline"]//button[contains(text(),"Call failure")]');
        this.TagVideo = page.locator('//ul[@class="m-t-15 list-inline"]//button[contains(text(),"Video")]');
        this.TagALL = page.locator('//ul[@class="m-t-15 list-inline"]//button[contains(text(),"All")]');
        this.TagAudioConfeences = page.locator('//ul[@class="m-t-15 list-inline"]//button[contains(text(),"Audio Conferences")]');
        this.TagMultipleUsers = page.locator('//ul[@class="m-t-15 list-inline"]//button[contains(text(),"Multiple users")]');
        this.Export = page.locator("//span[@data-toggle='popover']").nth(1);
        this.CaptureJobId = page.locator("//div[@ng-show='queryResults.sdnExportStarted']//strong[2]");
        this.reportbackdropdown = page.locator("//span[@data-toggle='dropdown']").nth(0);
        this.reportsbacklink = page.locator("//a[@href='#/call-explorer/reports']").nth(1);
        //Locators for Export Page
        this.ExportRequestpage = page.locator("//a[@href='#/call-explorer/exports']").first();
        this.jobID = page.locator("(//div[@class='ui-grid-cell-contents'])[1]");
        this.RequestDate = page.locator("(//div[@class='ui-grid-cell-contents'])[2]");
        this.RequestedBy = page.locator("(//div[@class='ui-grid-cell-contents'])[3]");
        this.Size = page.locator("(//div[@class='ui-grid-cell-contents'])[4]");
        this.Status = page.locator("(//div[@class='ui-grid-cell-contents'])[5]");
        this.gridMenu = page.locator("//i[@class='ui-grid-icon-menu']");
        this.ExportVisibleData = page.locator("//button[contains(text(),'Export visible data as CSV')]")
        //Locators For Events Graph
        this.EventsGraph = page.locator("(//*[name()='g'][@class='highcharts-series highcharts-series-0 highcharts-column-series highcharts-color-0 highcharts-dense-data highcharts-tracker']/*[name()='rect'])");
        this.EventTime = page.locator("(//*[name()='g'][@class='highcharts-axis-labels highcharts-xaxis-labels']/*[name()='text'])");
        //Filter Columns
        this.searchPlatform = page.locator("//li[@class='pointer truncate-ellipsis ng-enter-prepare']//span[contains(text(),'Platform')]");
        // select value from the dropdown callid
        this.selectdropdownCallid = page.locator("//select[@class='form-control ng-pristine ng-untouched ng-valid ng-empty']");
    
    }
    async Navigate_To_CallExplorer_Dashboard(){
        await this.selectdashboard.click();
        await this.CallExplore.click();
  
    }
   async Search_For_Report(){
    await new Promise(f => setTimeout(f, 8000));
    await this.ReportSearch.click();
    await this.ReportSearch.fill("mid-Call Failures");
    await new Promise(f => setTimeout(f, 8000));
    await this.FirstReport.click();
    await new Promise(f => setTimeout(f, 5000));
    await this.page.locator('//input[@placeholder="Count"]').clear();
    await this.page.locator('//input[@placeholder="Count"]').fill('8');
    await this.QueryRange.selectOption({label:"month(s)"});
    await new Promise(f => setTimeout(f, 8000));
    await this.NoOfEvents.nth(0).click();
    await this.Run.nth(0).click();
   }
   async Verify_Event_Graph_And_LastDate(){
// Verifying the events chart
await new Promise(f => setTimeout(f, 8000));
if(await this.EventTime.last().isVisible()){
    const lastEventTime = await this.EventTime.last().textContent();
    console.log("Last Event Timne: "+lastEventTime);
    const GraphVisible = await this.EventsGraph.last().isVisible();
   // await this.page.mouse.click(1122.98, 256);
    //await this.EventsGraph.last().hover();
    expect.soft(GraphVisible).toEqual(true);

    await new Promise(f => setTimeout(f, 5000));
    await this.page.mouse.wheel(0,200);
    await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/CallExplorer.png'});
}
else{console.log("There is no Graph to take screenshot")}}
   async Verify_Event_Graph_And_LastDate_Filter(){
    // Verifying the events chart
    await new Promise(f => setTimeout(f, 8000));
        const lastEventTime = await this.EventTime.last().textContent();
        console.log("Last Event Timne: "+lastEventTime);
        const GraphVisible = await this.EventsGraph.last().isVisible();
       // await this.page.mouse.click(1122.98, 256);
        //await this.EventsGraph.last().hover();
        //expect.soft(GraphVisible).toEqual(true);
        await new Promise(f => setTimeout(f, 5000));
        await this.page.mouse.wheel(0,200);
        await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/CallExplorer.png'});
       }
   async Verify_Export_Job(){

    //Export the results and Navigate to the Export Request page and verify the report date
    await this.Export.click();
    //Capture JOb Id number from report Page
    await new Promise(f => setTimeout(f, 5000));
    const JObIdFromReportPage = await this.CaptureJobId.innerText();
    console.log(JObIdFromReportPage);
    //Navigate to Export reports page to verfy the job id
    await this.reportbackdropdown.click();
    await this.ExportRequestpage.click();
    await new Promise(f => setTimeout(f, 5000));
    const JobIdFromExportRequestpage = await this.jobID.innerText();
    console.log(JobIdFromExportRequestpage);
    const Username = await this.RequestedBy.innerText();
    expect.soft(Username).toEqual('XMO-ExperienceUser3@unifysquare.com');
   // expect.soft(JObIdFromReportPage).toEqual(JobIdFromExportRequestpage);  uncomment this line when we have daata to export


    
  //  await new Promise(() => {});

   }
   async Download_CSV_Data_To_verify(){
    if(await this.searchPlatform.isVisible())
 {
    await this.searchPlatform.click();
    await this.gridMenu.click();
   
    const downloadPromise = this. page.waitForEvent('download');
    await this.ExportVisibleData.click();
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
  
  console.log(record);
  var rec = record.Platform
      //console.log(rec);  
      await expect.soft(rec).toEqual('Microsoft Teams');

  }
  }
 else{console.log("There is data to download")}
   }
   async Call_Failure_Query(){
    await this.reportbackdropdown.click();
    await this.reportsbacklink.click();
    await this.TagCallFailure.click();
    await new Promise(f => setTimeout(f, 5000));
    await this.FirstReport.click();
    await this.page.locator('//input[@placeholder="Count"]').clear();
    await this.page.locator('//input[@placeholder="Count"]').fill('8');
    await this.QueryRange.selectOption({label:"month(s)"});
    await new Promise(f => setTimeout(f, 5000));
    await this.NoOfEvents.nth(0).click();
    await new Promise(f => setTimeout(f, 5000));
   // await this.InputType.last().clear();
    await this.page.locator("(//div[@class='form-group'])[10]/span/input").clear();
    await this.page.locator("(//div[@class='form-group'])[10]/span/input").fill('audio');
    await this.Run.nth(0).click();
    //await new Promise(() => {});

   }
   async Echo_Query(){
    await this.reportbackdropdown.click();
    await this.reportsbacklink.click();
    await this.TagEcho.click();
    await new Promise(f => setTimeout(f, 5000));
    await this.FirstReport.click();
    await this.page.locator('//input[@placeholder="Count"]').clear();
    await this.page.locator('//input[@placeholder="Count"]').fill('8');
    await this.QueryRange.selectOption({label:"month(s)"});
    await new Promise(f => setTimeout(f, 5000));
    await this.NoOfEvents.nth(0).click();
    await new Promise(f => setTimeout(f, 5000));
    await this.Run.nth(0).click();
    

   }
   async Video_Query(){
    await this.reportbackdropdown.click();
    await this.reportsbacklink.click();
    await this.TagVideo.click();
    await new Promise(f => setTimeout(f, 5000));
    await this.FirstReport.click();
    await this.page.locator('//input[@placeholder="Count"]').clear();
    await this.page.locator('//input[@placeholder="Count"]').fill('8');
    await this.QueryRange.selectOption({label:"month(s)"});
    await new Promise(f => setTimeout(f, 5000));
    await this.NoOfEvents.nth(0).click();
    await new Promise(f => setTimeout(f, 5000));
    await this.Run.nth(0).click();
   // await new Promise(() => {});

   }
   async Audio_Conferences_Query(){
    await this.reportbackdropdown.click();
    await this.reportsbacklink.click();
    //Tets for report Catgory button
    await this.page.locator("//button[contains(text(),'Conferences')]").click();
    await new Promise(f => setTimeout(f, 5000));
    await this.FirstReport.click();
    await this.page.locator('//input[@placeholder="Count"]').clear();
    await this.page.locator('//input[@placeholder="Count"]').fill('8');
    await this.QueryRange.selectOption({label:"month(s)"});
    await new Promise(f => setTimeout(f, 5000));
    await this.NoOfEvents.nth(0).click();
    await new Promise(f => setTimeout(f, 5000));
    await this.InputType.last().clear();
    await this.InputType.last().fill('P2P');
    await this.setgridcolumns.click();
    await this.Run.nth(0).click();
    

   }
   async Multiple_Users_with_Custom_Query(){
    await this.reportbackdropdown.click();
    await this.reportsbacklink.click();
    await this.TagMultipleUsers.click();
    await new Promise(f => setTimeout(f, 5000));
    await this.FirstReport.click();
    await this.page.locator('//input[@placeholder="Count"]').clear();
    await this.page.locator('//input[@placeholder="Count"]').fill('8');
    await this.QueryRange.selectOption({label:"month(s)"});
    await new Promise(f => setTimeout(f, 5000));
    await this.NoOfEvents.nth(0).click();
    await new Promise(f => setTimeout(f, 5000));
    await this.page.locator("//button[@data-toggle='dropdown']").nth(1).click();
    await this.selectdropdownCallid.first().selectOption({label:"ConnectionInfo.CallId"});
    await this.page.locator("//button[@data-toggle='dropdown']").nth(1).click();
    //await this.page.locator("//select[@class='form-control input-sm ng-pristine ng-valid ng-not-empty ng-touched']").click();
    await this.page.locator('//div[@class="form-group operator"]/select').nth(1).click();
    await this.page.locator('//div[@class="form-group operator"]/select').nth(1).selectOption({label:"= equal to"});
    //await this.page.locator("//input[@placeholder='Enter a string']").fill("5043bd7a-975a-4bc9-954a-f4e33281f764");
    
    await this.Run.nth(0).click();
   // await new Promise(() => {});

   }

}