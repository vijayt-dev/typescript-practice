abstract class Print {
    constructor(private count: number) {
    }
    abstract getValue(): void
}

class Value extends Print{
    constructor(count: number){
        super(count);
    }
    getValue(): void {
        console.log(1);
    }
}

const abs = new Value(1);
console.log(abs.getValue())