let duplicateArray: number[] = [10, 20, 30, 20, 40, 10, 50, 30];
let duplicateCount: { [key: number]: number } = {};
let duplicateElements: number[] = [];
for (let i = 0; i < duplicateArray.length; i++) {
    let currentElement: number = duplicateArray[i];
    if (duplicateCount[currentElement]) {
        duplicateCount[currentElement]++;
    } else {
        duplicateCount[currentElement] = 1;
    }
}
for (let currentElement in duplicateCount) {

    if (duplicateCount[currentElement] > 1) {
        duplicateElements.push(Number(currentElement));
    }
}
console.log("Duplicate Elements: ", duplicateElements);