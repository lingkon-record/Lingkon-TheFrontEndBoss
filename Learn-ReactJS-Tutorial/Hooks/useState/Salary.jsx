import React, { useState } from 'react';

function SalaryTracker() {
  const [salary, setSalary] = useState(0);

  return (
    <div>
      <h1>Monthly Salary Tracker</h1>
      <p>Your current monthly salary is: ${salary}</p>
      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(parseInt(e.target.value))}
        placeholder="Enter your monthly salary"
      />
    </div>
  );
}

export default SalaryTracker;
