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

module.exports = {
    createInvite,
}