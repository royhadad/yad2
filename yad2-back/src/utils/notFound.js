module.exports = (req, res) => {
    res.status(404).send({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`
    });
}