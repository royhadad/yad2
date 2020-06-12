const request = require('supertest');
const User = require('../src/models/user');
const app = require('../src/app');
const {
    setupDatabase,
    userOne,
} = require('./fixtures/db');

beforeEach(setupDatabase);

//integration test
test('login and get profile', async () => {
    const loginResponse = await request(app).post('/api/users/login')
        .send({
            email: "roy@example.com",
            password: "123456"
        })
        .expect(200);

    expect(loginResponse.body.token).not.toBe(null);
    const token = loginResponse.body.token;

    const getProfileResponse = await request(app).get('/api/users/me')
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200);

    expect(getProfileResponse.body).not.toBe(null);
    const userProfile = getProfileResponse.body;
    expect(userProfile).toMatchObject({
        _id: userOne._id.toString(),
        email: userOne.email,
        name: userOne.name,
        phone: userOne.phone
    });
});

//end to end test
test('sign up', async () => {
    const response = await request(app).post('/api/users')
        .send({
            name: "Roy",
            email: "testuser@example.com",
            password: "123456",
            phone: "0544970575"
        }).expect(201)

    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();

    expect(response.body).toMatchObject({
        user: {
            name: 'Roy',
            email: 'testuser@example.com',
            phone: "0544970575"
        },
        token: user.tokens[0].token
    })

    expect(user.password).not.toBe('123456');
});