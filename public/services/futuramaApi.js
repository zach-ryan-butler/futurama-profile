const request = require('superagent');

const getRandomQuote = (count, favoriteChar) => {
    return request  
        .get(`http://futuramaapi.herokuapp.com/api/quotes/${favoriteChar}/${count}`)
        .then(res => res.body);
}

module.exports = {
    getRandomQuote
};