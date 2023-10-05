// returns a shallow copy of a portion of an array into a
//  new array object selected from start to end (end not included) 
//  where start and end represent the index of
//  items in that array. The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']; // index slice

console.log(animals.slice(2)); 
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // start *after 2 - end with 4
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5)); //TODO: why or 5-1 = 4 naki
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2)); // ultra
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1)); // why
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]