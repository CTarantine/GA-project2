const mongoose = require ('./connection.js')

const locationSchema = new mongoose.Schema ({
    name: String,
    city: String,
    state: String,
    zipcode: Number
})

const locationCollection = mongoose.model('location', locationSchema)

const getAllLocations = () => {
    return locationCollection.find()
}

const get