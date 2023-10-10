// for...of statement to iterate over iterable objects.
/* syntax
for (variable of iterable) {
   // ...
}

*/

let scores = [80,90,100]

for (let score of scores) {
    score = score + 5
    console.log(score);

}


// next :
let names = ['riya', 'pakhi', 'sadia'];

for (const [index, persons] of names.entries()) {
    console.log(`${persons} is at index ${index}`);
}

// : In-place object destructuring with for…of
// পুনরাবৃত্তি করা 
const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

let sum = 0;
for (const {score} of ratings) {
    sum += score;
}

console.log(`Total scores is: ${sum}`); // 14