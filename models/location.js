const mongoose = require ('./connection.js')

const locationSchema = new mongoose.Schema ({
    city: String,
    state: String,
    zipcode: Number,
    currentlyOpen: Boolean
})

const locationCollection = mongoose.model('location', locationSchema)

const getAllLocations = () => {
    return locationCollection.find()
}

const getLocation = (locationId) => {
    return locationCollection.findById(locationId)
}

const addNewLocation = (newLocation) => {
    return locationCollection.create(newLocation)
}

const updateLocation = (locationId,updatedLocation) => {
    return locationCollection.findByIdAndUpdate({locationId},updatedLocation)
}

const deleteLocation = (locationId) =>{
    return locationCollection.findByIdAndDelete({locationId})
}

module.exports = {
    getAllLocations,
    getLocation,
    addNewLocation,
    updateLocation,
    deleteLocation 
}