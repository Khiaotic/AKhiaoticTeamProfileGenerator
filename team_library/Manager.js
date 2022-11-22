const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber ) {
      //parent constructor//
      super(name, id, email);
      this.officeNumber = officeNumber;
    }

    //getFunctions//
    getOfficeNumber() {
        return this.officeNumber;
    }
    getJobTitle() {
        return "Manager";
    }
}

module.exports = Manager; 