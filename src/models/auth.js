const dbPool = require('../config/database')

const loginProcess = (body) => {
    const SQLQuery = `SELECT * FROM users WHERE username = '${body.username}'`

    return dbPool.execute(SQLQuery)
}

const registrationProcess = (body) => {
    const SQLQuery = `INSERT INTO users (fullname, username, password, image) 
                      VALUES (
                      '${body.fullname}', 
                      '${body.username}', 
                      '${body.password}', 
                      'default.jpg', 
                      '${body.created_at}')`

    return dbPool.execute(SQLQuery)
} 

module.exports = {
    loginProcess,
    registrationProcess
}