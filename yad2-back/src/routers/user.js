const express = require('express')
const multer = require('multer')
const sharp = require('sharp');
const User = require('../models/user')
const auth = require('../middleware/auth')
const { sendWelocomeEmail, sendCancelationEmail } = require('../emails/account');

const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save();
        sendWelocomeEmail(user.email, user.name);
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        //email already exists
        if (e.code === 11000) {
            return res.status(409).send();
        }
        //bad request
        res.status(400).send()
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(401).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
})

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'phone']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        const user = req.user;
        await user.remove();
        sendCancelationEmail(user.email, user.name);
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router