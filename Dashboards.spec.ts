
import { test, expect, Page } from '@playwright/test';
import { powersuit_Login_page } from "../../pages/XMO/PowerSuite_Login_page";
import { Opsdashboard_page } from "../../pages/XMO/Opsdashboard_page";
import { ServiceHealth_page } from '../../pages/XMO/ServiceHealth_page';

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
  test('Operations Dashboard Page ', async ({ }) => {
    test.slow();
  const playwrightDev = new Opsdashboard_page(page);
  await playwrightDev.Operations_Dashboard_Page();
 
  
  })
  test.skip('Org_Filter_Dropdown_Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new ServiceHealth_page(page); 
    await playwrightDev.OrgFilter_Functionality();
    
    
  });
  test('Tag_Filter__Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new ServiceHealth_page(page); 
    await playwrightDev.Tag_Filter_Functionality();
    
  });