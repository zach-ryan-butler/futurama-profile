const { Router } = require('express');
const { getRandomQuote } = require('../../public/services/futuramaApi');
const futuramaQuote = require('../middleware/futuramaQuote');

module.exports = Router()
    .get('/random', futuramaQuote, (req, res) => {
        res.send(req.body.quote);
        console.log(req.quote);
        // getRandomQuote(1)
        //     .then(quote => res.send(quote));
    });
