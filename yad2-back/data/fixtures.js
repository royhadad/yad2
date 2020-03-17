const moment = require('moment');

const location = {
    id: '78708c592bddf3a50b3a14a24024728d4fa8a31d',
    description: 'תל אביב, ישראל',
    placeId: 'ChIJH3w7GaZMHRURkD-WwKJy-8E',
    active: true,
    index: 0,
    formattedSuggestion: {
        mainText: 'תל אביב',
        secondaryText: 'ישראל'
    },
    matchedSubstrings: [
        {
            length: 5,
            offset: 0
        }
    ],
    terms: [
        {
            offset: 0,
            value: 'תל אביב'
        },
        {
            offset: 9,
            value: 'ישראל'
        }
    ],
    types: [
        'locality',
        'political',
        'geocode'
    ]
};
const itemsArr = [
    {
        id: '57362456',
        category: 'forsale',
        location: location,
        types: [],
        properties: [],
        rooms: 4,
        price: 1700000,
        floor: 3,
        size: 115,
        numOfRoommates: 0,
        entryDate: moment(),
        isImmediateEntry: true,
        text: 'דירה מהממת בצפון הישן',
        imageURL: 'item1.jpg',
        isBrokerage: false
    },
    {
        id: '57362812',
        category: 'forsale',
        location: location,
        types: [],
        properties: [],
        rooms: 3,
        price: 1500000,
        floor: 4,
        size: 125,
        numOfRoommates: 0,
        entryDate: moment(),
        isImmediateEntry: true,
        text: 'מטר מדיזנגוף סנטר',
        imageURL: 'item2.jpg',
        isBrokerage: false
    },
    {
        id: '57362222',
        category: 'forsale',
        location: location,
        types: [],
        properties: [],
        rooms: 5,
        price: 1900000,
        floor: 3,
        size: 105,
        numOfRoommates: 0,
        entryDate: moment(),
        isImmediateEntry: true,
        text: 'בית קטן בדרום תל אביב',
        imageURL: 'item3.jpg',
        isBrokerage: true
    }
];


module.exports = { itemsArr };