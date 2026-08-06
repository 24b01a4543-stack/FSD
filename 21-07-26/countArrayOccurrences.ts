let occurrenceArray: number[] = [10, 20, 10, 30, 20, 10, 40];
let occurrenceCount: { [key: number]: number } = {};
for (let i = 0; i < occurrenceArray.length; i++) {
    let currentElement: number = occurrenceArray[i];
    if (occurrenceCount[currentElement]) {
        occurrenceCount[currentElement]++;
    } else {
        occurrenceCount[currentElement] = 1;
    }
}
console.log("Occurrences of each element:");
for (let currentElement in occurrenceCount) {
    console.log(currentElement + " : " + occurrenceCount[currentElement]);
}