import Cookies from 'js-cookie';

const defaultState = {}
const auth = Cookies.get("Authorization");
if (auth) {
    defaultState.token = auth.replace('Bearer ', '');
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            Cookies.set("Authorization", `Bearer ${action.token}`, { expires: 7 });
            return {
                ...state,
                token: action.token,
            };
        case 'LOGOUT':
            Cookies.remove("Authorization");
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