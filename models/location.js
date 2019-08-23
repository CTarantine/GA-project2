const mongoose = require ('./connection.js')

const locationSchema = new mongoose.Schema ({
    city: String,
    state: String,
    zipcode: Number,
    currently: Boolean
})

const locationCollection = mongoose.model('location', locationSchema)

const getAllLocations = () => {
    return locationCollection.find()
}

const getLocation = (locationId) => {
    return locationCollection.findById(locationId)
}

const addNewLocation = (newLocation) => {
    return locationCollection.insertMany(newLocation)
}

const updateLocation = (locationId,updatedLocation) => {
    return locationCollection.findByIdAndUpdate(locationId,updatedLocation)
}

const deleteLocation = (id) =>{
    return locationCollection.findByIdAndDelete({_id:id})
}

module.exports = {
    getAllLocations,
    getLocation,
    addNewLocation,
    updateLocation,
    deleteLocation 
}