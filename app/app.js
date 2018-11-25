const express = require('express');
const dbConnection = require('./db');
const app = express();

const Water = require('./components/Water');
app.use('/water', Water.api);

module.exports = app;
