const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");




function Questionmanager() {

  inquirer.prompt([
    {
    type:"input",
    name: "name",
    message:"Manager: What is the name?"
    }
  
  
  ]).then(answers =>{console.log(answers)})


}

// function for manager.inquirer
// .then create an new manager


// inquirer.prompt([
//     {
//     type:"input",
//     name: "name",
//     message:"Manager: What is the name?"
//     },
//     {
//     type: "input",
//     name: "managerId",
//     message: "Manager: What is the employee ID?"
//     },
//     {
//     type: "input",
//     name: "emailManager",
//     message: "Manager: What is the email address?",
//     },
//     {
//     type: "input",
//     name: "officeNumber",
//     message: "Manager: What is the office number?"
//     },
//     {
//     type: "list",
//     name: "getRoles",
//     Message: "What role do you want to add?",
//     Choices: ["Engineer", "Intern", "Build My Team"],
//     },
//     {
//     type:"input",
//     name: "name",
//     message:"Engineer: What is the name?"
//     },
//     {
//     type: "input",
//     name: "EngineerId",
//     message: "Engineer: What is the employee ID?"
//     },
//     {
//     type: "input",
//     name: "emailEngineer",
//     message: "Engineer: What is the email address?",
//     },
//     {
//     type: "input",
//     name: "GithubEngineer",
//     message: "Engineer: What is the Git Hub username?",
//     },
//     {
//     type:"input",
//     name: "name",
//     message:"Intern: What is the name?"
//     },
//     {
//     type: "input",
//     name: "InternId",
//     message: "Intern: What is the employee ID?"
//     },
//     {
//     type: "input",
//     name: "emailIntern",
//     message: "Intern: What is the email address?",
//     },
//     {
//     type: "input",
//     name: "School",
//     message: "Name of School?",
//     },
// ]);

// }



// function choose roles or create team

// functionS for each roles and .then

// function create team 


// this switch to choose roles



function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt().then((answers) =>{
      console.log(answers);

    })
}

init()