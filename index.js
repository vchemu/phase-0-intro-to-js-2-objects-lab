const employee = {
  name: 'Val',
  streetAddress: '15 Broadway'
}
employee.name = 'Sam';

  
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = Object.assign({}, employee, {[key]: value});
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = Object.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;
}


const destructivelyDeleteFromEmployeeByKey = (object, key) => {
  delete employee[key];
  return employee;
}