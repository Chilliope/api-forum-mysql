const express = require('express')

const ProfileController = require('../controller/profile') 
const authMiddleware = require('../middleware/auth')
const { uploadProfilePicture } = require('../middleware/multer')

const router = express.Router()

// PATCH - EDIT PROFILE
router.patch('/editProfile', authMiddleware, uploadProfilePicture.single('image'), ProfileController.editProfile)

module.exports = router