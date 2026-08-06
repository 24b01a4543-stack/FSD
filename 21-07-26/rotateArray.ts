let rotateArray: number[] = [10, 20, 30, 40, 50];
let rotatePositions: number = 2;
let rotatedArray: number[] = [
    ...rotateArray.slice(rotatePositions),
    ...rotateArray.slice(0, rotatePositions)
];
console.log("Original Array: ", rotateArray);
console.log("Rotated Array: ", rotatedArray);