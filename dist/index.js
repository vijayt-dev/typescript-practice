"use strict";
let id = 38;
let company = "Yavar";
let isJoin = true;
let x = "Hello";
let ids = [1, 2, 3];
let arr = [true, "string", 1];
// Tuple
let person = [1, "string", true];
// Tuple Array
let employee;
// Union
let pid;
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
console.log(Direction1["Up"]);
console.log(Direction2.Up);
const user1 = {
    id: 1,
    name: "John"
};
const user2 = {
    id: 1,
    name: "John"
};
console.log(user1);
console.log(user2);
const val = [];
// Type Assertion
let cid = 1;
let customerId1 = cid;
let customerId2 = cid;
// Functions
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
function log(message) {
    console.log(message);
}
log("hello");
const user3 = {
    id: 1,
    name: "John"
};
//interface Point = number | string;
const p1 = 1;
const u = {
    id: 1,
    name: "string"
};
const addFunc = (x, y) => x + y;
const subFunc = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const john = new Person(1, "John");
// Data Modifiers
console.log(john.name);
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends Person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Hello", "Developer");
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['string']);
numArray.push();
let card = {
    cardnumber: "123",
    cardDate: "12/12/2022",
    cvv: 7867
};
const arrHero = [];
const data3 = ["1", 2];
let seatAllotment;
var SwatChoice;
(function (SwatChoice) {
    SwatChoice["AISLE"] = "aisle";
    SwatChoice[SwatChoice["MIDDLE"] = 3] = "MIDDLE";
    SwatChoice[SwatChoice["WINDOW"] = 4] = "WINDOW";
    SwatChoice[SwatChoice["FOURTH"] = 5] = "FOURTH";
})(SwatChoice || (SwatChoice = {}));
const userJohn = {
    dbId: 2,
    email: "usermail@gmail.com",
    userId: 1,
    githubToken: "HGT#!",
    role: "admin",
    startTrail() {
        return "Started";
    },
    getCoupon() {
        return 1;
    }
};
console.log(userJohn.startTrail());
// class
class UserCourse {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "CH";
    }
    deleteToken() {
        console.log("delete Token");
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends UserCourse {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const uc = new SubUser("user@gmail.com", "John");
uc.changeCourseCount();
console.log(uc);
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStroy() {
        console.log("Create Story");
    }
}
// Abstract class
class TakePhoto1 {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Instagram1 {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        //super(cameraMode,filter)
    }
    getValue() {
        console.log("Value");
    }
}
