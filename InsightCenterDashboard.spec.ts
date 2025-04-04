import { test, expect, Page } from '@playwright/test';
import { powersuit_Login_page } from "../../pages/XMO/PowerSuite_Login_page";
import { Insightcenter } from '../../pages/XMO/InsightCenter_page';
test.describe.configure({ mode: 'serial' });
 let page: Page
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });
  test('PowerSuite login with Unifysquare account', async ({  }) => {
    test.slow();
    const playwrightDev = new powersuit_Login_page(page);
    await playwrightDev.PowerSuite_Login_Unifysquare_Account();
  });
  test('Navigate To Insight Center Dashboard ', async ({ }) => {
    test.slow();
  const playwrightDev = new Insightcenter(page);
  await playwrightDev.Navigate_To_InsightCenter_Dashboard();
});

  test.skip('Insigh Center Vulnerability card Page ', async ({ }) => {
    test.slow();
  const playwrightDev = new Insightcenter(page);
  await playwrightDev.InsightCenter_Vulnerability_Detection();
  
  });
  test('Insigh Centern Device Refresh card Page ', async ({ }) => {
    test.slow();
  const playwrightDev = new Insightcenter(page);
  await playwrightDev.InsightCenter_Device_Refresh();
 
  });
  
  test.skip('Insigh Center Device config Persona Fit Page ', async ({ }) => {
    test.slow();
    const playwrightDev = new Insightcenter(page);
   await playwrightDev.InsightCenter_Device_config_Persona_Fit();

  });
  test.skip('Insigh Center Device config Persona Fit persona Page ', async ({ }) => {
    test.slow();
  const playwrightDev = new Insightcenter(page);
  await playwrightDev.InsightCenter_Device_config_Persona_Fit_persona();
  });

  test('Insigh Center _Poor Calls ', async ({ }) => {
    test.slow();
  const playwrightDev = new Insightcenter(page);
  await playwrightDev.InsightCenter_Poor_Calls();
  
  });
  test('Insigh Center Policies Ccards ', async ({ }) => {
    test.slow();
  const playwrightDev = new Insightcenter(page);
  await playwrightDev.InsightCenter_Policy_TeamCompliance_Card();
  await playwrightDev.InsightCenter_Policy_ExceptionToExpire_Card();
  
  });

  test('Insigh Center_List view ', async ({ }) => {
    test.slow();
  const playwrightDev = new Insightcenter(page);
  await playwrightDev.InsightCenter_List_View();
  
  });