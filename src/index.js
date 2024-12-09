require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')

const middlewareLogRequest = require('./middleware/logs')
const upload = require('./middleware/multer')

const authRoutes = require('./routes/auth')
const forumRoutes = require('./routes/forum')
const postRoutes = require('./routes/post')
const profileRoutes = require('./routes/profile')

const app = express(middlewareLogRequest)

app.use(express.json())

app.use(middlewareLogRequest)

app.use(authRoutes)
app.use(forumRoutes)
app.use(postRoutes)
app.use(profileRoutes)

app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        message: 'upload berhasil'
    })
})

app.listen(PORT, () => {
    console.log(`server berjalan di port ${PORT}`)
})