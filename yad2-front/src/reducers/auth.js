export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                token: action.token,
                error: undefined
            };
        case 'LOGOUT':
            return {
                token: undefined,
                error: undefined
            };
        case 'SET_LOGIN_ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
};