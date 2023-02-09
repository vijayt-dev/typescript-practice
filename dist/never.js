"use strict";
function raiseError(message) {
    throw new Error(message);
}
function reject() {
    return raiseError('Rejected');
}
let user = "USER";
console.log(user);
function fun() {
    console.log("Hello World");
}
let prints = () => fun;
console.log(prints);
function applyDiscount(price, discount = 0.05) {
    console.log(price, discount);
}
console.log(applyDiscount(100, undefined)); // 95
function add(a, b) {
    return a + b;
}
function add(a, b) {
    return a + b;
}
console.log(add("a", "b"));
