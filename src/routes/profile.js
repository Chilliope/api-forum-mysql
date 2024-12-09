const express = require('express')

const ProfileController = require('../controller/profile') 
const authMiddleware = require('../middleware/auth')
const upload = require('../middleware/multer')

const router = express.Router()

// PATCH - EDIT PROFILE
router.patch('/editProfile', authMiddleware, upload.single('image'), ProfileController.editProfile)

module.exports = router