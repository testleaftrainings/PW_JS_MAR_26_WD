import {test} from "@playwright/test"

test.use({
    storageState:'data/leafTaps.json'
})
test('skip the login using storageState', async({page}) => {

await page.goto('https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL76518943727')
await page.locator('//a[text()="Leads"]').click()
await page.waitForTimeout(3000)

})