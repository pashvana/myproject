import { expect, FrameLocator, Locator, Page, selectors } from '@playwright/test';
import { times } from 'lodash';
export class Opsdashboard_page {
    readonly page: Page;
    readonly selectdashboard: Locator;
    readonly opsdashboard: Locator;
    readonly platforms :Locator;
    readonly WIS: Locator;
    readonly SS :Locator;
    readonly WLIS :Locator
    readonly falttable :Locator;
    readonly search :Locator;
    readonly verifysearc :Locator;
    dropdownpopup: Locator;
    Exportdata: Locator;

constructor(page: Page) {
    this.page = page;
    this.selectdashboard = page.locator('[ng-if="selectedDashboard"]');
    this.opsdashboard = page.locator('//a[contains(normalize-space(), "Operations Dashboard")]');
    this.platforms = page.locator('[class="right-separator nav-item"]');
    this.WIS = page.locator("//span[normalize-space()='Wired Internal to Service']");
    this.SS = page.locator("//span[contains(text(),'Service to Service')]");
    this.WLIS = page.locator("//span[contains(text(),'Wireless Internal to Service')]");
    this.falttable = page.locator('[class="fal fa-table"]');
    this.search = page.locator("[ng-model='poorCallDetails.rawTableNameFilter']");
    this.verifysearc = page.locator("//div[normalize-space()='Unknown-User']");
    this.dropdownpopup = page.locator("//div[@class='panel-heading flex-box']//a[@data-toggle='dropdown']");
    this.Exportdata = page.locator("//a[contains(text(),'Export all data as csv')]")
   

}
async Operations_Dashboard_Page(){
await this.selectdashboard.click();
await this.opsdashboard.click();
await this.WIS.first().click();
const element = this.page.locator('[class="caret"]');
await new Promise(f => setTimeout(f, 1000));
await element.first().click();
await new Promise(f => setTimeout(f, 3000));
await this.WIS.first().click();
//await this.SS.click();
await new Promise(f => setTimeout(f, 2000));
//Selection ALL value from Call scenario
const element1 = this.page.locator("[ng-model='poorCallDetails.selectedCallScenario']");
await element1.selectOption({label:"All"});
await new Promise(f => setTimeout(f, 2000));
//selectin category type
const category = this.page.locator("[ng-model='poorCallDetails.selectedCategoryEntityType']");
const categoryvalues = await category.allTextContents();
//Printing category values to console
console.log("Category values for ALL  Call scenario are: :" +categoryvalues);
await element1.selectOption({label:"Wired Internal to Service"});
await category.selectOption({label:"Subnet"});//Category selection
const categoryvalues1 = await category.allTextContents();
//Printing category values to console
console.log("Category values for ALL  Call scenario are" +categoryvalues1);
const responseAppSharing = await this.page.waitForResponse((responseAppSharing) => 
responseAppSharing.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/voicequality/"));
await new Promise(f => setTimeout(f, 2000));
await element1.selectOption({label:"Wired External to Service"});
const responseAppSharing1 = await this.page.waitForResponse((responseAppSharing1) => 
responseAppSharing1.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/voicequality/"));
await new Promise(f => setTimeout(f, 2000));
await element1.selectOption({label:"Endpoint to Endpoint"});
const responseAppSharing2 = await this.page.waitForResponse((responseAppSharing2) => 
responseAppSharing2.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/voicequality/"));
await new Promise(f => setTimeout(f, 2000));
await element1.selectOption({label:"Cellular Endpoint to Service"});
const responseAppSharing3 = await this.page.waitForResponse((responseAppSharing3) => 
    responseAppSharing3.url().includes("https://reportingservice-dev.unifysquare.com/api/v1/voicequality/"));
await new Promise(f => setTimeout(f, 2000));
//await element1.selectOption({label:"Web Experience Endpoint to Service"});

//await new Promise(() => {});
//await this.WLIS.click();
//await element.nth(1).click();
//await new Promise(() => {});
//Verify data in flat table view and search option
await this.falttable.click();
await this.dropdownpopup.click();
const downloadPromise = this. page.waitForEvent('download');
 await this.Exportdata.click();
       const download = await downloadPromise;

       // Wait for the download process to complete and save the downloaded file somewhere.
       const file = download.suggestedFilename();
       console.log("The Exported CSV data File"+file)
       await download.saveAs('c://Users//hussais2//Downloads//' + download.suggestedFilename());

await this.search.fill("Unknown-User");
const city = await this.verifysearc.allInnerTexts();
console.log(city)

}}