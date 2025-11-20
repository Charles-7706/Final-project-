// backend/src/models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  hostelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hostel', required: true },
//   roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending','paid','cancelled','rejected'], default: 'pending' },
  paymentRef: { type: String }, // mpesa receipt or tx id
  createdAt: { type: Date, default: Date.now }
});
BookingSchema.index({ studentId: 1, hostelId: 1 });

module.exports = mongoose.model('Booking', BookingSchema);
