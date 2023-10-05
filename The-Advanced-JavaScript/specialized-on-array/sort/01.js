// The sort() method of Array instances sorts the elements of an array in
//  place and returns the reference to the same array, now sorted

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // reverse walk
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]