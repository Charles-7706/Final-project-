const router = require('express').Router();
const verify = require('../controllers/verifytoken');
const Booking = require('../models/booking.js');

// Create a new booking
router.post('/', verify, async (req, res) => {
    if (req.user.role !== 'user') {
        return res.status(403).json({ message: 'Access denied' });
    }
    try {
        const newBooking = new Booking({
            ...req.body,
            userId: req.user.id
        });
        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all bookings for the logged-in user
router.get('/', verify, async (req, res) => {
    if (req.user.role !== 'user') {
        return res.status(403).json({ message: 'Access denied' });
    }
    try {
        const bookings = await Booking.find({ userId: req.user.id });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json(err);
    }
});

//
module.exports = router;