// Rest Parameter
sum = (x,y) => x + y

console.log("sum : " + sum(1,2)); // number of parameter is limited by function definition

arraySum = (...numberArray) =>{
    let sum = 0
    for(let n of numberArray) sum += n
    return sum
}

console.log(arraySum(100, 200));
console.log(arraySum(100, 200, 300, 400)); // any number of array is work!!