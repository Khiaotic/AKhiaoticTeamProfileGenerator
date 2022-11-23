//page creation link
const roleGenerator = require("./src/roleGenerator");

//node modules
const inquirer = require("inquirer");
const fs = require("fs");

//link to team libraries
const Manager = require("./team_library/Manager");
const Engineer = require("./team_library/Engineer");
const Intern = require("./team_library/Intern");

///Generator Manager IOE (information of interest)///
const teamBuild = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the manager's name...",
          name: "name",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              console.log("I'm Sorry! Please enter a valid name...");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "please enter the manager's employee ID...",
          name: "id",
          default: defaultID,
        },
        {
          type: "input",
          message: "please enter the manager's email address...",
          name: "email",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              return console.log(
                "I'm Sorry! Please enter a valid email address..."
              );
            }
          },
        },
        {
          type: "input",
          message: "Please enter the manager's office number...",
          name: "officeNumber",
          validate: (value) => {
            if (value) {
              return true;
            } else {
              console.log("I'm Sorry! Please enter a valid office number...");
              return false;
            }
          },
        },
      ])

      //for each new client//
      .then(function ({ name, id, email, office }) {
        let manager = new Manager(name, id, email, office);
        let generator = new Generator();

        //uhhhhhhhhhh
      })
  );
};
//     inquirer.prompt([
//         //ask if client wants manager//
//        {
//         type: 'confirm',
//         message: "Would you like to add a manager?",
//         name: 'name',
//        },
//     ])
//         //if so THEN! allow client input "manager" info prompts execute//
// .then (({manager}) => {
