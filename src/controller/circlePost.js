const circlePostModel = require('../models/circlePost')

const createCirclePost = async (req, res) => {
    const { body } = req
    const currentDate = new Date().toISOString().split('T')[0];

    try {
        const data = {
            user_id: req.user.id,
            circle_id: req.user.circle_id,
            post: body.post,
            currentDate: currentDate
        }

        circlePostModel.createCirclePost(data)

        res.status(201).json({
            message: 'Circle Post Created Successfully',
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    createCirclePost
}