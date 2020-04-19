import { store } from '#src#/index';
import validator from 'validator';
import resources from '#resources#';
const loginErrors = resources.errors.loginErrors;
const signupErrors = resources.errors.signupErrors;

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
        if (response.status !== 200) {
            throw response.status;
        }
        response = await response.json();
        store.dispatch(login(response.token));
    } catch (e) {
        switch (e) {
            case 401:
                store.dispatch(setLoginError(loginErrors.incorrectCredentials));
                break;
            case 400:
                store.dispatch(setLoginError(loginErrors.emailOrPasswordMissing));
                break;
            default:
                store.dispatch(setLoginError(loginErrors.somethingWentWrong));
                break;
        }
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
        //using an alert because this shouldn't happen for regular users
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

export const setSignupError = (error) => ({
    type: 'SET_SIGNUP_ERROR',
    error
})

export const startSignup = async (user) => {
    if (!isSignupValid(user)) {
        return;
    }

    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        var response = await fetch(`/api/users`, requestOptions);
        if (response.status !== 201) {
            throw response.status;
        }
        response = await response.json();
        store.dispatch(login(response.token));
    } catch (e) {
        if (e === 409) {
            store.dispatch(setSignupError(signupErrors.emailTaken));
        } else {
            //using an alert because this shouldn't happen for regular users
            alert('error in signup!');
        }
    }
}

const isSignupValid = ({ email, password, phone, name }) => {
    const dispatchError = (error) => {
        store.dispatch(setSignupError(error));
        return false;
    }
    //check all fields exist
    if (!email) {
        return dispatchError(signupErrors.emailMissing);
    }
    if (!password) {
        return dispatchError(signupErrors.passwordMissing);
    }
    if (!name) {
        return dispatchError(signupErrors.nameMissing);
    }
    if (!phone) {
        return dispatchError(signupErrors.phoneMissing);
    }

    //check email is valid
    if (!validator.isEmail(email)) {
        return dispatchError(signupErrors.invalidEmail);
    }
    //check password is atleast 6 characters long
    if (password.length < 6) {
        return dispatchError(signupErrors.invalidPassword);
    }
    //check phone number is valid
    if (phone.length < 6 || !validator.isInt(phone)) {
        return dispatchError(signupErrors.invalidPhone);
    }
    return true;
}