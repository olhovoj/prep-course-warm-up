export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
const protectEmail = (email: string): string => {
  let result = "";
  if (email.split("@")[0].length < 5) {
    result = "...@" + email.split("@")[1];
  } else if (email.split("@")[0].length < 6) {
    result = email.split("@")[0].substring(0, 2) + "...@" + email.split("@")[1];
  } else {
    result = email.split("@")[0].substring(0, 3) + "...@" + email.split("@")[1];
  }
  return result;
};
console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail("12345@example.com")); // Expected result: 12...@example.com
console.log(protectEmail("12@example.com")); // Expected result: ...@example.com
