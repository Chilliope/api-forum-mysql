const dbPool = require('../config/database')

const getAllForum = () => {
    const SQLQuery = 'SELECT * FROM forums'

    return dbPool.execute(SQLQuery)
}

const createNewForum = (body) => {
    const SQLQuery = `INSERT INTO forums (user_id, title, post, created_at)
                      VALUES (
                      '${body.user_id}', 
                      '${body.title}', 
                      '${body.post}', 
                      '${body.created_at}')`

    return dbPool.execute(SQLQuery)
}

const updateForum = (body, id) => {
    const SQLQuery = `UPDATE forums 
                      SET 
                      title='${body.title}', 
                      post='${body.post}' 
                      WHERE id = ${id}`
    
    return dbPool.execute(SQLQuery)
}

const deleteForum = (id) => {
    const SQLQuery = `DELETE FROM forums WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllForum,
    createNewForum,
    updateForum,
    deleteForum
}