const dbPool = require('../config/database')

const createNewPost = (body) => {
    const SQLQuery = `INSERT INTO posts (user_id, forum_id, post, created_at)
                      VALUES (
                      '${body.user_id}', 
                      '${body.forum_id}', 
                      '${body.post}', 
                      '${body.created_at}')`

    return dbPool.execute(SQLQuery)
}


module.exports = {
    createNewPost
}
