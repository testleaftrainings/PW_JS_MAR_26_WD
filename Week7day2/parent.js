import { GrandParent } from "./grandparent.js";
export class ParentMethod extends GrandParent {
    loadUrl() {
        console.log("URL is loaded");
    }
    loginInfo() {
        console.log("login info is filled");
    }
}
//let pr=new ParentMethod()
