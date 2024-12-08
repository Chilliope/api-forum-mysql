const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization // Ambil header authorization
    if (!authHeader) {
        return res.status(401).json(
            { message: 'Unauthorized: No token provided' }
        )
    }

    const token = authHeader.split(' ')[1] // Pisahkan "Bearer" dan token
    if (!token) {
        return res.status(401).json(
            { message: 'Unauthorized: Token is missing' }
        )
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY) 
        req.user = decoded 
        next() // Lanjutkan ke middleware berikutnya
    } catch (error) {
        return res.status(403).json(
            { message: 'Invalid token' }
        )
    }
}

module.exports = authMiddleware
