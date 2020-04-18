import { store } from '#src#/index';

//LOGIN
export const login = (token) => ({
    type: 'LOGIN',
    token
});

export const startLogin = async (email, password) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }
        let response = await fetch(`/api/users/login`, requestOptions);
        response = await response.json();
        if (response.error) {
            throw response.error;
        }
        store.dispatch(login(response.token));
    } catch (e) {
        store.dispatch(setLoginError(false));
    }
}

//LOGOUT
export const logout = (token) => ({
    type: 'LOGOUT',
    token
});

const startLogoutAllOrOnce = async (shouldLogoutAll) => {
    try {
        const token = store.getState().auth.token;
        if (!token) {
            throw new Error();
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        var response = await fetch(`/api/users/logout${shouldLogoutAll ? 'All' : ''}`, requestOptions);
        if (response.status !== 200) {
            throw response.error;
        }
        store.dispatch(logout(token));
    } catch (e) {
        alert('error in logout');
    }
}

export const startLogout = async () => {
    await startLogoutAllOrOnce(false);
}

export const startLogoutAll = async () => {
    await startLogoutAllOrOnce(true);
}
export const setLoginError = (error) => ({
    type: 'SET_LOGIN_ERROR',
    error
})