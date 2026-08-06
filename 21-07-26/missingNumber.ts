let missingArray: number[] = [1, 2, 3, 5, 6];
let totalNumbers: number = missingArray.length + 1;
let expectedSum: number = (totalNumbers * (totalNumbers + 1)) / 2;
let actualSum: number = 0;
for (let i = 0; i < missingArray.length; i++) {
    actualSum += missingArray[i];
}
let missingNumber: number = expectedSum - actualSum;
console.log("Missing Number: " + missingNumber);