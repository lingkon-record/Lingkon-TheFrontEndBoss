const numbers = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 2
numbers.splice(2, 2);

console.log(numbers); // Output: [1, 2, 5]


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]