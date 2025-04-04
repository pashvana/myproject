import { test, expect,Page } from '@playwright/test';
import { Reportingservice_page} from "../../pages/XMO/Reportingservice_page";
import { request } from 'http';
test.describe.configure({ mode: 'serial' });
 let page: Page
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.skip('Powersuite login  ', async ({ }) => {
    test.slow();
  const playwrightDev = new Reportingservice_page(page)
  await playwrightDev.PowerSuite_Login();
  });
  test('PowerSuite login with Unifysquare account',{
    tag: '@fast',
  }, async ({}) => {
    test.slow();
    const playwrightDev = new Reportingservice_page(page);
    await playwrightDev.PowerSuite_Login_Unifysquare_Account();
  });
  test('Navigate to Unisys-Demo Tenant ',{
    tag: '@fast',
  }, async ({ }) => {
    test.slow();
  const playwrightDev = new Reportingservice_page(page);
  await playwrightDev.Switch_To_Unisys_demo_Tenant();
  
    });
  test('Get Bearer token to Authenticate API',async({}) =>{
test.slow()

const playwrightDev = new Reportingservice_page(page);
await playwrightDev.getbearertoken();
  
});
test('API Call Reporting Service voice Quality',async({request}) =>{
    test.slow()
    
    const playwrightDev = new Reportingservice_page(page);
    await playwrightDev.API_Call_To_ReportingService({request});
      
    });
  test('API Call Reporting Service Usage And Adoption',async({request}) =>{
      test.slow()
      const playwrightDev = new Reportingservice_page(page);
      await playwrightDev.API_Call_To_ReportingService_UsageAndAdaption({request});
  });
  test('API Call Reporting Service User Attribute',async({request}) =>{
    test.slow()
    const playwrightDev = new Reportingservice_page(page);
    await playwrightDev.API_Call_To_ReportingService_UserAttribute({request});
});
test('API Call Reporting Service Site Controller',async({request}) =>{
  test.slow()
  const playwrightDev = new Reportingservice_page(page);
  await playwrightDev.API_Call_To_ReportingService_SiteController({request});
});

test('API Call Reporting Service MDX Controller',async({request}) =>{
  test.slow()
  const playwrightDev = new Reportingservice_page(page);
  await playwrightDev.API_Call_To_ReportingService_MDX_Query({request});
});