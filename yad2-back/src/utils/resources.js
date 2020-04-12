const path = require('path');
const PATH_TO_RESOURCES = path.resolve(__dirname, '../../../yad2-front/src/resources.json');
const resources = require(PATH_TO_RESOURCES);
module.exports = resources;
