const mongoose = require ('./connection.js')

const reviewSchema = new mongoose.Schema ({
    name: String,
    locationName: String,
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
    return reviewCollection.insertMany(newReview)
}

const updateReview = (reviewId,updatedReview) => {
    return reviewCollection.findByIdAndUpdate (reviewId,updatedReview)
}

const deleteReview = (id) =>{
    return reviewCollection.findByIdAndDelete({_id:id})
}

module.exports = {
    getAllReviews,
    getOneReview,
    addNewReview,
    updateReview,
    deleteReview 
}