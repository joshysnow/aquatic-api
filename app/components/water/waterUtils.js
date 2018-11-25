getRequestId = (req) => {
  return req.params.id;
};

getRequestWaterTest = (req) => {
  return {
    ph: req.body.ph,
    kh: req.body.kh,
    gh: req.body.gh,
    ammonia: req.body.ammonia,
    nitrite: req.body.nitrite,
    nitrate: req.body.nitrate,
    phosphate: req.body.phosphate
  };
};

module.exports = {
  getRequestId,
  getRequestWaterTest
};
