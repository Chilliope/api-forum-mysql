const dbPool = require('../config/database')

const getUserByUsername = (username) => {
    const SQLQuery = `SELECT * FROM users WHERE username = '${username}'`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getUserByUsername
}