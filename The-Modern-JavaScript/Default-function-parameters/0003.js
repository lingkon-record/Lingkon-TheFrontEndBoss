// hard example : Default-function-parameters

function createUser({ username = "guest", email = "example@example.com", age = 25 }) {
    return {
      username,
      email,
      age
    };
  }
  
  const user1 = createUser({ username: "John", email: "john@example.com", age: 30 });
  console.log(user1);
  // Output: { username: 'John', email: 'john@example.com', age: 30 }
  
  const user2 = createUser({ username: "Alice" });
  console.log(user2);
  // Output: { username: 'Alice', email: 'example@example.com', age: 25 }
  