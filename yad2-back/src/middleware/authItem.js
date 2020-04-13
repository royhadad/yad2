const Item = require('../models/item');
module.exports = async (req, res, next) => {
    const itemId = req.params.id;
    const userId = req.user._id;
    const item = await Item.findOne({ _id: itemId, owner: userId });

    if (!item) {
        return res.status(404).send();
    }
    req.item = item;
    next();
}