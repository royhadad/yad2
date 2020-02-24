const filtersReducerDefaultState = {
    sortBy: 'date',
    search: {
        category: 'forsale',
        location: undefined,
        type: [],
        properties: [],
        minRooms: undefined,
        maxRooms: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        minFloor: undefined,
        maxFloor: undefined,
        minSize: undefined,
        maxSize: undefined,
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
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.search
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
                    showOnlyItemsWithPrice: !state.showOnlyItemsWithPrice
                }
            };
        case 'TOGGLE_SHOW_ONLY_ITEMS_WITH_IMAGE':
            return {
                ...state,
                search: {
                    ...state.search,
                    showOnlyItemsWithImage: !state.showOnlyItemsWithImage
                }
            };
        default:
            return state;
    }
};