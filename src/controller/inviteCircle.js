const inviteCircleModel = require('../models/inviteCircle')
const userModel = require('../models/user')

const createInvite = async (req, res) => {
    try {
        const data = req.body
        const currentDate = new Date().toISOString().split('T')[0];

        const [user] = await userModel.getUserByUsername(data.username)
        const insertData = {
            invited_id: user[0].id,
            circle_id: req.user.circle_id,
            created_at: currentDate
        }

        await inviteCircleModel.createInvite(insertData)
        res.status(201).json({
            message: 'Invite Send Successfully',
            data: insertData
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    createInvite
}