import { test, expect, Page } from '@playwright/test';
import { powersuit_Login_page } from "../../pages/XMO/PowerSuite_Login_page";
import { MonitoringDashboard_page } from '../../pages/XMO/MonitoringDashboard_page';
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
  test.skip('Navigate to Unisy-Demo Tenant', async ({  }) => {
    test.slow();
    const playwrightDev = new MonitoringDashboard_page(page);
    await playwrightDev.Navigate_To_UnisysDemo_Tenant();
  });
  test('Navigate to Monitoring Dashboard', async ({  }) => {
    test.slow();
    const playwrightDev = new MonitoringDashboard_page(page);
    await playwrightDev.Navigate_To_Monitoring_Dashboard_Page();
  });
  test('Monitoring Dashboard Widgets Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new MonitoringDashboard_page(page);
    await playwrightDev.Monitoring_Dashboard_Page();
  });
  test('Monitoring Dashboard Remove All Widgets Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new MonitoringDashboard_page(page);
    await playwrightDev.Monitoring_Dashboard_Remove_widgets_Page();
  });
  test('Monitoring Dashboard Widgets settins Filter Functionality', async ({  }) => {
    test.slow();
    const playwrightDev = new MonitoringDashboard_page(page);
    await playwrightDev.Monitoring_Dashboard_add_search_widget_();
  }); 