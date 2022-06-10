// Destructuring

// Array
const colors = ["green", "red", "blue"]
const green = colors[0]
const red = colors[1]
const blue = colors[2]

// Destructuring
const [g, r, b] = colors
console.log(g);
console.log(r);
console.log(b);

const [,,blueColor] = colors // In case only want some value

console.log(blueColor);

// Object Destructuring

const product = {
    productName : "Computer",
    price : 30000,
    stock : 10,
}

const {productName : _name, price, stock} = product // For destructuring OBJECT we use curly brackets ! ** property : variable (name) **
console.log(price);
