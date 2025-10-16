const mongoose = require('mongoose');
const DestinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, default: 'Tanzania' },
  description: String,
  coordinates: { lat: Number, lng: Number },
  parkInfo: Object
}, { timestamps: true });
module.exports = mongoose.model('Destination', DestinationSchema);
