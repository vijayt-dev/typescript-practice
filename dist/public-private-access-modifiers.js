"use strict";
class Developer {
    constructor(name) {
        this.skills = [];
        this.name = name;
    }
    addSkills(skill) {
        this.skills.push(skill);
    }
    print() {
        console.log(this.name, this.skills);
    }
}
const userDeveloper1 = new Developer("John");
console.log(userDeveloper1);
