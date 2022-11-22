const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github){
        //parent//
        super(name, id, email);
        this.github = github;
    }

    ///getFunctions///
    getGithub(){
        return this.github;
    }
    getJobTitle(){
        return "Engineer";
    }
}

module.exports = Engineer;