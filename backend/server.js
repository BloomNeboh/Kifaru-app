require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const seedAdmin = require('./seedAdmin');

connectDB(); // Connect to MongoDB first

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/itineraries', require('./routes/itineraries'));
app.use('/api/accommodations', require('./routes/accommodations'));
app.use('/api/destinations', require('./routes/destinations'));
app.use('/api/pricing', require('./routes/pricing'));
app.use('/api/bookings', require('./routes/bookings'));

// Seed admin on startup
seedAdmin();

// Serve frontend build if present
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Catch-all route for React
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
