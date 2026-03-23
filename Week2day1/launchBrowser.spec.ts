/* Browser
Browsercontext ->window (invidual isolated profile + incognito window//Store any data)
page 

 
/* const browser = chromium.launch()
const context = browser.newContext()
const page = context.newPage() */


import { test,chromium} from '@playwright/test'

test('Launch the browser', async()=>{
 const browser=await chromium.launch({channel:"msedge"})
 const context=await browser.newContext()
 const page= await context.newPage()
 await page.goto("http://leaftaps.com/opentaps/control/main")
 await page.waitForTimeout(5000)
 

})