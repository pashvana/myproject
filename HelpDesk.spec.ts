import { test, expect, Page } from '@playwright/test';
import { powersuit_Login_page } from "../../pages/XMO/PowerSuite_Login_page";
import { HelpDesk_page } from '../../pages/XMO/HelpDesk_page';

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
  test('Navigate to Unisys-Demo Tenant ',{
    tag: '@Regression',
  }, async ({ }) => {
    test.slow();
  const playwrightDev = new powersuit_Login_page(page);
  await playwrightDev.Switch_To_Unisys_demo_Tenant();
  
    });
    test('Navigate to Help desk dashboard', async ({  }) => {
        test.slow();
        const playwrightDev = new HelpDesk_page(page);
        await playwrightDev.Navigate_To_HelpDesk_Dashboard();
      });
    test('Help Desk Search and user list functionality', async ({  }) => {
        test.slow();
        const playwrightDev = new HelpDesk_page(page);
        await playwrightDev.Serach_User_Combinations();
      });
      test('Help User call Summary details functionality', async ({  }) => {
        test.slow();
        const playwrightDev = new HelpDesk_page(page);
        await playwrightDev.Verify_Call_summary_Tab_Data();
      });
      test('Help User call Summary Export Option', async ({  }) => {
        test.slow();
        const playwrightDev = new HelpDesk_page(page);
        await playwrightDev.Verify_Export_option();
      });
      test('Verify Table sort options', async ({  }) => {
        test.slow();
        const playwrightDev = new HelpDesk_page(page);
      await playwrightDev.verify_sort_table_Conference_Users();
      });
      test('Verify Table sort options for conference details table', async ({  }) => {
        test.slow();
        const playwrightDev = new HelpDesk_page(page);
      await playwrightDev.Verify_Sort_Conference_details();
      });
      test('Help User Conference Details Export Option', async ({  }) => {
        test.slow();
        const playwrightDev = new HelpDesk_page(page);
        await playwrightDev.Verify_Export_option_Conference_Details();
      });