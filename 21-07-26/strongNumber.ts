let strongNum: number = 145;
let originalStrongNum: number = strongNum;
let totalSum: number = 0;
while (strongNum > 0) {
    let digit: number = strongNum % 10;
    let factorial: number = 1;

    // Calculate factorial
    for (let i = 1; i <= digit; i++) {
        factorial *= i;
    }
    totalSum += factorial;
    strongNum = Math.floor(strongNum / 10);
}
if (totalSum === originalStrongNum) {
    console.log(originalStrongNum + " is a Strong Number");
} else {
    console.log(originalStrongNum + " is Not a Strong Number");
}