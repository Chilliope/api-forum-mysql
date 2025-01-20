const dbPool = require('../config/database')

const getDeveloperPost = () => {
    const SQLQuery = `SELECT 
    developer_post.id,
    developer_post.user_id,
    developer_post.post,
    users.fullname,
    users.username,
    users.image
    FROM developer_post 
    JOIN users ON developer_post.user_id = users.id
    ORDER BY developer_post.id DESC`

    return dbPool.execute(SQLQuery)
}

const createDeveloperPost = (data) => {
    const SQLQuery = `INSERT INTO developer_post (user_id, post, created_at) 
                      VALUES (
                      '${data.user_id}',
                      '${data.post}',
                      '${data.currentDate}'
                      )`

    return dbPool.execute(SQLQuery)
}

const editDeveloperPost = (data) => {
    const SQLQuery = `UPDATE developer_post 
                      SET
                      post = '${data.post}'
                      WHERE id = ${data.id}`

    return dbPool.execute(SQLQuery)
}

const deleteDeveloperPost = (id) => {
    const SQLQuery = `DELETE FROM developer_post WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getDeveloperPost,
    createDeveloperPost,
    editDeveloperPost,
    deleteDeveloperPost
}