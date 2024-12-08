const express = require('express')

const PostController = require('../controller/post') 
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// POST - CREATE NEW POST
router.post('/post/:forumId', authMiddleware, PostController.createNewPost)

module.exports = router