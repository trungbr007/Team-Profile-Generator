
const Employee = require ('./Employee.js')
class Employee{
    constructor(name,id,email){
        this.name=name;
        this.id=id;
        this.email=email;
    }

getName (){
    return this.name;
};
getId(){
    return this.id;
};

getEmail(){
    return this.email;
}

GeolocationPosition(){
    return "Employee"
}
}

module.exports= Employee;