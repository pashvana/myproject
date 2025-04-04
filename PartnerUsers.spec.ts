import { test, expect } from '@playwright/test';
import { powersuit_Login_page } from "../../pages/XMO/PowerSuite_Login_page";
import { PartnerUser_page } from '../../pages/XMO/PartnerUser_page';
test.describe.configure({ mode: 'serial' });
 let page
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });
  test('PowerSuite login with Unifysquare account',{tag:'@Regression'}, async ({  }) => {
    test.slow();
    const playwrightDev = new powersuit_Login_page(page);
    await playwrightDev.PowerSuite_Login_Unifysquare_Account();
  });
  test('Navigate to Unisys-Demo Tenant ',{
    tag: '@Regression'
  }, async ({ }) => {
    test.slow();
  const playwrightDev = new powersuit_Login_page(page);
  await playwrightDev.Switch_To_Unisys_demo_Tenant();
  
    });
    test('Navigate to Partner Users dashboard',{tag:'@Regression'},async ({  }) => {
        test.slow();
        const playwrightDev = new PartnerUser_page(page);
        await playwrightDev.Navigate_To_Partner_Users_Page();
        
      });
      test('Verify search User from Partners dashboard',{tag:'@Regression'}, async ({  }) => {
        test.slow();
        const playwrightDev = new PartnerUser_page(page);
        await playwrightDev.verify_search_partner();
      });
      test('Select Partner And Add User', async ({  }) => {
        test.slow();
        const playwrightDev = new PartnerUser_page(page);
        await playwrightDev.Select_Partner_To_Add_User();
        
      });
      test('Verify Created User and Delete the User from Partners dashboard', async ({  }) => {
        test.slow();
        const playwrightDev = new PartnerUser_page(page);
        await playwrightDev.Verify_Created_User_From_List();
      });
     