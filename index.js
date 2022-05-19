// Write your solution in this file!

const employee = {
  name: 'Lucy',
  streetAddress: '967 Froggy Village'
}; 

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {...employee,
     [key]:value};
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
};

function deleteFromEmployeeByKey(employee, key) {
  const employeeClone = Object.assign({}, employee);
  delete employeeClone[key];
  return employeeClone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
