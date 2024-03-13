const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Create a new User
router.post('/', usersController.createUser);

// Get all Users
router.get('/', usersController.getAllUsers);

// Get a single User by ID
router.get('/:id', usersController.getUserById);

// Update a User by ID
router.put('/:id', usersController.updateUser);

// Delete a User by ID
router.delete('/:id', usersController.deleteUser);

module.exports = router;
