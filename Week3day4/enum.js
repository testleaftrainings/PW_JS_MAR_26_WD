"use strict";
//numeric enum
var browserstatus;
(function (browserstatus) {
    browserstatus[browserstatus["open"] = 0] = "open";
    browserstatus[browserstatus["closed"] = 1] = "closed";
    browserstatus[browserstatus["incognito"] = 2] = "incognito";
    browserstatus[browserstatus["crash"] = 3] = "crash";
})(browserstatus || (browserstatus = {}));
let browser = browserstatus.crash;
console.log(browserstatus);
//string enum
var Testresults;
(function (Testresults) {
    Testresults["pass"] = "Test passed";
    Testresults["fail"] = "Test failed";
    Testresults["skip"] = " Test skipped";
})(Testresults || (Testresults = {}));
function logtestresults(results) {
    console.log(`the test result is ${results}`);
}
logtestresults(Testresults.pass);
