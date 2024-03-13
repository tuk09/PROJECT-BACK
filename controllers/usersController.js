const db = require('../models/db')

// Create a new User
exports.createUser = async (req, res) => {
  try {
    const user = await db.create(req.body);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating user' });
  }
};

// Get all Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: 'Error getting users' });
  }
};

// Get a single User by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await db.findOne({ id: req.params.id });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: 'Error getting user' });
  }
};

// Update a User by ID
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await db.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json({ error: 'Error updating user' });
  }
};

// Delete a User by ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await db.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Error deleting user' });
  }
};
