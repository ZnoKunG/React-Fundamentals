// For Loop, ForEach, ForOf

const data1 = [10, 20, 30, 40, 50]

/*for(let index = 0; index < data1.length; index++){
    if (data1[index] >= 30) return
    console.log(`At position ${index} : ` + data1[index])
}*/

//forEach
const data2 = [1, 2, 3, 4, 5]
data2.forEach(element => {
    if (element < 3){
        console.log("The number below is less than 3")
        return
    }
    console.log(element);
});

//ForOf
const data3 = [2, 4, 5, 8, 9]
for (const element of data3){
    if (element % 2 != 0) return
    console.log(`Element = ${element}`);
}