interface PersonIn {
    id: number;
    name?: string;
}

function getFullName(person: PersonIn) {
    return `${person.id} ${person.name}`;
}

let personIn = {
    id: 1,
    name: 'John'
};

console.log(getFullName(personIn));


interface StringFormat {
    (str: string, isUpper: boolean): string
}


let format: StringFormat;

format = function (str: string, upper: boolean) {
    return upper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hi', true));


interface Json {
    toJSON(): string
 }

 class Message implements Json {
    constructor(private firstName: string,
        private lastName: string) {
    }
    toJson(): string {
        return JSON.stringify(this);
    }
}

let message = new Message('John', 'Doe');
console.log(message.toJson());


class Control {
    private state: boolean = false;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }


