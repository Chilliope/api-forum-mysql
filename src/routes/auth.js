const express = require('express')

const AuthController = require('../controller/auth')

const router = express.Router()

// POST - LOGIN
router.post('/login', AuthController.login)

// POST - REGISTRATION
router.post('/registration', AuthController.registration)

module.exports = router