import React from "react";
import flowersData from "./flowers.json";

function FlowerList() {
  // Access the flower data from the imported JSON
  const { flowers } = flowersData;

  return (
    <div>
      <h2>Flower List</h2>
      <ul>
        <li>
          {flowers[0].name} - {flowers[0].color}
        </li>
        <li>
          {flowers[1].name} - {flowers[1].color}
        </li>
        <li>
          {flowers[2].name} - {flowers[2].color}
        </li>
      </ul>
    </div>
  );
}

export default FlowerList;
