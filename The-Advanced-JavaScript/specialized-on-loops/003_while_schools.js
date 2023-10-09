// List of schools
const schools = [
  "School A",
  "School B",
  "School C",
  "School D",
  "School E",
];

// Initialize an index to track the current position in the list
let index = 0;

// Use a while loop to iterate through the list
while (index < schools.length) {
  // Get the school name at the current index
  const schoolName = schools[index];

  // Print the school name
  console.log("School: " + schoolName);

  // Increment the index to move to the next school in the list
  index++;
}
