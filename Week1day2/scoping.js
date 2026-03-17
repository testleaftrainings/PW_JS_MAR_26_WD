
funscope()
function funscope(){
if (true){
    var a=70
    console.log("value of a inside the if block",a)
}
console.log("value of a outside the if block and inside function block",a)
}

console.log("value of a outside the function block",a)

//var- function scoped
//let and const- block scoped variable

/* Named Function
function fun(){

}
fun() */