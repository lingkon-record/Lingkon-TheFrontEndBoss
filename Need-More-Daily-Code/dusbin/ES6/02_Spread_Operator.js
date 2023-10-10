// ChatGPT : spread operator vs  Rest Parameters

const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
// combinedArray is now [1, 2, 3, 4, 5, 6]



const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
// copyArray is a new array with the same elements as originalArray



function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
const result = sum(...numbers);
// result is 6

// : JavaScript spread operator and apply() method
function compare(a, b) {
    return a - b;
}
let outputSee = compare.apply(null, [1, 2]);
let outputSee2 = compare.apply(null, [10, 5]);
console.log("outputSee: ",outputSee,outputSee2); // -1  5



