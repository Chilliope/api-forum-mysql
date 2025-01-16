const dbPool = require('../config/database')

const createDeveloperPost = (data) => {
    const SQLQuery = `INSERT INTO developer_post (user_id, post, created_at) 
                      VALUES (
                      '${data.user_id}',
                      '${data.post}',
                      '${data.currentDate}'
                      )`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    createDeveloperPost
}