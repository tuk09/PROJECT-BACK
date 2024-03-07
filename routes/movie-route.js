const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const movieController = require('../controllers/movie-controller')

router.get('/mo', authenticate, movieController.getByUser)
router.get('/all-status', authenticate, movieController.getAllStatus)
router.post('/movies', authenticate, movieController.createMovie)
router.put('/:id', authenticate, movieController.updateMovie)
router.delete('/:id', authenticate, movieController.deleteMovie)

module.exports = router