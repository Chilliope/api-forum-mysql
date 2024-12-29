const express = require('express')

const InviteCircleController = require('../controller/inviteCircle')

const router = express.Router()

const authMiddleware = require('../middleware/auth')

// GET - GET INVITE CIRCLE BY CIRCLE
router.get('/invite-circle', authMiddleware, InviteCircleController.getInviteByCircle)

// GET - GET INVITE CIRCLE BY USER
router.get('/user/invite-circle', authMiddleware, InviteCircleController.getInviteByUser)

// POST - ACCEPT INVITE
router.post('/accept/invite-circle/:id', authMiddleware, InviteCircleController.acceptInvite)

// POST - CREATE INVITE
router.post('/invite-circle', authMiddleware, InviteCircleController.createInvite)

// DELETE - CANCEL/DELETE INVITE
router.delete('/invite-circle/:id', authMiddleware, InviteCircleController.deleteInvite)

module.exports = router