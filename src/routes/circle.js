const express = require('express')

const CircleController = require('../controller/circle')

const router = express.Router()

const authMiddleware = require('../middleware/auth')

const { uploadCircleImage } = require('../middleware/multer')

// POST - CREATE CIRCLE
router.post('/circle', authMiddleware, uploadCircleImage.single('circle_image'), CircleController.createCircle)

// PATCH - EDIT CIRCLE
router.patch('/circle/:id', authMiddleware, uploadCircleImage.single('circle_image'), CircleController.editCircle)

module.exports = router