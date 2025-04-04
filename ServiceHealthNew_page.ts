import { expect, FrameLocator, Locator, Page, request,selectors } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { times } from 'lodash';
export class ServiceHealth_New_page {
    readonly page: Page;
    readonly selectdashboard: Locator;
    readonly servicehealthnew: Locator;
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
   // readonly previousweek : Locator;
    readonly nextweek : Locator;
  //  readonly previuosmonth : Locator;
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
  PoorcallsAudio: Locator;
  PoorcallsVideo: Locator;
  Poorcallshighchartpoint: Locator;
  poorcalssxaxis: Locator;
  PoorcallsAppSharing: Locator;
  month: Locator;
  calendernew: Locator;
  areachartpoints: Locator;
  area: Locator;
  WIS: Locator;
  IES: Locator;
  WLIS: Locator;
  EES: Locator;
  WEES: Locator;
  WLEES: Locator;
  EPTE: Locator;
  CES: Locator;
  VPNS: Locator;
  All: Locator;
  bar: Locator;
  Poorcallshighchartpointmonth: Locator;
  sites: Locator;
  clienttype: Locator;
  subnets: Locator;

    constructor(page: Page) {
        this.page = page;
        this.selectdashboard = page.locator('[ng-if="selectedDashboard"]');
        this.servicehealthnew = page.locator('[ng-repeat="dashboard in dashboardGroup"]').nth(10);
        this.calender = page.frameLocator('iframe').locator('[title="Selected Week"]');
        this.calendernew = page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='calendar']");
        this.month =page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='calendar-alt']")
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
        this.nextweek = page.frameLocator('iframe').locator("//button[@title='Next Week']")
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
//Locators for Poor Calls
this.PoorcallsAudio = page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='phone']");
this.PoorcallsVideo = page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='video']");
this.PoorcallsAppSharing = page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='share-nodes']");
this.Poorcallshighchartpoint = page.frameLocator('iframe').locator("(//*[name()='g'][@class='highcharts-markers highcharts-series-0 highcharts-spline-series highcharts-tracker']/*[name()='path'][@fill='#FF9655'])");
this.Poorcallshighchartpointmonth = page.frameLocator('iframe').locator("(//*[name()='g'][@class='highcharts-markers highcharts-series-0 highcharts-line-series highcharts-tracker']/*[name()='path'][@fill='#FF9655'])");
this.areachartpoints = page.frameLocator('iframe').locator("(//*[name()='g'][@class='highcharts-markers highcharts-series-0 highcharts-area-series highcharts-color-0 highcharts-tracker']/*[name()='path'][@fill='#7cb5ec'])")
this.poorcalssxaxis = page.frameLocator('iframe').locator("(//*[name()='g'][@class='highcharts-axis-labels highcharts-xaxis-labels']/*[name()='text'])");
this.bar =page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='chart-bar']");
this.area =page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='chart-area']");
this.All = page.frameLocator('iframe').locator("//td[contains(text(),'All')]");
this.WIS = page.frameLocator('iframe').locator("//td[contains(text(),'Wired Internal to Service')]");
this.IES = page.frameLocator('iframe').locator("//table[@class='scenario-table table']//tr/td[contains(text(),'Internal Endpoint to Service')]");
this.WLIS = page.frameLocator('iframe').locator("//table[@class='scenario-table table']//tr/td[contains(text(),'Wireless Internal to Service')]");
this.EES = page.frameLocator('iframe').locator("//table[@class='scenario-table table']//tr/td[contains(text(),'External Endpoint to Service')]");
this.WEES = page.frameLocator('iframe').locator("//table[@class='scenario-table table']//tr/td[contains(text(),'Wired External to Service')]");
this.WLEES = page.frameLocator('iframe').locator("//table[@class='scenario-table table']//tr/td[contains(text(),'Wireless External to Service')]");
this.EPTE = page.frameLocator('iframe').locator("//table[@class='scenario-table table']//tr/td[contains(text(),'Endpoint to Endpoint')]");
this.CES = page.frameLocator('iframe').locator("//table[@class='scenario-table table']//tr/td[contains(text(),'Cellular Endpoint to Service')]");
this.VPNS = page.frameLocator('iframe').locator("//table[@class='scenario-table table']//tr/td[contains(text(),'VPN to Service')]");


