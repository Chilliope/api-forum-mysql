const inviteCircleModel = require('../models/inviteCircle')
const userModel = require('../models/user')

const getInviteByCircle = async (req, res) => {
    try {
        const [invites] = await inviteCircleModel.getInviteByCircle(req.user.circle_id)

        res.status(200).json({
            message: 'Get all invite by circle successfully',
            invites: invites
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })        
    }
}

const getInviteByUser = async (req, res) => {
    try {
        const [invites] = await inviteCircleModel.getInviteByUser(req.user.id)

        res.status(200).json({
            message: 'Get all invite by circle successfully',
            invites: invites
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })        
    }
}

const createInvite = async (req, res) => {
    try {
        const data = req.body
        const currentDate = new Date().toISOString().split('T')[0]

        // Periksa apakah username ada
        const [user] = await userModel.getUserByUsername(data.username)
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }

        // Periksa apakah user sudah diundang
        const [checkUserIsInvited] = await inviteCircleModel.checkUserIsInvited(user[0].id)
        if (checkUserIsInvited[0]) {
            return res.status(400).json({
                message: 'This user was just invited'
            })
        }

        // Siapkan data untuk dimasukkan
        const insertData = {
            invited_id: user[0].id,
            circle_id: req.user.circle_id,
            created_at: currentDate
        }

        // Masukkan data undangan ke database
        await inviteCircleModel.createInvite(insertData)

        // Respon sukses
        res.status(201).json({
            message: 'Invite Sent Successfully',
            data: insertData
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const deleteInvite = async (req, res) => {
    try {
        await inviteCircleModel.deleteInvite(req.params.id)

        res.status(204).json({})
    } catch (error) {
        res.status(400).json({
            message: message.error
        })
    }
} 


module.exports = {
    getInviteByCircle,
    getInviteByUser,
    createInvite,
    deleteInvite
}