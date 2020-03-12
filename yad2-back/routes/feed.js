//#region requirments
const secretVariables = require('dotenv').config().parsed;
const ERROR_CODES = require('../errorCodes.js');
const ResponseObj = require('../ResponseObj.js');
const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const { itemsArr } = require('../data/fixtures');
//#endregion
const DELAY_TIME = 500;

router.get('/feed', (req, res) => {
    let responseObj = new ResponseObj();
    //const filters = JSON.parse(Buffer.from(req.query.filters, 'base64').toString('binary'));

    responseObj.data = {};
    responseObj.data.itemsArr = itemsArr;
    responseObj.data.totalItems = 1273;
    //TODO
    setTimeout(() => {
        res.send(JSON.stringify(responseObj));
    }, DELAY_TIME);
});

router.get('/favicon.ico', (req, res) => {
    res.status(ERROR_CODES.NO_CONTENT);
});

module.exports = router;