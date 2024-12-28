const PostModel = require('../models/post')
const ForumModel = require('../models/forum')

const getAllYourPost = async (req, res) => {
    try {
        const user_id = req.user.id
        const [data] = await PostModel.getAllYourPost(user_id)

        res.status(200).json({
            message: 'Get All Your Post Success',
            data: data
        })
    } catch (error) {
        res.status(404).json({
            message: 'No Data'
        })
    }
}

module.exports = {
    getAllYourPost,
}