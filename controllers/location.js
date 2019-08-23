const express = require('express')

const locationApi = require('../models/location.js')

const locationRouter = express.Router()

locationRouter.get('/', (req, res) => {
    res.send(templateApi.getHelloWorldString())
  })

  module.exports = {
    locationRouter
  }