const db = require('../models/db')

// Create a new Ticket
exports.createTicket = async (req, res) => {
  try {
    const ticket = await db.create(req.body);
    return res.status(201).json(ticket);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating ticket' });
  }
};

// Get all Tickets
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await db.find();
    return res.status(200).json(tickets);
  } catch (err) {
    return res.status(500).json({ error: 'Error getting tickets' });
  }
};

// Get a single Ticket by ID
exports.getTicketById = async (req, res) => {
  try {
    const ticket = await db.findOne({ id: req.params.id });
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    return res.status(200).json(ticket);
  } catch (err) {
    return res.status(500).json({ error: 'Error getting ticket' });
  }
};

// Update a Ticket by ID
exports.updateTicket = async (req, res) => {
  try {
    const updatedTicket = await db.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTicket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    return res.status(200).json(updatedTicket);
  } catch (err) {
    return res.status(500).json({ error: 'Error updating ticket' });
  }
};

// Delete a Ticket by ID
exports.deleteTicket = async (req, res) => {
  try {
    const deletedTicket = await db.findByIdAndDelete(req.params.id);
    if (!deletedTicket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    return res.status(200).json({ message: 'Ticket deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Error deleting ticket' });
  }
};
