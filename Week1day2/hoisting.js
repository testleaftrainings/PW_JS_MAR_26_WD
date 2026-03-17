var a
a=10
console.log(a);
//var a=10


/* internally
var a
console.log(a)
a=10
*/


let b
b=20
console.log(b);
//let b=20  //ReferenceError: Cannot access 'b' before initialization

/* internally
let b
console.log(b)
b=20
*/

const c=30
console.log(c)
//const c=30 //ReferenceError: Cannot access 'c' before initialization

//TDZ(Temporal dead zone)-time period between varaible declaration and value assignment


