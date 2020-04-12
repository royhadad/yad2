const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const getArrWithoutDuplicates = require('../utils/getArrWithoutDuplicates');
const resources = require('../utils/resources');
const categories = resources.general.propertyTypes;
const types = resources.body.searchBar.typeInput.types;
const properties = resources.body.searchBar.advancedProperties;

const s3ItemsImagesUrlsPrefix = 'https://royhadad-yad2.s3-eu-west-1.amazonaws.com/images/items/';

const locationSchema = new Schema({
    placeId: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    }
})

const itemSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: locationSchema,
        required: true,
    },
    category: {
        type: String,
        required: true,
        validate(value) {
            if (!Object.keys(categories).includes(value)) {
                throw new Error('category is invalid')
            }
        }
    },
    types: [{
        type: String,
        required: true,
        validate(value) {
            if (this.category === 'roommates') {
                throw new Error('types are not allowed for roommates!');
            }
            const categoryTypes = types[this.category];
            if (!categoryTypes.find((type) => type.value === value)) {
                throw new Error(`type ${value} is invalid for category ${this.category}`);
            }
        }
    }],
    properties: [{
        type: String,
        required: true,
        validate(value) {
            const categoryProperties = properties[this.category];
            if (!categoryProperties.find((property) => property.value === value)) {
                throw new Error(`property ${value} is not allowed for ${this.category}`);
            }
        }
    }],
    rooms: {
        required: function () {
            return this.category !== 'commercial';
        },
        type: Number,
        min: 1,
        max: 12,
        validate(value) {
            if (!Number.isInteger(value)) {
                throw new Error(`${value} is not a valid number of rooms`);
            }
        }
    },
    price: {
        required: true,
        type: Number,
        min: 1,
        max: 100000000
    },
    floor: {
        required: function () {
            return this.category !== 'roommates'
        },
        type: Number,
        min: -1,
        max: 17
    },
    size: {
        required: function () {
            return this.category !== 'roommates'
        },
        type: Number,
        min: 1,
        max: 100000
    },
    numOfRoommates: {
        required: function () {
            return this.category === 'roommates'
        },
        validate(value) {
            if (this.category !== 'roommates') {
                throw new Error(`numOfRoommates is not a valid property for a ${this.category} item`);
            }
        },
        type: Number,
        min: 2,
        max: 5
    },
    entryDate: {
        required: false,
        type: Number,
        validate(value) {
            if (value < moment().startOf('day').valueOf()) {
                throw new Error(`date has already passed!`);
            }
        }
    },
    isImmediateEntry: {
        required: true,
        type: Boolean,
        default: false
    },
    isBrokerage: {
        required: true,
        type: Boolean,
        default: false
    },
    //not saving the s3 images prefix
    imagesURLs: [{
        type: String
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

//lifecycle methods
itemSchema.pre('save', function (next) {
    this.types = getArrWithoutDuplicates(this.types);
    this.properties = getArrWithoutDuplicates(this.properties);
    next();
})

//make JSON.stringify return item object with full imageURLs
itemSchema.methods.toJSON = function () {
    const itemObject = this.toObject();

    itemObject.imagesURLs = itemObject.imagesURLs.map((id) => (s3ItemsImagesUrlsPrefix + id));

    return itemObject;
}

//static functions

//Schema methods

const Item = mongoose.model('Item', itemSchema)
module.exports = Item;