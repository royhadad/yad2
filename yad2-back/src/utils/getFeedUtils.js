const moment = require('moment');

const getFilterObject = (clientSearchObject) => {
    search = clientSearchObject; //shorter code

    filter = {};

    //category
    filter.category = search.category || 'forsale';

    //location
    if (search.location) {
        let location = search.location.formattedSuggestion.mainText;
        let regexString = '';
        if (location !== 'ישראל') {
            regexString = `(${location})+?`;
        }
        filter['location.city'] = { $regex: new RegExp(regexString) };

        //unnecessary complicated regex
        // location = location
        //     .split('')
        //     .map((char) => {
        //         if (char === ',' || char === '-') { return ' '; }
        //         else { return char; }
        //     })
        //     .join('');
        // const regexString = `(${location.split(' ').filter((word) => (word !== '')).join('|')})+?`;
    }

    //types
    if (search.types && search.types.length) {
        filter.types = { $all: (search.types) };
    }

    //properties
    if (search.properties && search.properties.length) {
        filter.properties = { $all: (search.properties) };
    }

    //rooms
    filter.rooms = {
        $gte: search.minRooms || 0,
        $lte: search.maxRooms || Infinity
    };
    //price
    if (search.showOnlyItemsWithPrice) {
        filter.price = {
            $gte: search.minPrice || 0,
            $lte: search.maxPrice || Infinity
        };
    }
    //floor
    filter.floor = {
        $gte: search.minFloor || 0,
        $lte: search.maxFloor || Infinity
    };
    //size
    filter.size = {
        $gte: search.minSize || 0,
        $lte: search.maxSize || Infinity
    };
    //numOfRoommates
    if (search.category === 'roommates') {
        filter.numOfRoommates = {
            $gte: search.minRoommates || 0,
            $lte: search.maxRoommates || Infinity
        };
    }

    //minEntryDate
    if (search.minEntryDate) {
        const valueOfMinEntryDate = moment(search.minEntryDate).startOf('day').valueOf();
        filter.entryDate = { $gte: valueOfMinEntryDate };
    }

    //onlyImmediateEntry
    filter.isImmediateEntry = search.onlyImmediateEntry;

    //text
    if (search.text) {
        //matches documents where field text contains one of the search words in its entirety, lazy
        //example: 
        //search term: aba gaga
        //document text: ababa gagga
        //wont match gaga to gagga, but will match aba to ababa, therefore match the document 
        const regexString = `(${search.text.split(' ').filter((word) => (word !== '')).join('|')})+?`;
        filter.text = { $regex: new RegExp(regexString) };
    }

    //showOnlyItemsWithImage
    if (search.showOnlyItemsWithImage) {
        filter['imagesURLs.0'] = { $exists: true };
    }

    return filter;
}

const getSortObject = (sortOption) => {
    if (!sortOption) {
        return { createdAt: -1 }
    }
    if (sortOption === 'priceHighLow') {
        return { price: -1 }
    }
    if (sortOption === 'priceLowHigh') {
        return { price: 1 }
    }
    return { createdAt: -1 }
}

module.exports = {
    getFilterObject,
    getSortObject
}