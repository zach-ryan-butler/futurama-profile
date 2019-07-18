const request = require('supertest');
const app = require('../lib/app');

describe('profile routes', () => {
    it('can create a profile', () => {
        return request(app)
            .post('/api/v1/profile')
            .send({ name: 'zach', favoriteCharacter: 'Fry' })
            .then(res => {
                expect(res.body).toEqual({
                    name: 'zach',
                    favoriteCharacter: 'Fry',
                    tagline: expect.any(String)
                });
            });
    });
    it('can get a list of all profiles', () => {
        return request(app)
            .get('/api/v1/profile')
            .then(res => {
                expect(res.body).toEqual([{
                    name: 'zach',
                    favoriteCharacter: 'Fry',
                    tagline: expect.any(String)
                }]);
            });
    });
    it('can get a profile by id', () => {
        return request(app)
            .get('/api/v1/profile/0')
            .then(res => {
                expect(res.body).toEqual({
                    name: 'zach',
                    favoriteCharacter: 'Fry',
                    tagline: expect.any(String)
                });
            });
    })
    it('can update a profiles favorite character', () => {
        return request(app)
            .patch('/api/v1/profile/0')
            .send({ favoriteCharacter: 'Bender' })
            .then(res => {
                expect(res.body.favoriteCharacter).toEqual('Bender')
            });
    });
    it('can delete a profile by id', () => {
        return request(app)
            .delete('/api/v1/profile/0')
            .then(res => {
                expect(res.body).toEqual({
                    name: 'zach',
                    favoriteCharacter: 'Bender',
                    tagline: expect.any(String)
                });
            });
    });
});
