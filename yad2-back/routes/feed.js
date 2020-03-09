//#region requirments
const secretVariables = require('dotenv').config().parsed;
const ERROR_CODES = require('../errorCodes.js');
const ResponseObj = require('../ResponseObj.js');
const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
//#endregion

router.get('/feed', (req, res) => {
    let responseObj = new ResponseObj();
    //const filters = JSON.parse(Buffer.from(req.query.filters, 'base64').toString('binary'));

    responseObj.data = {};
    responseObj.data.itemsArr = ['item1', 'item2', 'item3'];
    responseObj.data.totalItems = 1273;
    //TODO
    setTimeout(() => {
        res.send(JSON.stringify(responseObj));
    }, 2000);
});

router.get('/favicon.ico', (req, res) => {
    res.status(ERROR_CODES.NO_CONTENT);
});

module.exports = router;