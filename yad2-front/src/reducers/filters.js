const filtersReducerDefaultState = {
    sortBy: 'date',
    search: {
        category: 'forsale',
        location: undefined,
        types: [],
        properties: [],
        minRooms: undefined,
        maxRooms: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        minFloor: undefined,
        maxFloor: undefined,
        minSize: undefined,
        maxSize: undefined,
        minRoommates: undefined,
        maxRoommates: undefined,
        minEntryDate: undefined,
        onlyImmediateEntry: false,
        text: undefined,
        showOnlyItemsWithImage: false,
        showOnlyItemsWithPrice: false
    }
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                search: {
                    ...state.search,
                    category: action.category
                }
            };
        case 'SET_MIN_ROOMS':
            return {
                ...state,
                search: {
                    ...state.search,
                    minRooms: action.minRooms
                }
            };
        case 'SET_MAX_ROOMS':
            return {
                ...state,
                search: {
                    ...state.search,
                    maxRooms: action.maxRooms
                }
            };
        case 'SET_MIN_PRICE':
            return {
                ...state,
                search: {
                    ...state.search,
                    minPrice: action.minPrice
                }
            };
        case 'SET_MAX_PRICE':
            return {
                ...state,
                search: {
                    ...state.search,
                    maxPrice: action.maxPrice
                }
            };
        case 'SET_MIN_FLOOR':
            return {
                ...state,
                search: {
                    ...state.search,
                    minFloor: action.minFloor
                }
            };
        case 'SET_MAX_FLOOR':
            return {
                ...state,
                search: {
                    ...state.search,
                    maxFloor: action.maxFloor
                }
            };
        case 'SET_MIN_SIZE':
            return {
                ...state,
                search: {
                    ...state.search,
                    minSize: action.minSize
                }
            };

        case 'SET_MAX_SIZE':
            return {
                ...state,
                search: {
                    ...state.search,
                    maxSize: action.maxSize
                }
            };
        case 'SET_MIN_ROOMMATES':
            return {
                ...state,
                search: {
                    ...state.search,
                    minRoommates: action.Roommates
                }
            };

        case 'SET_MAX_ROOMMATES':
            return {
                ...state,
                search: {
                    ...state.search,
                    maxRoommates: action.Roommates
                }
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_PRICE_HIGH_LOW':
            return {
                ...state,
                sortBy: 'priceHighLow'
            };
        case 'SORT_BY_PRICE_LOW_HIGH':
            return {
                ...state,
                sortBy: 'priceLowHigh'
            };
        case 'TOGGLE_SHOW_ONLY_ITEMS_WITH_PRICE':
            return {
                sortBy: state.sortBy,
                search: {
                    ...state.search,
                    showOnlyItemsWithPrice: !state.search.showOnlyItemsWithPrice
                }
            };
        case 'TOGGLE_SHOW_ONLY_ITEMS_WITH_IMAGE':
            return {
                ...state,
                search: {
                    ...state.search,
                    showOnlyItemsWithImage: !state.search.showOnlyItemsWithImage
                }
            };
        case 'ADD_TYPE':
            return {
                ...state,
                search: {
                    ...state.search,
                    type: [...state.search.types, action.propertyType]
                }
            };
        case 'REMOVE_TYPE':
            return {
                ...state,
                search: {
                    ...state.search,
                    type: state.search.types.filter((type) => type !== action.propertyType)
                }
            };
        default:
            return state;
    }
};