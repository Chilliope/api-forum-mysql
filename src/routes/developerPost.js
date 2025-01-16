const express = require('express')

const developerPostController = require('../controller/developerPost')

const router = express.Router()

const authMiddleware = require('../middleware/auth')

// GET - GET DEVELOPER POST
router.get('/getDeveloperPost', authMiddleware, developerPostController.getDeveloperPost)

// POST - CREATE DEVELOPER POST
router.post('/createDeveloperPost', authMiddleware, developerPostController.createDeveloperPost)

module.exports = router