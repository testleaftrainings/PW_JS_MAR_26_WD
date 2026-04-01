let phoneNumber:number=9783655280
phoneNumber=1234690090
console.log(phoneNumber);

let companyName:string="Testleaf"
companyName="HCL"
console.log(companyName);

let isplaywright:boolean=true
isplaywright=false
console.log(isplaywright);

let success:undefined
console.log(success);

let data:null=null
console.log(data);

//any: it accepts any datatype
let value:any=1234
value="Welcome"
value=true
value=undefined
console.log(typeof value);

//unknown: this also accepts all datatypes and checks thetype before performing any operation.

let info:unknown
info="Playwright"
info=100
if(typeof info==="number"){
    console.log(info+20);
}else{
    console.log('info is not a string');
}
//console.log(info);

/* let automation:never
automation */

//tuple: it is a fixed length array with specified datatypes for each element
let coursedetails:[string,number,boolean]=["Playwright",100,true]
console.log(coursedetails[0]);






