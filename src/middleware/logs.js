const logRequest = (req, res, next) => {
    console.log('Terjadi request ke API path', req.path);
    next();
}

module.exports = logRequest;