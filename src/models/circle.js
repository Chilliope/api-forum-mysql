const dbPool = require('../config/database')

const getSingleCircle = (id) => {
    const SQLQuery = `SELECT * FROM circles WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
}

const createCircle = (body, currentDate, userId) => {
    const SQLQuery = `INSERT INTO circles (circle_name, circle_image, leader_id, created_at) VALUES (
        '${body.circle_name}',
        '${body.circle_image}',
        '${userId}',
        '${currentDate}'
    )`

    return dbPool.execute(SQLQuery)
}


const editCircle = (body, circleId) => {
    const SQLQuery = `UPDATE circles
                      SET
                      circle_name = '${body.circle_name}',
                      circle_image = '${body.circle_image}'
                      WHERE id = ${circleId}`
    
    return dbPool.execute(SQLQuery)
} 

module.exports = {
    getSingleCircle,
    createCircle,
    editCircle,
}