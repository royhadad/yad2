const moment = require('moment');

const location = {
    id: '78708c592bddf3a50b3a14a24024728d4fa8a31d',
    description: 'תל אביב, ישראל',
    placeId: 'ChIJH3w7GaZMHRURkD-WwKJy-8E',
    active: true,
    index: 0,
    formattedSuggestion: {
        mainText: 'תל מונד',
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
        sellerId: '1111',
        category: 'forsale',
        location: location,
        types: [],
        properties: [],
        rooms: 4,
        price: 1700000,
        floor: 3,
        size: 115,
        numOfRoommates: 0,
        entryDate: moment().add(2, 'days'),
        isImmediateEntry: true,
        text: 'דירה מהממת בצפון הישן',
        imagesURLs: ['item1.jpg'],
        isBrokerage: false
    },
    {
        id: '57362812',
        sellerId: '1111',
        category: 'forsale',
        location: location,
        types: [],
        properties: [],
        rooms: 3,
        price: 1500000,
        floor: 4,
        size: 125,
        numOfRoommates: 0,
        entryDate: moment().add(2, 'days'),
        isImmediateEntry: true,
        text: 'מטר מדיזנגוף סנטר',
        imagesURLs: ['item2.jpg'],
        isBrokerage: false
    },
    {
        id: '57362222',
        sellerId: '2222',
        category: 'forsale',
        location: location,
        types: [],
        properties: [],
        rooms: 5,
        price: 1900000,
        floor: 3,
        size: 105,
        numOfRoommates: 0,
        entryDate: undefined,
        isImmediateEntry: true,
        text: 'בית קטן בדרום תל אביב',
        imagesURLs: ['item3.jpg'],
        isBrokerage: true
    }
];
const usersArr = [
    {
        id: "1111",
        name: "אמיר הנדל\"ן",
        isPrivate: false,
        phoneNumber: "0544970131",
        itemsIdArr: ["57362456", "57362812"]
    },
    {
        id: "2222",
        name: "עידו הנדל נכסים",
        isPrivate: false,
        phoneNumber: "0523451231",
        itemsIdArr: ["57362222"]
    }
]

module.exports = { itemsArr, usersArr };