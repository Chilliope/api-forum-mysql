const PostModel = require('../models/post')

const getAllPost = async (req, res) => {
    const { forumId } = req.params 

    try {
        const [ data ] = await PostModel.getAllPost(forumId)

        res.status(200).json({
            message: 'Get All Post Success',
            data: data
        })
    } catch (error) {
        res.status(403).json({
            message: 'Get All Post Failed'
        })
    }
}

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

const updatePost = async (req, res) => {
    const { body } = req
    const { id } = req.params

    try {
        await PostModel.updatePost(body, id)

        res.status(201).json({
            message: 'Update Post Success',
            data: body
        })
    } catch (error) {
        res.status(400).json({
            message: 'Update Post Failed',
            error: error.message
        })
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params

    try {
        await PostModel.deletePost(id)

        res.status(204).json({
            message: 'Delete Post Success'
        })
    } catch (error) {
        res.status(403).json({
            message: 'Delete Post Failed'
        })
    }
}

module.exports = {
    getAllPost,
    createNewPost,
    updatePost,
    deletePost
}