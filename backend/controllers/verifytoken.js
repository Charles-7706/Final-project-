
const jwt = require('jsonwebtoken');

function verify (req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const actualToken = token.split(' ')[1];
    try {
        const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
}

module.exports = verify;