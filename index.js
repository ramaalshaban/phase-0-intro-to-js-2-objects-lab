const employee = {name: "Sam",
 streetAddress: "11 Broadway",};

function updateEmployeeWithKeyAndValue(employee, key, value){
const newEmp = {...employee}
newEmp[key] = value
return newEmp

}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}


function deleteFromEmployeeByKey(employee, key){
   const  newEmp = {...employee}
    delete newEmp[key]
    return newEmp
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}

// const employee = {name: "Sam",
// streetAddress: "11 Broadway",};

// function updateEmployeeWithKeyAndValue(employee,key,value) {
//     const newObj ={...employee};
//     newObj.name = "Sam";
//     newObj.streetAddress = "11 Broadway";
//     return newObj;
// }
// function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
//     employee.streetAddress= "12 Broadway";
//     return employee;
// }
// function deleteFromEmployeeByKey(employee,key,value) {
//     const newEmployee = {...employee};
//     delete newEmployee.name;
//     return newEmployee;
// }
// function destructivelyDeleteFromEmployeeByKey(employee,key,value) {
//     delete employee.name;
//     return employee;
// }