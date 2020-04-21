import UnexpectedAuthErrorHandler from '../utility/UnexpectedAuthErrorHandler';

const fetchUser = async () => {
    try {
        let response = await fetch(`/api/users/me`);
        if (response.status !== 200) {
            throw response.status;
        }
        response = await response.json();

        return response;
    } catch (e) {
        UnexpectedAuthErrorHandler(e);
    }
}

export { fetchUser };