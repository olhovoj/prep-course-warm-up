export {};

function trimWord(word: string) {
  return word.trim();
}

const result = trimWord("  CODELEX ");
const result2 = trimWord("  CODELEX333 ");
const result3 = trimWord("  CODELEX22 ");
console.log(result, result2, result3); // Expected output: "CODELEX"
