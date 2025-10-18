require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const seedAdmin = require('./seedAdmin');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// ---------------------
// API routes
// ---------------------
app.use('/api/auth', require('./routes/auth'));
app.use('/api/itineraries', require('./routes/itineraries'));
app.use('/api/accommodations', require('./routes/accommodations'));
app.use('/api/destinations', require('./routes/destinations'));
app.use('/api/pricing', require('./routes/pricing'));
app.use('/api/bookings', require('./routes/bookings'));

// Seed admin on startup
seedAdmin();

// Serve frontend build if exists
const frontendPath = path.join(__dirname, '../frontend/build');
app.use(express.static(frontendPath));

// Catch-all route for React
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) return res.status(404).json({ error: 'API route not found' });
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
