const bcrypt = require('bcrypt')
const AuthModel = require('../models/auth')

const login = async (req, res) => {
    const { body } = req
    try {
        const [ data ] = await AuthModel.loginProcess(body)
        if(data.length === 0) {
            return res.status(404).json({
                status: 'not found',
                message: 'Username not found'
            })
        } 

        res.json({
            data: data
        })
    } catch (error) {
        res.json({
            message: 'Login Gagal',
            errorMessage: error
        })
    }
}

const registration = async (req, res) => {
    
    const { body } = req
    const saltRounds = 10
    const currentDate = new Date().toISOString().split('T')[0];

    try {
        const hashedPassword = await bcrypt.hash(body.password, saltRounds)
        const data = {
            fullname: body.fullname,
            username: body.username,
            password: hashedPassword,
            image: 'default.jpg',
            created_at: currentDate
        }

        await AuthModel.registrationProcess(data)
        
        res.json({
            message: 'Registration Success',
            data: data
        })
    } catch (error) {
       res.json({
        message: 'Registration Failed',
        error: error.message
       }) 
    }
}

module.exports = {
    login,
    registration
}