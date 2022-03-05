let Manager = require("../lib/Manager")


describe("Getting the manager Office number", () => {
it("Office Number"), () => {
  const officeNo = "1123"
  expect(Manager.officeNumber).tobe(officeNo)
}
})



describe("Get role", () => {
test("getRole", () => {
  const Role = "Manager";

  expect(Manager.getRole()).toEqual("Manager");
}); 
})