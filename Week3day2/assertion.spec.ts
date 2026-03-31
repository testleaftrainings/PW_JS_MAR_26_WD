import {test,expect} from '@playwright/test'
test('learn assertions',async({page})=>{

await page.goto('https://www.leafground.com/input.xhtml')

/* //hard assertion
await expect(page.getByPlaceholder("Babu Manickam")).toBeDisabled({timeout:10000})
console.log("Disabled assertion is passed"); */


//soft assertion
// await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled()
// console.log("Disabled assertion is passed");


//Non retry assertion
let titlevalue='Input components'
let expecetedtitle=await page.title()
console.log(expecetedtitle);

expect.soft(expecetedtitle).toBe(titlevalue)
console.log("title is verified");


    
})