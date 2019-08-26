const express = require('express')

const employeesApi = require('../models/employees.js')

const employeesRouter = express.Router()


employeesRouter.get('/', (req, res) => {
    employeesApi.getAllemployeess()
        .then(employees => {
            res.render('/employees/allEmployees', { employees })
        })
})

employeesRouter.get('/new', (req, res) => {
    res.render('employees/newEmployee')
})

employeesRouter.get('/:employeeId/editEmployee', (req, res) => {
    employeesApi.getOneEmployee(req.params.employeeId)
        .then(employee => {
            res.render('employees/editEmployee', { employee })
        })
})

employeesRouter.get('/:employeeId', (req, res) => {
    employeesApi.getOneEmployee(req.params.employeeId)
        .then(employee => {
            res.render('employees/employee', { employee })
        })
})

employeesRouter.post('/', (req, res) => {
    employeesApi.addNewemployee(req.body)
        .then(() => {
            res.redirect('/employees')
        })
})

employeesRouter.put('/:employeeId', (req, res) => {
    employeesApi.updateEmployee(req.params.employeeId, req.body)
        .then(() => {
            res.redirect('/employees')
        })
})

employeesRouter.delete('/:employeeId', (req, res) => {
    employeesApi.deleteEmployee(req.params.employeeId)
        .then(res.redirect('/employees'))
})

  module.exports = {
    employeesRouter
  }