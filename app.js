const express = require('express');
const dbConnection = require('./db');
const app = express();

const WaterAPI = require('./components/Water');
app.use('/water', WaterAPI);

module.exports = app;
