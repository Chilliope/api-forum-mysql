const ForumModel = require('../models/forum')

const getAllForum = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1 // Default page = 1
        const limit = parseInt(req.query.limit) || 10 // Default limit = 10
        const offset = (page - 1) * limit

        const [data] = await ForumModel.getAllForum(offset, limit)

        const [totalDataResult] = await ForumModel.getTotalForumCount()
        const totalData = totalDataResult[0].total

        totalPage = Math.ceil(totalData / limit)

        res.status(200).json({
            message: 'Get All Forum Success',
            data: data,
            pagination: {
                currentPage: page,
                limit: limit,
                totalPage: totalPage,
            },
        })
    } catch (error) {
        res.status(404).json({
            message: 'Get All Forum Failed',
            error: error.message,
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
            created_at: currentDate
        }

        await ForumModel.createNewForum(data)

        res.status(201).json({
            message: 'Create Forum Success',
            data: data 
        })
    } catch (error) {
        res.status(400).json({
            message: 'Create Forum Failed',
            error: error.message
        })
    }
}

const updateForum = async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        await ForumModel.updateForum(body, id)

        res.status(201).json({
            message: 'Update Forum Success',
            data: body
        })
    } catch (error) {
        res.status(400).json({
            message: 'Update Forum Failed',
            error: error.message
        })
    }
}

const deleteForum = async (req, res) => {
    const { id } = req.params

    try {
        await ForumModel.deleteForum(id)

        res.status(204).json({
            message: 'Delete Forum Success'
        })
    } catch (error) {
        res.json(400).json({
            message: 'Forum Delete Failed',
            error: error.message
        })
    }
}

module.exports = {
    getAllForum,
    createForum,
    updateForum,
    deleteForum
}