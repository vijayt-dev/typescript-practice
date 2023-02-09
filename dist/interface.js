"use strict";
function getFullName(person) {
    return `${person.id} ${person.name}`;
}
let personIn = {
    id: 1,
    name: 'John'
};
console.log(getFullName(personIn));
let format;
format = function (str, upper) {
    return upper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true));
class Message {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    toJson() {
        return JSON.stringify(this);
    }
}
let message = new Message('John', 'Doe');
console.log(message.toJson());
class Control {
    constructor() {
        this.state = false;
    }
}
class Button extends Control {
    enable() { }
}
class TextBox extends Control {
    enable() { }
}
class Label extends Control {
}