//Locators for Tenant selection
  this.tenantdropdown = page.locator('[ng-if="currentTenant"]');
  this.search = page.locator('//input[@ng-model="tenantFilter"]');
  this.tenantselection = page.locator('//span[@class="capitalize"]');
  //Locators for breakdown- All
  this.sites = page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='building']");
  this.clienttype = page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='tablet-screen-button']");
  this.subnets = page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='subnets']");
      }
    async Navigate_To_ServiceHealth_New_Page(){
       await this.selectdashboard.click();
       await this.servicehealthnew.click();}
       async Switch_To_Unisys_Demo_Tenant(){
        await this.tenantdropdown.click();
       await this.search.fill("Unisys-Demo");
       await this.tenantselection.first().click();
       }
       async ServiceHealth_Poorcalls_Audio_Week_Validation()
       {
        //await this.nextweek.click();
        await this.page.reload();
        await this.PoorcallsAudio.first().click();
        await new Promise(f => setTimeout(f, 9000));
        expect.soft(await this.Poorcallshighchartpoint.nth(0)).toBeVisible();
       //await new Promise(f => setTimeout(f, 9000));
        const totalhighchartpoints = await this.Poorcallshighchartpoint.count();
        console.log("High chart points for poor calls: "+totalhighchartpoints);
        await this.page.mouse.click(616, 515);
        //await this.Poorcallshighchartpoint.last().hover();
        //Store captured screenshot in specific location
        await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Audio)-Week.png' });
        const lastvolume = await this.poorcalssxaxis.last().textContent();
        console.log(lastvolume);
        await this.poorcalssxaxis.last().scrollIntoViewIfNeeded();
        await this.page.mouse.click(739, 400);
        //await this.poorcalssxaxis.last().hover()
        await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Audio)-Week-Data.png'});
       // await new Promise(() => {});
       //Verfiy high chart points on area
        await this.area.click();
        await new Promise(f => setTimeout(f, 9000));
        const chartpointcountarea = await this.areachartpoints.count();
        console.log("Area Chart Points: "+chartpointcountarea)
        await this.page.mouse.click(739, 400);
        //await this.areachartpoints.last().hover();
      // await new Promise(f => setTimeout(f, 9000));
        await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Audio)-Area-Week-chart.png'});
        //Switch back to bar chart
        await this.bar.click();


       }
       async ServiceHealth_Poorcalls_Video_Week_Validation(){
        await this.PoorcallsVideo.first().click();
        await new Promise(f => setTimeout(f, 9000));
        await this.Poorcallshighchartpoint.nth(1).waitFor();
        const totalhighchartpoints = await this.Poorcallshighchartpoint.count();
        console.log("High chart points for poor calls Video:"+totalhighchartpoints);
        //Click on chart to hover the last element otherwise sometimes hover is not working
        await this.page.mouse.click(616, 525);
        //await this.Poorcallshighchartpoint.last().hover();
        await new Promise(f => setTimeout(f, 5000));
        await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Video)-Week-Chart.png' });
        const lastvolume = await this.poorcalssxaxis.last().textContent();
        console.log(lastvolume);
        //await this.poorcalssxaxis.last().hover();
        //await this.page.screenshot({path : 'Lastdatasynvideo.png'});   //If need please uncomment code
        //Verfiy high chart points on area
        await this.area.click();
        await new Promise(f => setTimeout(f, 5000));
        await this.page.mouse.click(753.28, 108.27);
       // await this.areachartpoints.last().hover();
      // await new Promise(f => setTimeout(f, 9000));
        await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Video)-Week-Area-Data.png'});
        //Switch back to bar chart
        await this.bar.click();
       // await new Promise(() => {});
    

       }
       async ServiceHealth_Poorcalls_AppSharing_Week_Validation()
       {
        await this.PoorcallsAppSharing.first().click();
        await new Promise(f => setTimeout(f, 9000));
        expect.soft(await this.Poorcallshighchartpoint.nth(1)).toBeVisible();
       // await new Promise(f => setTimeout(f, 9000));
        const totalhighchartpoints = await this.Poorcallshighchartpoint.count();
        console.log("High chart points for poor calls App Sharing"+totalhighchartpoints);
        await this.page.mouse.click(616, 525);
       // await this.Poorcallshighchartpoint.last().hover();
        await new Promise(f => setTimeout(f, 5000));
        await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(AppSharing)-Week-Chart.png' });
        const lastvolume = await this.poorcalssxaxis.last().textContent();
        console.log(lastvolume);
        await this.page.mouse.click(739, 400);
        //await this.poorcalssxaxis.last().hover();
        await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(AppSharing)-Week-Data.png'});
        //Verfiy high chart points on area
        await this.area.click();
        await new Promise(f => setTimeout(f, 9000));
        await this.page.mouse.click(753.28, 108.28);
        await this.areachartpoints.last().hover();
      // await new Promise(f => setTimeout(f, 9000));
        await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(AppSharing)-Week-Area-Data.png'});
        //Switch back to bar chart
        await this.bar.click();

       // await new Promise(() => {});
    

       }
       async ServiceHealth_Poorcalls_Audio_Month_Validation()
       {
        await this.calendernew.first().click();
        await this.month.click();
        await this.PoorcallsAudio.first().click();
        await this.daybtn.click();
        await new Promise(f => setTimeout(f, 9000));
        //await this.Poorcallshighchartpoint.first().waitFor();
        expect.soft(await this.Poorcallshighchartpointmonth.nth(1)).toBeVisible();
       // await new Promise(f => setTimeout(f, 9000));
        const totalhighchartpoints = await this.Poorcallshighchartpointmonth.count();
        console.log("High chart points for poor calls: "+totalhighchartpoints);
        await this.page.mouse.click(616, 515);
       // await this.Poorcallshighchartpointmonth.last().hover();
       // await new Promise(f => setTimeout(f, 5000));
        await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Audio)-Month-Datapoint.png' });
       
        const lastvolume = await this.poorcalssxaxis.last().textContent();
        console.log(lastvolume);
        await this.page.mouse.click(616, 515);
       // await this.poorcalssxaxis.last().hover()
        await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Audio)-Month-Data.png'});
       // await new Promise(() => {});
    

       }
       async ServiceHealth_Poorcalls_Video_Month_Validation()
       {
       // await this.calendernew.first().click();
       // await this.month.click();
        await this.PoorcallsVideo.first().click();
        await this.daybtn.click();
        await new Promise(f => setTimeout(f, 9000));
        //await this.Poorcallshighchartpoint.first().waitFor();
        expect.soft(await this.Poorcallshighchartpointmonth.nth(1)).toBeVisible();
       // await new Promise(f => setTimeout(f, 9000));
        const totalhighchartpoints = await this.Poorcallshighchartpointmonth.count();
        console.log("High chart points for poor calls: "+totalhighchartpoints);
        await this.page.mouse.click(616, 515);
        //await this.Poorcallshighchartpointmonth.last().hover();
       // await new Promise(f => setTimeout(f, 5000));
        await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Video)-Month-Datapoint.png' });
       
        const lastvolume = await this.poorcalssxaxis.last().textContent();
        console.log(lastvolume);
        await this.page.mouse.click(616, 525);
        await new Promise(f => setTimeout(f, 5000));
        //await this.poorcalssxaxis.last().hover()
        await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(Video)-Month-Data.png'});
       // await new Promise(() => {});
    

       }
       async ServiceHealth_Poorcalls_AppSharing_Month_Validation()
       {
       // await this.calendernew.first().click();
       // await this.month.click();
        await this.PoorcallsAppSharing.first().click();
        await this.daybtn.click();
        await new Promise(f => setTimeout(f, 9000));
        //await this.Poorcallshighchartpoint.first().waitFor();
        expect.soft(await this.Poorcallshighchartpointmonth.nth(1)).toBeVisible();
       // await new Promise(f => setTimeout(f, 9000));
        const totalhighchartpoints = await this.Poorcallshighchartpointmonth.count();
        console.log("High chart points for poor calls: "+totalhighchartpoints);
        await this.page.mouse.click(616, 515);
        //await this.Poorcallshighchartpointmonth.last().hover();
       // await new Promise(f => setTimeout(f, 5000));
        await this.page.screenshot({ path: 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(AppSharing)-Month-Datapoint.png' });
       
        const lastvolume = await this.poorcalssxaxis.last().textContent();
        console.log(lastvolume);
        await this.page.mouse.click(616, 525);
        await new Promise(f => setTimeout(f, 5000));
       //await this.poorcalssxaxis.last().hover()
        await this.page.screenshot({path : 'C:/Users/HussaiS2/PlaywrightAutomation/Automation-Screenshots/Poorcalls(AppSharing)-Month-Data.png'});
       // await new Promise(() => {});
    

       }
       async ServiceHealth_Call_Scenarios_UI(){
        await new Promise(f => setTimeout(f, 9000));
        await this.All.click();
        //await this.WIS.click();
        await expect.soft(this.WIS).toBeVisible();
        await expect.soft(this.EES).toBeVisible();
        await expect.soft(this.WEES).toBeVisible();
        await expect.soft(this.EPTE).toBeVisible();
        await expect.soft(this.VPNS).toBeVisible();
        await expect.soft(this.IES).toBeVisible();
        await expect.soft(this.WLEES).toBeVisible();
        await expect.soft(this.CES).toBeVisible();

       }
       async ServiceHealth_Call_Scenarios_page_Redirection(){
        await new Promise(f => setTimeout(f, 9000));
        await this.All.click();
        await this.sites.click();
        const pagePromise = this.page.waitForEvent('popup');
        const newTab = await pagePromise;
        await newTab.waitForLoadState();
        await new Promise(f => setTimeout(f, 10000));
       //await newTab.reload();
        //await new Promise(f => setTimeout(f, 10000));
        await newTab.waitForLoadState('domcontentloaded');
        const title1 = await newTab.title();
        console.log(title1)
        await expect(title1).toEqual("[Dev] Operations Dashboard - PowerSuite");
        /*
        await new Promise(f => setTimeout(f, 10000));
        const element1 = await this.page.frameLocator('iframe').locator("//span[@class='filter-option pull-left']").nth(1);
        await element1.textContent();
     console.log(element1)
     //await new Promise(f => setTimeout(f, 2000));
//selectin category type
const category = this.page.frameLocator('iframe').locator("//span[@class='filter-option pull-left']").nth(1);
const categoryvalues = await category.allTextContents();
//Printing category values to console
console.log("Category values for ALL  Call scenario are: :" +categoryvalues);
     */ 
      }
  async ServiceHealth_New_Page_Actions(){
       await new Promise(f => setTimeout(f, 1000));
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
         // await this.previousmonth.click();
          await new Promise(f => setTimeout(f, 1000));
         // await this.previousmonth.click();// Again clicking here to get test data month
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
//Akshay code 

async Geo_Heirarchy_Dropdown_Functionality(){
    
  //click on sites dropdown button
  await this.page.frameLocator('iframe').locator('[id=GeoFilterButton]').click();
  await new Promise(f => setTimeout(f, 1000));
 // await this.page.frameLocator('iframe').getByTitle('title="Location: All"');
  //Expand the geo-heirarchy tree by clicking on all right indicators before the site names
 /* while (this.page.locator("(//ol[@id='tree-root']//i[contains(@class, 'right')])").nth(1).isVisible());
    {
     this.page.locator("(//ol[@id='tree-root']//i[contains(@class, 'right')])").nth(1).click();
     await new Promise(f => setTimeout(f, 1000));
    }  */


       //New Locators
     //Expand the geo-heirarchy tree by clicking on all right indicators before the site names
    const totalelements =  await this.page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='caret-right']").count();
  // await this.page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='caret-right']").first().click();
    console.log(totalelements)
    let i: number = 0;
    let j: number = 0;
    const abc= await this.page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='caret-right']").nth(0).isVisible();
   console.log(abc);
  /*  while(await this.page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='caret-right']").nth(0).isVisible() === true);
  {
    await this.page.locator("//*[local-name()='svg' and @data-icon='caret-right']").nth(0).click({force:true});
   await new Promise(f => setTimeout(f, 1000));
  }
*/
for (i=0 ; i<= totalelements;i++){
  await this.page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='caret-right']").nth(i).click({force:true});
  //await new Promise(f => setTimeout(f, 500));
       const totalelements1 =  await this.page.frameLocator('iframe').locator("(//ol)[3]//*[local-name()='svg' and @data-icon='caret-right']").count();
        console.log("inside loops count"+totalelements1);
          for (j=0 ; j<= (totalelements1);j++)
            {
              await this.page.frameLocator('iframe').locator("//*[local-name()='svg' and @data-icon='caret-right']").nth(j).click({force:true});
               //await new Promise(f => setTimeout(f, 500));
            }
}
//await new Promise(() => {});
  //count of all sites
  const count = await this.page.frameLocator('iframe').locator("//ol//div/a[@class='node-label']").count();
  console.log("Total sites count"+count);
  
  //looping over all sites
  for(var index = 1; index < count; index++) {
      
      //click on sites dropdown button after the first run
     // if(index != 0){await this.page.locator("//span[starts-with(@uib-tooltip, 'Location:')]").click();}
     
      //filter data by site by clicking on the site label
      await this.page.frameLocator('iframe').locator("//ol//div/a[@class='node-label']").nth(index).click();
      await new Promise(f => setTimeout(f, 1000));
      //check api response for data from server sends back a 200 response
      const responseSite = await this.page.waitForResponse((responseSite) => 
      responseSite.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/voicequality/"));
      
      //Store response body in a variable
      //const responseSiteBody = await responseSite.json();
      
      await expect.soft(responseSite.status()).toBe(200);
      
  }
//await new Promise(() => {});
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

  //(one possible solution)
  //counting graph points to see latest data is present
 // await expect.soft(this.page.locator()).toHaveCount(31);

}

async OrgFilter_Functionality(){
  //Org Filter for Persona functionality
 
  await new Promise(f => setTimeout(f, 5000));
  await this.page.frameLocator('iFrame').locator("//a[@id='org-filter-button']").click({force:true});
 
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
  const responseOrg = await this.page.waitForResponse((responseOrg) => 
  responseOrg.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/voicequality/"));

//const responseOrg = await this.page.waitForResponse(/.*reportingservice.*api\/v1\/voicequality.*organization%5Battribute\dValues.*/);
//  const responseBodyOrg = await responseOrg.json();
  await expect.soft(responseOrg.status()).toBe(200);

  //Remove org filter
  await new Promise(f => setTimeout(f, 1000));
  await this.page.frameLocator('iFrame').locator("//a[@id='org-filter-button']").click();
  await new Promise(f => setTimeout(f, 1000));
  await this.page.frameLocator('iframe').locator("//strong[contains(text(),' Remove All')]").hover();
  await this.page.frameLocator('iframe').locator("//strong[contains(text(),' Remove All')]").click();
  //Multiple select options
 // await this.page.locator("//a[@id='org-filter-button']").click();
  await Orgs.nth(randomIndexOrg).click();
  await Orgs.nth(randomIndexOrg).click();
  //Click on confirm button to launch Org filter query on db
  await OrgFilterDiv.locator('//button[@class="btn-xs btn btn-primary"]').click();
  const responseOrg1 = await this.page.waitForResponse((responseOrg1) => 
    responseOrg1.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/voicequality/"));
  const responseBodyOrg1 = await responseOrg.json();
await expect.soft(responseOrg1.status()).toBe(200);
await this.page.frameLocator('iFrame').locator("//a[@id='org-filter-button']").click();
  await new Promise(f => setTimeout(f, 1000));
  await this.page.frameLocator('iframe').locator("//strong[contains(text(),' Remove All')]").hover();
  await this.page.frameLocator('iframe').locator("//strong[contains(text(),' Remove All')]").click();
  await OrgFilterDiv.locator('//button[@class="btn-xs btn btn-primary"]').click();


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
  await this.page.frameLocator('iframe').locator("//a[@id='org-filter-button']").click();//open org filter dropdown
  await this.page.frameLocator('iframe').locator("//input[@placeholder='Search']").fill("Finance");
  await expect.soft(this.page.frameLocator('iframe').locator("//div[contains(text(),'Finance')]")).toBeVisible();
  await this.page.frameLocator('iframe').locator("//button[contains(text(),'Cancel')]").click();

  
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
  await this.page.locator('[data-platform="tagSelectorPlatform"]').click();
  //selecting single tag with server type
  const server = await this.page.locator('//div[@class="ps-tag ps-tag-selector ps-tag-system"]');
  const serverOptions = await server.count();
  const randomIndexOrg = Math.floor(Math.random() * serverOptions);
  await server.nth(randomIndexOrg).click();
  //Click on confirm button to launch Org filter query on db
  await tagfilterdiv.locator('//button[@class="btn-xs btn btn-primary"]').click();
//Selecting multiple select sites
  await this.page.locator('[data-platform="tagSelectorPlatform"]').click();
  const site = await this.page.locator('//div[@class="ps-tag ps-tag-selector ps-tag-custom"]');
  const siteOptions = await server.count();
  const randomIndexsite = Math.floor(Math.random() * siteOptions);
  await site.nth(randomIndexsite).click();
  //Click on confirm button to launch Org filter query on db
  await tagfilterdiv.locator('//button[@class="btn-xs btn btn-primary"]').click();



  //await this.page.locator("//button[contains(@class,'btn-xs btn btn-primary')]").click();
  //div[@class="tag-selector-popover-body"]//child::div//button[@class="btn-xs btn btn-primary"]
/*//Old code hard coded the values
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
  //tag search functionality*/
 // await this.page.locator("//a[@id='tag-selector-button']").click();
 await new Promise(f => setTimeout(f, 2000));
  await this.page.locator("//input[@placeholder='Search in list...']").fill("Bad Wifi")
  await new Promise(f => setTimeout(f, 10000));
  const filtervalue = await this.page.locator("[class='ps-tag ps-tag-selector ps-tag-custom']").allTextContents();
  await new Promise(f => setTimeout(f, 10000));
  console.log(filtervalue);

}

}

//https://reportingservice.unifysquare.com/api/v1/voicequality/16c94e3a-bf75-43b6-ab3f-3252f4c9052d/details?platform=Teams&mediaType=audio&granularity=Week&startDate=2023-07-30T00%3A00%3A00.000Z&periods=8&callScenarios=All&cacheBuster=true

//https://reportingservice.unifysquare.com/api/v1/voicequality/16c94e3a-bf75-43b6-ab3f-3252f4c9052d/details?platform=Teams&mediaType=audio&granularity=Day&periods=31&callScenarios=All&cacheBuster=true&startDate=2023-08-24T00%3A00%3A00.000Z}