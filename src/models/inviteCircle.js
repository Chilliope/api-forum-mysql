const dbPool = require('../config/database')

const getSingleInvite = (id) => {
    const SQLQuery = `SELECT * FROM circle_invites WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
}

const getInviteByCircle = (id) => {
    const SQLQuery = `SELECT * FROM circle_invites WHERE circle_id = ${id}`

    return dbPool.execute(SQLQuery)
}

const getInviteByUser = (id) => {
    const SQLQuery = `SELECT * FROM circle_invites WHERE invited_id = ${id}`

    return dbPool.execute(SQLQuery)
}

const acceptInvite = (id, circle_id) => {
    const SQLQuery = `UPDATE users SET
                      circle_id = ${circle_id}
                      WHERE id = ${id}
                     `

    return dbPool.execute(SQLQuery)
}

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
    getSingleInvite,
    getInviteByCircle,
    getInviteByUser,
    acceptInvite,
    createInvite,
    checkUserIsInvited,
    deleteInvite
}