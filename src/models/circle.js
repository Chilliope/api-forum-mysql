const dbPool = require('../config/database')

const createCircle = (body, currentDate, userId) => {
    const SQLQuery = `INSERT INTO circles (circle_name, circle_image, leader_id, created_at) VALUES (
        '${body.circle_name}',
        '${body.circle_image}',
        '${userId}',
        '${currentDate}'
    )`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    createCircle
}