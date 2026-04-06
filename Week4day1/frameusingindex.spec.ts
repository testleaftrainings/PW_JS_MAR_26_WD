import {test} from "@playwright/test"

test('learn to handle frames using index',async({page})=>{

await page.goto('https://www.leafground.com/frame.xhtml')


const Allframes=page.frames() //[frame0,frame1,frame2,frame3,frame4]
const Noofframes=Allframes.length //mP->0 ,f1->1,f2->2,f3->3,f4->4

console.log(Noofframes);  //no of frames in a page.


//switch to frame with index.

const frame1=Allframes[1]
await frame1.locator('#Click').click()
console.log("frame1 is clicked");



//nested frame->using index we can directly we can switch to the nested frame
const frame4=Allframes[4]
await frame4.locator('#Click').click()
console.log("frame4 is clicked");


})