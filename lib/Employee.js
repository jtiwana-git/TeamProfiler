class Employee {
    constructor(id, name, email) {
    this.id = id;
    this.name = name
    this.email = email
    }

    getName(){
        return this.name
    }
    getid() {
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee";
    }

}




module.exports = Employee;