const express = require('express')

const ForumController = require('../controller/forum')

const router = express.Router()

const authMiddleware = require('../middleware/auth')

// GET - GET ALL FORUM
router.get('/forum', authMiddleware, ForumController.getAllForum)

// POST - CREATE FORUM
router.post('/forum', authMiddleware, ForumController.createForum)

// PATCH - UPDATE FORUM
router.patch('/forum/:id', authMiddleware, ForumController.updateForum)

// DELETE - DELETE FORUM
router.delete('/forum/:id', authMiddleware, ForumController.deleteForum)

module.exports = router