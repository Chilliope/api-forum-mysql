const express = require('express')

const manageCircleController = require('../controller/manageCircle')

const router = express.Router()

const authMiddleware = require('../middleware/auth')

// GET - GET ALL CIRCLE MEMBER
router.get('/circleMember', authMiddleware, manageCircleController.getAllCircleMember)

// PATCH - KICK CIRCLE MEMBER
router.patch('/kick/:id', authMiddleware, manageCircleController.kickMember)

module.exports = router