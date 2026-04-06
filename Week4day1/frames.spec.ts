import {test} from "@playwright/test"

test('learn to handle frames',async({page})=>{

await page.goto('https://www.leafground.com/frame.xhtml')

const Allframes=page.frames() 
const Noofframes=Allframes.length ////mP->0 ,f1->1,f2->2,f3->3,f4->4

console.log(Noofframes);

//for of

for(let tempval of Allframes){
    const title=await tempval.title()
    console.log(`the title of the page is ${title}`);
    const url=tempval.url()
    console.log(`the url of the page is ${url}`);
     
}



})