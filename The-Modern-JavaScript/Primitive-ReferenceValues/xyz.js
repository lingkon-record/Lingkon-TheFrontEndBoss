// Passing by Value vs. Passing by Reference:

function modifyPrimitive(x) {
    x += 10;
    console.log(x); // Output: 15
  }
  
  function modifyReference(obj) {
    obj.age += 10;
    console.log(obj.age); // Output: 25
  }
  
  let num = 5;
  let person = { name: 'Alice', age: 15 };
  
  modifyPrimitive(num); // Passes the primitive value by value
  modifyReference(person); // Passes the object by reference
  
  console.log(num); // Output: 5 (num remains unchanged)
  console.log(person.age); // Output: 25 (person object is modified)
  