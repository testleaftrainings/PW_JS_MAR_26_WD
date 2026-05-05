import { WelcomePage } from "./welcomePage";


export class HomePage extends WelcomePage{


    async ClickonLeads(){
    await this.page.locator('//a[text()="Leads"]').click()

    }

    async ClickonContacts(){

    await this.page.locator('//a[text()="Contacts"]').click()


    }

    async ClickonAccounts(){
     await this.page.locator('//a[text()="Accounts"]').click()

    }
    
}