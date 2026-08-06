let originalString: string = "programming";
let uniqueString: string = "";
for (let i = 0; i < originalString.length; i++) {
    let currentCharacter: string = originalString[i];
    if (!uniqueString.includes(currentCharacter)) {
        uniqueString += currentCharacter;
    }
}
console.log("Original String: " + originalString);
console.log("String after removing duplicates: " + uniqueString);