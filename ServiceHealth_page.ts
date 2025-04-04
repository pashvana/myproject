import { expect, FrameLocator, Locator, Page, request,selectors } from '@playwright/test';

export class ServiceHealth_page {
    readonly page: Page;
    readonly selectdashboard: Locator;
    //readonly servicehealthnew: Locator;
    readonly calender: Locator;
    readonly previousmonth: Locator;
    readonly previosweek: Locator;
    readonly week1:Locator;
    readonly orgfilter: Locator;
    readonly arrow:Locator;
    readonly flow:Locator;
    readonly balance : Locator;
    readonly velocity :Locator;
    readonly evolve : Locator;
    readonly precognition : Locator;
    readonly daybtn : Locator;
    //readonly previousweek : Locator;
    readonly nextweek : Locator;
   // readonly previuosmonth : Locator;
    readonly nextmonth : Locator;
    readonly defaultperiod : Locator;

    readonly PTmodern :Locator;
    readonly submissionmethod :Locator;
    readonly ModernSubmissionTrend :Locator;
    readonly GSRulesAppliedTotal : Locator;
    readonly savingsperrun : Locator;
    readonly totalsavings : Locator;
    readonly hourssavedPCM: Locator;

    readonly values : Locator;
    readonly platforms : Locator;
  tenantdropdown: Locator;
  search: Locator;
  tenantselection: Locator;
  servicehealthlegacy: Locator;
  PoorcallsAudio: any;
  Poorcallshighchartpoint: any;
  poorcalssxaxis: any;
  area: any;
  areachartpoints: any;
  bar: any;
  PoorcallsVideo: Locator;
  PoorcallsAppSharing: Locator;
  Poorcallshighchartpointmonth: Locator;
  poorcalssxa: any;
  commentdate: Locator;
  callscenario: Locator;
  commentnumber: Locator;
  commentdelete: Locator;
  confirmdelete: Locator;
  showHistoricalcomparision: Locator;
  Graphpoint: Locator;

    constructor(page: Page) {
        this.page = page;
        this.selectdashboard = page.locator('[ng-if="selectedDashboard"]');
        this.servicehealthlegacy = page.locator('//a[contains(normalize-space(), "Service Health (Legacy)")]');
        this.calender = page.locator('[title="Selected Week"]');
        this.previousmonth = page.locator('[aria-label="Go to previous month"]');
        this.previosweek = page.locator('[title="Previous Week"]');
        this.week1 =page.locator('//a[contains(text(),"Week")]');
        this.orgfilter = page.locator('[id="GeoFilterButton"]');
        this.arrow = page.frameLocator('iframe').getByRole('button', { name: '→ Next' });
        this.flow = page.frameLocator('iframe').getByText('Flow');
        this.balance = page.frameLocator('iframe').getByText('Balance');
        this.velocity = page.frameLocator('iframe').getByText('Velocity');
        this.evolve = page.frameLocator('iframe').getByText('Evolve');
        this.precognition = page.frameLocator('iframe').getByText('Precognition')
        this.daybtn = page.frameLocator('iframe').getByRole('button', { name: 'Day' });
        this.previosweek = page.frameLocator('iframe').getByRole('button', { name: 'Previous Week' });
        this.nextweek = page.frameLocator('iframe').getByRole('button', { name: 'Next Week' });
        this.previousmonth = page.frameLocator('iframe').getByRole('button', { name: 'Previous Month' });
        this.nextmonth = page.frameLocator('iframe').getByRole('button', { name: 'Next Month' });
       
        
        this.PTmodern =page.frameLocator('iframe').getByText('Problem Type - Modern');
        this.ModernSubmissionTrend = page.frameLocator('iframe').getByText('Modern Submission Trend');
        this.submissionmethod = page.frameLocator('iframe').getByText('Submission Method');
        this.GSRulesAppliedTotal = page.frameLocator('iframe').getByText('GS Rules Applied[Total]');

        this.GSRulesAppliedTotal = page.frameLocator('iframe').getByText('GS Rules Applied[Total]');
        this.savingsperrun =page.frameLocator('iframe').getByText('Savings Per Run');
        this.totalsavings = page.frameLocator('iframe').getByText('Total Savings');
        this.hourssavedPCM =page.frameLocator('iframe').getByText('Hours Saved PCM');
        this.defaultperiod = page.frameLocator('iframe').getByRole('button', { name: 'Select the default period' });
        this.values = page.locator('[class="kpi-card-data-label-large"]');

        this.platforms = page.locator('[title="Select the collaboration tools for which you want to show data."]');

     //Locators for Tenant selection
  this.tenantdropdown = page.locator('[ng-if="currentTenant"]');
  this.search = page.locator('//input[@ng-model="tenantFilter"]');
  this.tenantselection = page.locator('//span[@class="capitalize"]');
  //Locators for high chart points
  this.PoorcallsAudio = page.locator("//*[local-name()='svg' and @data-icon='phone']");
this.PoorcallsVideo = page.locator("//*[local-name()='svg' and @data-icon='video']");
this.PoorcallsAppSharing = page.locator("//*[local-name()='svg' and @data-icon='share-nodes']");
this.Poorcallshighchartpoint = page.locator("(//*[name()='g'][@class='highcharts-markers highcharts-series-0 highcharts-spline-series highcharts-tracker']/*[name()='path'][@fill='#FF9655'])");
this.Poorcallshighchartpointmonth = page.locator("(//*[name()='g'][@class='highcharts-markers highcharts-series-0 highcharts-line-series highcharts-tracker']/*[name()='path'][@fill='#FF9655'])");
this.areachartpoints = page.locator("(//*[name()='g'][@class='highcharts-markers highcharts-series-0 highcharts-area-series highcharts-color-0 highcharts-tracker']/*[name()='path'][@fill='#7cb5ec'])")
this.poorcalssxaxis = page.locator("(//*[name()='g'][@class='highcharts-axis-labels highcharts-xaxis-labels']/*[name()='text'])");
this.commentdate =page.locator("//span[@ng-show='!multiplePoints']");
this.callscenario = page.locator('//table[@class="table-hover comparison"]//tbody/tr');
this.commentnumber = page.locator("(//*[name()='g'][@class='highcharts-label highcharts-point']/*[name()='text'])");
this.commentdelete = page.locator("//span[@data-translate='Common.Buttons.delete']");
this.confirmdelete = page.locator("//button[@data-ng-click='onConfirm();']");
//Locators For Historical Comparision
this.showHistoricalcomparision = page.locator("//label[@uib-tooltip='Show historical comparison of call scenarios']");
this.Graphpoint = page.locator("//*[name()='g'][@class='highcharts-markers highcharts-series-0 highcharts-area-series highcharts-tracker']/*[name()='path'][1]");
}
      
