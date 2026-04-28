"use strict";
class B {
    static company = "Testleaf";
    company = "Qeagle";
    static show() {
        console.log("its a static method");
    }
}
console.log(B.company);
B.show();
