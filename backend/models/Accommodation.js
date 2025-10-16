const mongoose = require('mongoose');
const AccommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: String,
  pricePerNight: { type: Number, default: 0 },
  images: [String],
  rating: { type: Number, default: 0 }
}, { timestamps: true });
module.exports = mongoose.model('Accommodation', AccommodationSchema);
