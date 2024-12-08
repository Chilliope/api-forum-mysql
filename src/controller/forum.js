const ForumModel = require('../models/forum')

const getAllForum = async (req, res) => {
    try {
        const [ data ] = await ForumModel.getAllForum()

        res.status(200).json({
            message: 'Get All Forum Success',
            data: data
        })
    } catch (error) {
        res.status(404).json({
            message: 'Get All Forum Failed',
            error: error.message
        })        
    }
}

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
    getAllForum,
    createForum
}