const express = require('express')

const YourPostController = require('../controller/yourPost')

const router = express.Router()

const authMiddleware = require('../middleware/auth')

// GET - GET ALL YOUR POST
router.get('/yourPost', authMiddleware, YourPostController.getAllYourPost)

module.exports = router