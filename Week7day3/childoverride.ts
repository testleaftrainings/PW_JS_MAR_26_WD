import { BaseTest } from "./methodoverride.js";


class AdminTest extends BaseTest{

    login(){
        console.log("Login as Admin with admin credentials");
        super.login() //Login with default credentails->parent method.
    }
}

let ad=new AdminTest()
ad.login()