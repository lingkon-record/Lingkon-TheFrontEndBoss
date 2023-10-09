// Constants
const gravity = 9.81; // Acceleration due to gravity on Earth (m/s^2)
let height = 1000;    // Initial height in meters
let time = 0;         // Initialize time to 0 seconds

// Calculate the time it takes to fall to the Earth's surface
while (height > 0) {
  // Calculate the distance fallen during the current time interval
  const distanceFallen = (gravity * Math.pow(time, 2)) / 2;

  // Update the height and time
  height -= distanceFallen;
  time += 0.01; // Increment time by 0.01 seconds (adjust for accuracy)

  // Prevent an infinite loop in case of errors or extreme conditions
  if (time > 100) {
    console.log("The object did not reach the ground within a reasonable time.");
    break;
  }
}

// Round the time to two decimal places
time = Math.round(time * 100) / 100;

console.log(`It takes approximately ${time} seconds to fall to the Earth's surface from a height of 1000 meters.`);
