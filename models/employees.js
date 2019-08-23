const mongoose = require ('./connection.js')

const employeeSchema = new mongoose.Schema ({
    name: String,
    title: String,
    location: String
})

const employeeCollection = mongoose.model('employee', employeeSchema)

const getAllEmployees = () => {
    return employeeCollection.find()
}

const getEmployee = (employeeId) => {
    return employeeCollection.findById(employeeId)
}

const addNewEmployee = (newEmployee) => {
    return employeeCollection.insertMany(newEmployee)
}

const updateEmployee = (employeeId,updatedEmployee) => {
    return employeeCollection.findByIdAndUpdate(employeeId,updatedEmployee)
}

const deleteEmployee = (id) =>{
    return employeeCollection.findByIdAndDelete({_id:id})
}

module.exports = {
    getAllEmployees,
    getEmployee,
    addNewEmployee,
    updateEmployee,
    deleteEmployee 
}