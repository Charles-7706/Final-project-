// backend/src/models/Institution.js
const mongoose = require('mongoose');

const InstitutionSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  code: { type: String, index: true }, // optional short code
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], default: [0,0] } // [lng, lat]
  },
  createdAt: { type: Date, default: Date.now }
});
InstitutionSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Institution', InstitutionSchema);
