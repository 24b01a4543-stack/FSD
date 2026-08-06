let digitNum: number = 12345;
let originalDigitNum: number = digitNum;
let digitSum: number = 0;
while (digitNum > 0) {
    let digit: number = digitNum % 10;
    digitSum += digit;
    digitNum = Math.floor(digitNum / 10);
}
console.log("Sum of digits of " + originalDigitNum + " is " + digitSum);