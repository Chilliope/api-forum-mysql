const profile = require('../models/profile')
const fs = require('fs')
const path = require('path')


const editProfile = async (req, res) => {
    const { body, file } = req
    const id = req.user.id
    
    try {
        const [ user ] = await profile.getProfile(id)
        // console.log('gambar:', user.image)
        
        const data = {
            fullname: body.fullname,
            username: body.username,
            image: file ? file.filename : user.image
        }

        const oldImagePath = path.join(__dirname, '../../public/profile_picture', user.image)

        if(data.image != user.image) {
            if(user.image != 'default.jpg') {
                fs.unlink(oldImagePath, (err) => {
                    if(err) {
                        console.log('failed to delete old image', err.message)
                    } else {
                        console.log('success to delete old image')
                    }
                })
            }
        } 

        // console.log('data:', data, 'id:', id)

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