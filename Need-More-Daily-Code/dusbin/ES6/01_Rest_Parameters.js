// ES6 provides a new kind of parameter so-called rest parameter that has a prefix of three dots
// A rest parameter allows you to represent an indefinite number of arguments as an array.
// Link : https://www.javascripttutorial.net/es6/javascript-rest-parameters/

function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}

console.log(sum(10,20));