/* const browser = chromium.launch()
const context = browser.newContext()
const page = context.newPage() */


import { test} from '@playwright/test'

test.only('Launch the browser', async({page})=>{


 /* const browser=await chromium.launch({channel:"msedge"})
 const context=await browser.newContext()
 const page= await context.newPage() */

 await page.goto("https://www.facebook.com/")
 await page.waitForLoadState('domcontentloaded')
 const title= await page.title()
 console.log(title);
 const url=page.url()
 console.log(url);
 await page.waitForTimeout(5000)
 })