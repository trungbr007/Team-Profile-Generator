const Employee = require ('./Employee.js')

class Intern extends Employee {
    constructor (name, id, email,school){
        super(name,id,email);
        this.school= school;
    }
    getPosition(){
        return "Intern"
    }

    getSchool(){
        return this.school
    }
}