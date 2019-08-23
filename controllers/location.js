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
    res.render('createShop', {})
})

shopRouter.get('/:index', function (req, res) {
    const singleShop = shopsApi.getShop(req.params.index)
    res.render('editShop', { singleShop, index: req.params.index })
})

//CHANGE .SEND() TO .REDIRECT(PAGE)
shopRouter.post('/', (req, res) => {
    shopsApi.addShop(req.body);
    res.send(200);
})

shopRouter.put('/:index', function (req, res) {
    shopsApi.updateShop(req.params.index, req.body);
    res.send(200);
})

shopRouter.delete('/:index', function (req, res) {
    shopsApi.deleteShop(req.params.index)
    res.send(200);
})

module.exports = {
    locationRouter
}