const express = require('express')
const Item = require('../models/item')
const auth = require('../middleware/auth');
const authItem = require('../middleware/authItem');
const multerFilter = require('../middleware/multerFilter');
const sharpImageFormatter = require('../middleware/sharpImageFormatter');
const { uploadMultiple, uploadSingle, deleteMultiple, deleteSingle } = require('../utils/s3Services');
const router = new express.Router()

router.post('/items', auth, async (req, res) => {
    try {
        const item = new Item({
            ...req.body,
            owner: req.user._id
        })
        await item.save()
        res.status(201).send(item)
    } catch (e) {
        res.status(400).send();
    }
})

//POST /items/images/:id
// image: file (can have many)
router.post('/items/images/:id', auth, authItem, multerFilter, sharpImageFormatter, async (req, res) => {
    const item = req.item;
    const files = req.files;
    try {
        await item.addImages(files);
        res.status(201).send(item)
    } catch (e) {
        res.status(400).send(e)
    }
})

// DELETE /items/images/:id
// body: {deleteImages: String[]}
router.delete('/items/images/:id', auth, authItem, async (req, res) => {
    try {
        const item = await req.item.deleteImages(req.body.deleteImages);
        res.send(item);
    } catch (e) {
        res.status(500).send();
    }
})

// GET /items/me?sortBy=createdAt:desc/asc
router.get('/items/me', auth, async (req, res) => {
    const sort = { createdAt: -1 };
    try {
        const user = req.user;
        const items = await Item.find({
            owner: user._id
        }, undefined, { sort })
        res.send(items)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/items/:id', auth, async (req, res) => {
    const _id = req.params.id
    try {
        const item = await Item.findOne({ _id, owner: req.user._id });
        if (!item) {
            return res.status(404).send()
        }
        res.send(item)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/items/:id', auth, authItem, async (req, res) => {
    const item = req.item;
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        updates.forEach((update) => {
            item[update] = req.body[update];
        });
        await item.save();
        res.send(item)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/items/:id', auth, async (req, res) => {
    try {
        const item = await Item.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        if (!item) {
            res.status(404).send()
        }

        res.send(item)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router