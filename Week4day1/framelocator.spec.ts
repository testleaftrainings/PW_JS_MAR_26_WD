import {test} from "@playwright/test"

test('learn to handle frames',async({page})=>{

await page.goto('https://www.leafground.com/frame.xhtml')

//FrameLocator().locator().click()


// single frame
await page.frameLocator('//iframe[@src="default.xhtml"]').locator('#Click').click()


//nested frame-> outer frame->innerframe->locator

await page.frameLocator('//iframe[@src="page.xhtml"]').frameLocator('#frame2').locator('#Click').click()

})