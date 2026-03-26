import {test} from "@playwright/test"

test('create lead using salesforce application', async ({page}) => {

await page.goto('https://login.salesforce.com/')
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
await page.locator('#password').fill('TestLeaf@2025')
await page.click('#Login')
await page.click('//span[text()="Leads"]')
await page.click('//div[@title="New"]')
await page.locator('//button[@name="salutation"]').click()
await page.locator('//span[text()="Mrs."]').click()
    
})