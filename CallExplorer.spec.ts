import { test, expect } from '@playwright/test';
import { powersuit_Login_page } from "../../pages/XMO/PowerSuite_Login_page";
import { CallExplorer_page } from '../../pages/XMO/CallExplorer_page';
test.describe.configure({ mode: 'serial' });
 let page
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });
  test('PowerSuite login with Unifysquare account',{tag:'@preview'}, async ({}) => {
    test.slow();
    const playwrightDev = new powersuit_Login_page(page);
    await playwrightDev.PowerSuite_Login_Unifysquare_Account();
  });
//Un skip below test when running on DEV env
  test('Switch to Unifysquare Tenant',{tag:'@Regression'}, async ({  }) => {
    test.slow();
    const playwrightDev = new powersuit_Login_page(page);;
    await playwrightDev.Switch_To_Unisys_demo_Tenant();
  });
//Un comment below test when running on prod
  test.skip('Switch to Unisys Tenant',{tag:'@Regression'}, async ({  }) => {
    test.slow();
    const playwrightDev = new powersuit_Login_page(page);;
    await playwrightDev.Switch_To_Unisys_Tenant();
  });
  test('Navigate to Call Explorer Dashboard Page',{tag:'@preview'}, async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Navigate_To_CallExplorer_Dashboard();
  });
  test('Search For Report in Explorer Dashboard Page',{tag:'@preview'}, async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Search_For_Report();
  });
  test('Verify Event Graph and Last Date', {tag:'@preview'},async ({  }) => {
        test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Verify_Event_Graph_And_LastDate();
  });
  test('Verify Download data as CSV',{tag:'@preview'}, async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Download_CSV_Data_To_verify();
  });
  test('Verify Export Data JOb', async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Verify_Export_Job();
  });

  test('Open Call Failure Query Page', async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Call_Failure_Query();
  });
  test('Open Echo Query Page', async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Echo_Query();
  });
  test('Open Video Query Page', async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Video_Query();
  });
  test('Verify Audio Conference Query Page From Report Catgory Button', async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Audio_Conferences_Query();
  });
  test('Verify Event Graph and Last Date For Audio Conference Page', async ({  }) => {
    test.slow();
const playwrightDev = new CallExplorer_page(page);
await playwrightDev.Verify_Event_Graph_And_LastDate();
});
  test('Verify Download data as CSV For Audio Conference Page',async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Download_CSV_Data_To_verify();
  });
  test('Verify Export Data JOb CSV For Audio Conference Page ', async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Verify_Export_Job();
  });
  test('Open Custom Query -Multiple phone numbers', {tag:'@Regression'},async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Multiple_Users_with_Custom_Query();
  });
  test('Verify Event Graph and Last Date For Custom Query -Multiple phone numbers Page', async ({  }) => {
    test.slow();
const playwrightDev = new CallExplorer_page(page);
await playwrightDev.Verify_Event_Graph_And_LastDate_Filter();
});
  test('Verify Download data as CSV For Custom Query -Multiple phone numbers Page',async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Download_CSV_Data_To_verify();
  });
  test('Verify Export Data JOb CSV For Custom Query -Multiple phone numbers Page ', async ({  }) => {
    test.slow();
    const playwrightDev = new CallExplorer_page(page);
    await playwrightDev.Verify_Export_Job();
  });