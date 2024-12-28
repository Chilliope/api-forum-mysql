const dbPool = require('../config/database')

const getAllPost = (id, offset, limit) => {
    const SQLQuery = `SELECT * FROM posts 
                      JOIN users ON posts.user_id = users.id
                      WHERE forum_id = ${id} 
                      ORDER BY posts.id DESC
                      LIMIT ${limit} OFFSET ${offset}
                      `

    return dbPool.execute(SQLQuery)
}

const getAllYourPost = (userId) => {
    const SQLQuery = `SELECT * FROM posts 
                      JOIN forums ON posts.forum_id = forums.id
                      JOIN users ON posts.user_id = users.id
                      WHERE posts.user_id = ${userId}`

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

const deletePostByForum = (forumId) => {
    const SQLQuery = `DELETE FROM posts WHERE forum_id = ${forumId}`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllPost,
    getAllYourPost,
    createNewPost,
    updatePost,
    deletePost,
    deletePostByForum
}
