type user={
    name: string,
    age:number
}

let person:user={
    name:"David",
    age:30

}

//type union (|)
//type intersection(&)


//type union

type supportedBrowser="chrome"|"firefox"|"msedge"
 
function invokeBrowser(browserName:supportedBrowser){

    console.log(browserName);
    


}
invokeBrowser("chrome")





