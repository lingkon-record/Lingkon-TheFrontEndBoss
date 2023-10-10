// : A better way to use the Array’s push() method example ***********
// explain :  push() method of an array object allows you to add one or more elements to an array. If you want to pass an array to the push() method, you need to use apply() method as
let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];

[].push.apply(rivers, moreRivers);
console.log("rivers: ",rivers);
console.log("rivers, moreRivers : ",rivers.push(...moreRivers)); // not understand length


// : JavaScript spread operator and array manipulation

// part-1 Constructing array literal
let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log("Constructing array literal: ",chars); // ["A", "B", "C", "D"]

// part-2 Concatenating arrays ***********
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]

// part-3 : Copying an array
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]

// : JavaScript spread operator and strings
let bamboo = ['A', ...'BC', 'D'];
console.log("bamboo : ",bamboo); // ["A", "B", "C", "D"]