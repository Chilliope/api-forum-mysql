const profile = require('../models/profile')
const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY

const editProfile = async (req, res) => {
    const { body, file } = req
    const id = req.user.id
    try {
        const [ user ] = await profile.getProfile(id)

        const data = {
            fullname: body.fullname,
            username: body.username,
            image: file ? file.filename : user.image
        }

        const oldImagePath = path.join(__dirname, '../../public/storage/profile_picture', user.image)

        if (data.image != user.image) {
            if (user.image != 'default.jpg') {
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.log('failed to delete old image', err.message)
                    } else {
                        console.log('success to delete old image')
                    }
                })
            }
        }

        await profile.editProfile(data, id)

        // Buat token baru setelah profil berhasil di-update
        const token = jwt.sign(
            {
                id: id,
                username: data.username,
                fullname: data.fullname,
                image: data.image,
                circle_id: user.circle_id
            },
            SECRET_KEY,
            {
                algorithm: "HS256",
                expiresIn: "24h"
            }
        )

        res.status(201).json({
            message: 'Update Profile Success',
            data: {
                id: id,
                username: data.username,
                fullname: data.fullname,
                image: data.image,
                token: token // Kirim token baru ke frontend
            }
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