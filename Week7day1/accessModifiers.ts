class EmployeeSignup{


public eName:string="Hari"
public eid:string="em654"
private esalary:number=50000
protected ephno:number=7358678580

printdetails(){

    console.log(`the employee details ${this.eName}:${this.eid}: ${this.esalary}:${this.ephno}`)
    
}



//use direct public method or getter-setter method to read and write data of private access modifier outside the class

// public newmethod(){
// console.log(this.esalary)
// console.log(this.ephno)
// }


//get method to read the value outside the class



public get readData(){

return this.esalary

}



//set method is to modify/update the value and print outside the class

public set writeData(sal:number){

this.esalary=sal

}

}

let Esign=new EmployeeSignup()

Esign.printdetails()

//Esign.newmethod()

console.log(Esign.readData)

Esign.writeData=80000

console.log(Esign.readData) 

