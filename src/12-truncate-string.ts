export {};


function truncateString(str: string, length: number): string {
    return str.substring(0, length)
}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
