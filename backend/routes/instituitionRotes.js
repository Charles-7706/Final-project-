const router = require('express').Router();
const verify = require('../controllers/verifytoken');
const Institution = require('../models/instituitions.js');

// Create a new institution
router.post('/', verify, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }
        const newInstitution = new Institution(req.body);
        const savedInstitution = await newInstitution.save();
        res.status(201).json(savedInstitution);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all institutions
router.get('/', async (req, res) => {
    try {
        const institutions = await Institution.find();
        res.status(200).json(institutions);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get institution by id
router.get('/:id', async (req, res) => {
    try {
        const institution = await Institution.findById(req.params.id);
        res.status(200).json(institution);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get institution by name
router.get('/name/:name', async (req, res) => {
    try {
        const institution = await Institution.findOne({ name: req.params.name });
        res.status(200).json(institution);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;