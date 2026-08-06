function primeNum(n: number): boolean {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}
function generatePrimes(start: number, end: number): void {
    for (let i = start; i <= end; i++) {
        if (primeNum(i)) {
            console.log(i);
        }
    }
}
generatePrimes(10, 50);