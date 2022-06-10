const colors = ["red", "green", "blue"]

// indexOf (not found will return -1)
const redIndex = colors.indexOf("red")
console.log(redIndex);
const index = colors.indexOf("yellow")
console.log(index);

// find (not found will return undefined)
const color1 = colors.find(element => element === "green")
console.log(color1);
const color2 = colors.find(element => element === "yellow")
console.log(color2);

// findIndex (not found will return -1)
const color1Index = colors.findIndex(element => element === "red")
console.log(color1Index);