// Array Reduce

const data = [10, 20, 30, 40]

const mapData = data.map(e => 100) // return array with the same number of elements (only change values)
console.log(mapData);

const filterData = data.filter(e => e > 20)
console.log(filterData);

// array.reduce((value(default), element) => {}, default) ==> value = 0
const sum = data.reduce((value, e) => {
    console.log(`value : ${value}`);
    const total = e + value
    return total
}, 0)

console.log(`sum : ${sum}`);

const cart = [
    {productName: "Bag", price : 1000},
    {productName: "Book", price : 500},
    {productName: "Camera", price : 5000},
]

const sumPrice = cart.reduce((value, e) => e.price + value, 0)

console.log(`Sum Price : ${sumPrice}`);