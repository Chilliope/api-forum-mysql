require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')
const path = require('path');

const middlewareLogRequest = require('./middleware/logs')
const { uploadProfilePicture } = require('./middleware/multer')
const { uploadCircleImage } = require('./middleware/multer')

const authRoutes = require('./routes/auth')
const forumRoutes = require('./routes/forum')
const postRoutes = require('./routes/post')
const profileRoutes = require('./routes/profile')
const yourPostRoutes = require('./routes/yourPost')
const circleRoutes = require('./routes/circle')
const inviteCircleRoutes = require('./routes/inviteCircle')
const cirlePostRoutes = require('./routes/circlePost')
const manageCircleRoutes = require('./routes/manageCircle')

const app = express(middlewareLogRequest)

const allowedOrigins = [
    'http://localhost:5173',
    'https://adce-125-164-96-249.ngrok-free.app'
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Metode HTTP yang diizinkan
    credentials: true // Jika menggunakan cookie
}));

app.use(express.json())
app.use(express.static('public'))

app.use(middlewareLogRequest)

app.use(authRoutes)
app.use(forumRoutes)
app.use(postRoutes)
app.use(profileRoutes)
app.use(yourPostRoutes)
app.use(circleRoutes)
app.use(inviteCircleRoutes)
app.use(cirlePostRoutes)
app.use(manageCircleRoutes)

app.post('/upload', uploadProfilePicture.single('image'), (req, res) => {
    res.json({
        message: 'upload berhasil'
    })
})

app.post('/upload', uploadCircleImage.single('circle_image'), (req, res) => {
    res.json({
        message: 'upload berhasil'
    })
})

app.listen(PORT, () => {
    console.log(`server berjalan di port ${PORT}`)
})