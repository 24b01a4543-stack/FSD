// Program 1
function display<T>(value: T): T {
    return value;
}
console.log(display<number>(10));

// Program 2
function print<T>(data: T) {
    console.log(data);
}
print<string>("Hello");

// Program 3
class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}
let b = new Box<number>(100);
console.log(b.value);