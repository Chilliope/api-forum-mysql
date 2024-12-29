const inviteCircleModel = require('../models/inviteCircle')
const userModel = require('../models/user')

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
        console.log(checkUserIsInvited[0])
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


module.exports = {
    createInvite
}