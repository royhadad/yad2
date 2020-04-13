//#region requirments
const ERROR_CODES = require('../utils/errorCodes.js');
const express = require('express');
const router = express.Router();
const peripheralIndex = require('../data/peripheralIndex.json');
//#endregion
//TODO convert to mongo!
router.get('/peripheralIndex/:cityName', (req, res) => {
    const cityName = req.params.cityName;
    let score;
    if (!cityName || !(score = peripheralIndex[cityName])) {
        return res.status(404).send({ error: 'city not found' });
    }
    res.send({ peripheralIndex: score });
});

module.exports = router;