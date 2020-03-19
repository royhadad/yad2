const itemsReducerDefaultState = {
    currentPage: 1,
    numOfPages: 0,
    totalItems: 0,
    isLoading: true,
    searchedLocation: undefined,
    itemsArr: []
};
const itemsPerPage = 40;

export default (state = itemsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        case 'SET_TOTAL_ITEMS':
            return {
                ...state,
                totalItems: action.totalItems,
                numOfPages: Math.ceil(action.totalItems / itemsPerPage)
            }
        case 'SET_ITEMS_ARR':
            return {
                ...state,
                itemsArr: action.itemsArr
            }
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'SET_SEARCHED_LOCATION':
            return {
                ...state,
                searchedLocation: action.searchedLocation
            }
        default:
            return state;
    }
};