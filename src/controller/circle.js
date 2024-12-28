const CircleModel = require('../models/circle')

const createCircle = async (req, res) => {
    const { body, file } = req
    const currentDate = new Date().toISOString().split('T')[0];
    try {
        const data = {
            circle_name: body.circle_name,
            circle_image: file.filename
        }

        await CircleModel.createCircle(data, currentDate, req.user.id)

        res.status(201).json({
            message: 'Create Circle Success'
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const editCircle = async (req, res) => {
    const { body, file } = req
    const circleId = req.params.id
    const leaderId = req.user.id
    const [circle] = await CircleModel.getSingleCircle(circleId)
    const circleData = circle[0]

    if(circleData.leader_id !== leaderId) {
        res.status(405).json({
            message: 'Not Allowed'
        })
    }

    try {
        const data = {
            circle_name: body.circle_name,
            circle_image: file.filename
        }
            
        await CircleModel.editCircle(data, circleId)
            
        res.status(201).json({
            message: 'Circle Edited Successfully'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const deleteCircle = async (req, res) => {
    const circleId = req.params.id
    const leaderId = req.user.id

    const [circle] = await CircleModel.getSingleCircle(circleId)
    const circleData = circle[0]

    if(circleData.leader_id !== leaderId) {
        res.status(405).json({
            message: 'Not Allowed'
        })
    }

    try {
        await CircleModel.deleteCircle(circleId)
        
        res.status(204).json({})
    } catch (error) {
        res.status(400).json({
            message: message.error
        })
    }
}

module.exports = {
    createCircle,
    editCircle,
    deleteCircle
}