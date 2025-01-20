const dbPool = require('../config/database')

const getCirclePost = (circleId) => {
    const SQLQuery = `
        SELECT 
            circle_post.id,
            circle_post.user_id,
            circle_post.circle_id,
            circle_post.post,
            users.fullname,
            users.username,
            users.image
        FROM circle_post 
        JOIN users ON circle_post.user_id = users.id
        WHERE circle_post.circle_id = ${circleId}
        ORDER BY circle_post.id DESC
    `
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

const deleteCirclePost = (id) => {
    const SQLQuery = `DELETE FROM circle_post WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getCirclePost,
    createCirclePost,
    editCirclePost,
    deleteCirclePost
}