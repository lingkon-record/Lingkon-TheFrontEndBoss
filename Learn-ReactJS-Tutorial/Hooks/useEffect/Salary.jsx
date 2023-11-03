import React, { useState, useEffect } from 'react';

function SalaryTracker() {
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    // Simulate setting your monthly salary after a delay (e.g., 3 seconds).
    const timer = setTimeout(() => {
      setSalary(5000); // Replace with your actual monthly salary.
    }, 3000);

    // Clean up the timer to prevent memory leaks.
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this effect runs only once.

  return (
    <div>
      <h1>Monthly Salary Tracker</h1>
      <p>Your current monthly salary is: ${salary}</p>
    </div>
  );
}

export default SalaryTracker;
