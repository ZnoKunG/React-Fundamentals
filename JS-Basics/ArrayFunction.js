// Join
const data = [100, 200, 300]

console.log(data)

const result = data.join("\n") // break down ARRAY and convert to STRING (we can put other strings to join the members of array instead of , )
console.log(result)

// Concat
const data1 = [1, 2, 3]
const data2 = [4, 5, 6]

const alldata = data2.concat(data1)
console.log(alldata)

// Push (add element)
const data3 = [10, 20, 30]
data3.push(500)
console.log(data3)
data3.push(...[200,300])
console.log(data3)

// Pop (remove last element)
const data4 = [1, 3, 5]
data4.pop(data)
console.log(data4)

//Shift (remove first element)
const data5 = [2, 4, 6]
data5.shift()
console.log(data5)

//UnShift (add element to the front)
const data6 = [4, 6, 8]
data6.unshift(100)
console.log(data6)

//Splice (delete elements * splice(position, no of element to remove, (optional) added element from the removed position) *)
const data7 = [10, 20, 30, 40, 50, 60]
data7.splice(1, 4, 999)
console.log(data7)

//Slice (pull out data in the interval * slice(start, finish (not included!)) *)
const data8 = [100, 200, 300, 400, 500]
const data9 = data8.slice(1,4)
console.log(data9)