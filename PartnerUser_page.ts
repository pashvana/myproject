import { expect, Locator, Page, selectors, } from '@playwright/test';



export class PartnerUser_page {
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
        this.Partnerusers = page.locator('//a[contains(normalize-space(), "Partner Users")]');
        this.PartnerusersNew = page.locator('//a[contains(normalize-space(), "Partner Users (New)")]');
        this.partnerdropdwon = page.locator('[ng-model="selectedPartner"]'); 
        this.AddUser = page.locator("//span[contains(text(),'Add User...')]"); 
        this.SaveUser = page.locator('//span[contains(text(),"Save")]'); 
        this.DeleteUser = page.locator('//span[contains(text(),"Delete User")]'); 
        this.UserEmail = page.locator('//input[@name="username"]'); 
        this.ListOfUsers = page.locator('//ul[@class="list list-hover p-l-10"]//li'); 
        this.serviceowner = page.locator("//span[contains(text(),'Service Owner')]");
        this.alertmessage = page.locator("//div[@class='gritter-text m-l-30 m-t-5']");
        this.serachinput = page.locator("//input[@class='form-control']");
 

     }
   async Navigate_To_Partner_Users_Page(){
    await this.selectdashboard.click();
    await this.Partnerusers.first().click();
   }

   async Select_Partner_To_Add_User(){
    await this.partnerdropdwon.selectOption({label:"chris was hereasdfdsasdf"});
    //click on Add user
    await this.AddUser.click();
    await this.UserEmail.fill("shaikh@unifysquare11.com");
    await this.SaveUser.click();
    await new Promise(f => setTimeout(f, 2000));
   }
   async Verify_Created_User_From_List(){
    await new Promise(f => setTimeout(f, 12000));
    const numberofusers = await this.ListOfUsers.count();
    console.log("Count Of users in the Partner User are:"+numberofusers);
    //expect.soft(this.ListOfUsers.last().textContent()).toEqual('shaikh@unifysquare11.com')
    await this.serviceowner.click();
    await new Promise(f => setTimeout(f, 2000));
    const messagetext = await this.alertmessage.textContent();
    console.log("Assigned role for user is :"+messagetext);

    //Un Assign the role to the user
    await this.serviceowner.click();
    await new Promise(f => setTimeout(f, 2000));
    const messagetext1 = await this.alertmessage.nth(1).textContent();
    console.log("Assigned role for user is :"+messagetext1);

    await this.DeleteUser.nth(0).click({force:true});
    await this.DeleteUser.nth(1).click();
    await new Promise(f => setTimeout(f, 3000));
    const messagetext2 = await this.alertmessage.nth(1).textContent();
    console.log("Action Taken for user is :"+messagetext2);
    
   }

   async verify_search_partner(){
    await new Promise(f => setTimeout(f, 12000));
    await this.page.locator('[title="#partner partner"]').click();
    await this.serachinput.fill("fgfar");
    await new Promise(f => setTimeout(f, 2000));
    await this.page.locator("//ul[@role='menu']").click();
   // await new Promise(() => {});
   }
}