const Engineer = require("../lib/Engineer")
const Employee = require("../lib/Employee")

test("When the user inputs the Enginer git hub username", () => {
  const test = "jtiwana-git"
  const output = new Engineer("Jag", 2, "jtiwana@hotmail.com", test)

  expect(output.gitHub).toBe(test);
 
})

test("When the user inputs the Enginer git hub username", () => {
const test = "jtiwana-git"
  const output = new Engineer("Jag", 2, "jtiwana@hotmail.com", test)

  expect(output.getGitHub()).toBe(test);
  
})

test("Get role should return Engineer", () => {
  const role = "Engineer"
  const output = new Engineer("name", 2, "jtiwana@hotmail.com", 555555)

  expect(output.getRole()).toBe(role)

})