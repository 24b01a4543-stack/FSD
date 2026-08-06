// Program 1
namespace Demo {
    export let msg = "Hello";
}
console.log(Demo.msg);

// Program 2
namespace MathDemo {
    export function add(a: number, b: number) {
        console.log(a + b);
    }
}
MathDemo.add(2, 3);

// Program 3
namespace Student {
    export let name = "Ram";
}
console.log(Student.name);