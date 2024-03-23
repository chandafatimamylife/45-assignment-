"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//  Tests for equality and inequality with strings
// Tests using the lower case function
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Tests using "and" and "or" operators
// Test whether an item is in a array
// Test whether an item is not in a array
let name_1 = "Zubia ";
let name_2 = "Zubia Fatima";
let name_3 = "Miss Zubia Fatima";
//if for equality test
//else for inequality 
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 = name_2) {
    console.log("names are equal");
} //else{
//console.log("names are not equal")}
if (name_1 = name_3) {
    console.log("names are not equal");
}
let age_1 = 18;
let age_2 = 22;
if (age_1 = 18) {
    console.log("eligible for board");
}
if (age_1 = 22) {
    console.log(" not eligible for board");
}
if (age_2 = 22) {
    console.log(" not eligible for board");
}
//less than or=
if (age_1 <= age_2) {
    console.log(" younger");
}
//greater than or =
if (age_2 => age_1) {
    console.log(" older");
}
//and dono same ya koe ek
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligbile for vote");
}
if (age_1 == 18 || age_2 == 22) {
    console.log("person is not eligbile for vote");
}
let fruits = ["Apple", "Mango", "Orange", "Grapes"];
if (fruits.includes("Apple")) {
    console.log("Apple is fruit");
}
if (!fruits.includes("Banana")) {
    console.log("Banana is not fruit");
}
