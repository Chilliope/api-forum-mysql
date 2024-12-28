const CircleModel = require('../models/circle')

const createCircle = async (req, res) => {
    const { body, file } = req
    const currentDate = new Date().toISOString().split('T')[0];
    console.log(file.originalname)
    try {
        const data = {
            circle_name: body.circle_name,
            circle_image: file.filename
        }

        await CircleModel.createCircle(data, currentDate, req.user.id)

        res.status(201).json({
            message: 'Create Circle Success'
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    createCircle,
}