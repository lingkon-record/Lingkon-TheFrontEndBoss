// Simulated function to fetch weather data for a city
function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call with setTimeout
    setTimeout(() => {
      const weatherData = {
        city,
        temperature: Math.floor(Math.random() * 30 + 10), // Random temperature for demonstration
        condition: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)], // Random condition
      };

      // Simulate occasional errors
      if (Math.random() < 0.2) {
        reject(`Failed to fetch weather data for ${city}`);
      } else {
        resolve(weatherData);
      }
    }, Math.random() * 2000); // Simulate variable response times
  });
}

// List of cities to fetch weather data for
const cities = ['New York', 'Los Angeles', 'Chicago', 'Miami', 'Denver'];

// Fetch weather data for each city asynchronously
const weatherPromises = cities.map((city) => {
  return fetchWeather(city)
    .then((data) => {
      console.log(`Weather in ${data.city}: ${data.temperature}°C and ${data.condition}`);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Wait for all promises to resolve or reject
Promise.all(weatherPromises)
  .then(() => {
    console.log('All weather data fetched successfully.');
  })
  .catch((error) => {
    console.error('Some weather data requests failed:', error);
  });
