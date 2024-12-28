const multer = require('multer')
const path = require('path')

const profilePictureStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/storage/profile_picture')
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime()
        const originalname = file.originalname
        cb(null, `${timestamp}-${originalname}`)
    }
})

const circleImageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/storage/circle_image') // Folder tujuan untuk `circle_image`
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime()
        const originalname = file.originalname
        cb(null, `${timestamp}-${originalname}`)
    }
})

// Middleware untuk `profile_picture`
const uploadProfilePicture = multer({
    storage: profilePictureStorage,
    limits: { fileSize: 3 * 1000 * 1000 } // 3 MB
})

// Middleware untuk `circle_image`
const uploadCircleImage = multer({
    storage: circleImageStorage,
    limits: { fileSize: 3 * 1000 * 1000 } // 3 MB
})

module.exports = {
    uploadProfilePicture,
    uploadCircleImage
}