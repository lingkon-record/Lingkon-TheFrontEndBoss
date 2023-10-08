// ES6 Object Literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    sayHello: function () {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    },
  };
  
  // Accessing properties and calling a method
  console.log(person.firstName); // "John"
  console.log(person.lastName);  // "Doe"
  person.sayHello();            // "Hello, my name is John Doe."
  