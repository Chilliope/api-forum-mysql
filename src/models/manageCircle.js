const dbPool = require('../config/database')

const getAllCircleMember = (id) => {
    const SQLQuery = `SELECT * FROM users WHERE circle_id = ${id}`

    return dbPool.execute(SQLQuery)
}

const kickMember = (id) => {
    const SQLQuery = `UPDATE USERS
                      SET
                      circle_id = NULL
                      WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllCircleMember,
    kickMember
}