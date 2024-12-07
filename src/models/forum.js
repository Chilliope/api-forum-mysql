const dbPool = require('../config/database')

const createNewPost = (body) => {
    const SQLQuery = `INSERT INTO forums (user_id, title, post, created_at)
                      VALUES (
                      '${body.user_id}', 
                      '${body.title}', 
                      '${body.post}', 
                      '${body.created_at}')`

    dbPool.execute(SQLQuery)
}

module.exports = {
    createNewPost
}