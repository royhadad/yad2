//#region requirments
const secretVariables = require('dotenv').config().parsed;
const ERROR_CODES = require('../errorCodes.js');
const ResponseObj = require('../ResponseObj.js');
const express = require('express');
const router = express.Router();
const peripheralIndex = require('../data/peripheralIndex.json');
//#endregion
//TODO convert to mongo!
router.get('/peripheralIndex/:cityName', (req, res) => {
    let responseObj = new ResponseObj();
    const cityName = req.params.cityName;
    if (!cityName) {
        responseObj.error = 'city not found';
        return res.status(400).send(JSON.stringify(responseObj));
    }
    const score = peripheralIndex[cityName];
    if (score === undefined) {
        responseObj.error = 'city not found';
        return res.status(404).send(JSON.stringify(responseObj));
    }
    responseObj.data = {};
    responseObj.data.peripheralIndex = score;
    res.send(JSON.stringify(responseObj));
});

module.exports = router;