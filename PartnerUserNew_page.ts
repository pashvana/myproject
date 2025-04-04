import { expect, Locator, Page, selectors, } from '@playwright/test';
let numberofusers;


export class PartnerUserNew_page {
    readonly page: Page;
    selectdashboard: Locator;
    Partnerusers: Locator;
    partnerdropdwon: Locator;
  AddUser: Locator;
  SaveUser: Locator;
  DeleteUser: Locator;
  UserEmail: Locator;
  ListOfUsers: Locator;
  serviceowner: Locator;
  alertmessage: Locator;
  serachinput: Locator;
  PartnerusersNew: Locator;
  

    constructor(page: Page) {
        this.page = page;
        this.selectdashboard = page.locator('[ng-if="selectedDashboard"]');
        
        this.PartnerusersNew = page.locator('//a[contains(normalize-space(), "Partner Users (New)")]');
        this.partnerdropdwon = page.frameLocator('iframe').locator('[class=" css-1xc3v61-indicatorContainer"]'); 
        this.AddUser = page.frameLocator('iframe').locator("//button[contains(text(),'Add User')]"); 
        this.SaveUser = page.frameLocator('iframe').locator('//button[contains(text(),"Save")]'); 
        this.DeleteUser = page.frameLocator('iframe').locator('//button[contains(text(),"Delete User")]'); 
        this.UserEmail = page.frameLocator('iframe').locator('//input[@data-testid="user-email-input"]'); 
        this.ListOfUsers = page.frameLocator('iframe').locator('//div[@data-testid="user-card"]'); 
        this.serviceowner = page.frameLocator('iframe').locator("//span[contains(text(),'Service Owner')]");
        this.alertmessage = page.locator("//div[@class='gritter-text m-l-30 m-t-5']");
        this.serachinput = page.frameLocator('iframe').locator('//input[@id="react-select-2-input"]');
 

     }
   async Navigate_To_Partner_Users_New_Page(){
    await this.selectdashboard.click();
    await this.PartnerusersNew.first().click();
   }

   async Select_Partner_To_Add_User(){
    await new Promise(f => setTimeout(f, 8000));
    numberofusers = await this.ListOfUsers.count();
    console.log("Count Of users in the Partner before adding User are:"+numberofusers);
    
    //click on Add user
    await this.AddUser.click();
    await this.UserEmail.fill("shaikh@unifysquare11.com");
    await this.SaveUser.click();
    await new Promise(f => setTimeout(f, 2000));
   }
   async Verify_Created_User_From_List(){
    await new Promise(f => setTimeout(f, 12000));
    const numberofusers1 = await this.ListOfUsers.count();
    console.log("Count Of users in the Partner User are:"+numberofusers1);
    expect.soft(numberofusers+1).toEqual(numberofusers1);
   }
   async Assign_Role_To_The_User(){
    
    await this.serviceowner.click();
    await new Promise(f => setTimeout(f, 500));
    const messagetext = await this.alertmessage.textContent();
    console.log("Assigned role for user is :"+messagetext);

    //Un Assign the role to the user
    await this.serviceowner.click();
    await new Promise(f => setTimeout(f, 500));
    const messagetext1 = await this.alertmessage.nth(1).textContent();
    console.log("Assigned role for user is :"+messagetext1);
   }
   async Delete_User_From_Partner() {
   
   await this.DeleteUser.nth(0).click({force:true});
    await this.DeleteUser.nth(0).click();
    await new Promise(f => setTimeout(f, 800));
    const messagetext2 = await this.alertmessage.nth(2).textContent();
    console.log("Action Taken for user is :"+messagetext2);
    
   }

   async verify_search_partner(){
    await new Promise(f => setTimeout(f, 12000));
    //await this.page.locator('[title="#partner partner"]').click();
    await this.serachinput.click();
    await this.serachinput.fill("chris was hereasdfdsasdf");
    await new Promise(f => setTimeout(f, 5000));
    await this.page.frameLocator('iframe').locator('//div[@id="react-select-2-listbox"]').click();
   // await new Promise(() => {});
   }
}