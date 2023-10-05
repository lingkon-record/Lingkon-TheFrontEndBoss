// Reference Value Mutability:
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // Output: [1, 2, 3, 4] (arr1 is modified along with arr2)
console.log(arr2); // Output: [1, 2, 3, 4]
