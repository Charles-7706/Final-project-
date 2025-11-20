const moongoose = require('mongoose');

const userSchema = new moongoose.Schema({
      name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, lowercase: true, unique: true, index: true },
        phone: { type: String, required: true, index: true },
        role: { type: String, enum: ['student','owner','admin'], default: 'student' },
        password: { type: String, required: true },
        isVerified: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now }
}, { timestamps: true});

module.exports = moongoose.model('User', userSchema);