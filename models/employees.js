const mongoose = require ('./connection.js')

const employeeSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    title: String,
    hireDate: Date
})

const employeeCollection = mongoose.model('employee', employeeSchema)

const getAllEmployees = () => {
    return employeeCollection.find()
}

const getOneEmployee = (employeeId) => {
    return employeeCollection.findById(employeeId)
}

const addNewEmployee = (newEmployee) => {
    return employeeCollection.create(newEmployee)
}

const updateEmployee = (employeeId,updatedEmployee) => {
    return employeeCollection.findByIdAndUpdate({employeeId},updatedEmployee)
}

const deleteEmployee = (employeeId) =>{
    return employeeCollection.findByIdAndDelete({employeeId})
}

module.exports = {
    getAllEmployees,
    getOneEmployee,
    addNewEmployee,
    updateEmployee,
    deleteEmployee 
}