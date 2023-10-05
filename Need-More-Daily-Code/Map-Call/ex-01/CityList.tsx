import React, { useEffect, useState } from "react";
import citiesData from "./cities.json"; // Import your JSON file

function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities(citiesData.cities);
  }, []);

  return (
    <div>
      <h1>City Categories</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            {city.name} - {city.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
