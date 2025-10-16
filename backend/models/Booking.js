const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  itinerary: { type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' },
  accommodation: { type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation' },
  startDate: Date,
  endDate: Date,
  totalPrice: Number,
  status: { type: String, enum: ['pending','confirmed','cancelled'], default: 'pending' }
}, { timestamps: true });
module.exports = mongoose.model('Booking', BookingSchema);
