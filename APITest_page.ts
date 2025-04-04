// auth.setup.ts
import test, { expect, test as setup } from '@playwright/test';
import * as fs from "fs";
import path from 'path';
let authtoken: any;;
let  dactoken:any ;
export var flowvalue: any;


test('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  test.slow();
  await page.goto('https://powersuite-dev.unifysquare.com/');
//await page.getByRole('button', { name: 'Sign in' }).click(); 
  await page.locator('//input[@type="email"]').fill('powersuite-dev-unifysquare-demo@dharmanaut.org');
  await page.locator('//button[@type="submit"]').click();
  await page.locator('//input[@id="1-email"]').fill('powersuite-dev-unifysquare-demo@dharmanaut.org');
  await page.locator('//input[@type="password"]').fill('yoS0/!$f');
  await page.locator('//button[@type="submit"]').click();
  
  const responsePromise = await page.waitForRequest('https://userdac.dev.powersuite.unifysquare.com/api/v1/tenantDacSettings/16c94e3a-bf75-43b6-ab3f-3252f4c9052d')
  // await page.context().storageState({ path: authFile });
  await page.reload();
  const response = await responsePromise;
  //await console.log(await response.headerValue("authorization"));
 // const authtoken = await response.headerValue("authorization");
 authtoken = await response.headerValue("authorization");
  const rbearer = authtoken?.slice(7);
  console.log(rbearer);
  console.log("*******************************************");
  await console.log(await response.headerValue("user-dac"));
  dactoken = await response.headerValue("user-dac");
  const jsonData = JSON.stringify(authtoken);
  const jsonData1 = JSON.stringify(dactoken);
  fs.writeFileSync('AuthenticationCredentialsJSON.json', jsonData);
  fs.writeFileSync('userdac.json',jsonData1);

});


const benchmark = '{DeviceXLAs(tenantId:"16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start: "2023-12-01",granularity: "month",periods: 1,orgFilter:""){flow}'
const benchmarksingle = '{DeviceXLAs(tenantId:"16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start: "2023-01-01",granularity: "day",periods: 13,orgFilter: "1") {timestamp, flow, balance, velocity}}'
const benchmarksingleinvalid = '{DeviceXLAs(tenantId:"e69c96e2-4116-4f57-a41f-3e593050709b",start: "2023-01-01",granularity: "day",periods: 13,OrgFilter: "2") {timestamp, flow, balance, velocity}}'
const precogweek ='{Precognition(tenantId: "16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start: "2023-02-01",granularity: "week",periods: 13,orgFilter: "2"){timestamp,periodId,automationCategory,runsThisPeriod,minutesSavedPerRun}}'
const precogday ='{Precognition(tenantId: "16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start: "2023-02-01",granularity: "day",periods: 13,orgFilter: "2"){timestamp,periodId,automationCategory,runsThisPeriod,minutesSavedPerRun}}'
const precogmonth = '{Precognition(TenantId: "16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start: "2023-02-01",granularity: "month",periods: 13,orgFilter: "1"){timestamp,periodId,automationCategory,runsThisPeriod,minutesSavedPerRun,precognitionMinutes}}'
const precogyear =  '{Precognition(tenantId: "16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start: "2023-02-01",granularity: "year",periods:5,orgFilter: "2"){timestamp,periodId,automationCategory,runsThisPeriod,minutesSavedPerRun}}'
const evolveday ='{Evolve(tenantId: "16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start: "2023-02-01",granularity: "day",periods: 5,orgFilter: "2"){timestamp,periodId,source,contactType,channel,modern,ticketCount}}'
const evolveweek ='{Evolve(tenantId: "16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start: "2023-02-01",granularity: "week",periods: 5,orgFilter: "2"){timestamp,periodId,source,contactType,channel,modern,ticketCount}}'
const evolvemonth ='{Evolve(tenantId: "16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start: "2023-02-01",granularity: "month",periods: 13,orgFilter: "2"){timestamp,periodId,source,contactType,channel,modern,ticketCount}}'
const evolveyear ='{Evolve(tenantId: "16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start: "2023-02-01",granularity: "year",periods: 13,orgFilter: "2"){timestamp,periodId,source,contactType,channel,modern,ticketCount}}'
const tiketingusagemonth ='{TicketingUsage(tenantId: "16c94e3a-bf75-43b6-ab3f-3252f4c9052d",start: "2023-02-01",granularity: "month",periods: 13,orgFilte: "2"){timestamp,periodId,source,contactType,channel,modern,ticketCount}}'

test.describe("api testing",() =>{
  
   test.skip('benc mark-XLAs-all', async ({ request }) => {
    const response = await  request.post('https://api.dev.powersuite.unifysquare.com/xmo/xlas/v1',{
        headers: {
         'Authorization': authtoken,
         'user-dac':dactoken,
        // "Content-Type": "text/plain"
       },
        data: benchmark
     });
     expect (response.status()).toBe(200);
    const statuses = await response.json();
    const flowvalue = JSON.stringify(statuses);
    console.log(flowvalue);  
   });



   test('API Test DEMO', async ({ request }) => {
    const response = await  request.get('https://reportingservice-dev.unifysquare.com/api/v1/voicequality/e8f8cb9d-b410-4e66-ae3e-1284e3d93a2a/details?platform=Teams&mediaType=audio&granularity=Week&periods=61&callScenarios=All&cacheBuster=true&startDate=2023-12-10T00:00:00.000Z',{
        headers: {
         'Authorization': authtoken,
         'user-dac':dactoken,
        // "Content-Type": "text/plain"
       },
        data: benchmark
     });
     expect (response.status()).toBe(200);
    const statuses = await response.json();
    const flowvalue = JSON.stringify(statuses);
    console.log(flowvalue);  
   });

});

