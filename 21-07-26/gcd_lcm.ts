function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}
const num1 = 24;
const num2 = 36;
console.log("GCD:", gcd(num1, num2));
console.log("LCM:", lcm(num1, num2));