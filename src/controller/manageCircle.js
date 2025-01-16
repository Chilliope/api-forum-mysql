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
            message: 'Forum Delete Failed',
            error: error.message
        }) 
    }
}

module.exports = {
    getAllCircleMember
}