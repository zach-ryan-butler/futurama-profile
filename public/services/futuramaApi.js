const request = require('superagent');

const getRandomQuote = (count, favoriteChar) => {
    return request  
        .get(`http://futuramaapi.herokuapp.com/api/characters/${favoriteChar}/${count}`)
        .then(res => res.body);
}

module.exports = {
    getRandomQuote
};