const express         = require('express');
const mongoose        = require('mongoose');
const bodyParser      = require('body-parser');
const db              = require('./config/db');
const app             = express();
const port            = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(db.url, (err, database) => {
  if (err) return console.log(err);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
