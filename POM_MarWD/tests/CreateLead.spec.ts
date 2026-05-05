import {test} from "@playwright/test"
import { LoginPage } from "./Pages/loginPage"
import { ViewLeadPage } from "./Pages/viewLeadPage"

test('Create Lead using POM', async({page})=>{

let vp=new ViewLeadPage(page)
await vp.LoadUrl("https://leaftaps.com/opentaps/control/main")
await vp.EnterCredentials("democsr2","crmsfa")
await vp.ClickonLogin()
//await vp.CloseBrowser()
await vp.ClickonCRMSFA()
await vp.ClickonLeads()
await vp.ClickoncreateLeadTab()
await vp.EnterMandatorydata()
await vp.ClickonCreateLeadButton()
await vp.verifyLead()

})