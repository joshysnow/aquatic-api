const express = require('express');
const bodyParser = require('body-parser');
const WaterController = require('./waterController');
const WaterUtils = require('./waterUtils');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// <<< GET >>> returns all water tests in db
router.get('/', (req, res) => {
  WaterController.getAllWaterTests((error, dbWaterTests) => {
    if (error) res.status(500).send('Error reading water readings from database');
    else res.status(200).send(dbWaterTests);
  });
});

// <<< GET >>> returns one water test
router.get('/:id', (req, res) => {
  const id = WaterUtils.getRequestId(req);

  WaterController.getWaterTestById(id, (error, dbWaterTest) => {
    if (error) res.status(500).send(`Error requesting water with id ${req.params.id}`);
    else if (!dbWaterTest) res.status(404).send('Water test not found');
    else res.status(200).send(dbWaterTest);
  });
});

// <<< POST >>> adds new water test
router.post('/', (req, res) => {
  const waterTest = WaterUtils.getRequestWaterTest(req);

  WaterController.createWaterTest(waterTest, (error, dbWaterTest) => {
    if (error) res.status(500).send('Error adding water test');
    else res.status(200).send(dbWaterTest);
  });
});

// <<< PUT >>> updates a water test
router.put('/:id', (req, res) => {
  const id = WaterUtils.getRequestId(req);
  const waterParams = {};

  WaterController.updateWaterTest(id, waterParams, (error, dbWaterTest) => {
    if (error) res.status(500).send(`Error updating water with id ${id}`);
    else res.status(200).send(dbWaterTest);
  });
});

// <<< DELETE >>> deletes a water test
router.delete('/:id', (req, res) => {
  const id = WaterUtils.getRequestId(req);

  WaterController.deleteWaterTest(id, (error, dbWaterTest) => {
    if (error) res.status(500).send(`Error removing water test with id ${id}`);
    else res.status(200).send('Deleted water test');
  });
});

module.exports = router;
