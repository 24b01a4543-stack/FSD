function isArmstrong(num: number): boolean {
    const digits = num.toString();
    const power = digits.length;
    let sum = 0;
    for (const digit of digits) {
        sum += Math.pow(Number(digit), power);
    }
    return sum === num;
}
const numb = 153;
if (isArmstrong(numb)) {
    console.log(`${numb} is an Armstrong number`);
} else {
    console.log(`${numb} is not an Armstrong number`);
}