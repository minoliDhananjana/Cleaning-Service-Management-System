const express = require('express');
const cors = require('cors');
require('dotenv').config();

const serviceRoutes = require('./routes/serviceRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const connectDB = require('./config/db');

const app = express();

console.log('Starting backend server...');
console.log('MONGO_URI loaded:', !!process.env.MONGO_URI);
console.log('MONGO_DIRECT_URI loaded:', !!process.env.MONGO_DIRECT_URI);

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routing Table
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server monitoring operations on port ${PORT}`);
});