    async Navigate_To_ServiceHealth_Page(){
          //click on Dashboards dropdown and select Service Health Legacy
       await this.selectdashboard.click();
       await this.servicehealthlegacy.click();
      }
    async Switch_To_Unisys_Demo_Tenant(){
        await this.tenantdropdown.click();
       await this.search.fill("Unisys-Demo");
       await this.tenantselection.first().click();
       await new Promise(f => setTimeout(f, 12000))
       }
       async Show_Historical_Comparision_Of_All_Scenarios(){
        await new Promise(f => setTimeout(f, 10000));
        await this.showHistoricalcomparision.click();
        await new Promise(f => setTimeout(f, 10000));
        expect.soft(await this.Graphpoint.isVisible()).toEqual(true);

       }
    async ServiceHealth_Page_Actions(){
       await new Promise(f => setTimeout(f, 10000));
       //await this.platforms.click({force:true})
       await this.arrow.hover();
      await this.arrow.click();
      await this.flow.click();
      //Verify then Flow Response from APi
       const responseFlow = await this.page.waitForResponse((responseFlow) => 
        responseFlow.url().includes("https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1"));
         
        await expect.soft(responseFlow.status()).toBe(200);
      //Getting all values

      const allvalues = await this.values.allInnerTexts();
      console.log(allvalues);
     // await this.daybtn.click();
      await new Promise(f => setTimeout(f, 2000))
     await this.previosweek.click();
     await new Promise(f => setTimeout(f, 1000))
     await this.nextweek.click();
      
      await this.page.frameLocator('iframe').getByTitle('Time period').click();
      await new Promise(f => setTimeout(f, 1000));
      await this.page.frameLocator('iframe').getByRole('listitem', { name: 'Select Month' }).click();
      await new Promise(f => setTimeout(f, 1000));
      await this.previousmonth.click();
      await new Promise(f => setTimeout(f, 1000));
     // await this.daybtn.click();
      await new Promise(f => setTimeout(f, 1000));
      
    //  await this.daybtn.click();
      await this.balance.click();
        const responseBalance = await this.page.waitForResponse((responseBalance) => 
        responseBalance.url().includes("https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1"));
         
        await expect.soft(responseBalance.status()).toBe(200);
      await this.page.frameLocator('iframe').getByRole('button', { name: 'Day' }).click();
      await this.velocity.click();
      const responseVelocity = await this.page.waitForResponse((responseVelocity) => 
        responseVelocity.url().includes("https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1"));
         
        await expect.soft(responseVelocity.status()).toBe(200);
      await this.page.frameLocator('iframe').getByRole('button', { name: 'Day' }).click();
      await this.evolve.click();
         const responseEvolve = await this.page.waitForResponse((responseEvolve) => 
         responseEvolve.url().includes("https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1"));
         await expect.soft(responseEvolve.status()).toBe(200);
      await this.PTmodern.click();
           const responsePTmodern = await this.page.waitForResponse((responsePTmodern) => 
        responsePTmodern.url().includes("https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1"));
        await expect.soft(responsePTmodern.status()).toBe(200);
      await new Promise(f => setTimeout(f, 1000));
      await this.submissionmethod.click();
      const responsesubmissionmethod = await this.page.waitForResponse((responsesubmissionmethod) => 
        responsesubmissionmethod.url().includes("https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1"));
        await expect.soft(responsesubmissionmethod.status()).toBe(200);
      await new Promise(f => setTimeout(f, 1000));
      await this.ModernSubmissionTrend.click();
      const responseModernSubmissionTrend = await this.page.waitForResponse((responseModernSubmissionTrend) => 
        responseModernSubmissionTrend.url().includes("https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1"));
        await expect.soft(responseModernSubmissionTrend.status()).toBe(200);
      await new Promise(f => setTimeout(f, 1000));
    //  await this.daybtn.click();
     await this.precognition.click();
      const responseprecognition = await this.page.waitForResponse((responseprecognition) => 
        responseprecognition.url().includes("https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1"));
      await expect.soft(responseprecognition.status()).toBe(200);
     await new Promise(f => setTimeout(f, 1000));
     await this.GSRulesAppliedTotal.click();
     await new Promise(f => setTimeout(f, 1000));
     await this.savingsperrun.click();
     const responsesavingsperrun = await this.page.waitForResponse((responsesavingsperrun) => 
      responsesavingsperrun.url().includes("https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1"));
    await expect.soft(responsesavingsperrun.status()).toBe(200);
     await new Promise(f => setTimeout(f, 1000));
     await this.totalsavings.click();
     await new Promise(f => setTimeout(f, 1000));
     await this.hourssavedPCM.click();
     await new Promise(f => setTimeout(f, 1000));
    
     //await new Promise(() => {});


}
async ServiceHealth_Poorcalls_Audio_Validation()
{
  //click on the Modalities dropdown
  await this.page.locator('//div[@ng-if="$ctrl.enableDropDown()"]').waitFor({ state: 'visible' });
  await this.page.locator('//div[@ng-if="$ctrl.enableDropDown()"]').click();

  //click on Audio modality
  await this.page.locator('(//a[contains(normalize-space(), "Audio")])[1]').waitFor({ state: 'visible' });
  await this.page.locator('(//a[contains(normalize-space(), "Audio")])[1]').click();

 await new Promise(f => setTimeout(f, 18000));
 expect.soft(await this.Poorcallshighchartpoint.nth(1)).toBeVisible();
//await new Promise(f => setTimeout(f, 9000));
 const totalhighchartpoints = await this.Poorcallshighchartpoint.count();
 console.log("High chart points for poor calls: "+totalhighchartpoints);
 await this.page.mouse.move(676.91, 69.75);
 //await new Promise(f => setTimeout(f, 9000));
 if(await this.Poorcallshighchartpoint.last().isVisible()){
 await this.Poorcallshighchartpoint.last().hover({force:true});
}
else{console.log("Last element is still not loaded")}

 //Store captured screenshot in specific location
 await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Audio) from Legacy dashboard-Week.png' });
 /* commenting as decided to add separate test for this
 await this.Poorcallshighchartpoint.last().click();

 const lastdatapointdate = await this.commentdate.textContent();
 console.log("last datapoint date"+lastdatapointdate);
 await this.page.locator("//textarea").click();
 await this.page.locator("//textarea").fill("This is test comment from Playwright Automation");
 //save comment
 await this.page.locator("//span[contains(text(),'Save')]").first().click(); */
 const lastvolume = await this.poorcalssxaxis.last().textContent();
 console.log(lastvolume);
 await this.poorcalssxaxis.last().scrollIntoViewIfNeeded();
 await this.page.mouse.move(739, 400);
 await this.poorcalssxaxis.last().hover({force:true});
 //this.page.waitForSelector('[class="highcharts-markers highcharts-series-0 highcharts-spline-series highcharts-tracker highcharts-series-hover"]');
 await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Audio)from Legacy dashboard-Week-Data.png'});
