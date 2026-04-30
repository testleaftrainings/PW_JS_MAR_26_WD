import {customFixture} from "./customfix"

customFixture('Click on Accounts', async({salesForceLogin})=>{

const Title=await salesForceLogin.title()
console.log(Title);


await salesForceLogin.locator('//span[text()="Accounts"]').first().click()


})