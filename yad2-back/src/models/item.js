const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const getArrWithoutDuplicates = require('../utils/getArrWithoutDuplicates');
const { uploadMultiple, uploadSingle, deleteMultiple, deleteSingle } = require('../utils/s3Services');
const resources = require('../utils/resources');
const categories = resources.general.propertyTypes;
const types = resources.body.searchBar.typeInput.types;
const properties = resources.body.searchBar.advancedProperties;

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

itemSchema.virtual('sellerDetails', {
    ref: 'User',
    localField: 'owner',
    foreignField: '_id'
});

//lifecycle methods
itemSchema.pre('save', function (next) {
    this.types = getArrWithoutDuplicates(this.types);
    this.properties = getArrWithoutDuplicates(this.properties);

    next();
})

itemSchema.pre('remove', function (next) {
    deleteMultiple(this.imagesURLs);
    next();
});

//make JSON.stringify return item object with user populated
itemSchema.methods.toJSON = function () {
    const itemObject = this.toObject();
    if (itemObject.sellerDetails) {
        itemObject.sellerDetails = itemObject.sellerDetails[0];
    }
    return itemObject;
}
itemSchema.set('toObject', { virtuals: true });
itemSchema.set('toJSON', { virtuals: true });

//static functions

//Schema methods
itemSchema.methods.deleteImages = async function (urlsToDelete) {
    const item = this;
    await deleteMultiple(urlsToDelete);
    item.imagesURLs = item.imagesURLs.filter((url) => !urlsToDelete.includes(url));
    await item.save();
    return item;
}
itemSchema.methods.addImages = async function (imagesToAdd) {
    const item = this;
    const files = imagesToAdd;

    let newImagesURLs = [];
    if (files && files.length) {
        newImagesURLs = await uploadMultiple(files);
    }
    if (item.imagesURLs) {
        item.imagesURLs = item.imagesURLs.concat(newImagesURLs);
    } else {
        item.imagesURLs = newImagesURLs;
    }
    await item.save();
    return item;
}

//private helper functions
const getDeletedURLs = (beforeArr, afterArr) => {
    const deletedURLs = beforeArr.filter((url) => (!afterArr.includes(url)));
    return deletedURLs;
}
const Item = mongoose.model('Item', itemSchema)
module.exports = Item;