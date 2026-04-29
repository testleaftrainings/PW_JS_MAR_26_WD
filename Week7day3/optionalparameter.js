"use strict";
function data(name, age, gender) {
    if (age && gender) {
        console.log("my name is" + name + " and age is " + age + "gender is " + gender);
    }
    else if (age) {
        console.log("my name is" + name + " and age is " + age);
    }
    else {
        console.log("my name is" + name);
    }
}
data("Jashmitha"); //my name isJashmitha
data("Jashmitha", 9); //my name is Jashmitha and age is 9
data("Jashmitha", 9, "female");
