const express = require('express');
const router = express.Router();
const Itinerary = require('../models/Itinerary');
// Simple endpoints
router.get('/', async (req, res) => {
  const items = await Itinerary.find().limit(20);
  res.json(items);
});
module.exports = router;
