
/* 40.6971914,-74.3098577 */

import {test} from "@playwright/test"


test.use({

    geolocation:{latitude:40.6971914,longitude:-74.3098577},
    permissions:['geolocation',"notifications"]
})

test(' Geolocation mocking', async({page})=>{

await page.goto('https://www.google.com/maps')
await page.locator('.sVuEFc').first().click()
await page.waitForTimeout(5000)


})