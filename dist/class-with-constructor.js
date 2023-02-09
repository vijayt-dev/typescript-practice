"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(this.name);
    }
}
const department = new Department("CSE");
department.print();
const departmentCopy = department.print;
console.log(departmentCopy.call(department));
