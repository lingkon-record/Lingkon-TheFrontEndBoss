import React, { useState } from 'react';

function FruitsList() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry']);
  const [newFruit, setNewFruit] = useState('');

  return (
    <div>
      <h1>My Fruits List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
        placeholder="Add a new fruit"
      />
      <button onClick={() => setFruits([...fruits, newFruit])}>Add</button>
    </div>
  );
}

export default FruitsList;

