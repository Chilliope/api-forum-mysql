const express = require('express')

const CircleController = require('../controller/circle')

const router = express.Router()

const authMiddleware = require('../middleware/auth')

const { uploadCircleImage } = require('../middleware/multer')

// GET - GET CIRCLE BY USER
router.get('/circle', authMiddleware, CircleController.getCircleByUser)

// POST - CREATE CIRCLE
router.post('/circle', authMiddleware, uploadCircleImage.single('circle_image'), CircleController.createCircle)

// PATCH - EDIT CIRCLE
router.patch('/circle/:id', authMiddleware, uploadCircleImage.single('circle_image'), CircleController.editCircle)

// DELETE - DELETE CIRCLE
router.delete('/circle/:id', authMiddleware, CircleController.deleteCircle)

// GET - GET RANDOM MEMBER
router.get('/memberRandom', authMiddleware, CircleController.getRandomMember)

module.exports = router