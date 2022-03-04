const Employee = require("../lib/Employee")

function generateHTML(data) {
    const managerCard = (manager) =>{
        return ` <div class="flexbox">
        <div class="main">
            <h5 class="name">${manager.name}</h5>
            <h5 class="position"><i class="fa-solid fa-mug-saucer"></i> ${manager.getRole()}</h5>
        </div>
        <div class="block">
            <h6 class="title">ID: </h6><a>${manager.id}</a>
        </div>
        <div class="block">
            <h6 class="title">Email: </h6><a href="mailto:${manager.email}">${manager.email}</a>
        </div>
        <div class="block">
            <h6 class="title">Office: </h6><a>${manager.officeNumber}</a>
        </div>
</div>`
    }


const engineerCard = (engineer) => {
    return ` <div class="flexbox">
    <div class="main">
        <h5 class="name">${engineer.name}</h5>
        <h5 class="position"><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h5>
    </div>
    
    <div class="block">
        <h6 class="title">ID: </h6><a>${engineer.id}</a>
    </div>
    
    <div class="block">
        <h6 class="title">Email: </h6><a href="mailto:${engineer.email}">${engineer.email}</a>
    </div>
    
    <div class="block">
        <h6 class="title">GitHub: </h6> <a href="https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a>
    </div>
</div>`
} 

const internCard = (intern) =>{
    return `<div class="flexbox">
    <div class="main">
        <h5 class="name">${intern.name}a</h5>
        <h5 class="position"><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h5>
    </div>
    
    <div class="block">
        <h6 class="title">ID: </h6><a>${intern.id}</a>
    </div>
    
    <div class="block">
        <h6 class="title">Email: </h6><a href="mailto:${intern.email}">${intern.email}</a>
    </div>
        
    <div class="block">
       <h6 class="title">School: </h6> <a>${intern.school}y</a>
    </div>
</div>

`
}

const structure = [];
structure.push(data.filter(employee => employee.getRole() === "Manager").map(manager => managerCard(manager)))
structure.push(data.filter(employee => employee.getRole() === "Engineer").map(engineer => engineerCard(engineer)))
structure.push(data.filter(employee => employee.getRole() === "Intern").map(intern => internCard(intern)))

return structure.join("")

}

module.exports = data => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TEAM PROFILE GENERATOR</title>
    </head>
    
    <link rel="stylesheet" type="text/css" href="./style.css"/>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <body>
        
    <header>
        <h1>MY TEAM</h1>
    </header>
    
    
    <div class="container"> 
    ${generateHTML(data)}
    </div>


</body>
</html>`
};

