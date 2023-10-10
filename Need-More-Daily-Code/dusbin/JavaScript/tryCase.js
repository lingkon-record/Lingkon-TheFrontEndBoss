

try {
    // Code that may throw an error
    let x = 10 / 50000000; // This will throw a division by zero error
  } catch (error) {
    // Catch and handle the error
    console.error("An error occurred: " + error.message);
  }
  