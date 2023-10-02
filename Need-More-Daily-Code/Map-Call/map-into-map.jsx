import React from "react";

function MyComponent() {
    const data = [
        {
          category: "Category1",
          items: [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" },
          ],
        },
        {
          category: "Category2",
          items: [
            { id: 3, name: "Item 3" },
            { id: 4, name: "Item 4" },
          ],
        },
      ];
      
  return (
    <div>
      {data.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          <ul>
            {category.items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
