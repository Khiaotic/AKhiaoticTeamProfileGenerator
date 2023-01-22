//page creation link
// const roleGenerator = require("./src/roleGenerator");

//node modules
const inquirer = require("inquirer");
const fs = require("fs");

//link to team libraries
const Manager = require("./team_library/Manager");
const Engineer = require("./team_library/Engineer");
const Intern = require("./team_library/Intern");
const Employee = require("./team_library/Employee");

const Employees = [];

let defaultID = 1;


function initApp () {
    generateHTML();
    addEmployee();
}

function addEmployee() {
  inquirer
    .prompt([
      {
        message: "Enter employee's name",
        name: "name",
      },
      {
        type: "list",
        message: "Select employee's role",
        choices: ["Engineer", "Manager", "Intern"],
        name: "role",
      },
      {
        message: "Enter employee's email address",
        name: "email",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let jobTitle = "";
      if (role === "Engineer") {
        jobTitle = "GitHub username";
      } else if (role === "Intern") {
        jobTitle = "school name";
      } else {
        jobTitle = "office number";
      }
      inquirer.prompt([
        {
          message: `Enter employee's ${jobTitle}`,
          name: "jobTitle",
        },
        {
            type: 'list',
            message: "Are you adding more employees?",
            choices:[
                "YES",
                "NO"
            ],
            name:  'moreEmployees'
        }])
        .then(function({jobTitle, moreEmployees}) {
            let newEmployee;
            if (role === "Engineer") {
                newEmployee = new Engineer  (name, id, email, jobTitle);
            } else if(role === "Intern") {
                newMember = new Intern (name, id, email, jobTitle);
            } else {
                newEmployee = new Manager(name, id, email, jobTitle);
            }
            Employees.push(newEmployee);
            addHtml(newEmployee)
            .then(function(){
                if(moreEmployees === 'yes') {
                    addEmployee();
                } else  {
                    generateHTML();
                }
            });
            
        });
    });
}

function mainHtml () {
    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
        <title>A Khiaotic Team Profile Generator</title>
        <!-- CSS only -->
        <!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">  -->
        <link src="/dist/CSS/teamstyle.css" />
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  blurple: "#9b5de5",
                  pinky: "#F15BB5",
                  yellow: "#FEE440",
                  lightblue: "#00BBF9",
                  seafoam: "#00F5D4",
                },
              },
            },
          };
        </script>
      </head>
      <body>
        <div
          class="bg-blurple p-8 text-center text-3xl text-white max-width font-poppins font-bold rounded-md"
        >
          Khiaotic's Team Profile Generator
        </div>
    
        <main class = "container my-12 mx-auto px-4 md:px-12">
          <!-- CONTAINER: manager card-->
          <div class="p-8">`;
          fs.writeFile('./dist/liveView.html', html, function(err) {
            if (err) {
                console.log(err);
            }
          });
          console.log("initiate");
        }
function addHtml (employee) {
    return new Promise(function(resolve, reject){
let name = employee.getName();
const role = employee.getJobTitle();
const id = employee.getId();
const email = employee.getEmail();
let data ="";
if (role === "Engineer") {
    const gitHub = employee.getGithub();
    data =`<div class="pb-8 w-60 bg-pinky rounded-xl "id="teamContainer" > 
    <!--image-->
    <div class="font-bold text-center text-large rounded-xl">${name}</div>
    <img class="object-none object-center h-40 rounded-xl" src="https://placebeard.it/639x360">
    <div class="font-bold text-center text-large rounded-xl">Engineer</div>
    <ul class="pl-2 pb-2" id="jobTitle-group">
      <li>ID:${id}</li>
      <li>Email Address:${email}</li>
      <li>GitHub:${gitHub}</li>
    </ul>
 
  </div>
</div>`;
} else if (role ==="Intern") {
    const school = employee.getSchool();
    data=`<div class="pb-8 w-60 bg-lightblue rounded-xl "id="teamContainer" > 
    <!--image-->
    <div class="font-bold text-center text-large rounded-xl">${name}</div>
    <img class="object-none object-center h-40 rounded-xl" src="https://placebeard.it/641x360">
    <div class="font-bold text-center text-large rounded-xl">Intern</div>
    <ul class="pl-2 pb-2" id="jobTitle-group">
      <li>ID:${id}</li>
      <li>Email Address:${email}</li>
      <li>School:${school}</li>
    </ul>
 
  </div>
</div>`;
} else {
    const officeNumber  = employee.getOfficeNumber();
    data = `<div class="pb -8 w-60 bg-yellow rounded-xl "id="teamContainer" > 
    <!--image-->
    <div class="font-bold text-center text-large rounded-xl">${name}</div>
    <img class="object-none object-center h-40 rounded-xl" src="https://placebeard.it/640x360">
    <div class="font-bold text-center text-large rounded-xl">Manger</div>
    <ul class="pl-2 pb-2" id="jobTitle-group">
      <li>ID:${id}</li>
      <li>Email Address:${email}</li>
      <li>Office #:${officeNumber}</li>
    </ul>
 
  </div>
</div>`
}
console.log("so the company is growing, changing, and adapting");
fs.appendFile("./dist/liveView.html", data, function (err) {
    if (err)
 {
    return reject(err);
 };
return resolve();
 });
});
}

function generateHTML () {
// const html =` </main>
// </body>
// </html>`;
// fs.appendFile("./dist/liveView.html", html, function (err){
//     if (err) {
//         console.log(err);

//     };
// });
console.log("ya done!");
}
    


initApp();
