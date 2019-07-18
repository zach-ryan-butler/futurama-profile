const express = require('express');
const app = express();
const futuramaRoute = require('./routes/profiles');
const error = require('./middleware/error');
const notFound = require('./middleware/notFound');

app.use(express.json());

app.use(futuramaRoute);

app.use(notFound);
app.use(error);

module.exports = app;
