const db = require('../models/db')

// Create a new Seat
exports.createSeat = async (req, res) => {
  try {
    const seat = await db.create(req.body);
    return res.status(201).json(seat);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating seat' });
  }
};

// Get all Seats
exports.getAllSeats = async (req, res) => {
  try {
    const seats = await db.find();
    return res.status(200).json(seats);
  } catch (err) {
    return res.status(500).json({ error: 'Error getting seats' });
  }
};

// Get a single Seat by ID
exports.getSeatById = async (req, res) => {
  try {
    const seat = await db.findOne({ id: req.params.id });
    if (!seat) {
      return res.status(404).json({ error: 'Seat not found' });
    }
    return res.status(200).json(seat);
  } catch (err) {
    return res.status(500).json({ error: 'Error getting seat' });
  }
};

// Update a Seat by ID
exports.updateSeat = async (req, res) => {
  try {
    const updatedSeat = await db.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSeat) {
      return res.status(404).json({ error: 'Seat not found' });
    }
    return res.status(200).json(updatedSeat);
  } catch (err) {
    return res.status(500).json({ error: 'Error updating seat' });
  }
};

// Delete a Seat by ID
exports.deleteSeat = async (req, res) => {
  try {
    const deletedSeat = await db.findByIdAndDelete(req.params.id);
    if (!deletedSeat) {
      return res.status(404).json({ error: 'Seat not found' });
    }
    return res.status(200).json({ message: 'Seat deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Error deleting seat' });
  }
};
