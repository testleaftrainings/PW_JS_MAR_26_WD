import {devices, test} from "@playwright/test"

test.use({
    ...devices['iPhone 12 Pro']
})

test('Device emulation', async({page})=>{
await page.goto('https://www.amazon.in/')
await page.waitForTimeout(2000)

})