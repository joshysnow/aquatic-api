const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Water = require('./Water');

// <<< GET >>> returns all water tests in db
router.get('/', (req, res) => {
  Water.find({}, (err, tests) => {
    if (err) return res.status(500).send('Error reading water readings from database');
    res.status(200).send(tests);
  });
});

// <<< GET >>> returns one water test
router.get('/:id', (req, res) => {
  Water.findById(req.params.id, (err, water) => {
    if (err) return res.status(500).send(`Error requesting water with id ${req.params.id}`);
    else if (!water) return res.status(404).send('Water test not found');
    res.status(200).send(water);
  });
});

// <<< POST >>> adds new water test
router.post('/', (req, res) => {
  Water.create({
    ph: req.body.ph
  }, (err, water) => {
    if (err) return res.status(500).send('Error adding water test');
    res.status(200).send(water);
  });
});

// <<< PUT >>> updates a water test
router.put('/:id', (req, res) => {
  Water.findByIdAndUpdate(req.params.id, {
    ph: req.body.ph
  }, {
    new: true
  }, (err, water) => {
    if (err) return res.status(500).send(`Error updating water with id ${req.params.id}`);
    res.status(200).send(water);
  });
});

// <<< DELETE >>> deletes a water test
router.delete('/:id', (req, res) => {
  Water.findByIdAndRemove(req.params.id, (err, water) => {
    if (err) return res.status(500).send(`Error removing water test with id ${req.params.id}`);
    res.status(200).send('Deleted water test');
  });
});

module.exports = router;
