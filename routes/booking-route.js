const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const bookingController = require('../controllers/booking-controller')

router.get('/book', authenticate, bookingController.getByUser)
router.get('/all-status', authenticate, bookingController.getAllStatus)
router.post('/bookings', authenticate, bookingController.createBooking)
router.put('/:id', authenticate, bookingController.updateBooking)
router.delete('/:id', authenticate, bookingController.deleteBooking )

module.exports = router