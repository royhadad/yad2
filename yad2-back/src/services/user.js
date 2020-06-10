const User = require('../models/user')
const Response = require('../utils/Response');
const { sendWelocomeEmail, sendCancelationEmail } = require('../services/email');

const userServices = {
    signUp: async (userProperties) => {
        try {
            const user = new User(userProperties)
            await user.save();
            sendWelocomeEmail(user.email, user.name);
            const token = await user.generateAuthToken()
            return new Response(201, { user, token });
        } catch (e) {
            //email already exists
            if (e.code === 11000) {
                return new Response(409);
            }
            //bad request
            return new Response(400);
        }
    },
    login: async (email, password) => {
        try {
            const user = await User.findByCredentials(email, password)
            const token = await user.generateAuthToken()
            return new Response(200, { user, token });
        } catch (e) {
            return new Response(401);
        }
    },
    logout: async (user, tokenToLogout) => {
        try {
            user.tokens = user.tokens.filter((token) => {
                return token.token !== tokenToLogout
            })
            await user.save()
            return new Response(200);
        } catch (e) {
            return new Response(500);
        }
    },
    logoutAll: async (user) => {
        try {
            user.tokens = []
            await user.save()
            res.send()
        } catch (e) {
            res.status(500).send()
        }
    },
    edit: async (user, updates) => {

        const updatesKeys = Object.keys(updates)
        const allowedUpdates = ['name', 'email', 'password', 'phone']
        const isValidOperation = updatesKeys.every((update) => allowedUpdates.includes(update))

        if (!isValidOperation) {
            return new Response(400, { error: 'Invalid updates!' });
        }

        try {
            updatesKeys.forEach((update) => user[update] = updates[update])
            await user.save()
            return new Response(200, user);
        } catch (e) {
            return new Response(400, e);
        }
    },
    delete: async (user) => {
        try {
            await user.remove();
            sendCancelationEmail(user.email, user.name);
            return new Response(200, user);
        } catch (e) {
            return new Response(500);
        }
    }
}

module.exports = userServices;