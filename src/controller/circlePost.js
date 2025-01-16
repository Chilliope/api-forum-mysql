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

const editCirclePost = async (req, res) => {
    const { body } = req
    const circlePostId = req.params.id

    try {
        console.log(body.post, circlePostId)
        const data = {
            post: body.post,
            circle_id: circlePostId
        }

        await circlePostModel.editCirclePost(data)

        res.status(201).json({
            message: 'Circle post edited successfully'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const deleteCirclePost = async (req, res) => {
    const circlePostId = req.params.id

    try {
        await circlePostModel.deleteCirclePost(circlePostId)

        res.status(204).json({})
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    getCirclePost,
    createCirclePost,
    editCirclePost,
    deleteCirclePost
}