class Department{
    name: string;
    constructor(name: string){
        this.name = name
    }
    print(this: Department) {
        console.log(this.name);
    }
}

const department = new Department("CSE");
department.print();

const departmentCopy = department.print;
console.log(departmentCopy.call(department));


