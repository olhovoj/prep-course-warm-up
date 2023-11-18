export {};

function add(a: number, b: number): number {
    return a + b
}

function subtract(a: number, b: number) {
    return a - b
}

function sum(arr: number[]) {
    let result = 0
    for(let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

function multiply(arr: number[]) {
    let result1 = 1
    for(let i = 0; i < arr.length; i++) {
        result1 *= arr[i]
    }
    return result1

}

function power(a: number, b: number) {
    let res = a
    for(let i = 1; i < b; i++) {
        res = res * a
    }
    return res

}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
