const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Create a new Payment
router.post('/payment', paymentController.createPayment);

// Get all Payments
router.get('/payment', paymentController.getAllPayments);

// Get a single Payment by ID
router.get('/payment/:id', paymentController.getPaymentById);

// Update a Payment by ID
router.put('/payment/:id', paymentController.updatePayment);

// Delete a Payment by ID
router.delete('/payment/:id', paymentController.deletePayment);

module.exports = router;
