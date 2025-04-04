import { test, expect } from '@playwright/test';
import { powersuit_Login_page } from "../../pages/XMO/PowerSuite_Login_page";
import { Executivedashboard_page } from '../../pages/XMO/Executicedashboard_page';
import config from 'C:/Users/HussaiS2/PlaywrightAutomation/playwright.config';
/*
import dotenv from "dotenv"
require('dotenv').config();
dotenv.config({
    path: `C:/Users/HussaiS2/PlaywrightAutomation/src/tests/utils/.env.${process.env.TEST_ENV}`,
    override : true
    
}) */

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
  test('Navigate to Executive Dashboard', async ({  }) => {
    test.slow();
    const playwrightDev = new Executivedashboard_page(page);
    await playwrightDev.Navigate_To_Executive_Dashboard_Page();
    await playwrightDev.Navigate_To_UnisysDemo_Tenant();
    
  });
  
  test('Executive Dashboard widgets Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new Executivedashboard_page(page);
    await playwrightDev.Executive_Dashboard_Page();
    
  });
  test('Executive Dashboard Remove All Widgets Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new Executivedashboard_page(page);
    await playwrightDev.Executive_Dashboard_Remove_widgets_Page();
  });
  test('Verify_Widget_Having_Data', async ({  }) => {
    test.slow();
    const playwrightDev = new Executivedashboard_page(page); 
    await playwrightDev.verify_widget_data();
       
  });
  test('Add all widgets', async ({  }) => {
    test.slow();
    const playwrightDev = new Executivedashboard_page(page); 
    await playwrightDev.Add_all_widgets_From_Adaption();
       
  });
 
  test('Org_Filter_Dropdown_Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new Executivedashboard_page(page); 
    await playwrightDev.OrgFilter_Functionality();
       
  });