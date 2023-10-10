function getScores() {
    return [70, 80, 90];
 }
 let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

//
function getScores2() {
    return [70, 80, 90];
 }

let [x2, y2 ,...args] = getScores2();
console.log(x2); // 70
console.log(y2); // 80
console.log(args); // [90, 100]