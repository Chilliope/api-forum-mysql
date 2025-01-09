const dbPool = require('../config/database')

const getSingleCircle = (id) => {
    const SQLQuery = `SELECT * FROM circles WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
}

const getCirclyByLeader = (leaderId) => {
    const SQLQuery = `SELECT * FROM circles WHERE leader_id = ${leaderId}`

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

const updateCreatorCircle = (circleId, userId) => {
    const SQLQuery = `UPDATE users
                      SET
                      circle_id = ${circleId}
                      WHERE id = ${userId}`
    
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

const deleteCircle = (circleId) => {
    const SQLQuery = `DELETE FROM circles WHERE id = ${circleId}`

    return dbPool.execute(SQLQuery)
}

const getRandomMember = (circleId) => {
    const SQLQuery = `
        SELECT * 
        FROM users 
        WHERE circle_id = ${circleId} 
        ORDER BY RAND() 
        LIMIT 5
    `;


    return dbPool.execute(SQLQuery)
}

module.exports = {
    getSingleCircle,
    getCirclyByLeader,
    updateCreatorCircle,
    createCircle,
    editCircle,
    deleteCircle,
    getRandomMember
}