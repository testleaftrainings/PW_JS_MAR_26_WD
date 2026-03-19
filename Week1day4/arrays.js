
//Array declaration

const numarry=[1,2,4,6,8]
    //index 0,1,2,3,4
//length 1,2,3,4,5

//length of the array-1
console.log(numarry.length); //5

//index starts from 0
console.log(numarry.indexOf(4)); //2

//adding number
console.log(numarry[5]="welcome"); //welcome
console.log(numarry); //[ 1, 2, 4, 6, 8, 'welcome' ]

//replace the number
console.log(numarry[2]=true); //true
console.log(numarry) //[ 1, 2, true, 6, 8, 'welcome' ]

//includes()
console.log(numarry.includes(true)); //true
console.log(numarry)


//[ 1, 2, true, 6, 8, 'welcome' ]
//push()-used add 1 or more elements in the array
console.log(numarry.push("Hello","Testleaf"));
console.log(numarry)//[ 1, 2, true, 6, 8, 'welcome', 'Hello', 'Testleaf' ]

//pop()- remove 1 element at the end of the array
numarry.pop() //[ 1, 2, true, 6, 8, 'welcome', 'Hello' ]
console.log(numarry)

//unshif()- add one or more elements in the start of the array
numarry.unshift("Testleaf","Qeagle")
console.log(numarry) //[ 'Testleaf', 'Qeagle', 1, 2, true, 6, 8, 'welcome', 'Hello' ]

//shift()- remove one element at the start of the array
numarry.shift()
console.log(numarry)//[ 'Qeagle', 1, 2, true, 6, 8, 'welcome', 'Hello' ]

//slice()- extract portion of the array
console.log(numarry.slice(4)); //[ 'Qeagle', 1, 2, true ]
console.log(numarry.slice(4,7))//[ 6, 8, 'welcome' ]
console.log(numarry)//[ 'Qeagle', 1, 2, true, 6, 8, 'welcome', 'Hello' ]

//splice()- add, remove
console.log(numarry.splice(1,0,"Good",undefined,1,3,45,67)) //[ 1, 2, true, 6 ]
console.log(numarry)//[ 'Qeagle', 'Good', undefined, 8, 'welcome', 'Hello' ]


//for_of

for(let array of numarry){
    console.log(array);
    
}





