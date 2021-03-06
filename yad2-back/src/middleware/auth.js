const jwt = require('jsonwebtoken');
const User = require('../models/user');

//can receive Authorization="Bearer <JWT>" either as cookie or header
//header used in postman, cookie used in browser
const auth = async (req, res, next) => {
    try {
        const authCookie = req.cookies.Authorization;
        const authHeader = req.header("Authorization");
        const token = (authCookie || authHeader).replace('Bearer ', '');

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            throw new Error();
        }
        req.token = token
        req.user = user;
        next();
    } catch (e) {
        res.status(401).send({ error: 'please authenticate.' });
    }
}
module.exports = auth;