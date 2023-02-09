let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "string"; 

if(typeof userInput === "string"){
    userName = userInput;
}

function generateError(message: string, code: number): void{
    throw {message, code};
}

function generate(): void{
    console.log("hello");
}
console.log(generate());

let result = generateError("Invalid Page",500);
console.log(result);