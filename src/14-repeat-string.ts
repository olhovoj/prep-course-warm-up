export {};

const repeatString = (str: string, counter: number): string => str.repeat(counter);

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'