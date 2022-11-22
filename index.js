const { default: inquirer } = require("inquirer");
// const inquirer = require(inquirer)
const fs = require("fs");
const Manager = require("./team_library/Manager")
const Engineer = require("./team_library/Engineer")
const Intern= require("./team_library/Intern")


///Generator IOE (information of interest///
const teamBuild = () => {
    inquirer .prompt([
        //ask if client wants manager//
       {
        type: 'confirm',
        message: "Would you like to add a manager?",
        name: 'manager',
       }, 
    ])
        //THEN! allow client input "manager" info prompts execute//
.then (({manager})) => {
        if(manager) {
            inquirer.prompt([
                {
                type:'input',
                message: "please enter the manager's name...",
                name: 'manger',
                validate: (value) => {if (value){return true}
        else {return console.log("I'm Sorry! Please enter a valid name...")}}
            }
    ])}
    }
}