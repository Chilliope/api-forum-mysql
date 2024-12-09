const dbPool = require('../config/database')

const getProfile = (id) => {
    const SQLQuery = `SELECT * FROM users WHERE id = ${id}`

    return dbPool.execute(SQLQuery)
            .then(([rows]) => {
                return rows
            })
            .catch((error) => {
                console.log(error)
                throw new Error('Error fetching profile')
            })
}

const editProfile = (body, id) => {
    const SQLQuery = `UPDATE users 
                      SET 
                      fullname='${body.fullname}', 
                      username='${body.username}', 
                      image='${body.image}'
                      WHERE id = ${id}`
    
    return dbPool.execute(SQLQuery)
}

module.exports = {
    getProfile,
    editProfile
}