const dbPool = require('../config/database')

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

module.exports = {
    createCirclePost
}