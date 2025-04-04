import { expect, FrameLocator, Locator, Page, request, selectors } from '@playwright/test';

import { dactoken } from './PowerSuite_Login_page';
import { authtoken } from './PowerSuite_Login_page';

const devicexla = '{DeviceXLAs(tenantId:"16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start:"2024-01-01",granularity:"month",periods:1,orgFilter:""){flow, balance, velocity}}'
const precognition = '{ Precognition(tenantId:"16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start:"2024-01-01",granularity:"month",periods:1) {precognitionMinutes} }'
const evolve ='{Evolve(tenantId: "16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start: "2024-01-01",granularity: "month",periods: 1,orgFilter: ""){contactType,modern,ticketCount}}'

export class ServiceHealth_Validation_page {
   
    readonly page
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
    readonly previousweek : Locator;
    readonly nextweek : Locator;
    readonly previuosmonth : Locator;
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
    readonly precognitionval :Locator;
    readonly Evolveval1: Locator;
    

    constructor(page: Page) {
       
        
        this.page = page;
        this.selectdashboard = page.locator('[ng-if="selectedDashboard"]');
        this.servicehealthnew = page.locator('[ng-repeat="dashboard in dashboardGroup"]').nth(11);
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
        this.precognition = page.frameLocator('iframe').locator('[data-icon="road"]');
        this.daybtn = page.frameLocator('iframe').getByRole('button', { name: 'Day' });
        this.previosweek = page.frameLocator('iframe').getByRole('button', { name: 'Previous Week' });
        this.nextweek = page.frameLocator('iframe').getByRole('button', { name: 'Next Week' });
        this.previousmonth = page.frameLocator('iframe').getByRole('button', { name: 'Previous Month' });
        this.nextmonth = page.frameLocator('iframe').getByRole('button', { name: 'Next Month' });
        this.defaultperiod = page.frameLocator('iframe').getByRole('button', { name: 'Select the default period' });
        this.values = page.frameLocator('iframe').locator("(//td[@class='actual'])[1]");
        this.precognitionval = page.frameLocator('iframe').locator('[class="kpi-card-data-label-large trend"]');
        this.Evolveval1 = page.frameLocator('iframe').locator('[class="kpi-card-data-label-large"]');
    }
    
