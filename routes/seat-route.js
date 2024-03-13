const express = require('express');
const router = express.Router();
const seatController = require('../controllers/seatController');

// Create a new Seat
router.post('/', seatController.createSeat);

// Get all Seats
router.get('/', seatController.getAllSeats);

// Get a single Seat by ID
router.get('/:id', seatController.getSeatById);

// Update a Seat by ID
router.put('/:id', seatController.updateSeat);

// Delete a Seat by ID
router.delete('/:id', seatController.deleteSeat);

module.exports = router;
