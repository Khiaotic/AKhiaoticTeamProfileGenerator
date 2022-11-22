class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //function//
    getName() {
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getJobTitle(){
        return "Employee";
    }
}

module.exports = Employee; 