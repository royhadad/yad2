//#region requirments
const secretVariables = require('dotenv').config().parsed;
const ERROR_CODES = require('../errorCodes.js');
const ResponseObj = require('../ResponseObj.js');
const express = require('express');
const router = express.Router();
//#endregion

router.get('/googlePlacesAutoComplete', async (req, res) => {
    let response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/output?key=${secretVariables.GOOGLE_PLACES_API_KEY}&input=${req.query.input}`);
    console.log(response);

    
    return response;
});
module.exports = router;