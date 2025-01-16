const dbPool = require('../config/database')

const getAllCircleMember = (id) => {
    const SQLQuery = `SELECT * FROM users WHERE circle_id = ${id}`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllCircleMember
}