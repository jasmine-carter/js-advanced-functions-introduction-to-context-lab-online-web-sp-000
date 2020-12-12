// Your code here

function createEmployeeRecord(record) {
  let employee = {}
   employee.firstName = record[0]
   employee.familyName = record[1]
   employee.title = record[2]
   employee.payPerHour = record[3]
   employee.timeInEvents = []
   employee.timeOutEvents = []
  return employee
}

function createEmployeeRecords(records) {
  return records.map(createEmployeeRecord)
}

function createTimeInEvent(employee, timeIn) {
  let newEvent = {type: "timeIn", hour: timeIn}
  console.log(newEvent)
   employee.timeInEvents << newEvent
}
