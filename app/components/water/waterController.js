const Water = require('./Water');

getAllWaterTests = (callBack) => {
  Water.find({}, (err, waterTests) => {
    if (err) callBack(true);
    else callBack(false, waterTests);
  });
};

getWaterTestById = (id, callBack) => {
  Water.findById(id, (err, waterTest) => {
    if (err) callBack(true);
    else callBack(false, waterTest);
  });
};

createWaterTest = (waterTest, callBack) => {
  Water.create(waterTest, (err, water) => {
    if (err) callBack(true);
    else callBack(false, water);
  });
};

updateWaterTest = (id, waterParams, callBack) => {
  Water.findByIdAndUpdate(id, waterParams, {new: true}, (err, waterTest) => {
    if (err) callBack(true);
    else callBack(false, waterTest);
  });
};

deleteWaterTest = (id, callBack) => {
  Water.findByIdAndRemove(id, (err, water) => {
    if (err) callBack(true);
    else callBack(false, water);
  });
};

module.exports = {
  getAllWaterTests,
  getWaterTestById,
  createWaterTest,
  updateWaterTest,
  deleteWaterTest
};
