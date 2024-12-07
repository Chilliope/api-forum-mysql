const logRequest = (req, res, next) => {
    console.log('terjadi request di path', req.path)
    next()
}

module.exports = logRequest