// await new Promise(() => {});

}
//Click on random Breakdown option and verify 
async Verify_OperationsDashboard_Navigation_PoorCalls_Audio(){
const breakdown = await this.page.locator("//div[@ng-repeat='row in rows']/a").count();
console.log(breakdown);
const random = Math.floor(Math.random() * (breakdown));
console.log(random);
const breakdownname = await this.page.locator("//div[@ng-repeat='row in rows']/a").nth(random-1).textContent();
console.log("Clicking on "+breakdownname +"To verify operations dashboard")
await this.page.locator("//div[@ng-repeat='row in rows']/a").nth(random-1).click();
//Verifying the title of page
        const title1 = await this.page.title();
        console.log(title1)
        await expect(title1).toEqual("[Dev] Operations Dashboard - PowerSuite");
        await this.page.goBack();
        }
async ServiceHealth_Poorcalls_Video_Validation()
{
  //click on the Modalities dropdown
  await this.page.locator('//div[@ng-if="$ctrl.enableDropDown()"]').waitFor({ state: 'visible' });
  await this.page.locator('//div[@ng-if="$ctrl.enableDropDown()"]').click();

  //click on Audio modality
  await this.page.locator('(//a[contains(normalize-space(), "Video")])[1]').waitFor({ state: 'visible' });
  await this.page.locator('(//a[contains(normalize-space(), "Video")])[1]').click();

 //await this.nextweek.click();
 //await this.PoorcallsAudio.first().click();
 await new Promise(f => setTimeout(f, 18000));
 expect.soft(await this.Poorcallshighchartpoint.nth(1)).toBeVisible();
//await new Promise(f => setTimeout(f, 9000));
 const totalhighchartpoints = await this.Poorcallshighchartpoint.count();
 console.log("High chart points for poor calls: "+totalhighchartpoints);
 await this.page.mouse.click(676.91, 69.75);
 await this.Poorcallshighchartpoint.last().hover({force:true});
 await new Promise(f => setTimeout(f, 9000))

 //Store captured screenshot in specific location
 await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Video) from Legacy dashboard-Week.png' });
/* await this.Poorcallshighchartpoint.last().click();
 const lastdatapointdate = await this.commentdate.textContent();
 console.log("last datapoint date"+lastdatapointdate);
 await this.page.locator("//textarea").click();
 await this.page.locator("//textarea").fill("This is test comment from Playwright Automation");
 //save comment
 await this.page.locator("//span[contains(text(),'Save')]").first().click();*/
 const lastvolume = await this.poorcalssxaxis.last().textContent();
 console.log(lastvolume);
 await this.poorcalssxaxis.last().scrollIntoViewIfNeeded();
 await this.page.mouse.click(739, 400);
 await this.poorcalssxaxis.last().hover({force:true});
 //await this.poorcalssxaxis.last().move().hover();
 await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Video)from Legacy dashboard-Week-Data.png'});
