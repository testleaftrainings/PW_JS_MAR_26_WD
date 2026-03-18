//string literal

let companyName="Testleaf"//address 100
let firstName="testleaf"//address 100

console.log(companyName===firstName);//true

//string objects
let empname= new String ("Hari")
let empname1= new String("Hari")
console.log(empname===empname1);

//Escape sequence \,\n, \t

let test=('it\'s a reg\tression \ntesting \\ ')
    console.log(test);
    
//concat()- to concat 2 strings
let testCase="Create a new lead"
let testCasid=1424
let resultconcat=testCase.concat(testCasid)
console.log(resultconcat);

//+
let resultconcat1=testCasid+"-"+testCase+"passed"
console.log(resultconcat1);

//template literal-> `${}` `backticks`
function funName(a){
console.log(`there is ${a} testacases`)
}

funName(500)

let course="playwright"
//length -property
//index=0
//length=1

console.log(`the length of the string is ${course.length}`);

//charAt()

console.log(`the 2nd  character ${course.charAt(1)}`);


//indexof()

console.log(`the index of "w" is ${course.indexOf('w')}`);

//split()
let course1="playwright Automation"
console.log(course1.split(" "));

//slice()
//playwright
console.log(course.slice(5));//nothing prints

//substring()
console.log(course.substring(5,-2));//ayw //(5,0)=>(0,5)
