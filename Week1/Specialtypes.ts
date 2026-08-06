// Working with Special Types

// any
let value: any = 10;
value = "Hello";
console.log(value);

// unknown
let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}

//void
function display(): void {
    console.log("Welcome");
}
display();