    async ServiceHealth_Validation_Page({ request }){
        //This Request will get Flow,Blance,Velocity Values
        const response1 = await  request.post('https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1',
        
        {
            headers: {
                'Authorization': authtoken,
                'user-dac':dactoken,
               },
               data:devicexla,
            });
         
           expect (response1.status()).toBe(200);
           const statuses = await response1.json();
           const responseapi2 = JSON.stringify(statuses);
           console.log(responseapi2);  
           
           //Getting Flow Value
           //const FlowAPI = splitresponse.slice(9,14)
           const FlowAPI = statuses.data.DeviceXLAs[0].flow.toFixed(2);
           console.log("Flow Value From API is" +FlowAPI);
           const BalanceAPI = statuses.data.DeviceXLAs[0].balance.toFixed(2);
           console.log("Balance Value From API is "+BalanceAPI);
           const VelocityAPI = statuses.data.DeviceXLAs[0].velocity.toFixed(2);
           console.log("Velocity Value From API is  " +VelocityAPI);

           const response2 = await  request.post('https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1',
                {
            headers: {
                'Authorization': authtoken,
                'user-dac':dactoken,
               },
               data:precognition,
            });
         
           expect (response1.status()).toBe(200);
           const statuses1 = await response2.json();
           const responseapi3 = JSON.stringify(statuses1);
           console.log("precog response" +responseapi3);  
           const splitresponse1:number = +responseapi3.slice(48,52).trim();
           console.log(splitresponse1);
           const splitresponse2:number = +responseapi3.slice(77,81).trim();
           console.log(splitresponse2);
           const splitresponse3:number = +responseapi3.slice(106,110).trim();
           console.log(splitresponse3);
           const splitresponse4:number= +responseapi3.slice(135,139).trim();
           console.log(splitresponse4);
           const precogtal  = splitresponse1+splitresponse2+splitresponse3+splitresponse4
           console.log(precogtal/60);
          const  precognitiontotal = Math.round(precogtal/60);
          console.log("Precognition value: "+precognitiontotal);
          
           //Request for Evolve
           const response3 = await  request.post('https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1',
                {
            headers: {
                'Authorization': authtoken,
                'user-dac':dactoken,
               },
               data:evolve,
            });
         
           expect (response3.status()).toBe(200);
           const statuses2 = await response3.json();
           const responseapi4 = JSON.stringify(statuses2);
           console.log("Evolve response" +responseapi4);  
           console.log("Type of Evolve"+typeof(statuses2));
           console.log("Value of Evolve"+statuses2);
           
           //Calculation for proper
           var Moderncount:number =0;
           var Legacycount:number =0;
           for (let key in statuses2) {
            if (typeof statuses2[key] === "object") {
              for (let nestedKey in statuses2[key]) {
                console.log(statuses2[key][nestedKey]);
                var Tck = statuses2[key][nestedKey];
                console.log(statuses2[key][nestedKey].length);
                for (var j = 0; j < statuses2[key][nestedKey].length; j++)
                   Tck.forEach((element) => {
                     if (element.modern === true){
                         const ModernticketCount = element.ticketCount
                          Moderncount = Moderncount+ModernticketCount;
                         console.log("Modern Ticket count in loop:"+Moderncount);
                       }else
                       {                       
                         const LegacyticketCount = element.ticketCount
                         Legacycount = Legacycount+LegacyticketCount;
                        console.log("Legacy count in loop"+Legacycount);
                     }})
                    }
              
              
            } else {
              console.log(statuses2[key]);
            }
          }
          
          
           const Evolve = Moderncount/(Moderncount+Legacycount);
           console.log(Evolve);
           const Evolvepercentage = (Evolve * 100);
           console.log("Evolve value"+Evolvepercentage);
           const Evolvepercentage1:number = +Evolvepercentage.toFixed(2);
           console.log("Evolve value"+Evolvepercentage1);
           


           


       //Below Code for Getting Values from UI
       await this.selectdashboard.click();
       await this.servicehealthnew.click();
       await new Promise(f => setTimeout(f, 1000));
       
      await this.page.frameLocator('iframe').getByTitle('Time period').click();
      await new Promise(f => setTimeout(f, 1000));
      await this.page.frameLocator('iframe').getByRole('listitem', { name: 'Select Month' }).click();
     // await this.previousmonth.click();
       await new Promise(f => setTimeout(f, 10000));
      //Getting Flow Value
       await this.flow.click();
       const FlowValue = (await this.values.textContent()).trim();
       console.log(FlowValue);
      console.log(typeof(FlowValue));
      console.log(typeof(FlowAPI));

    try {
        if (FlowAPI === FlowValue){
            console.log("Passed:Flow values are matched") }
           else{
            console.log("Flow values are not matched")
           
        }
    } catch (error) {
        console.log(error);

    }
     
        //Getting Balance value
        await this.balance.first().click();
        const BalanceValue = (await this.values.textContent()).trim();
       console.log(BalanceValue);
       
      if (BalanceValue == BalanceAPI){
        console.log("Balance values are matched");
                  }
       else{
        console.log("Balance values are not matched");
       
          }

          //Getting Velocity Values
          await this.velocity.first().click();
        const VelocityValue = (await this.values.textContent()).trim();
       console.log(VelocityValue);
      
      if (VelocityValue == VelocityAPI){
        console.log("Velocity values are matched");
                  }
       else{
        console.log("Velocity values are not matched");}
        //Getting Evolve Values
        await this.evolve.first().click();
        const EvolveUI = await this.Evolveval1.last().textContent();
        const Evolveint:number = +EvolveUI.slice(0,5);
        console.log(Evolveint);
        if (Evolvepercentage1 == Evolveint){
        console.log("Evolve values are matched");
                  }
       else{
        console.log("Evolve values are not matched");}


         //getting precog values
    await this.precognition.first().click();
    const PrecogUI = await this.precognitionval.textContent();
    const Precogint:number = +PrecogUI
    console.log(PrecogUI);
    if (precognitiontotal == Precogint){
        console.log("Precognition values are matched");
                  }
       else{
        console.log("Precognition values are not matched");}
        
        
    }
    

   
    }