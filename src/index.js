var id = 38;
var company = "Yavar";
var isJoin = true;
var x = "Hello";
var ids = [1, 2, 3];
var arr = [true, "stirng", 1];
// Tuple
var person = [1, "string", true];
// Tuple Array
var employee;
employee = [[1, "string"]];
// Union
var pid;
pid = "22";
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up);
console.log(Direction2.Up);
var user1 = {
    id: 1,
    name: "John"
};
var user2 = {
    id: 1,
    name: "John"
};
console.log(user1);
console.log(user2);
// Type Assertion
var cid = 1;
var customerId1 = cid;
var customerId2 = cid;
// Functions
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
function log(message) {
    console.log(message);
}
log("hello");
var user3 = {
    id: 1,
    name: "John"
};
//interface Point = number | string;
var p1 = 1;
var u = {
    id: 1,
    name: "string"
};
var addFunc = function (x, y) { return x + y; };
var subFunc = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var john = new Person(1, "John");
// Data Modifiers
console.log(john.name);
