export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */

function stringToArray(fullNames: string[]): string[] {
    const result: string[] = [];

    fullNames.forEach((fullName) => fullName.split(' ').forEach((name) => result.push(name)))
    // return fullNames[0].split(' ')   

//     for (let i = 0; i < fullNames.length; i++) {
//         const fullName = fullNames[i];
//         const names = fullName.split(' ')
//         for (let j = 0; j < names.length; j++) {
//             const name = names[j];
//             result.push(name)
//         }
//     }
    console.log(fullNames)
    return result
 }
 
console.log(stringToArray(["John Doe", "Janis Berzins", "Anna Marija Sesta"])); // Expected output: ['John', 'Doe']
