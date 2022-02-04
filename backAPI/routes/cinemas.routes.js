const { Router } = require('express')
const cinemasController = require('../controllers/cinemas.controller')

const cinemaRouter = new Router()


cinemaRouter.get('/cinemas',cinemasController.getCinemas)
cinemaRouter.post('/cinemas',cinemasController.addCinema)
cinemaRouter.put('/cinemas',cinemasController.updateCinemaName)
cinemaRouter.delete('/cinemas',cinemasController.deleteCinema)

module.exports = cinemaRouter