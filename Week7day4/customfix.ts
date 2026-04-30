import {test as base,Page} from "@playwright/test"


//test=customFixture, page=salesForceLogin

export const customFixture=base.extend<{salesForceLogin:any}>({

salesForceLogin:async({page}:{page:Page},use:(page:Page)=>any)=>{

    await page.goto("https://login.salesforce.com/")
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    await page.waitForTimeout(5000)
    await use(page)

}

})