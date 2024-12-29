const express = require('express')

const InviteCircleController = require('../controller/inviteCircle')

const router = express.Router()

const authMiddleware = require('../middleware/auth')

router.post('/invite-circle', authMiddleware, InviteCircleController.createInvite)

module.exports = router