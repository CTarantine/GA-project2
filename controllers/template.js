const express = require('express')

const locationApi = require('../models/location.js')
const employeesApi = require('../models/employees.js')
const reviewsApi = require('../models/reviews.js')

const locationRouter = express.Router()
const employeesRouter = express.Router()
const reviewsApiRouter = express.Router()
const homeRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
templateRouter.get('/', (req, res) => {
  res.send(templateApi.getHelloWorldString())
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  templateRouter
}
