const express = require('express')

const homePageRouter = express.Router()

homePageRouter.get('/', (req, res) => {
  res.render('home/home')
})

module.exports = {
  homePageRouter
}
