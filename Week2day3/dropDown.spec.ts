import {test} from "@playwright/test"

test('Handling dropdowns in LeafTaps',async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('//input[@id="username"]').fill('demosalesmanager')
    await page.locator('//input[@id="password"]').fill('crmsfa')
    await page.click('//input[@class="decorativeSubmit"]')
    await page.locator('//a[contains(text(),"CRM")]').click()
    await page.click('//a[text()="Leads"]')
    await page.locator('//a[text()="Create Lead"]').click()
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Testleaf')
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Gauthami')
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('VN')
 /* await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({value:'LEAD_CONFERENCE'})
    await page.waitForTimeout(2000)
    await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({label:'Direct Mail'})
    await page.waitForTimeout(2000)
    await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({index:4}) */
    const dropDown=page.locator('//select[@id="createLeadForm_dataSourceId"]/option') //no of elements=13
    const dropDowncount=await dropDown.count()
    console.log(`no of values in the dropDown is ${dropDowncount}`);
    console.log(await dropDown.nth(0).innerText()) //dropdown value in 1st index -blank
    console.log(await dropDown.nth(1).innerText()) //dropdown value in 1st index-cold call

    for(let index=0;index<dropDowncount;index++){
        console.log(await dropDown.nth(index).innerText());
        
    }

})