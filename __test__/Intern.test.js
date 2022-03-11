const Intern = require("../lib/Intern")
const Employee = require("../lib/Employee")

test("When the user inputs the intern's school", () => {
  const test = "Uni"
  const output = new Intern("Jag", 2, "jtiwana@hotmail.com", test)

  expect(output.school).toBe(test);
 
})

test("When the user inputs the intern's school", () => {
const test = "Uni"
  const output = new Intern("Jag", 2, "jtiwana@hotmail.com", test)

  expect(output.getSchool()).toBe(test);
  
})

test("Get role should return Intern", () => {
  const role = "Intern"
  const output = new Intern("name", 2, "jtiwana@hotmail.com", 555555)

  expect(output.getRole()).toBe(role)

})
