const filtersReducerDefaultState = {
    sortBy: 'date',
    showOnlyItemsWithImage: false,
    showOnlyItemsWithPrice: false,
    search: {
        location: undefined,
        type:[],
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
        text: undefined
    }
  };

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
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
                ...state,
                showOnlyItemsWithPrice: !state.showOnlyItemsWithPrice
            };
        case 'TOGGLE_SHOW_ONLY_ITEMS_WITH_IMAGE':
            return {
                ...state,
                showOnlyItemsWithImage: !state.showOnlyItemsWithImage
            };
        default:
            return state;
    }
};