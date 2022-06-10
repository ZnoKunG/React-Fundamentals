// Array Map

const numbers = [10, 20, 30, 40, 50]

const result1 = numbers.map(e => e*2)
console.log("Array Map : " + result1);

const data = ["rainy", "sunny", "storm", "windy", "breeze", "fog"]

const result2 = data.map((e,i) =>{
    return `Day ${i+1} : Weather is ${e}`
})

console.log(result2);

// Mapping Object Array
const data2 = [
    {day:"10/06/2022", weather:"Sunny", temp:28},
    {day:"11/06/2022", weather:"Windy", temp:25},
    {day:"12/06/2022", weather:"Cold", temp:22}]

const weatherResult = data2.map(e => {
    return e.weather
})

console.log(weatherResult)

