//Public
class Student {
    public name = "John";
}
let s = new Student();
console.log(s.name);

//Private
class Employee {
    private salary = 50000;
    show() {
        console.log(this.salary);
    }
}
new Employee().show();

//Protected
class Person {
    protected age = 25;
}
class Man extends Person {
    show2() {
        console.log(this.age);
    }
}
new Man().show2();