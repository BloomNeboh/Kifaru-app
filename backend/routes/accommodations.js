const express = require('express');
const router = express.Router();
const Accommodation = require('../models/Accommodation');

// GET /api/accommodations - list basic accommodations
router.get('/', async (req, res) => {
  try {
    const list = await Accommodation.find().limit(50);
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
