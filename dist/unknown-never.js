"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "string";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message, code };
}
function generate() {
    console.log("hello");
}
console.log(generate());
let result = generateError("Invalid Page", 500);
console.log(result);
