import { test, expect,Page } from '@playwright/test';
import { powersuit_Login_page } from "../../pages/XMO/PowerSuite_Login_page";
import { ServiceHealth_page } from '../../pages/XMO/ServiceHealth_page';
  

test.describe.configure({ mode: 'serial' });
 let page
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.skip('Powersuite login  ', async ({ }) => {
    test.slow();
  const playwrightDev = new powersuit_Login_page(page);
  await playwrightDev.PowerSuite_Login();
  });
  test('PowerSuite login with Unifysquare account',{
    tag: '@fast',
  }, async ({}) => {
    test.slow();
    const playwrightDev = new powersuit_Login_page(page);
    await playwrightDev.PowerSuite_Login_Unifysquare_Account();
  });
  test('Navigate to Unisys-Demo Tenant ',{
    tag: '@fast',
  }, async ({ }) => {
    test.slow();
  const playwrightDev = new ServiceHealth_page(page);
  await playwrightDev.Switch_To_Unisys_Demo_Tenant();
  
    });
    test('Verify Show Historical Comparision',async({}) => {
      test.slow();
      const playwrightDev = new ServiceHealth_page(page);
      await playwrightDev.Show_Historical_Comparision_Of_All_Scenarios();
    });
    test.skip('Navigate to UnifySquare-Nestlé Tenant ',{
      tag: '@fast',
    }, async ({}) => {
      test.slow();
    const playwrightDev = new powersuit_Login_page(page);
    await playwrightDev.Switch_To_UnifySquare_Nestlé_Tenant();
    
      });
  //Below metho is used to run Akshay scripts
  test('UI Loading Functionality-All buttons/Link visible', async ({  }) => {
      test.slow();
      const playwrightDev = new ServiceHealth_page(page);
      await playwrightDev.UILoadedsuccessfully();
      
      });
     
   test('Platform Drop Down Functionality', async ({  }) => {
      test.slow();
      const playwrightDev = new ServiceHealth_page(page); 
      await playwrightDev.Platform_Dropdown_Functionality();
    });
    //As there is no Geo filter skipping this test if needed plese use from service health new Dashboard
  
 
   test('Microsoft_Teams_Modalities_Dropdown_Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new ServiceHealth_page(page); 
    await playwrightDev.Microsoft_Teams_Modalities_Dropdown_Functionality();
  });
  test('Microsoft_Teams_Time_Granularity_Functionality', async ({  }) => {
      test.slow();
      const playwrightDev = new ServiceHealth_page(page); 
    await playwrightDev.Microsoft_Teams_Time_Granularity_Functionality();
  });
  test('Service Health Poor Calls-Audio Days datapoints Validation Page ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_page(page);
  await playwrightDev.ServiceHealth_Poorcalls_Audio_Validation(); 
  });
  test('Service Health Poor Calls(Audio) Callscenario & Breakdown &Navigation to Operations Dashbord ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_page(page);
  await playwrightDev.Verify_OperationsDashboard_Navigation_PoorCalls_Audio(); 
  });

  test('Service Health Poor Calls-Video Days datapoints Validation Page ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_page(page);
   await playwrightDev.ServiceHealth_Poorcalls_Video_Validation();
   });
   test('Service Health Poor Calls(Video) Callscenario & Breakdown &Navigation to Operations Dashbord ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_page(page);
  await playwrightDev.Verify_OperationsDashboard_Navigation_PoorCalls_Video(); 
  });
  test('Service Health Poor Calls-App Sharing Days datapoints Validation Page ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_page(page);
    await playwrightDev.ServiceHealth_Poorcalls_AppSharing_Validation();
  });
  test('Service Health Poor Calls(AppSharing) Callscenario & Breakdown &Navigation to Operations Dashbord ', async ({request}) => {
    test.slow();
  const playwrightDev = new ServiceHealth_page(page);
  await playwrightDev.Verify_OperationsDashboard_Navigation_PoorCalls_AppSharing(); 
  });
  test.skip('Service Health Poor Calls(App Sharing) Comments delete and add functionality ',{
    tag: '@fast',
  }, async ({request}) => {
    
    test.slow();
 
  const playwrightDev = new ServiceHealth_page(page);
  await playwrightDev.Add_And_Delete_Commets(); 
  });

  //below are test which are removed rom UI no need to run
  test.skip('Geo Heirarchy Drop Down1 Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new ServiceHealth_page(page); 
    await playwrightDev.Geo_Heirarchy_Dropdown_Functionality();});
 // await playwrightDev.Platform_Dropdown_Functionality();
 
