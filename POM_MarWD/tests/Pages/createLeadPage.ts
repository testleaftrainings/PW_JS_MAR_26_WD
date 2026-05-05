import { LeadPage } from "./leadPage";


export class CreateLeadPage extends LeadPage{


    async EnterMandatorydata(){

    await this.page.locator('#createLeadForm_companyName').fill("TCS")
    await this.page.locator('#createLeadForm_firstName').fill("Murali")
    await this.page.locator('#createLeadForm_lastName').fill("Nagaraj")

    }


  async ClickonCreateLeadButton(){

    await this.page.locator('.smallSubmit').click()
  }

}