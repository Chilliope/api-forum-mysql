const dbPool = require('../config/database')

const getDeveloperPost = () => {
    const SQLQuery = `SELECT * FROM developer_post`

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


module.exports = {
    getDeveloperPost,
    createDeveloperPost
}