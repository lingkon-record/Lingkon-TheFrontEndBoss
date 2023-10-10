for (let i = 1; i <= 5000; i++) {
    // Check if the current number is even
    if (i % 2 === 0) {
      // Skip the current iteration and continue to the next one
      continue;
    }
    
    // Print the odd number
    console.log(i);
  }
  