// Primitive Value Immutability:
let str1 = 'Hello';
let str2 = str1;

str2 += ', World!';

console.log(str1); // Output: 'Hello' (str1 remains unchanged)
console.log(str2); // Output: 'Hello, World!'
