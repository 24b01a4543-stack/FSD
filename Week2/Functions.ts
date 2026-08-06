// Without Return Types

// Program 1
function GReet(): void {
    console.log("Hello");
}
GReet();

//Program 2
function showName(name: string): void {
    console.log(name);
}
showName("Alice");

//Program 3
function printNumber(num: number): void {
    console.log(num);
}
printNumber(25);


// With Return Types

//Program 1
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 4));

//Program 2
function square(n: number): number {
    return n * n;
}

console.log(square(6));

//Program 3
function message(): string {
    return "Welcome";
}

console.log(message());

// Arrow Functions

//Program 1
let Add = (a: number, b: number): number => a + b;
console.log(add(5, 3));

//Program 2
let Greet = () => console.log("Hello");
Greet();

//Program 3
let Square = (n: number) => n * n;
console.log(square(8));