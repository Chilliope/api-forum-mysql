const PostModel = require('../models/post')
const ForumModel = require('../models/forum')

const getAllYourPost = async (req, res) => {
    try {
        const userId = req.user.id
        const [data] = await PostModel.getAllYourPost(userId)

        res.status(200).json({
            message: 'Get All Your Post Success',
            data: data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = {
    getAllYourPost,
}