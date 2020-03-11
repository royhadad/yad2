//#region requirments
const secretVariables = require('dotenv').config().parsed;
const ERROR_CODES = require('../errorCodes.js');
const ResponseObj = require('../ResponseObj.js');
const express = require('express');
const request = require('request');
const router = express.Router();
const routePrefix = '/utils';
//#endregion

module.exports = router;