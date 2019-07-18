const { getRandomQuote } = require('../../public/services/futuramaApi');

module.exports = (req, res, next) => {
    getRandomQuote(1, req.body.favoriteCharacter)
        .then(quote => {
            req.body.quote = quote[0].quote;
            next();
        });
}
