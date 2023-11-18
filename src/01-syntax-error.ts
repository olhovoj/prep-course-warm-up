export {};

function addNumbers(a: number, b: number, c: number): number {
    return a + b + c;
}

const result = addNumbers(1, 3, 4);
const result2 = addNumbers(1, 6, 5);
console.log(result, result2); // Expected output: 8
