import { test, expect } from '@playwright/test';
import { powersuit_Login_page } from "../../pages/XMO/PowerSuite_Login_page";
import { TrackingDashboard_page } from '../../pages/XMO/TrackingDashboard_page';
test.describe.configure({ mode: 'serial' });
 let page
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });
  test('PowerSuite login with Unifysquare account', async ({  }) => {
    test.slow();
    const playwrightDev = new powersuit_Login_page(page);
    await playwrightDev.PowerSuite_Login_Unifysquare_Account();
  });
  test('Navigate to Tracking Dashboard Page', async ({  }) => {
    test.slow();
    const playwrightDev = new TrackingDashboard_page(page);
    await playwrightDev.Navigate_To_Tracking_Dashboard();
  });
  test.skip('Switch to Unifysquare Tenant', async ({  }) => {
    test.slow();
    const playwrightDev = new TrackingDashboard_page(page);
    await playwrightDev.Navigate_To_Unifysquare_Tenant();
  });
  test('Navigate to Unisys-Demo Tenant ',{
    tag: '@Regression'
  }, async ({ }) => {
    test.slow();
  const playwrightDev = new powersuit_Login_page(page);
  await playwrightDev.Switch_To_Unisys_demo_Tenant();
  
    });
    test('Tracking Dashboard Select Group Action',async({}) =>{
      test.slow();
      const playwrightDev = new TrackingDashboard_page(page);
      await playwrightDev.Tracking_Dashboard_Select_group_Action();
    })
    //Skip below test for unisys-demo tenant and run the below test for unifuquare tenant
  test.skip('Tracking Dashboard Time Period Actions & API Response verification', async ({  }) => {
    test.slow();
    const playwrightDev = new TrackingDashboard_page(page);
    await playwrightDev.Tracking_Dashboard_TimePeriod_Actions();
  });
  test('Tracking Dashboard Filter Actions &  verification', async ({  }) => {
    test.slow();
    const playwrightDev = new TrackingDashboard_page(page);
    await playwrightDev.Tracking_Dashboard_Filter_Functionality();
  });
  test('Tracking Dashboard Widget close & Restore', async ({  }) => {
    test.slow();
    const playwrightDev = new TrackingDashboard_page(page);
    await playwrightDev.Widget_Close_and_restore();
    
  });
  test('Tracking Dashboard Help Desk Page Navigation', async ({  }) => {
    test.slow();
    const playwrightDev = new TrackingDashboard_page(page);
     await playwrightDev.verify_Helpdesk_page_Navigation();
  });