const ForumModel = require('../models/forum')

const createForum = async (req, res) => {
    const { body } = req
    const currentDate = new Date().toISOString().split('T')[0];
    try {
        const data = {
            user_id: req.user.id, 
            title: body.title,
            post: body.post,
            created_at: currentDate
        }

        await ForumModel.createNewForum(data)

        res.status(201).json({
            message: 'Create Forum Success',
            data: data 
        })
    } catch (error) {
        res.status(400).json({
            message: 'Create Forum Failed'
        })
    }
}

module.exports = {
    createForum
}