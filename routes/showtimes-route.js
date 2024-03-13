const express = require('express');
const router = express.Router();
const showtimesController = require('../controllers/showtimesController');

// Create a new Showtime
router.post('/', showtimesController.createShowtime);

// Get all Showtimes
router.get('/', showtimesController.getAllShowtimes);

// Get a single Showtime by ID
router.get('/:id', showtimesController.getShowtimeById);

// Update a Showtime by ID
router.put('/:id', showtimesController.updateShowtime);

// Delete a Showtime by ID
router.delete('/:id', showtimesController.deleteShowtime);

module.exports = router;
