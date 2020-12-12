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
  let newEvent = {type: "TimeIn", hour: timeIn.substring(11, 15), date: timeIn.substring(0,10)}
    employee.timeInEvents.push(newEvent)
    return employee
}
