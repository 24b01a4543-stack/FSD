namespace MathOperations {

    export function add(firstNumber: number, secondNumber: number): number {
        return firstNumber + secondNumber;
    }

    export function subtract(firstNumber: number, secondNumber: number): number {
        return firstNumber - secondNumber;
    }

    export function multiply(firstNumber: number, secondNumber: number): number {
        return firstNumber * secondNumber;
    }

    export function divide(firstNumber: number, secondNumber: number): number {
        if (secondNumber === 0) {
            console.log("Division by zero is not allowed.");
            return 0;
        }
        return firstNumber / secondNumber;
    }
}
console.log("Addition: " + MathOperations.add(20, 10));
console.log("Subtraction: " + MathOperations.subtract(20, 10));
console.log("Multiplication: " + MathOperations.multiply(20, 10));
console.log("Division: " + MathOperations.divide(20, 10));