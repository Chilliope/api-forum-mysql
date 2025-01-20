const dbPool = require('../config/database')

const getTotalForumCount = () => {
    const SQLQuery = 'SELECT COUNT(*) AS total FROM forums'
    return dbPool.execute(SQLQuery)
}

const getAllForum = () => {
    const SQLQuery = `
        SELECT 
            forums.id AS forum_id, 
            forums.user_id, 
            forums.title, 
            forums.created_at,
            users.fullname, 
            users.username, 
            users.password, 
            users.image,
            (
                SELECT COUNT(*) 
                FROM posts 
                WHERE posts.forum_id = forums.id
            ) AS post_count
        FROM forums
        JOIN users ON forums.user_id = users.id
        ORDER BY forums.id DESC
    `

    return dbPool.execute(SQLQuery)
}


const getSingleForum = (forumId) => {
    const SQLQuery = `SELECT             
            forums.id AS forum_id, 
            forums.user_id, 
            forums.title, 
            forums.created_at,
            users.fullname, 
            users.username, 
            users.password, 
            users.image
            FROM forums
            JOIN users ON forums.user_id = users.id
            WHERE forums.id = ${forumId}`

    return dbPool.execute(SQLQuery)
}

const createNewForum = (body) => {
    const SQLQuery = `INSERT INTO forums (user_id, title, created_at)
                      VALUES (
                      '${body.user_id}', 
                      '${body.title}', 
                      '${body.created_at}')`

    return dbPool.execute(SQLQuery)
}

const updateForum = (body, id) => {
    const SQLQuery = `UPDATE forums 
                      SET 
                      title='${body.title}'
                      WHERE id = ${id}`
    
    return dbPool.execute(SQLQuery)
}

const deleteForum = (id) => {
    const SQLQuery = `DELETE FROM forums WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getTotalForumCount,
    getAllForum,
    getSingleForum,
    createNewForum,
    updateForum,
    deleteForum
}