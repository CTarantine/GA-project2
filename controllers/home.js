const express = require('express')

// const locationApi = require('../models/location.js')
// const employeesApi = require('../models/employees.js')
// const reviewsApi = require('../models/reviews.js')

// const locationRouter = express.Router()
// const employeesRouter = express.Router()
// const reviewsRouter = express.Router()
const homePageRouter = express.Router()


homePageRouter.get('/', (req, res) => {
  res.render('home/home')
})


module.exports = {
  homePageRouter
}
