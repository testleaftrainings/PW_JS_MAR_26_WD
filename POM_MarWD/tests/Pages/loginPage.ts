/// <reference types="node" />
import {chromium,Page} from "@playwright/test"

/* url:https://leaftaps.com/opentaps/control/main
credentials
login */


export class LoginPage{

page:Page

    constructor(page:Page){
    this.page=page

    }


    async LoadUrl(url:string){
   await this.page.goto(url)

    }

    async EnterCredentials(username:string,password:string){

    await this.page.locator("#username").fill(username)
    await this.page.locator("#password").fill(password)
    }


    async ClickonLogin(){

        await this.page.locator('.decorativeSubmit').click()


    }

    /* async CloseBrowser(){

        await this.page.close()
    } */

}
/* 
async function doLogin(){

const browser=await chromium.launch({headless:false})
const context=await browser.newContext()
const page=await context.newPage()



let lp=new LoginPage(page)
await lp.LoadUrl("https://leaftaps.com/opentaps/control/main")
await lp.EnterCredentials("democsr2","crmsfa")
await lp.ClickonLogin()
await lp.CloseBrowser()

}

doLogin() */
