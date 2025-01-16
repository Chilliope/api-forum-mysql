const express = require('express')

const circlePostController = require('../controller/circlePost')

const router = express.Router()

const authMiddleware = require('../middleware/auth')

router.post('/createCirclePost', authMiddleware, circlePostController.createCirclePost)

module.exports = router