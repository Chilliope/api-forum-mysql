const profile = require('../models/profile')

const editProfile = async (req, res) => {
    const { body, file } = req
    const id = req.user.id

    try {
        const data = {
            fullname: body.fullname,
            username: body.username,
            image: file ? file.filename : null
        }

        console.log('data:', data, 'id:', id)

        await profile.editProfile(data, id)

        res.status(201).json({
            message: 'Update Profile Success',
            data: data
        })
    } catch (error) {
        res.status(400).json({
            message: 'Update Profile Failed',
            error: error.message
        })
    }
}

module.exports = {
    editProfile
}