import {test} from "@playwright/test"
import path from "path"

test('Upload the file using input tag with type=file attribute',async({page})=>{

 await page.goto('https://www.leafground.com/file.xhtml')   

 //relative path for single file upload

  const fileupload1=page.locator('(//input[@type="file"])[1]')
  await fileupload1.setInputFiles('Utils/TestLeaf Logo.png')
  await page.waitForTimeout(2000) 

//Relative path for multipe file upload

  const fileupload2=page.locator('(//input[@type="file"])[2]')
  await fileupload2.setInputFiles(['Utils/TestLeaf Logo.png','Qeagle.png'])
  await page.waitForTimeout(3000)

//Absolute path for single file upload
//path.join(__dirname, `../../Data`, 'file.pdf')

const fileupload3=page.locator('(//input[@type="file"])[1]')
await fileupload3.setInputFiles(path.join(__dirname,'../../../Utils','TestLeaf Logo.png'))
await page.waitForTimeout(3000)

//Absolute path for multiple file upload

const fileupload4=page.locator('(//input[@type="file"])[2]')
await fileupload4.setInputFiles([path.join(__dirname,'../../../Utils','TestLeaf Logo.png'),path.join(__dirname,'../../../Qeagle.png')])
await page.waitForTimeout(3000) 


})




//file upload using Event listener

test.only('Upload the file using event listener with no input tag and type=file',async({page})=>{


await page.goto('https://the-internet.herokuapp.com/upload')

// create the listener

const fload=page.waitForEvent('filechooser') //creating the promise
await page.locator('//div[@id="drag-drop-upload"]').click() //trigger the upload
const fileupload=await fload //resolving the promise
await fileupload.setFiles('Utils/TestLeaf Logo.png') //upload file from the mentioned path

})