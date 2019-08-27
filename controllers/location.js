const express = require('express')

const locationApi = require('../models/location.js')

const locationRouter = express.Router()


locationRouter.get('/', (req, res) => {
    locationApi.getAllLocations()
        .then(location => {
            res.render('location/allLocations', { location })
        })
})

locationRouter.get('/new', (req, res) => {
    res.render('location/createLocation')
})

locationRouter.get('/:locationId/editLocation', (req, res) => {
    locationApi.getLocation(req.params.locationId)
        .then(location => {
            res.render('location/editLocation', { location })
        })
})

locationRouter.get('/:locationId', (req, res) => {
    locationApi.getLocation(req.params.locationId)
        .then(location => {
            console.log('Location - GET - location',location)
            res.render('location/location', { location })
        })
})

//CHANGE .SEND() TO .REDIRECT(PAGE)
locationRouter.post('/', (req, res) => {
    locationApi.addNewLocation(req.body)
        .then(() => {
            res.redirect('/location')
        })
})

locationRouter.put('/:locationId', (req, res) => {
    console.log('locationRouter - PUT - req.body', req.body)
    console.log('locationRouter - PUT - req.params.locationId', req.params.locationId)
    locationApi.updateLocation(req.params.locationId, req.body)
        .then(() => {
            res.redirect('/location')
        })
})

locationRouter.delete('/:locationId', (req, res) => {
    locationApi.deleteLocation(req.params.locationId)
        .then(() => {
            res.redirect('/location')
        })
})

module.exports = {
    locationRouter
}