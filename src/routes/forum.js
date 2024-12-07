const express = require('express')

const ForumController = require('../controller/forum')

const router = express.Router()

const authMiddleware = require('../middleware/auth')

// POST - CREATE FORUM
router.post('/forum', authMiddleware, ForumController.createForum)

module.exports = router