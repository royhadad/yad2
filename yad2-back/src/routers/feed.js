//#region requirments
const Item = require('../models/item');
const User = require('../models/user');
const express = require('express');
const router = express.Router();
//#endregion

router.get('/feed', async (req, res) => {
    try {
        searchParams = {};
        if (req.query.category) {
            searchParams.category = req.query.category
        }

        let items = await Item
            .find(searchParams)
            .populate('sellerDetails')
            .exec();

        res.send({
            items: items,
            totalItems: items.length
        });
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
});

const populateOwner = (items) => {
    items
};
module.exports = router;