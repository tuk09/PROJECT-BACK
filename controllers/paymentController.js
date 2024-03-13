const db = require('../models/db')

exports.createPayment = async (req, res) => {
  try {
    const payment = await db.create(req.body);
    return res.status(201).json(payment);
  } catch (err) {
    return res.status(500).json({ error: 'Error creating payment' });
  }
};

// Get all Payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await db.find();
    return res.status(200).json(payments);
  } catch (err) {
    return res.status(500).json({ error: 'Error getting payments' });
  }
};

// Get a single Payment by ID
exports.getPaymentById = async (req, res) => {
  try {
    const payment = await db.findOne({ id: req.params.id });
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    return res.status(200).json(payment);
  } catch (err) {
    return res.status(500).json({ error: 'Error getting payment' });
  }
};

// Update a Payment by ID
exports.updatePayment = async (req, res) => {
  try {
    const updatedPayment = await db.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPayment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    return res.status(200).json(updatedPayment);
  } catch (err) {
    return res.status(500).json({ error: 'Error updating payment' });
  }
};

// Delete a Payment by ID
exports.deletePayment = async (req, res) => {
  try {
    const deletedPayment = await db.findByIdAndDelete(req.params.id);
    if (!deletedPayment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    return res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Error deleting payment' });
  }
};
