const express = require('express')

const reviewsApi = require('../models/reviews.js')

const reviewsRouter = express.Router()

reviewsRouter.get('/', (req, res) => {
    res.send(templateApi.getHelloWorldString())
  })

  module.exports = {
    reviewsRouter
  }