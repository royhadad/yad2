export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.token,
            };
        case 'LOGOUT':
            return {
                ...state,
                token: undefined,
            };
        case 'SET_LOGIN_ERROR':
            return {
                ...state,
                loginError: action.error
            }
        case 'SET_SIGNUP_ERROR':
            return {
                ...state,
                signupError: action.error
            }
        default:
            return state;
    }
};