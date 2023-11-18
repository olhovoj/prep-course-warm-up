export {};

/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 */

const excludedNums = [6, 14, 91, 111];

// You are allowed to edit only this function
function validate(input: number | string): boolean {
  return typeof input === 'number' && Number.isInteger(input) && !excludedNums.includes(input)
  // let result: boolean = true 
  // if(isNaN(input) || !Number.isInteger(input) ) {
  //   return false 
  // }
  // excludedNums.forEach((elemet) => (input === elemet) ? result = false : result = result)
  //   return result


//   for (let i = 0; i < excludedNums.length; i++) {
//     if(input === excludedNums[i]) {
//       return false
//     } 
//   }
// return true
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/
