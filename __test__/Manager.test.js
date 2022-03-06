let Manager = require("../lib/Manager")

test.todo("When the user inputs the manager's Office Number"), () => {
  const officeNo = "0159959999" 
    
  expect(Manager({officeNumber})).tobe(officeNo)

}
