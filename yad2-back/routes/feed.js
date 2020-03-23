//#region requirments
const secretVariables = require('dotenv').config().parsed;
const ERROR_CODES = require('../errorCodes.js');
const ResponseObj = require('../ResponseObj.js');
const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const { itemsArr, usersArr } = require('../data/fixtures');
//#endregion
const DELAY_TIME = 500;

router.get('/feed', (req, res) => {
    let responseObj = new ResponseObj();
    //const filters = JSON.parse(Buffer.from(req.query.filters, 'base64').toString('binary'));

    responseObj.data = {};
    const itemsArrWithSellerDetails = itemsArr.map((item) => ({ ...item, sellerDetails: usersArr.find((user) => (user.id === item.sellerId)) }));
    responseObj.data.itemsArr = itemsArrWithSellerDetails;

    responseObj.data.totalItems = itemsArr.length;

    //TODO
    setTimeout(() => {
        res.send(JSON.stringify(responseObj));
    }, DELAY_TIME);
});

module.exports = router;