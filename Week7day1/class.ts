export class Browser{

    //property-> stores the value
    browserName:string="Chrome"
    browserVersion:number


    //methods-> for actionables
    launchBrowser(){
    console.log("Launch the browser");

    }


    loadUrl(){
        console.log("Loading the URL");
     
}
//default constructor
/* constructor(){
    console.log("this is a default constructor");
    
} */

//parameterized constructor
constructor(browserVersion:number){
this.browserVersion=browserVersion
}

}

//creating the object (let obj=new classname())

/* let Br=new Browser(123)
Br.launchBrowser()
Br.loadUrl()
console.log(Br.browserName);
console.log(Br.browserVersion); */

