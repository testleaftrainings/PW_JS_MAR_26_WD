//numeric enum
enum browserstatus{

    open,
    closed,
    incognito,
    crash

}

let browser: browserstatus=browserstatus.crash
console.log(browserstatus);

/* //string enum

enum Testresults{
    pass="Test passed",
    fail= "Test failed",
    skip="Test skipped",
    
}

function logtestresults(results:Testresults){
console.log(`the test result is ${results}`);


}
logtestresults(Testresults.pass) */


//heterogeneous enum

enum Testresults{
    pass,
    fail= "Test failed",
    skip="tc",
    closed=0.7,
    step

}

function logtestresults(results:Testresults){
console.log(`the test result is ${results}`);


}
logtestresults(Testresults.pass)
