const express = require('express');
const cors = require('cors');
const dbConnection = require('./db');
const app = express();

app.use(cors());

const Water = require('./components/Water');
app.use('/water', Water.api);

module.exports = app;
