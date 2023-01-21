//page creation link
// const roleGenerator = require("./src/roleGenerator");

//node modules
const inquirer = require("inquirer");
const fs = require("fs");

//link to team libraries
const Manager = require("./team_library/Manager");
const Engineer = require("./team_library/Engineer");
const Intern = require("./team_library/Intern");

const Employees = [];

let defaultID = 1;

function initProfile() {
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
            // Employees.push(newEmployee);
            // addHtml(newEmployee)
            // .then(function(){
            //     if(moreEmployees === 'yes') {
            //         addEmployee();
            //     } else  {
            //         GenerateHTML();
            //     }
            // })
            console.log("okay,but no")
        })
    });
}

initProfile();
