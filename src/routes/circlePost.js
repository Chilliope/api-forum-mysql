const express = require('express')

const circlePostController = require('../controller/circlePost')

const router = express.Router()

const authMiddleware = require('../middleware/auth')

// GET - GET CIRCLE POST
router.get('/getCirclePost', authMiddleware, circlePostController.getCirclePost)

// POST - CREATE CIRCLE POST
router.post('/createCirclePost', authMiddleware, circlePostController.createCirclePost)

// PATCH - EDIT CIRCLE POST
router.patch('/editCirclePost/:id', authMiddleware, circlePostController.editCirclePost)

// DELETE - DELETE CIRCLE POST
router.delete('/deleteCirclePost/:id', authMiddleware, circlePostController.deleteCirclePost)

module.exports = router