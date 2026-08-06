let numberArray: number[] = [10, 25, 45, 67, 89, 34];
let largestNumber: number = numberArray[0];
let secondLargestNumber: number = numberArray[0];
for (let i = 1; i < numberArray.length; i++) {
    if (numberArray[i] > largestNumber) {
        largestNumber = numberArray[i];
    }
}
for (let i = 0; i < numberArray.length; i++) {

    if (numberArray[i] > secondLargestNumber && numberArray[i] < largestNumber) {
        secondLargestNumber = numberArray[i];
    }
}
console.log("Largest Number: " + largestNumber);
console.log("Second Largest Number: " + secondLargestNumber);