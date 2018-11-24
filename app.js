const express = require('express');
const dbConnection = require('./db');
const app = express();

const WaterController = require('./components/Water').WaterController;
app.use('/water', WaterController);

module.exports = app;
