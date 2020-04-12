const express = require('express')
const Item = require('../models/item')
const auth = require('../middleware/auth');
const multerFilter = require('../middleware/multerFilter');
const sharpImageFormatter = require('../middleware/sharpImageFormatter');
const singleUpload = require('../utils/saveImagesToS3');
const router = new express.Router()

router.post('/items', auth, multerFilter, sharpImageFormatter, async (req, res) => {
    //console.log(req.files);
    // await saveImagesToS3(req.files);

    singleUpload(req.files[0])
    res.send('good');

    // try {
    //     const item = new Item({
    //         ...req.body,
    //         owner: req.user._id,
    //     })
    //     await item.save()
    //     res.status(201).send(item)
    // } catch (e) {
    //     res.status(400).send(e)
    // }
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

router.patch('/items/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const item = await Item.findOne({ _id: req.params.id, owner: req.user._id });
        if (!item) {
            return res.status(404).send()
        }

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