import {test} from '@playwright/test';
test('learn playwright locators', async({page})=>{

    await page.goto('https://login.salesforce.com/')
    //await page.getByRole('textbox',{name:'Username',exact:true}).fill('dilipkumar.rajendran@testleaf.com')
    await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com')
    await page.getByText('Password',{exact:true}).first().fill('TestLeaf@2025')
    await page.getByRole('button',{name:"Log In",exact:true}).click()
    //await page.getByAltText("Salesforce login").click()
    await page.waitForTimeout(2000)
    await page.getByTitle("App Launcher",{exact:true}).click()
    await page.getByPlaceholder('Search apps and items...',{exact:true}).fill('leads')
    //await page.getByTestId('MOBHKGAPDXGWGVMC').click()
   


})