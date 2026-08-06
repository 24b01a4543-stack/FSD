// Default Parameters

// Program 1
function Greet(name: string = "Guest") {
    console.log(name);
}
Greet();
Greet("John");

// Program 2
function power(num: number, exp: number = 2) {
    console.log(num ** exp);
}
power(5);
power(5, 3);

// Program 3
function display(city: string = "Hyderabad") {
    console.log(city);
}
display();
display("Delhi");

// Optional Parameters

// Program 1
function greet(name?: string) {
    console.log(name);
}
greet();
greet("Alice");

// Program 2
function student(name: string, age?: number) {
    console.log(name, age);
}
student("Ram");
student("Ram", 20);

// Program 3
function print(a: number, b?: number) {
    console.log(a, b);
}
print(5);
print(5, 10);

// Rest Parameters

// Program 1
function sum(...nums: number[]) {
    let total = 0;
    for (let n of nums)
        total += n;
    console.log(total);
}
sum(2, 3, 4);

// Program 2
function names(...list: string[]) {
    console.log(list);
}
names("A", "B", "C");

// Program 3
function multiply(...numbers: number[]) {
    let result = 1;

    for (let n of numbers)
        result *= n;

    console.log(result);
}
multiply(2, 3, 4);