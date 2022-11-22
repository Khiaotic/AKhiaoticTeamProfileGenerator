const { default: inquirer } = require("inquirer");
// const inquirer = require(inquirer)
const fs = require("fs");


///Generator IOE (information of interest///
const teamBuild = () => {
    inquirer.prompt([
        //ask if client wants manager//
       {
        type: 'confirm',
        message: "Would you like to add a manager?",
        name: 'manager',
       }, 
    ])
        //THEN! allow client input "manager" info prompts execute//
}