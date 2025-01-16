const express = require('express')

const manageCircleController = require('../controller/manageCircle')

const router = express.Router()

const authMiddleware = require('../middleware/auth')

router.get('/circleMember', authMiddleware, manageCircleController.getAllCircleMember)

module.exports = router