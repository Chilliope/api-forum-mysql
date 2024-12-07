const ForumModel = require('../models/forum')

const createForum = (req, res) => {
    const { body } = req
    const currentDate = new Date().toISOString().split('T')[0];
    res.json({
        message: 'ada bre'
    })
    try {
        const data = {
            user_id: req.user.id, 
            title: body.title,
            post: body.post,
            created_at: currentDate
        }

        console.log(data)
    } catch (error) {
        
    }
}

module.exports = {
    createForum
}