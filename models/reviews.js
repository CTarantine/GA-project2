const mongoose = require ('./connection.js')

const reviewSchema = new mongoose.Schema ({
    name: String,
    date: Date,
    locationAddress: String,
    review: String
})

const reviewCollection = mongoose.model('review',reviewSchema)

const getAllReviews = () => {
    return reviewCollection.find()
}

const getOneReview = (reviewId) => {
    return reviewCollection.findById(reviewId)
}

const addNewReview = (newReview) => {
    return reviewCollection.create(newReview)
}

const updateReview = (reviewId,updatedReview) => {
    return reviewCollection.findByIdAndUpdate ({reviewId},updatedReview)
}

const deleteReview = (reviewId) =>{
    return reviewCollection.findByIdAndDelete({reviewId})
}

module.exports = {
    getAllReviews,
    getOneReview,
    addNewReview,
    updateReview,
    deleteReview 
}