// await new Promise(() => {});
}
async Verify_OperationsDashboard_Navigation_PoorCalls_Video(){
//Clicking on Random call scenario
const callscenariocount = await this.callscenario.count();
const randomcallscenario = Math.floor(Math.random() * (callscenariocount));
console.log(randomcallscenario);
const CallScenarioname = await this.callscenario.nth(randomcallscenario-1).textContent();
console.log("Clicking on "+CallScenarioname +"To verify operations dashboard");
await new Promise(f => setTimeout(f, 8000))
await this.callscenario.nth(randomcallscenario-1).click({force:true});

//Click on random Breakdown option and verify 
if(await this.page.locator("//div[@ng-repeat='row in rows']/a").nth(0).isVisible()){
const breakdown = await this.page.locator("//div[@ng-repeat='row in rows']/a").count();
console.log(breakdown);
const random = Math.floor(Math.random() * (breakdown));
console.log(random);
const breakdownname = await this.page.locator("//div[@ng-repeat='row in rows']/a").nth(random-1).textContent();
console.log("Clicking on "+breakdownname +"To verify operations dashboard")
if(random == 0){
  await this.page.locator("//div[@ng-repeat='row in rows']/a").nth(random).click();

} else{
await this.page.locator("//div[@ng-repeat='row in rows']/a").nth(random-1).click();
}
//Verifying the title of page
        const title1 = await this.page.title();
        console.log(title1)
        await expect(title1).toEqual("[Dev] Operations Dashboard - PowerSuite");

        await this.page.goBack();
      }else{
        console.log("There are no Breakdowns to click")
      }
}
async ServiceHealth_Poorcalls_AppSharing_Validation()
{
  //click on the Modalities dropdown
  await this.page.locator('//div[@ng-if="$ctrl.enableDropDown()"]').waitFor({ state: 'visible' });
  await this.page.locator('//div[@ng-if="$ctrl.enableDropDown()"]').click();

  //click on Audio modality
  await this.page.locator('(//a[contains(normalize-space(), "App Sharing")])[1]').waitFor({ state: 'visible' });
  await this.page.locator('(//a[contains(normalize-space(), "App Sharing")])[1]').click();

 await new Promise(f => setTimeout(f, 18000));
 expect.soft(await this.Poorcallshighchartpoint.nth(1)).toBeVisible();
//await new Promise(f => setTimeout(f, 9000));
 const totalhighchartpoints = await this.Poorcallshighchartpoint.count();
 console.log("High chart points for poor calls: "+totalhighchartpoints);
 await this.page.mouse.click(676.91, 69.75);
 await this.Poorcallshighchartpoint.last().hover();
 await new Promise(f => setTimeout(f, 9000))

 //Store captured screenshot in specific location
 await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(App Sharing) from Legacy dashboard-Week.png' });
 /*await this.Poorcallshighchartpoint.last().click();
 const lastdatapointdate = await this.commentdate.textContent();
 console.log("last datapoint date"+lastdatapointdate);
 await this.page.locator("//textarea").click();
 await this.page.locator("//textarea").fill("This is test comment from Playwright Automation");
 //save comment
 await this.page.locator("//span[contains(text(),'Save')]").first().click(); */
 const lastvolume = await this.poorcalssxaxis.last().textContent();
 console.log(lastvolume);
 await this.poorcalssxaxis.last().scrollIntoViewIfNeeded();
 await this.page.mouse.click(739, 400);
 await this.poorcalssxaxis.last().hover()
 await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(App Sharing)from Legacy dashboard-Week-Data.png'});
// await new Promise(() => {});
}
async Verify_OperationsDashboard_Navigation_PoorCalls_AppSharing(){
//Clicking on Random call scenario
const callscenariocount = await this.callscenario.count();
const randomcallscenario = Math.floor(Math.random() * (callscenariocount));
const CallScenarioname = await this.callscenario.nth(randomcallscenario-1).textContent();
console.log("Clicking on "+CallScenarioname +"To verify operations dashboard")
await this.callscenario.nth(randomcallscenario-1).click();
 //Click on random Breakdown option and verify 
 if(await this.page.locator("//div[@ng-repeat='row in rows']/a").nth(0).isVisible()){
const breakdown = await this.page.locator("//div[@ng-repeat='row in rows']/a").count();
console.log(breakdown);
const random = Math.floor(Math.random() * (breakdown));
console.log(random);
const breakdownname = await this.page.locator("//div[@ng-repeat='row in rows']/a").nth(random-1).textContent();
console.log("Clicking on"+breakdownname +"To verify operations dashboard")
await this.page.locator("//div[@ng-repeat='row in rows']/a").nth(random-1).click();
//Verifying the title of page
        const title1 = await this.page.title();
        console.log(title1)
        await expect(title1).toEqual("[Dev] Operations Dashboard - PowerSuite");
        await this.page.goBack();
 } else
 {console.log("There are no BreakDowns to click")}
}
async Add_And_Delete_Commets(){
  //deleting the comments
  await new Promise(f => setTimeout(f, 18000))
  const numberOfComments = await this.commentdate.count();
console.log(numberOfComments);
  if(numberOfComments <= 1)
    {
      for(let i=0; i<numberOfComments;i++)
       {
        await this.commentdate.nth(i).click();
        await this.commentdelete.click();
        await this.confirmdelete.click();
       }
  }
  else
  {
    console.log("There are no comments to delete");
  }
  //add comments
  await new Promise(f => setTimeout(f, 9000))
  await this.Poorcallshighchartpoint.last().click({force:true});
// const lastdatapointdate = await this.commentdate.textContent();
 //console.log("last datapoint date"+lastdatapointdate);
 await this.page.locator("//textarea").click();
 await this.page.locator("//textarea").fill("This is test comment from Playwright Automation");
 //save comment
 await this.page.locator("//span[contains(text(),'Save')]").first().click();

}
//Akshay code 
 async UILoadedsuccessfully(){

    
    //page load wait
    //await new Promise(f => setTimeout(f, 1000));
    await this.page.waitForLoadState('domcontentloaded'); //change wait state later 
    for (const li of await this.page.locator("[class='gritter-close']").all())
      await li.click();

    //check UI elements are all loaded and visible

    //Data source dropdown (Teams, Skype etc.)
    await expect.soft(this.page.locator("//div[contains(@data-intro,'data source')]")).toBeVisible();
    await  this.page.locator("//div[contains(@data-intro,'data source')]").click()
    await this.page.locator("//a[normalize-space()='Microsoft Teams']").click();
    //Data type dropdown (Audio, Video etc.)
    await expect.soft(this.page.locator("//div[contains(@data-intro,'type of data')]")).toBeVisible();

    //Time modality selector (Week or Month)
    await expect.soft(this.page.locator("//li[contains(@data-intro,'week or month')]//div[@uib-tooltip='Time period']")).toBeVisible();
    //Default time period selection
    await expect.soft(this.page.locator("//i[@uib-tooltip='Select the default period']")).toBeVisible();
    //Next week button
    await expect.soft(this.page.locator("//i[@uib-tooltip='Next week']")).toBeVisible();
    //Previous week button
    await expect.soft(this.page.locator("//i[@uib-tooltip='Previous week']")).toBeVisible();
    //Week Picker
    await expect.soft(this.page.locator("//week-picker[@uib-tooltip='Selected week']")).toBeVisible();

    //Geo Heirarchy dropdown
   // await expect.soft(this.page.locator("//span[starts-with(@uib-tooltip, 'Location:')]")).toBeVisible();
    //Org filter button
   // await new Promise(f => setTimeout(f, 1000));
   // await expect.soft(this.page.frameLocator('iframe').locator("//a[@id='org-filter-button']")).toBeVisible();
    //Tag selector button
    await new Promise(f => setTimeout(f, 9000));
    //await this.page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='tags']").waitFor({state:'visible'})
    await expect.soft(this.page.locator("//*[local-name()='svg' and @data-icon='tags']")).toBeVisible();

    //Call Scenario table
    await expect.soft(this.page.locator("table[class='table-hover comparison']")).toBeVisible();
    //All scenario row
    await new Promise(f => setTimeout(f, 9000));
    await expect.soft(this.page.locator("//td[normalize-space()='All']")).toBeVisible();    
    //Internal Endpoint to Service scenario row
    await new Promise(f => setTimeout(f, 1000));
    await expect.soft(this.page.locator("//td[normalize-space()='Internal Endpoint to Service']")).toBeVisible();
    //Wired Internal to Service scenario row
    await new Promise(f => setTimeout(f, 1000));
    await expect.soft(this.page.locator("//td[normalize-space()='Wired Internal to Service']")).toBeVisible();
    //Wireless Internal to Service scenario row
    await new Promise(f => setTimeout(f, 1000));
    await expect.soft(this.page.locator("//td[normalize-space()='Wireless Internal to Service']")).toBeVisible();
    //External Endpoint to Service scenario row
    await new Promise(f => setTimeout(f, 1000));
    await expect.soft(this.page.locator("//td[normalize-space()='External Endpoint to Service']")).toBeVisible();
    //Wired External to Service scenario row
    await new Promise(f => setTimeout(f, 1000));
    await expect.soft(this.page.locator("//td[normalize-space()='Wired External to Service']")).toBeVisible();
    //Wireless External to Service scenario row
    await new Promise(f => setTimeout(f, 1000));
    await expect.soft(this.page.locator("//td[normalize-space()='Wireless External to Service']")).toBeVisible();
    //Endpoint to Endpoint scenario row
    await new Promise(f => setTimeout(f, 1000));
    await expect.soft(this.page.locator("//td[normalize-space()='Endpoint to Endpoint']")).toBeVisible();
    //Cellular Endpoint to Service scenario row
    await new Promise(f => setTimeout(f, 1000));
    await expect.soft(this.page.locator("//td[normalize-space()='Cellular Endpoint to Service']")).toBeVisible();
    //VPN to Service scenario row
    await new Promise(f => setTimeout(f, 1000));
    await expect.soft(this.page.locator("//td[normalize-space()='VPN to Service']")).toBeVisible();
    await new Promise(f => setTimeout(f, 1000));
    //Poor Calls Widget
    await expect.soft(this.page.locator('//div[@heading="\'All Poor Calls\'"]')).toBeVisible();
    //Threshold adjustment button
   // await expect.soft(this.page.locator("//i[@class='fas fa-flag benchmark-common-invert']")).toBeVisible();
    //Widget data points populated
    await new Promise(f => setTimeout(f, 1000));
    //commenentimg as this is not  available in UI
   await expect.soft(this.page.locator('//div[@heading="\'All Poor Calls\'"]//*[name()="path" and contains(@class, "highcharts-point")][1]')).toBeVisible();

    //Poor Calls Chart
    await expect.soft(this.page.locator('//div[@chart-id="\'poorCallsDrilldown\'"]')).toBeVisible();
    //Chart data points populated
   await expect.soft(this.page.locator('//div[@chart-id="\'poorCallsDrilldown\'"]//*[name()="path" and contains(@class, "highcharts-point")]').first()).toBeVisible();

    //Breakdowns table
   // await expect.soft(this.page.locator("//div[@ng-show='vqTable.vm.breakdownsVisible']")).toBeVisible();
    //Sites
    await expect.soft(this.page.locator("//span[contains(normalize-space(),'Sites')]")).toBeVisible();
    //BSSIDs
    await expect.soft(this.page.locator("//span[contains(normalize-space(),'BSSIDs')]")).toBeVisible();
    //Subnets
    await expect.soft(this.page.locator("//span[contains(normalize-space(),'Subnets')]")).toBeVisible();
    //WiFi Device Drivers
    await expect.soft(this.page.locator("//span[contains(normalize-space(),'WiFi Device Drivers')]")).toBeVisible();
    //Client Types
    await expect.soft(this.page.locator("//span[contains(normalize-space(),'Client Types')]")).toBeVisible();
    //Client Versions
    await expect.soft(this.page.locator("//span[contains(normalize-space(),'Client Versions')]")).toBeVisible();
    //WiFi Band
    await expect.soft(this.page.locator("//span[contains(normalize-space(),'WiFi Band')]")).toBeVisible();
    //Internet Services
    await expect.soft(this.page.locator("//span[contains(normalize-space(),'Internet Services')]")).toBeVisible();


    //No Unexpected Error alerts on page
    await expect.soft(this.page.locator("//div[@id='gritter-notice-wrapper']//div[starts-with(@id, 'gritter-item')]//span[contains(normalize-space(), 'Unexpected Problem')]")).toHaveCount(0);

    //store using waitForResponse in an array and check none of them have status 500
    //No 500 responses from the APIs on the page
    //await expect.soft()




}
async Geo_Heirarchy_Dropdown_Functionality(){
    
  //click on sites dropdown button
  await this.page.frameLocator('iframe').locator('[id=GeoFilterButton]').click();

 /* //Expand the geo-heirarchy tree by clicking on all right indicators before the site names
  while (this.page.locator("(//ol[@id='tree-root']//i[contains(@class, 'right')])").nth(1).isVisible());
    {
     this.page.locator("(//ol[@id='tree-root']//i[contains(@class, 'right')])").nth(1).click();
     await new Promise(f => setTimeout(f, 1000));
    }
*/
        //New Locators
     //Expand the geo-heirarchy tree by clicking on all right indicators before the site names
  while ( await this.page.frameLocator('iframe').locator("[data-icon='caret-right']").nth(1).isVisible());
  {
    await this.page.frameLocator('iframe').locator("[data-icon='caret-right']").nth(1).click();
   await new Promise(f => setTimeout(f, 1000));
  }

  //count of all sites
  const count = await this.page.locator("//ol[@id='tree-root']//div[@class='flex-item']").count();
  console.log(count);
  //looping over all sites
  for(var index = 1; index < count; index++) {
      
      //click on sites dropdown button after the first run
      if(index != 0){await this.page.locator("//span[starts-with(@uib-tooltip, 'Location:')]").click();}
     
      //filter data by site by clicking on the site label
      await this.page.locator("//ol[@id='tree-root']//div[@class='flex-item']").nth(index).click();
      await new Promise(f => setTimeout(f, 1000));
      //check api response for data from server sends back a 200 response
      const responseSite = await this.page.waitForResponse((responseSite) => 
      responseSite.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/voicequality/"));
      
      //Store response body in a variable
      const responseSiteBody = await responseSite.json();
      
      await expect.soft(responseSite.status()).toBe(200);
  }

}

async Platform_Dropdown_Functionality() {
    //comment 3 line when needs to run all tess
   // await this.page.locator('//span[@ng-if="selectedDashboard"]').click();
    //await this.page.locator('//a[contains(normalize-space(), "Service Health (Legacy)")]').click();
    //await this.page.waitForLoadState('domcontentloaded');
  
  //click on platform dropdown button
  await this.page.locator('//div[@class="dropdown"]').first().click();
  await new Promise(f => setTimeout(f, 1000));
  //assertions to check platforms are available in the dropdown
  //await expect.soft(this.page.locator('//a[normalize-space()="All Platforms"]')).toBeVisible();
//  await expect.soft(this.page.locator('//a[normalize-space()="Skype for Business"]')).toBeVisible();
  await expect.soft(this.page.locator('//a[normalize-space()="Microsoft Teams"]')).toBeVisible();

  //select 'All Platforms' from the platform selector
  //await this.page.locator('//a[normalize-space()="All Platforms"]').click();

  //click on next week to get the latest data
  await this.page.locator('//i[@uib-tooltip="Next week"]').click();

  //select daywise data granularity for the graph
  await this.page.locator('//label[normalize-space()="Day"]').click();

  //(one possible solution)
  //counting graph points to see latest data is present
  //await expect.soft(page.locator()).toHaveCount(n);

}

async Microsoft_Teams_Modalities_Dropdown_Functionality(){

  //click on platform dropdown button
  await expect.soft(this.page.locator('//div[@class="dropdown"]').first()).toBeVisible();
  await this.page.locator('//div[@class="dropdown"]').first().click();

  //click on Microsoft Teams in the platform dropdown
  await this.page.locator('//a[normalize-space()="Microsoft Teams"]').waitFor({ state: 'visible' });
  await this.page.locator('//a[normalize-space()="Microsoft Teams"]').click();

  //click on next week to get the latest data
  await this.page.locator('//i[@uib-tooltip="Next week"]').waitFor({ state: 'visible' });
  await this.page.locator('//i[@uib-tooltip="Next week"]').click();


  //click on the Modalities dropdown
  await this.page.locator('//div[@ng-if="$ctrl.enableDropDown()"]').waitFor({ state: 'visible' });
  await this.page.locator('//div[@ng-if="$ctrl.enableDropDown()"]').click();

  //click on Audio modality
  await this.page.locator('(//a[contains(normalize-space(), "Audio")])[1]').waitFor({ state: 'visible' });
  await this.page.locator('(//a[contains(normalize-space(), "Audio")])[1]').click();

  //UI assertion to verify Audio data is loaded 
  await expect.soft(this.page.locator('//div[@class="h4"]//span[contains(text(),"(Audio)")]')).toBeVisible();

  //API assertion to check poor call data for microsoft teams audio quality is populated 
  const responseAudio = await this.page.waitForResponse((responseAudio) => 
  responseAudio.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/voicequality/"));
  const responseBodyAudio = await responseAudio.json();
  await expect.soft(responseAudio.status()).toBe(200);


  //click on the Modalities dropdown
  await this.page.locator('//div[@ng-if="$ctrl.enableDropDown()"]').waitFor({ state: 'visible' });
  await this.page.locator('//div[@ng-if="$ctrl.enableDropDown()"]').click();

  //click on Video modality
  await this.page.locator('(//a[contains(normalize-space(), "Video")])[1]').waitFor({ state: 'visible' });
  await this.page.locator('(//a[contains(normalize-space(), "Video")])[1]').click();

  //UI assertion to verify Video data is loaded 
  await expect.soft(this.page.locator('//div[@class="h4"]//span[contains(text(),"(Video)")]')).toBeVisible();

  //API assertion to check poor call data for microsoft teams video quality is populated 
  const responseVideo = await this.page.waitForResponse((responseVideo) => 
  responseVideo.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/voicequality/"));
  const responseBodyVideo = await responseVideo.json();
  await expect.soft(responseVideo.status()).toBe(200);    


  //click on the Modalities dropdown
  await this.page.locator('//div[@ng-if="$ctrl.enableDropDown()"]').waitFor({ state: 'visible' });
  await this.page.locator('//div[@ng-if="$ctrl.enableDropDown()"]').click();

  //click on App Sharing modality
  await this.page.locator('(//a[contains(normalize-space(), "App Sharing")])[1]').waitFor({ state: 'visible' });
  await this.page.locator('(//a[contains(normalize-space(), "App Sharing")])[1]').click();

  //UI assertion to verify Video data is loaded 
  await expect.soft(this.page.locator('//div[@class="h4"]//span[contains(text(),"(App Sharing)")]')).toBeVisible();

  //API assertion to check poor call data for microsoft teams video quality is populated 
  const responseAppSharing = await this.page.waitForResponse((responseAppSharing) => 
  responseAppSharing.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/voicequality/"));
 // const responseBodyAppSharing = await response.json();
 // await expect.soft(responseAppSharing.status()).toBe(200);

}


async Microsoft_Teams_Time_Granularity_Functionality(){
  
  //click on time dropdown button
  await this.page.locator('//div[@class="dropdown"]').first().click();

  //assertions to check platforms are available in the dropdown
 // await expect.soft(this.page.locator('//a[normalize-space()="All Platforms"]')).toBeVisible();
 // await expect.soft(this.page.locator('//a[normalize-space()="Skype for Business"]')).toBeVisible();
  await expect.soft(this.page.locator('//a[normalize-space()="Microsoft Teams"]')).toBeVisible();

  //select 'All Platforms' from the platform selector
 // await this.page.locator('//a[normalize-space()="All Platforms"]').click();

  //click on next week to get the latest data
  await this.page.locator('//i[@uib-tooltip="Next week"]').click();

  //select daywise data granularity for the graph
  await this.page.locator('//label[normalize-space()="Day"]').click();
 // await this.page.locator('//label[normalize-space()="Week"]').click();

  //(one possible solution)
  //counting graph points to see latest data is present
 // await expect.soft(this.page.locator()).toHaveCount(31);

}

async OrgFilter_Functionality(){
  //Org Filter for Persona functionality
 // await this.page.locator('//span[@ng-if="selectedDashboard"]').click();
  //await this.page.locator('//a[contains(normalize-space(), "Service Health (Legacy)")]').click();
 // await new Promise(f => setTimeout(f, 3000));
  await this.page.frameLocator('iFrame').locator("//a[@id='org-filter-button']").click();
 // const dropdown1 = await this.page.locator('[class="form-control-sm w-100 input-org-select"]');
 // await dropdown1.selectOption({value:"4"});
  //New code exp
  //Storing Org Filter popup in an object
  const OrgFilterDiv = await this.page.frameLocator('iFrame').locator('//div[contains(@class, "org-filter-popover")]');

  //Randomizing selection of the Organization Attribute to filter on
  const dropdown = await OrgFilterDiv.locator('//select[@class="form-control-sm w-100 input-org-select"]');
  const numberOfOptions = await dropdown.locator('//select[@class="form-control-sm w-100 input-org-select"]/option').count();
  const randomIndex = Math.floor(Math.random() * numberOfOptions);
  await dropdown.selectOption({ index: randomIndex });
 
  
  //From the list of Organizations under the Organization Attribute, 
  //Randomizing the specific Organization selected to then use as a filter on data from reporting db
  const Orgs = await OrgFilterDiv.locator('//div[@class="virtual-scroller-item"]');
  const OrgsOptions = await Orgs.count();
  const randomIndexOrg = Math.floor(Math.random() * OrgsOptions);
  await Orgs.nth(randomIndexOrg).click();
 // await Orgs.nth(randomIndexOrg).click();
  
  //Click on confirm button to launch Org filter query on db
  await OrgFilterDiv.locator('//button[@class="btn-xs btn btn-primary"]').click();

  //Checking 200 api response from reporting db
  /*const responseOrg = await this.page.waitForResponse((responseOrg) => 
  responseOrg.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/voicequality/"));*/

const responseOrg = await this.page.waitForResponse(/.*reportingservice.*api\/v1\/voicequality.*organization%5Battribute\dValues.*/);
  const responseBodyOrg = await responseOrg.json();
  await expect.soft(responseOrg.status()).toBe(200);

  //Remove org filter
  await new Promise(f => setTimeout(f, 1000));
  await this.page.locator("//a[@id='org-filter-button']").click();
  await new Promise(f => setTimeout(f, 1000));
  await this.page.locator("//strong[contains(text(),' Remove All')]").hover();
  await this.page.locator("//strong[contains(text(),' Remove All')]").click();
  //Multiple select options
 // await this.page.locator("//a[@id='org-filter-button']").click();
  await Orgs.nth(randomIndexOrg).click();
  await Orgs.nth(randomIndexOrg).click();
  //Click on confirm button to launch Org filter query on db
  await OrgFilterDiv.locator('//button[@class="btn-xs btn btn-primary"]').click();
const responseOrg1 = await this.page.waitForResponse(/.*reportingservice.*api\/v1\/voicequality.*organization%5Battribute\dValues.*/);
const responseBodyOrg1 = await responseOrg.json();
await expect.soft(responseOrg1.status()).toBe(200);




 // console.log(responseBodyOrg);
//comented the below hard coded code for Org Filter
/* await page.locator("//div[normalize-space()='IT']").click();
  await this.page.locator("//button[contains(@class,'btn-xs btn btn-primary')]").click();
  //Remove org filter
  await this.page.locator("//a[@id='org-filter-button']").click();
  await this.page.locator("[class='btn-remove-all']").click();
  //Multiple select
  await new Promise(f => setTimeout(f, 1000));
  await this.page.locator("//div[normalize-space()='R&D']").click();
  await this.page.locator("//div[normalize-space()='Sales']").click();
  await this.page.locator("//button[contains(@class,'btn-xs btn btn-primary')]").click();
   //Remove org filter
   await new Promise(f => setTimeout(f, 1000));
   await this.page.locator("//a[@id='org-filter-button']").click();
   await this.page.locator("[class='btn-remove-all']").click();
   await this.page.locator("//a[@id='org-filter-button']").click();
  //Org Filter for Department functionality
 /* await new Promise(f => setTimeout(f, 1000));
  await this.page.locator("//a[@id='org-filter-button']").click();
  const element = await this.page.locator('[class="form-control-sm w-100 input-org-select"]');
  await element.selectOption({value:"3"});
  await this.page.locator("//a[@id='org-filter-button']").click();
  await this.page.locator("//div[normalize-space()='Cloud Managed Services']").click();
  await this.page.locator("//div[normalize-space()='Consulting']").click();
  //Confirm button
  await this.page.locator("//button[contains(@class,'btn-xs btn btn-primary')]").click();*/
  //search for department
  await this.page.locator("//a[@id='org-filter-button']").click();//open org filter dropdown
  await this.page.locator("//input[@placeholder='Search']").fill("Finance");
  await expect.soft(this.page.locator("//div[contains(text(),'Finance')]")).toBeVisible();
  await this.page.locator("//button[contains(text(),'Cancel')]").click();

  
}
async Tag_Filter_Functionality(){
  //tag dropdown
  await new Promise(f => setTimeout(f, 10000));
  const closebtn = await this.page.locator("[class='gritter-close']").count();
  console.log(closebtn);
  for (const li of await this.page.locator("[class='gritter-close']").all())
    await li.click();
  const tagfilterdiv = await this.page.locator('//div[@class="tag-selector-popover-body"]');
  await new Promise(f => setTimeout(f, 5000));
  await this.page.locator('[id="tag-selector-button"]').click();
  //selecting single tag with server type
  const server = await this.page.locator('//div[@class="ps-tag ps-tag-selector ps-tag-system"]');
  const serverOptions = await server.count();
  const randomIndexOrg = Math.floor(Math.random() * serverOptions);
  await server.nth(randomIndexOrg).click();
  //Click on confirm button to launch Org filter query on db
  await tagfilterdiv.locator('//button[@class="btn-xs btn btn-primary"]').click();
//Selecting multiple select sites
 /* await this.page.locator('[data-platform="tagSelectorPlatform"]').click();
  const site = await this.page.locator('//div[@class="ps-tag ps-tag-selector ps-tag-custom"]');
  const siteOptions = await server.count();
  const randomIndexsite = Math.floor(Math.random() * siteOptions);
  await site.nth(randomIndexsite).click();
  //Click on confirm button to launch Org filter query on db
  await tagfilterdiv.locator('//button[@class="btn-xs btn btn-primary"]').click();



  //await this.page.locator("//button[contains(@class,'btn-xs btn btn-primary')]").click();
  //div[@class="tag-selector-popover-body"]//child::div//button[@class="btn-xs btn btn-primary"]
//Old code hard coded the values
  await new Promise(f => setTimeout(f, 1000));
  await this.page.locator("//a[@id='tag-selector-button']").click();
  //Select Audio/Video...from drop down
  await this.page.locator("//div[contains(text(),'Audio/Video MCU')]").click();
  await this.page.locator("//button[contains(@class,'btn-xs btn btn-primary')]").click();
  //Multiple select
  await this.page.locator("//a[@id='tag-selector-button']").click();
  
  //Select VPN/Factory...from drop down
  await this.page.locator("//div[contains(text(),'VPN')]").click();
  await this.page.locator("//div[contains(text(),'Factory')]").click();
  await this.page.locator("//button[contains(@class,'btn-xs btn btn-primary')]").click();
  //Remove Filter 
  await this.page.locator("//a[@id='tag-selector-button']").click();
  await this.page.locator("[class='btn-remove-all']").click();
  //tag search functionality
 // await this.page.locator("//a[@id='tag-selector-button']").click();
 await new Promise(f => setTimeout(f, 2000));
  await this.page.locator("//input[@placeholder='Search in list...']").fill("Bad Wifi")
  await new Promise(f => setTimeout(f, 10000));
  const filtervalue = await this.page.locator("[class='ps-tag ps-tag-selector ps-tag-custom']").allTextContents();
  await new Promise(f => setTimeout(f, 10000));
  console.log(filtervalue);
  */

}

}

//https://reportingservice.unifysquare.com/api/v1/voicequality/16c94e3a-bf75-43b6-ab3f-3252f4c9052d/details?platform=Teams&mediaType=audio&granularity=Week&startDate=2023-07-30T00%3A00%3A00.000Z&periods=8&callScenarios=All&cacheBuster=true

//https://reportingservice.unifysquare.com/api/v1/voicequality/16c94e3a-bf75-43b6-ab3f-3252f4c9052d/details?platform=Teams&mediaType=audio&granularity=Day&periods=31&callScenarios=All&cacheBuster=true&startDate=2023-08-24T00%3A00%3A00.000Z}