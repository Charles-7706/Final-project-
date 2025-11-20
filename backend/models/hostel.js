// backend/src/models/Hostel.js
const mongoose = require('mongoose');

const HostelSchema = new mongoose.Schema({
  landlordId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  institutionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Institution', required: true, index: true },
  name: { type: String, required: true, index: true },
  description: { type: String },
  gender: { type: String, enum: ['male','female','mixed'], default: 'mixed' },
  priceFrom: { type: Number, required: true },
  distanceFromCampusMeters: { type: Number }, // computed or provided
  isVerified: { type: Boolean, default: false },
  amenities: [{ type: String }],
  images: [{ type: String }], // URLs
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], default: [0,0] }
  },
  createdAt: { type: Date, default: Date.now },
});
HostelSchema.index({ location: '2dsphere' });
HostelSchema.index({ institutionId: 1, priceFrom: 1 });

module.exports = mongoose.model('Hostel', HostelSchema);
