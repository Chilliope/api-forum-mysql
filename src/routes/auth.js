const express = require('express')

const AuthController = require('../controller/auth')

const authMiddleware = require('../middleware/auth')

const router = express.Router()

// POST - LOGIN
router.post('/login', AuthController.login)

// POST - REGISTRATION
router.post('/registration', AuthController.registration)

// POST - AUTH USER
router.post('/authUser', authMiddleware, AuthController.authUser)

module.exports = router