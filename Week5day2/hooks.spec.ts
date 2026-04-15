
import {test} from "@playwright/test"
import {parse} from "csv-parse/sync"
import path from 'path'
import fs from 'fs'

//Relative path

let value:any[]

test.describe.serial("runs the testcase in serial mode", async()=>{


test.beforeAll('data connectivity',async()=>{
console.log("Runs beforeAll");
value=parse(fs.readFileSync("data/logindata.csv"),{columns:true, skip_empty_lines:true})
})



test.beforeEach('login functionality', async({page})=>{
    console.log("Runs before Each test");
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill(value[1].Username)
    await page.locator('input[id="password"]').fill(value[1].Password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()
 
})


test('click on Lead module', async({page})=>{
console.log("click on the leads button");
await page.locator('//a[text()="Leads"]').click()

})

test('click on Accounts module', async({page})=>{
    console.log("click on the Accounts button");
    await page.locator('//a[text()="Accounts"]').click()

})


test.afterEach('print the status and title of test', async({},testinfo)=>{
console.log("Runs after each test");

    console.log(testinfo.status)
    console.log(testinfo.title);
    
})


test.afterAll(' teardown and final report', async()=>{
console.log("Runs after all the test");
    
})

})
