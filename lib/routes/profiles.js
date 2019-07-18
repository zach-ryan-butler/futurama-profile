const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuote');

const profiles = [];

module.exports = Router()
    .post('/api/v1/profile', futuramaQuote, (req, res) => {
        const {
            name,
            favoriteCharacter,
            quote
        } = req.body;

        const profile = {
            name,
            favoriteCharacter,
            tagline: quote
        }

        profiles.push(profile);

        res.send(profile);
    })

    .get('/api/v1/profile', (req, res) => {
        res.send(profiles);
    })

    .get('/api/v1/profile/:id', (req, res) => {
        res.send(profiles[req.params.id]);
    })

    .patch('/api/v1/profile/:id', futuramaQuote, (req, res) => {
        const {
            favoriteCharacter,
            quote
        } = req.body;

        profiles[req.params.id].favoriteCharacter = favoriteCharacter;
        profiles[req.params.id].tagline = quote;

        res.send(profiles[req.params.id]);
    })

    .delete('/api/v1/profile/:id', (req, res) => {
        const deleted = profiles.splice(req.params.id, 1);

        res.send(deleted[0]);
    });
