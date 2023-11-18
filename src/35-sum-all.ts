export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = (start: number, end: number): number => {
  if (end < start) {
    const a = start;
    start = end;
    end = a;
  }
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};

console.log(sumAll(4, 1)); // Expected output: 10
console.log(sumAll(1, 3)); // Expected output: 10
console.log(sumAll(4, 4)); // Expected output: 10
console.log(sumAll(-3, -4)); // Expected output: 10
