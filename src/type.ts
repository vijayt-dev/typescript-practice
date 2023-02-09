function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

let netPrice = <number>getNetPrice(100, 0.05, true);
console.log(netPrice, typeof netPrice);
