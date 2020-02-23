//#region requirments
const secretVariables = require('dotenv').config().parsed;
const ERROR_CODES = require('../errorCodes.js');
const ResponseObj = require('../ResponseObj.js');
const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
//#endregion

router.get('/api/feed', (req, res) => {
    let responseObj = new ResponseObj();
    responseObj.data = ['item1', 'item2', 'item3'];
    res.send(JSON.stringify(responseObj));
});

router.get('/favicon.ico', (req, res) => {
    res.status(ERROR_CODES.NO_CONTENT);
});

module.exports = router;