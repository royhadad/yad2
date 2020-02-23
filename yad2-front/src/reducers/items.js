const itemsReducerDefaultState = {
    currentPage: 1,
    numberOfPages:20,
    itemsArr:[]
};

export default (state = itemsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        default:
            return state;
    }
};