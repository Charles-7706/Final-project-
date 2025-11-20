const router = require('express').Router();
const verify = require('../controllers/verifytoken');
const Hostel = require('../models/hostel.js');

// Create a new hostel
router.post('/', verify, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }
        const newHostel = new Hostel({
            ...req.body,
            landlordId: req.user.id,
            institutionId: req.body.institutionId
        });
        const savedHostel = await newHostel.save();
        res.status(201).json(savedHostel);
    } catch (err) {
        res.status(500).json(err);
    }
});

//all hostels
router.get('/', verify, async (req, res) => {
    if (req.user.role !== 'admin' && req.user.role !== 'owner') {
        return res.status(403).json({ message: 'Access denied' });
    }
    try {
        const hostels = await Hostel.find();
        res.status(200).json(hostels);
    } catch (err) {
        res.status(500).json(err);
    }
});

//one hostel
router.get('/:id', verify, async (req, res) => {
    if (req.user.role !== 'admin' && req.user.role !== 'owner') {
        return res.status(403).json({ message: 'Access denied' });
    }
    try {
        const hostel = await Hostel.findById(req.params.id).populate("landlordId", "name phone email");
        res.status(200).json(hostel);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a hostel
router.put('/:id', verify, async (req, res) => {
    if (req.user.role !== 'admin' && req.user.role !== 'owner') {
        return res.status(403).json({ message: 'Access denied' });
    }
    try {
        const updatedHostel = await Hostel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedHostel);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a hostel
router.delete('/:id', verify, async (req, res) => {
    if (req.user.role !== 'admin' && req.user.role !== 'owner') {
        return res.status(403).json({ message: 'Access denied' });
    }
    try {
        await Hostel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Hostel deleted successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;