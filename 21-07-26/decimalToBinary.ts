let decimalNum: number = 25;
let originalDecimalNum: number = decimalNum;
let binaryNum: string = "";
while (decimalNum > 0) {
    let remainder: number = decimalNum % 2;
    binaryNum = remainder + binaryNum;
    decimalNum = Math.floor(decimalNum / 2);
}
console.log("Binary of " + originalDecimalNum + " is " + binaryNum);