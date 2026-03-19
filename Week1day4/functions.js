/* // function declaration or named function

function funName(){

    console.log("Welcome")
}
funName()

function add(a,b){
    //let a=10
    //let b=20
    let c=a+b
    //console.log(c);
    return c
    
}
//add(10,20)
console.log(add(10,20))

//function expression/anynomous function

 let funExp=function (){

    console.log("this is an function expression");
    
}
funExp()

// Arrow function

const funArrow=(a,b)=> a+b

console.log(funArrow(45,35)); */


// callback function- we pass one function as an argument to other function

function add(x,y,cb){
   let sum=x+y
console.log('the sum of the values are:',sum);

cb(sum)
    
}

function sub(c){
console.log("After subtraction",c-5);

}
add(10,20,sub)