const manageCircleModel = require('../models/manageCircle')

const getAllCircleMember = async (req, res) => {
    const circleId = req.user.circle_id

    try {
        const [ data ] = await manageCircleModel.getAllCircleMember(circleId)

        res.status(200).json({
            message: 'Get all circle member successfully',
            data: data
        })
    } catch (error) {
        res.json(400).json({
            error: error.message
        }) 
    }
}

const kickMember = async (req, res) => {
    const userId = req.params.id

    try {
        await manageCircleModel.kickMember(userId)

        res.status(201).json({
            message: 'Kick member successfully'
        })
    } catch (error) {
        res.json(400).json({
            error: error.message
        }) 
    }
}

module.exports = {
    getAllCircleMember,
    kickMember
}