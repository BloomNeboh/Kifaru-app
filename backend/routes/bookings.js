const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

// Create booking
router.post('/', auth, async (req, res) => {
  try {
    const data = req.body;
    data.user = req.user.id;
    const bk = await Booking.create(data);
    res.json(bk);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user bookings
router.get('/', auth, async (req, res) => {
  try {
    const list = await Booking.find({ user: req.user.id }).populate('itinerary accommodation');
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
