//Program 1
class Student {
    constructor(public name: string) {}
    display() {
        console.log(this.name);
    }
}
new Student("Ram").display();

//Program 2
class Employee {
    constructor(public id: number) {}
    show() {
        console.log(this.id);
    }
}
new Employee(101).show();

//Program 3
class Circle {
    constructor(public radius: number) {}

    area() {
        console.log(3.14 * this.radius * this.radius);
    }
}
new Circle(5).area();