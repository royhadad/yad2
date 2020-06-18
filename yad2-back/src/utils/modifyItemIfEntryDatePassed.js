const moment = require('moment');
module.exports = (item) => {
    //fixing entry date already passed problem
    const entryDate = item.entryDate;
    if (item.entryDate !== null && item.entryDate !== undefined && item.entryDate < moment().startOf('day').valueOf()) {
        item.entryDate = null;
        item.isImmediateEntry = true;
    }
}