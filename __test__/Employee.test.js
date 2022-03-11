const { TestWatcher } = require("jest")
const Employee = require("../lib/Employee")

test("Can set name in Constructor", () => {
    const name = "Sara"
    const output = new Employee(name)

    expect(output.name).toBe(name)
})

test("Can set id in Constructor", () => {
    const id = 2
    const output = new Employee("Jag", id)

    expect(output.id).toBe(id)
})

test("Can set email in Constructor", () => {
    const email = "jtiwana@hotmail.com"
    const output = new Employee("Jag", 2, email)

    expect(output.email).toBe(email)
})



test("Through get name", () => {
    const name = "Sara"
    const output = new Employee(name)

    expect(output.getName()).toBe(name)
})

test("Through get id", () => {
    const id = 2
    const output = new Employee("Jag", id)

    expect(output.getId()).toBe(id)
})

test("Through get email", () => {
    const email = "jtiwana@hotmail.com"
    const output = new Employee("Jag", 2, email)

    expect(output.getEmail()).toBe(email)
})

test("Through get role", () => {
    const role = "Employee"
    const output = new Employee("Jag", 2, "jtiwana@hotmail.com")

    expect(output.getRole()).toBe(role)
})


