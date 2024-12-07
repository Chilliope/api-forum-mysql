require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')

const middlewareLogRequest = require('./middleware/logs')

const app = express(middlewareLogRequest)

app.use(middlewareLogRequest)


app.listen(PORT, () => {
    console.log(`server berjalan di port ${PORT}`)
})