const db = require('../models/db')


exports.createShowtime = async (req, res) => {
  try {
    const showtime = await db.create(req.body);
    return res.status(201).json(showtime);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating showtime' });
  }
};


exports.getAllShowtimes = async (req, res) => {
  try {
    const showtimes = await db.find();
    return res.status(200).json(showtimes);
  } catch (err) {
    return res.status(500).json({ error: 'Error getting showtimes' });
  }
};


exports.getShowtimeById = async (req, res) => {
  try {
    const showtime = await db.findOne({ id: req.params.id });
    if (!showtime) {
      return res.status(404).json({ error: 'Showtime not found' });
    }
    return res.status(200).json(showtime);
  } catch (err) {
    return res.status(500).json({ error: 'Error getting showtime' });
  }
};


exports.updateShowtime = async (req, res) => {
  try {
    const updatedShowtime = await db.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedShowtime) {
      return res.status(404).json({ error: 'Showtime not found' });
    }
    return res.status(200).json(updatedShowtime);
  } catch (err) {
    return res.status(500).json({ error: 'Error updating showtime' });
  }
};


exports.deleteShowtime = async (req, res) => {
  try {
    const deletedShowtime = await db.findByIdAndDelete(req.params.id);
    if (!deletedShowtime) {
      return res.status(404).json({ error: 'Showtime not found' });
    }
    return res.status(200).json({ message: 'Showtime deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Error deleting showtime' });
  }
};
