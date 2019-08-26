const express = require('express')

const reviewsApi = require('../models/reviews.js')

const reviewsRouter = express.Router()


reviewsRouter.get('/', (req, res) => {
    reviewsApi.getAllReviews()
        .then(reviews => {
            res.render('reviews/allReviews', { reviews })
        })
})

reviewsRouter.get('/new', (req, res) => {
    res.render('reviews/createReview')
})

reviewsRouter.get('/:reviewId/editReview', (req, res) => {
    reviewsApi.getOneReview(req.params.reviewId)
        .then(review => {
            res.render('reviews/editReview', { review })
        })
})

reviewsRouter.get('/:reviewId', (req, res) => {
    reviewsApi.getOneReview(req.params.reviewId)
        .then(location => {
            res.render('reviews/reviews', { location })
        })
})

reviewsRouter.post('/', (req, res) => {
    reviewsApi.addNewReview(req.body)
        .then(() => {
            res.redirect('/reviews')
        })
})

reviewsRouter.put('/:reviewsId', (req, res) => {
    reviewsApi.updateReview(req.params.reviewId, req.body)
        .then(() => {
            res.redirect('/reviews')
        })
})

reviewsRouter.delete('/:reviewId', (req, res) => {
    reviewsApi.deleteReview(req.params.reviewId)
        .then(res.redirect('/reviews'))
})

  module.exports = {
    reviewsRouter
  }