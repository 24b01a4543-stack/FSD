let binaryNumb: string = "11001";
let originalBinaryNumb: string = binaryNumb;
let decimalNumb: number = 0;
let power: number = 0;
for (let i = binaryNumb.length - 1; i >= 0; i--) {
    let digit: number = Number(binaryNumb[i]);
    decimalNumb += digit * Math.pow(2, power);
    power++;
}
console.log("Decimal of " + originalBinaryNumb + " is " + decimalNumb);