export function add(firstValue: number, secondValue: number): number {
    return firstValue + secondValue;
}
export function subtract(firstValue: number, secondValue: number): number {
    return firstValue - secondValue;
}
export function multiply(firstValue: number, secondValue: number): number {
    return firstValue * secondValue;
}
export function divide(firstValue: number, secondValue: number): number {
    if (secondValue === 0) {
        console.log("Division by zero is not allowed.");
        return 0;
    }
    return firstValue / secondValue;
}