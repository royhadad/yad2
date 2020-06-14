import { login, logout } from '#actions#/auth'
test('should setup login action object correctly', () => {
    const token = 'dummy-token.token-body.token-end';
    const loginAction = login(token);
    expect(loginAction).toEqual({
        type: 'LOGIN',
        token
    });
});