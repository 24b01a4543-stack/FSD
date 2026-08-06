let inputString: string = "programming";
let charFrequency: { [key: string]: number } = {};
for (let i = 0; i < inputString.length; i++) {
    let currentChar: string = inputString[i];
    if (charFrequency[currentChar]) {
        charFrequency[currentChar]++;
    } else {
        charFrequency[currentChar] = 1;
    }
}
console.log("Character Frequencies:");
for (let currentChar in charFrequency) {
    console.log(currentChar + " : " + charFrequency[currentChar]);
}