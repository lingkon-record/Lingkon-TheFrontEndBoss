const cities = [
  { name: 'New York', population: 8419600 },
  { name: 'Los Angeles', population: 3980808 },
  { name: 'Chicago', population: 2716000 },
];

for (const { name, population } of cities) {
  console.log(`City: ${name}, Population: ${population}`);
}
