const dbPool = require('../config/database')

const getCirclePost = (circleId) => {
    const SQLQuery = `SELECT * FROM circle_post WHERE circle_id = ${circleId}`

    return dbPool.execute(SQLQuery)
}

const createCirclePost = (data) => {
    const SQLQuery = `INSERT INTO circle_post (user_id, circle_id, post, created_at) 
                      VALUES(
                      '${data.user_id}',
                      '${data.circle_id}',
                      '${data.post}',
                      '${data.currentDate}'
                      )`
    
    return dbPool.execute(SQLQuery)
}

const editCirclePost = (data) => {
    const SQLQuery = `UPDATE circle_post
                      SET
                      post = '${data.post}'
                      WHERE id = ${data.circle_id}`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getCirclePost,
    createCirclePost,
    editCirclePost
}