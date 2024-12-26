const dbPool = require('../config/database')

const getAllPost = (id, offset, limit) => {
    const SQLQuery = `SELECT * FROM posts 
                      JOIN users ON posts.user_id = users.id
                      WHERE forum_id = ${id} LIMIT ${limit} OFFSET ${offset}`

    return dbPool.execute(SQLQuery)
}

const createNewPost = (body) => {
    const SQLQuery = `INSERT INTO posts (user_id, forum_id, post, created_at)
                      VALUES (
                      '${body.user_id}', 
                      '${body.forum_id}', 
                      '${body.post}', 
                      '${body.created_at}')`

    return dbPool.execute(SQLQuery)
}

const updatePost = (body, id) => {
    const SQLQuery = `UPDATE posts
                      SET 
                      post='${body.post}'
                      WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
}

const deletePost = (id) => {
    const SQLQuery = `DELETE FROM posts WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllPost,
    createNewPost,
    updatePost,
    deletePost
}
