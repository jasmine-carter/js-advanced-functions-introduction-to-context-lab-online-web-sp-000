// Your code here

function createEmployeeRecord(record) {
  let employee = {}
   employee.firstName = record[0]
   employee.familyName = record[1]
   employee.title = record[2]
   employee.payPerHour = record[3]
  return employee
}
