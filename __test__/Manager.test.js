const Manager = require("../lib/Manager")
const Employee = require("../lib/Employee")

test("When the user inputs the manager's Office Number", () => {
  const officeNo = 159959999
  const output = new Manager("Jag", 2, "jtiwana@hotmail.com", officeNo)

  expect(output.officeNumber).toBe(officeNo);
 
})

test("When the user inputs the manager's Office Number", () => {
  const officeNo = 159959999
  const output = new Manager("Jag", 2, "jtiwana@hotmail.com", officeNo)

  expect(output.getOfficeNumber()).toBe(officeNo);
  
})

test("Get role should return manager", () => {
  const role = "Manager"
  const output = new Manager("name", 2, "jtiwana@hotmail.com", 555555)

  expect(output.getRole()).toBe(role)

})
