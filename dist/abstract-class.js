"use strict";
class Print {
    constructor(count) {
        this.count = count;
    }
}
class Value extends Print {
    constructor(count) {
        super(count);
    }
    getValue() {
        console.log(1);
    }
}
const abs = new Value(1);
console.log(abs.getValue());
