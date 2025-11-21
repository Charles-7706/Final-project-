const router = require('express').Router();
const verify = require('../controllers/verifytoken');
const Booking = require('../models/bookings.js');

// Create a new booking
router.post('/', verify, async (req, res) => {
    if (req.user.role !== 'student' && req.user.role !== 'user') {
        return res.status(403).json({ message: 'Access denied' });
    }
    try {
        const newBooking = new Booking({
            ...req.body,
            studentId: req.user.id
        });
        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all bookings for the logged-in user
router.get('/', verify, async (req, res) => {
    if (req.user.role !== 'student' && req.user.role !== 'user' && req.user.role !== 'owner') {
        return res.status(403).json({ message: 'Access denied' });
    }
    try {
        const bookings = await Booking.find({ studentId: req.user.id });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update booking status (for payment confirmation)
router.patch('/:id/status', verify, async (req, res) => {
    try {
        const { status, paymentRef } = req.body;
        const booking = await Booking.findOneAndUpdate(
            { _id: req.params.id, studentId: req.user.id },
            { status, paymentRef },
            { new: true }
        );
        if (!booking) return res.status(404).json({ message: 'Booking not found' });
        res.json(booking);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;