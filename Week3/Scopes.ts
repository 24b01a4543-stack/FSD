// Function Scope
function demo() {
    var x = 10;
    console.log(x);
}
demo();

// Block Scope
{
    let y = 20;
    console.log(y);
}

// Combined
let a = 5;
if (true) {
    let b = 10;
    console.log(b);
}
console.log(a);