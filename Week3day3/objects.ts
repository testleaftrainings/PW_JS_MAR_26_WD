/* let firstName:string="Ramesh"
let lasetName:string="Kumar"
let age=40 */

//implicit type
/* let user={
    firstName:"Ramesh",
    lastName:"Kumar",
     age:40
}

console.log(user);
console.log(user.firstName); */

let username:string="Uday"

 let user:{
    firstName:string,
    "#lastName":string,
     age: number
}={
    firstName:"Uday",
    "#lastName":"Prassad",
    age:40
}

console.log(user["#lastName"]);




