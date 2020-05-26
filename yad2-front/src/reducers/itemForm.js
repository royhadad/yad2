import moment from 'moment';

export const emptyItem = {
    category: 'forsale',
    text: '',
    location: undefined,
    type: undefined,
    properties: [],
    rooms: undefined,
    price: undefined,
    floor: undefined,
    size: undefined,
    numOfRoommates: undefined,
    entryDate: undefined,
    isImmediateEntry: false,
    isBrokerage: false,
    isCommercialSale: undefined
}
const itemProps = [
    'category',
    'text',
    'location',
    'type',
    'properties',
    'rooms',
    'price',
    'floor',
    'size',
    'numOfRoommates',
    'entryDate',
    'isImmediateEntry',
    'isBrokerage',
    'isCommercialSale'
];
const filtersReducerDefaultState = {
    locationCurrentText: '',
    error: '',
    item: emptyItem
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ITEM_FORM_SET_ITEM':
            if (!action.item) {
                return state;
            }

            const item = action.item;
            const filteredItem = {};
            itemProps.forEach((key) => {
                filteredItem[key] = item[key];
            })

            return {
                ...state,
                locationCurrentText: item.location.description,
                item: filteredItem
            };
        case 'ITEM_FORM_RESET_TO_DEFAULT':
            return filtersReducerDefaultState;
        case 'ITEM_FORM_SET_CATEGORY':
            return {
                ...state,
                item: {
                    ...state.item,
                    category: action.category
                }
            };
        case 'ITEM_FORM_SET_TEXT':
            return {
                ...state,
                item: {
                    ...state.item,
                    text: action.text
                }
            };
        case 'ITEM_FORM_SET_LOCATION':
            if (action.location !== undefined) {
                action.location = {
                    placeId: action.location.placeId,
                    description: action.location.description,
                    city: action.location.formattedSuggestion.mainText
                }
            }
            return {
                ...state,
                locationCurrentText: action.location === undefined ? '' : action.location.description,
                item: {
                    ...state.item,
                    location: action.location
                }
            };
        case 'ITEM_FORM_SET_TYPE':
            return {
                ...state,
                item: {
                    ...state.item,
                    type: action.propertyType
                }
            };
        case 'ITEM_FORM_TOGGLE_PROPERTY':
            return {
                ...state,
                item: {
                    ...state.item,
                    properties: state.item.properties.includes(action.property) ?
                        state.item.properties.filter((property) => property !== action.property) : [...state.item.properties, action.property]
                }
            };
        case 'ITEM_FORM_SET_ROOMS':
            return {
                ...state,
                item: {
                    ...state.item,
                    rooms: action.rooms
                }
            };
        case 'ITEM_FORM_SET_PRICE':
            return {
                ...state,
                item: {
                    ...state.item,
                    price: action.price
                }
            };
        case 'ITEM_FORM_SET_FLOOR':
            return {
                ...state,
                item: {
                    ...state.item,
                    floor: action.floor
                }
            };
        case 'ITEM_FORM_SET_SIZE':
            return {
                ...state,
                item: {
                    ...state.item,
                    size: action.size
                }
            };
        case 'ITEM_FORM_SET_ROOMMATES':
            return {
                ...state,
                item: {
                    ...state.item,
                    roommates: action.roommates
                }
            };
        case 'ITEM_FORM_SET_ENTRY_DATE':
            return {
                ...state,
                item: {
                    ...state.item,
                    entryDate: action.entryDate
                }
            };
        case 'ITEM_FORM_TOGGLE_IS_IMMEDIATE_ENTRY':
            return {
                ...state,
                item: {
                    ...state.item,
                    entryDate: undefined,
                    isImmediateEntry: !state.item.isImmediateEntry
                }
            };
        case 'ITEM_FORM_TOGGLE_IS_BROKERAGE':
            return {
                ...state,
                item: {
                    ...state.item,
                    isBrokerage: !state.item.isBrokerage
                }
            };
        case 'ITEM_FORM_SET_IS_COMMERCIAL_SALE':
            return {
                ...state,
                item: {
                    ...state.item,
                    isCommercialSale: action.isCommercialSale
                }
            };
        case 'ITEM_FORM_CLEAR_FORM':
            return {
                sortBy: state.sortBy,
                item: {
                    ...filtersReducerDefaultState.item,
                    category: state.item.category
                }
            };
        case 'ITEM_FORM_SET_ERROR':
            return {
                ...state,
                error: action.error || ''
            };
        case 'ITEM_FORM_SET_LOCATION_CURRENT_TEXT':
            return {
                ...state,
                locationCurrentText: action.locationCurrentText || ''
            };
        default:
            return state;
    }
};