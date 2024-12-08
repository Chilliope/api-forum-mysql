const express = require('express')

const PostController = require('../controller/post') 
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// POST - GET ALL POST 
router.get('/post/:forumId', authMiddleware, PostController.getAllPost)

// POST - CREATE NEW POST
router.post('/post/:forumId', authMiddleware, PostController.createNewPost)

// PATCH - UPDATE POST
router.patch('/post/edit/:id', authMiddleware, PostController.updatePost)

// DELETE - DELETE POST
router.delete('/post/delete/:id', authMiddleware, PostController.deletePost)

module.exports = router