const PostModel = require('../models/post')

const createNewPost = async (req, res) => {
    const { body } = req
    const { forumId } = req.params
    const currentDate = new Date().toISOString().split('T')[0];
    
    try {
        const data = {
            user_id: req.user.id,
            forum_id: forumId,
            post: body.post,
            created_at: currentDate
        }
        
        await PostModel.createNewPost(data)

        res.status(201).json({
            message: 'Create Post Success',
            data: data
        })
    } catch (error) {
        res.status(400).json({
            message: 'Create Post Failed',
            error: error.message
        })
    }
}

module.exports = {
    createNewPost
}