const modalReducerDefaultState = {
    childJSX: undefined,
    isOpen: false,
    style: {

    }
};

export default (state = modalReducerDefaultState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                childJSX: action.childJSX,
                isOpen: true,
                style: action.style || state.style
            };
        case 'CLOSE_MODAL':
            return modalReducerDefaultState;
        default:
            return state;
    }
};