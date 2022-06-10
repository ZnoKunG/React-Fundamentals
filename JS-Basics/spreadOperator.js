// Spread Operator

console.log("---Without Spread Operator---");
const newArray1 = [100, 200, 300]
const data1 = [10, 20, newArray1]

console.log(data1);
console.log("array length : " + data1.length);

console.log("---With Spread Operator---");
const newArray2 = [100, 200, 300]
const data2 = [10, 20, ...newArray2]

console.log(data2);
console.log("array length : " + data2.length);

// Push Method
console.log("---With Push Method and Spread Operator---");
const colors = ["green", "yellow", "white"]
const allColors = ["red", "purple", ...colors]

const newColors = ["black", "grey"]

allColors.push(...newColors)

console.log(allColors);


