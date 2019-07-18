module.exports = ((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status);
    res.send({ error: err, message: err.message });
});
