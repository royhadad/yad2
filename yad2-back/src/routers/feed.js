//#region requirments
const Item = require('../models/item');
const User = require('../models/user');
const { getFilterObject, getSortObject } = require('../utils/getFeedUtils');
const { base64decode } = require('nodejs-base64');
const express = require('express');
const router = express.Router();
//#endregion

// GET /feed
// page=10
// itemsPerPage=30
// sortBy=date/priceHighLow/priceLowHigh
// search=base64(json)
router.get('/feed', async (req, res) => {
    try {
        const clientSearchObject = JSON.parse(base64decode(req.query.search));
        const filter = getFilterObject(clientSearchObject);
        const sortObject = getSortObject(req.query.sortBy);
        const limit = parseInt(req.query.itemsPerPage) || 20;
        const page = parseInt(req.query.page) || 1;
        const skip = limit * (page - 1);

        const [items, totalNumberOfItems] = await Promise.all([
            Item
                .find(filter)
                .sort(sortObject)
                .limit(limit)
                .skip(skip)
                .populate('sellerDetails')
                .exec(),
            Item
                .find(filter)
                .count()
        ]);

        res.send({
            items: items,
            totalItems: totalNumberOfItems
        });
    } catch (e) {
        console.log(e);

        res.status(400).send({ error: e.message });
    }
});

module.exports = router;