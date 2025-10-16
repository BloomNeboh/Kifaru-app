const mongoose = require('mongoose');
const ItinerarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  destinations: [{ type: String }],
  startDate: Date,
  endDate: Date,
  travelers: Number,
  packageDetails: Object,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Itinerary', ItinerarySchema);
