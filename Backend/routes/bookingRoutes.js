const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// GET all entries (Admin Panel Endpoint)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('serviceId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create entry with validation
router.post('/', async (req, res) => {
  const { serviceId, date, time, customerName, email, phone, address } = req.body;
  if (!serviceId || !date || !time || !customerName || !email || !phone || !address) {
    return res.status(400).json({ message: 'Validation Failed: All submission fields are required.' });
  }
  try {
    const newBooking = new Booking(req.body);
    const saved = await newBooking.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH change validation state
router.patch('/:id', async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(req.params.id, { status: 'Completed' }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE remove entry
router.delete('/:id', async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Appointment profile expunged from system logs.' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;