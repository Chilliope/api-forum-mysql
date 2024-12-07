require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')

const middlewareLogRequest = require('./middleware/logs')

const authRoutes = require('./routes/auth')

const app = express(middlewareLogRequest)

app.use(express.json())

app.use(middlewareLogRequest)

app.use(authRoutes)

app.listen(PORT, () => {
    console.log(`server berjalan di port ${PORT}`)
})