const dbPool = require('../config/database')

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
    editProfile
}