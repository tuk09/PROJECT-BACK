const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/ticketsController');

// Create a new Ticket
router.post('/', ticketsController.createTicket);

// Get all Tickets
router.get('/', ticketsController.getAllTickets);

// Get a single Ticket by ID
router.get('/:id', ticketsController.getTicketById);

// Update a Ticket by ID
router.put('/:id', ticketsController.updateTicket);

// Delete a Ticket by ID
router.delete('/:id', ticketsController.deleteTicket);

module.exports = router;
