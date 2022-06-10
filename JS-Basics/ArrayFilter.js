// Array Filter
const data = [
    {agentName : "Zno", salary : 25000, department : "Programmer"},
    {agentName : "Bang", salary : 25000, department : "Lawyer"},
    {agentName : "Phun", salary : 15000, department : "Gamer"},
    {agentName : "Peem", salary : 30000, department : "Doctor"},
    {agentName : "Mix", salary : 30000, department : "Programmer"},]

const result = data.filter(e =>  e.salary > 20000 && e.department == "Programmer")

console.log(result);