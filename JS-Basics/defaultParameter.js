// Default Parameter
GetDataCustomer = (customerName, customerAddress = "BKK") =>{ // Define default parameter (if user inputs address, the address will change from the default param)
    const address = `Customer Name : ${customerName}
    Address : ${customerAddress}`
    return address
}

console.log(GetDataCustomer("Kittaphot", "Kanchanaburi"));
console.log(GetDataCustomer("Jolene"));