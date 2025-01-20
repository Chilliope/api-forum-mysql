require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')
const path = require('path');

const middlewareLogRequest = require('./src/middleware/logs')
const { uploadProfilePicture } = require('./src/middleware/multer')
const { uploadCircleImage } = require('./src/middleware/multer')

const authRoutes = require('./src/routes/auth')
const forumRoutes = require('./src/routes/forum')
const postRoutes = require('./src/routes/post')
const profileRoutes = require('./src/routes/profile')
const yourPostRoutes = require('./src/routes/yourPost')
const circleRoutes = require('./src/routes/circle')
const inviteCircleRoutes = require('./src/routes/inviteCircle')
const cirlePostRoutes = require('./src/routes/circlePost')
const manageCircleRoutes = require('./src/routes/manageCircle')
const developerPostRoutes = require('./src/routes/developerPost')

const app = express(middlewareLogRequest)

const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5500',
    'https://thecorner.republikode.my.id',
    'http://localhost:4173'
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
app.use(developerPostRoutes)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

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