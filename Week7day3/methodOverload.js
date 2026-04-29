"use strict";
class BrowserNew {
    loadApplication(url, browsername) {
        if (browsername) {
            console.log("launch the " + url + "in the browser" + browsername);
        }
        else {
            console.log("launch the " + url);
        }
    }
}
let brnew = new BrowserNew();
brnew.loadApplication("www.google.com");
brnew.loadApplication("www.google.com", "Chrome");
