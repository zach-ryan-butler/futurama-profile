const request = require('superagent');

const getRandomQuote = (count, favoriteCharacter) => {
    return request  
        .get(`futuramaapi.herokuapp.com/api/quotes/${count}`)
        .then(res => {
            if(favoriteCharacter === res.character) {
                res.body;
            }
        });
}

module.exports = getRandomQuote;