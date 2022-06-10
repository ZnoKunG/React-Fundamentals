const customerName = "Kittaphot"
const age = 19
const address = "Lukkae"

const customer = {
    customerName,
    age,
    address,
    showData(){
        console.log("Customer Name : " + customerName)
        console.log("Customer Age : " + age)
        console.log("Customer Address : " + address)
    }
}

customer.showData();