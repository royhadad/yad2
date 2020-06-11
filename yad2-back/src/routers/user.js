const express = require('express')
const userServices = require('../services/user');
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/users', async (req, res) => {
    const response = await userServices.signUp(req.body);
    res.status(response.status).send(response.body);
})

router.post('/users/login', async (req, res) => {
    const response = await userServices.login(req.body.email, req.body.password);
    res.status(response.status).send(response.body);
})

router.post('/users/logout', auth, async (req, res) => {
    const response = await userServices.logout(req.user, req.token);
    res.status(response.status).send(response.body);
})

router.post('/users/logoutAll', auth, async (req, res) => {
    const response = await userServices.logoutAll(req.user);
    res.status(response.status).send(response.body);
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
})

router.patch('/users/me', auth, async (req, res) => {
    const response = await userServices.edit(req.user, req.body);
    res.status(response.status).send(response.body);
})

router.delete('/users/me', auth, async (req, res) => {
    const response = await userServices.delete(req.user);
    res.status(response.status).send(response.body);
})

module.exports = router