import {test,expect} from "@playwright/test"

test('learn to handle frames',async({page})=>{

await page.goto('https://www.leafground.com/frame.xhtml')


//single frame
const frameref=page.frame({url:'https://www.leafground.com/default.xhtml'})
await frameref?.locator('#Click').click()



//nested frame-> page.frame({name:'frame2'}).locator('#Click).click()
const frameref1=page.frame({name:"frame2"})
await frameref1?.locator('#Click').click()


})