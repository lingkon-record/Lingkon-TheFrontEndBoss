let obj1 = { name: 'Alice' }; // Reference (Object)
let obj2 = obj1;              // obj2 references the same object as obj1
obj2.name = 'Bob';            // Changing obj2 also changes obj1
console.log(obj1.name);       // Output: 'Bob'
