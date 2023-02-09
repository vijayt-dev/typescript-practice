function raiseError(message: string): never {
    throw new Error(message);
}
function reject() { 
    return raiseError('Rejected');
 }
 //console.log(reject())
type Users = "USER" | "ADMIN";
 let user: Users = "USER";
 console.log(user);


 function fun(): void{
    console.log("Hello World");
 }

 let prints: Function = () => fun;
 console.log(prints);


 function applyDiscount(price?: number, discount = 0.05) {
    console.log(price,discount)
}

console.log(applyDiscount(100,undefined)); // 95


function add(a: number,b: number): number{
    return a + b;
}

function add(a: string,b: string): string{
    return a + b;
}
console.log(add("a","b"));