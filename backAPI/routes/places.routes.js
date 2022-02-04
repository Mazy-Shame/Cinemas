const { Router } = require('express')
const placesController = require('../controllers/places.controller')

const placesRouter = new Router()

placesRouter.get('/addPlaces/x=:rawx&y=:columny',placesController.addPlaces)

module.exports = placesRouter