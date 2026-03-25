import {test} from "@playwright/test"
test('Login leaftaps using nth method', async({page})=>{

await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('input').fill('demosalesmanager')
//await page.locator('input').nth(0).fill('demosalesmanager')
await page.locator('input').fill('crmsfa')
//await page.locator('input').nth(2).click()
await page.locator('input').last().click()
await page.locator('text=CRM/SFA').click()




})