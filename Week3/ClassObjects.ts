// Program 1
class Student {
    name = "John";
}
let s = new Student();
console.log(s.name);

// Program 2
class Car {
    brand = "Toyota";

    display() {
        console.log(this.brand);
    }
}
let c = new Car();
c.display();

// Program 3
class Book {
    title = "Java";

    show() {
        console.log(this.title);
    }
}
new Book().show();