import authReducer from '#src#/reducers/auth';
import { login } from '#actions#/auth';

//integration test of action and reducer
test('should setup state.auth.token to the token', () => {
    const token = 'dummy-token.token-body.token-end';
    const state = authReducer(undefined, login(token));
    expect(state).toEqual({ token });
});