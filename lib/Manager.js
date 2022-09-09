// Import parent class
const Employee = require('./Employee')

// manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(id, name, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager;