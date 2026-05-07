import {test,expect} from "@playwright/test"

test("Visual regression", async({page})=>{

await page.goto("https://www.google.com/")
let snapshot=await page.screenshot({path:"g1.png"})
expect(snapshot).toMatchSnapshot("g1.png")

})


test.only("Visual regression for leafTaps", async({page})=>{

await page.goto("https://leaftaps.com/opentaps/control/main")
let snapshot=await page.screenshot({path:"lf.png"})
expect(snapshot).toMatchSnapshot("lf.png")

})