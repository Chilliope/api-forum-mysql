const dbPool = require('../config/database')

const createInvite = (data) => {
    const SQLQuery = `INSERT INTO circle_invites (
                      invited_id,
                      circle_id,
                      created_at
                      )
                      VALUES (
                      '${data.invited_id}',
                      '${data.circle_id}',
                      '${data.created_at}'
                      )`

    return dbPool.execute(SQLQuery)
}

const checkUserIsInvited = (id) => {
    const SQLQuery = `SELECT * FROM circle_invites WHERE invited_id = ${id}`

    return dbPool.execute(SQLQuery)
}

const deleteInvite = (id) => {
    const SQLQuery = `DELETE FROM circle_invites WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    createInvite,
    checkUserIsInvited,
    deleteInvite
}