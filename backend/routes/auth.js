const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('../controllers/verifytoken');
// Register
router.post('/register', async (req, res) => {
    try {
        const {name, email, phone, password, role} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            name,
            email,
            phone,
            password: hashedPassword,
            role: role || 'student'
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//login
router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '2h' });
        const { password: _password, ...others } = user._doc;
        res.status(200).json({ ...others, token });
  

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/me', verify, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile/:id', verify, async (req, res) => {
    if (req.params.id === req.user.id) {
        try {
            const user = await User.findById(req.params.id);
            const { password, ...others } = user._doc;
            res.status(200).json(others);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ message: 'Access denied' });
    }
});
module.exports = router;