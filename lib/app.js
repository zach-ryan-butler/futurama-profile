const express = require('express');
const app = express();
const futuramaRoute = require('./routes/profiles');

app.use(express.json());

app.use(futuramaRoute);

module.exports = app;
