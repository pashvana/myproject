import { test, expect } from '@playwright/test';
import { powersuit_Login_page } from "../../pages/XMO/PowerSuite_Login_page";
import { ServiceHealth_page } from '../../pages/XMO/ServiceHealth_page';
import { ServiceHealth_New_page } from '../../pages/XMO/ServiceHealthNew_page';
import { Executivedashboard_page } from '../../pages/XMO/Executicedashboard_page';
import { ServiceHealth_Validation_page } from '../../pages/XMO/ServiceHealtValidation_page';

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
  //Below metho is used to run Akshay scripts
  test.skip('UI Loading Functionality', async ({  }) => {
      test.slow();
      const playwrightDev = new ServiceHealth_page(page);
      await playwrightDev.UILoadedsuccessfully();
      
      });
      test('Navigate To Service Health  New Page ', async ({ }) => {
        test.slow();
      const playwrightDev = new ServiceHealth_New_page(page);
      await playwrightDev.Navigate_To_ServiceHealth_New_Page();
      
        });
        test('Navigate to Unisys-Demo Tenant ', async ({ }) => {
            test.slow();
          const playwrightDev = new ServiceHealth_page(page);
          await playwrightDev.Switch_To_Unisys_Demo_Tenant();
          
            });
            
      
       
  test.skip('Geo Heirarchy Drop Down Functionality', async ({  }) => {
      test.slow();
      const playwrightDev = new ServiceHealth_New_page(page); 
      await playwrightDev.Geo_Heirarchy_Dropdown_Functionality();
    });
    
   // await playwrightDev.Platform_Dropdown_Functionality();
  
   
   test('Service Health Poor Calls-Audio week datapoints Validation Page ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_New_page(page);
  await playwrightDev.ServiceHealth_Poorcalls_Audio_Week_Validation(); 
  });
  
  test('Service Health Poor Calls-Video week datapoints Validation Page ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_New_page(page);
  await playwrightDev.ServiceHealth_Poorcalls_Video_Week_Validation();
  
  });
  test('Service Health Poor Calls-App Sharing week datapoints Validation Page ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_New_page(page);
   await playwrightDev.ServiceHealth_Poorcalls_AppSharing_Week_Validation();
  });
  test('Service Health Poor Calls-Audio Month datapoints Validation Page ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_New_page(page);
  await playwrightDev.ServiceHealth_Poorcalls_Audio_Month_Validation(); 
  await playwrightDev.ServiceHealth_Poorcalls_Video_Month_Validation();
  await playwrightDev.ServiceHealth_Poorcalls_AppSharing_Month_Validation();
  });
  test('Service Health Poor Calls-UI Validation Page ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_New_page(page);
  await playwrightDev.ServiceHealth_Call_Scenarios_UI(); 
  
  });
  test('Organization Filter Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new ServiceHealth_New_page(page); 
    await playwrightDev.OrgFilter_Functionality();
  });
  test.skip('Service Health New Page Actions', async ({ }) => {
    test.slow();
  const playwrightDev = new ServiceHealth_New_page(page);
  await playwrightDev.ServiceHealth_New_Page_Actions();
  
    });
  test('Service Health Poor Calls-UI Page Redirection ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_New_page(page);
   await playwrightDev.ServiceHealth_Call_Scenarios_page_Redirection();
  });
  test.skip('Service Health Validation Page ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_Validation_page(page);
  await playwrightDev.ServiceHealth_Validation_Page({request});
  
  });
 
