import React from "react";

function NumberList() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>Number List</h1>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default NumberList;
