"use strict";
class Persons {
    constructor(id = 1, name) {
        this.id = id;
        this.name = name;
    }
    print() {
        console.log(this.id, this.name);
    }
}
const ps1 = new Persons(undefined, "John");
console.log(ps1);
class Personss {
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(theFirstName) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(theLastName) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const ps2 = new Personss();
ps2.firstName = "John";
ps2.lastName = "Deo";
console.log(ps2.getFullName());
class Employees extends Persons {
    constructor(id, name, jobTitle) {
        // call the constructor of the Person class:
        super(id, name);
        this.jobTitle = jobTitle;
    }
}
let employees = new Employees(1, 'John', 'Front-end Developer');
console.log(employees.print());
