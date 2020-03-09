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
        case 'SET_FILTERS':
            return action.filters;
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
                    types: [...state.search.types, action.propertyType]
                }
            };
        case 'REMOVE_TYPE':
            return {
                ...state,
                search: {
                    ...state.search,
                    types: state.search.types.filter((type) => type !== action.propertyType)
                }
            };
        case 'TOGGLE_ONLY_IMMEDIATE_ENTRY':
            return {
                ...state,
                search: {
                    ...state.search,
                    onlyImmediateEntry: !state.search.onlyImmediateEntry
                }
            }
        case 'SET_MIN_ENTRY_DATE':
            return {
                ...state,
                search: {
                    ...state.search,
                    minEntryDate: action.date
                }
            }
        case 'SET_TEXT':
            return {
                ...state,
                search: {
                    ...state.search,
                    text: action.text
                }
            }
        case 'TOGGLE_PROPERTY':
            return {
                ...state,
                search: {
                    ...state.search,
                    properties: state.search.properties.includes(action.property)
                        ?
                        state.search.properties.filter((property) => property !== action.property)
                        :
                        [...state.search.properties, action.property]
                }
            }
        case 'CLEAR_SEARCH':
            return {
                sortBy: state.sortBy,
                search: {
                    ...filtersReducerDefaultState.search,
                    category: state.search.category
                }
            }
        case 'CLEAR_FILTERS':
            return filtersReducerDefaultState;
        case 'SET_LOCATION':            
            return {
                ...state,
                search: {
                    ...state.search,
                    location: action.location === '' ? undefined : action.location
                }
            }
        default:
            return state;
    }
};