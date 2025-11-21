const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const hostelRoutes = require('./routes/hostelRoutes');
const institutionRoutes = require('./routes/instituitionRotes');
const bookingRoutes = require('./routes/bookingsRoute');
const cors = require('cors');
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://final-project-psi-five-50.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "token"]
}));

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'HostelHub API is running!' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/hostels', hostelRoutes);
app.use('/api/institutions', institutionRoutes);
app.use('/api/bookings', bookingRoutes);


app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});