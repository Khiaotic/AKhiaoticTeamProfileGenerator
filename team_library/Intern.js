const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school){
        //parent//
        super(name, id, email);
        this.school = school;
    }

    ///getFunctions///
    getSchool(){
        return this.school;
    }
    getJobTitle(){
        return "Intern";
    }
}

module.exports = Intern;