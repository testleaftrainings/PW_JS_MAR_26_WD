import { EmployeeSignup } from "./accessModifiers.js";
class HR extends EmployeeSignup {
    empudate() {
        console.log("Before modification", this.ephno); //read the data
        this.ephno = 65436980267; //modify the data
        console.log("After modification", this.ephno);
    }
}
let obj = new HR();
obj.empudate();
