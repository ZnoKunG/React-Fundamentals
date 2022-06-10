// Block Scope

// Conventional

// use var will make x, y be global variables (accessible from outside the bracket)
var x = 10
if (x === 10){
    var y = 500
    console.log("y = " + y);
}
console.log("y = " + y); // normally y should not be accessed from outside IF statement.

if (x === 10){
    let y = 500
    console.log("y = " + y);
}
//console.log("y = " + y); this line will get the error (cannot access through block scope of IF statement)

const x = 50
// x = 100 this will get the error (const variable is unchangable)
console.log(x);