const circlePostModel = require('../models/circlePost')

const getCirclePost = async (req, res) => {
    const circleId = req.user.circle_id

    try {
        const [ data ] = await circlePostModel.getCirclePost(circleId)

        res.status(200).json({
            message: 'Get circle post successfully',
            data: data
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

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
    getCirclePost,
    createCirclePost
}