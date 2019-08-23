const express = require('express')

const employeesApi = require('../models/employees.js')

const employeesRouter = express.Router()

employeesRouter.get('/', (req, res) => {
    res.send(templateApi.getHelloWorldString())
  })

  module.exports = {
    employeesRouter
  }