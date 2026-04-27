"use strict";
class EmployeeSignup {
    eName = "Hari";
    eid = "em654";
    esalary = 50000;
    ephno = 7358678580;
    printdetails() {
        console.log(`the employee details ${this.eName}:${this.eid}: ${this.esalary}:${this.ephno}`);
    }
    newmethod() {
        console.log(this.esalary);
        console.log(this.ephno);
    }
}
let Esign = new EmployeeSignup();
Esign.newmethod();
