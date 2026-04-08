import {test} from "@playwright/test"
import path from "path"


test('Upload the file using input tag with type=file attribute',async({page})=>{

 await page.goto('https://www.leafground.com/file.xhtml')  


 const fDown=page.waitForEvent('download')  //create the listener

 await page.locator('//span[text()="Download"]').click()  //click action to trigger the download

 const fileDownload=await fDown  //resolve the promise

 // Relative path to download the file

 await fileDownload.saveAs(`data/fileDownload.suggestedFilename()`)  //download file and save in suggested filename
 await fileDownload.saveAs(`data/MarPW.png`)  //download file in user defined filename 




})