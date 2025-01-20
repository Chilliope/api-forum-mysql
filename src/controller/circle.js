const CircleModel = require('../models/circle')
const jwt = require('jsonwebtoken')
const profile = require('../models/profile')

const SECRET_KEY = process.env.SECRET_KEY

const getCircleByUser = async (req, res) => {
  try {
    const [data] = await CircleModel.getSingleCircle(req.user.circle_id)
    res.status(201).json({
      message: 'Get circle by user successfully',
      data: data[0],
    })
  } catch (error) {
    res.status(401).json({
      message: 'Get circle by user failed',
    })
  }
}

const createCircle = async (req, res) => {
  const { body, file } = req
  const currentDate = new Date().toISOString().split('T')[0]
  // const [ user ] = await profile.getProfile(id)
  
  try {
    const data = {
      circle_name: body.circle_name,
      circle_image: file.filename,
    }

    await CircleModel.createCircle(data, currentDate, req.user.id)
    const [newCircle] = await CircleModel.getCirclyByLeader(req.user.id)
    const circleId = newCircle[0].id

    await CircleModel.updateCreatorCircle(newCircle[0].id, req.user.id)
    // Buat token baru setelah circle berhasil di-create
    const token = jwt.sign(
      {
        id: req.user.id,
        username: req.user.username,
        fullname: req.user.fullname,
        image: req.user.image,
        circle_id: circleId,
      },
      SECRET_KEY,
      {
        algorithm: 'HS256',
        expiresIn: '24h',
      }
    )

    res.status(201).json({
        message: 'Create Circle Success',
        // username: token.username,
        token: token, // Kirim token baru ke frontend
        })
    } catch (error) {
        res.status(400).json({
        message: error.message,
        })
    }
}


const editCircle = async (req, res) => {
  const { body, file } = req
  const circleId = req.params.id
  const leaderId = req.user.id
  const [circle] = await CircleModel.getSingleCircle(circleId)
  const circleData = circle[0]

  if (circleData.leader_id !== leaderId) {
    res.status(405).json({
      message: 'Not Allowed',
    })
  }

  try {
    const data = {
      circle_name: body.circle_name,
      circle_image: file.filename,
    }

    await CircleModel.editCircle(data, circleId)

    res.status(201).json({
      message: 'Circle Edited Successfully',
    })
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}

const deleteCircle = async (req, res) => {
  const circleId = req.params.id
  const leaderId = req.user.id

  const [circle] = await CircleModel.getSingleCircle(circleId)
  const circleData = circle[0]

  if (circleData.leader_id !== leaderId) {
    res.status(405).json({
      message: 'Not Allowed',
    })
  }

  try {
    await CircleModel.deleteCircle(circleId)

    res.status(204).json({})
  } catch (error) {
    res.status(400).json({
      message: message.error,
    })
  }
}

const getRandomMember = async (req, res) => {
  const circleId = req.user.circle_id

  const [data] = await CircleModel.getRandomMember(circleId)

  res.status(200).json({
    data: data,
  })
}

module.exports = {
  getCircleByUser,
  createCircle,
  editCircle,
  deleteCircle,
  getRandomMember,
}
