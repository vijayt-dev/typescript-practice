class Persons {
    id: number;
    name: string;

    constructor(id: number = 1,name: string){
        this.id = id;
        this.name = name;
    }

    print(): void {
        console.log(this.id,this.name);
    }
}

const ps1 = new Persons(undefined,"John");
console.log(ps1);


class Personss {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
const ps2 =  new Personss();
ps2.firstName = "John";
ps2.lastName = "Deo";

console.log(ps2.getFullName());

class Employees extends Persons {
    constructor(
        id: number,
        name: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(id, name);
    }
}

let employees = new Employees(1,'John','Front-end Developer');

console.log(employees.print());
