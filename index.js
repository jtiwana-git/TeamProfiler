const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");


const Ateam = []

const managerQuestions = () => {

  inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
    },
    {
    type: "input",
    name: "id",
    message: "What is the team manager's employee id?",
    },
    {
    type: "input",
    name: "email",
    message: "What is the team manager's email?",
    validate: (validEmail) => {
      const valid = validEmail.match(/\S+@\S+\.\S+/);
      if (valid) {
        return true
         
      } else {
        return "Please enter a valid email address";
      }
    }
    
    },
    {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
    }
  
  ])
  .then((managerAnswers) => {
    const Mang = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
    Ateam.push(Mang);
    choose();
  })

}

managerQuestions()

const engineerQuestions = () => {

  inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
    },
    {
    type: "input",
    name: "id",
    message: "What is the engineer's employee id?",
    },
    {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
    validate: (validEmail) => {
      const valid = validEmail.match(/\S+@\S+\.\S+/);
      if (valid) {
        return true
         
      } else {
        return "Please enter a valid email address";
      }
    }
    },
    {
    type: "input",
    name: "gitHub",
    message: "What is the engineer's github username?",
    },
  
  ])
  .then((engineerAnswers) => {
    const eng = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub)
    Ateam.push(eng);
    choose()
  })

}

const internQuestions = () => {

  inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
    },
    {
    type: "input",
    name: "id",
    message: "What is the intern's employee id?",
    },
    {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
    validate: (validEmail) => {
      const valid = validEmail.match(/\S+@\S+\.\S+/);
      if (valid) {
        return true
         
      } else {
        return "Please enter a valid email address";
      }
    }
    },
    {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
    },
  
  ])
  .then((internAnswers) => {
    const inter = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
    Ateam.push(inter);
    choose();
  })

}



const choose = () => {

  inquirer.prompt([
    {
      type: "list",
      name: "select",
      message: "Do you want to add a member or generate the team?",
      choices: ["Engineer", "Intern", "Create the team"],
    }
  ])
    .then((answers) =>{
      switch (answers.select){
        case "Engineer": 
        engineerQuestions()
        break;
        case "Intern":
          internQuestions()
        break;
        default:
          buildTeam()
        


      }

    })
  
}

function buildTeam (){
  fs.writeFileSync(path.join('./dist/template.html'), generateHTML(Ateam), "utf-8");

}