// Your code here

function createEmployeeRecord(record) {
  let employee = {}
  let employee.firstName = record[0]
  let employee.familyName = record[1]
  let employee.title = record[2]
  let employee.payPerHour = record[3]
  return employee
}
