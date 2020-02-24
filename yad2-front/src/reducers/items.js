const itemsReducerDefaultState = {
    currentPage: 1,
    numOfPages: 20,
    totalItems: 20 * 40 - 6,
    itemsArr: []
};

export default (state = itemsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        case 'SET_NUM_OF_PAGES':
            return {
                ...state,
                numOfPages: action.numOfPages
            };
        case 'SET_TOTAL_ITEMS':
            return {
                ...state,
                totalItems: action.totalItems
            }
        default:
            return state;
    }
};