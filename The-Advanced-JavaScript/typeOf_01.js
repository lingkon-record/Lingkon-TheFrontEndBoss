let myArray = [1, 2, 3];
console.log(typeof myArray); // Outputs: "object"
// To specifically check for an array, you can use Array.isArray() method
console.log(Array.isArray(myArray)); // Outputs: true


function sayHello() {
  console.log("Hello!");
}
console.log(typeof sayHello); // Outputs: "function"



let result = 10 / "abc";
console.log(typeof result); // Outputs: "number"
isNaN(result); // Returns: true
