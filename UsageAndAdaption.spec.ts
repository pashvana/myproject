import { test, expect } from '@playwright/test';
import { powersuit_Login_page } from "../../pages/XMO/PowerSuite_Login_page";
import { UsageandAdaption_page } from '../../pages/XMO/UsageAndAdaption.page';

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
  test('Navigate to Usage and Adoption Dashboard', async ({  }) => {
    test.slow();
    const playwrightDev = new UsageandAdaption_page(page);
    await playwrightDev.Navigate_To_Usage_And_Adaption_Page();
    
  });
  
  test('Usage and Adoption Dashboard widgets Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new UsageandAdaption_page(page);
    await playwrightDev.Usage_And_Adaption_Dashboard_Page();
    
  });
  test('Usage and Adoption Dashboard Remove All Widgets Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new UsageandAdaption_page(page);
    await playwrightDev.Usage_And_Adaption_Remove_widgets_Page();
  });
  test('Usage and Adoption Org_Filter_Dropdown_Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new UsageandAdaption_page(page); 
    await playwrightDev.OrgFilter_Functionality();
       
  });
  test('Verify_Widget_Having_Data', async ({  }) => {
    test.slow();
    const playwrightDev = new UsageandAdaption_page(page); 
    await playwrightDev.verify_widget_data();
       
  });