const developerPostModel = require('../models/developerPost')

const getDeveloperPost = async (req, res) => {
    try {
        const [ data ] = await developerPostModel.getDeveloperPost()

        res.status(200).json({
            message: 'Get developer post successfully',
            data: data
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const createDeveloperPost = async (req, res) => {
    const userId = req.user.id
    const { body } = req
    const currentDate = new Date().toISOString().split('T')[0];

    try {
        const data = {
            user_id: userId,
            post: body.post,
            currentDate: currentDate
        }

        await developerPostModel.createDeveloperPost(data)

        res.status(201).json({
            message: 'Developer Post Created Successfully',
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    getDeveloperPost,
    createDeveloperPost
}