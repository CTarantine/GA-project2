const express = require('express')

const locationApi = require('../models/location.js')

const locationRouter = express.Router()


locationRouter.get('/', (req, res) => {
    locationApi.getAllLocations()
        .then(locations => {
            res.render('/location/allLocations', { locations })
        })
})

locationRouter.get('/new', function (req, res) {
    res.render('location/newLocation')
})

locationRouter.get('/:locationId/editLocation', (req, res) => {
    locationApi.getLocation(req.params.locationId)
        .then(location => {
            res.render('location/editLocation', { location })
        })
})

locationRouter.get('/:locationId', (req, res) => {
    locationApi.getLocation(req.params.locationId)
    .then(location =>{
        res.render('location/location', { location })
    })
})

//CHANGE .SEND() TO .REDIRECT(PAGE)
locationRouter.post('/', (req, res) => {
    locationApi.addNewLocation(req.body)
    .then(() =>{
        res.redirect('/location')
    })
})

locationRouter.put('/:locationId', (req, res) =>{
    locationApi.updateLocation(req.params.locationId, req.body)
    .then(()=>{
        res.redirect('/location')
    })
})

locationRouter.delete('/:index', function (req, res) {
    locationApi.deleteLocation(req.params.locationId)
    .then(res.redirect('location'))
})

module.exports = {
    locationRouter
}