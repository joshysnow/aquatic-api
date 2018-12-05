const mongoose = require('mongoose');
const waterSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  ph: Number,
  kh: Number,
  gh: Number,
  ammonia: Number,
  nitrite: Number,
  nitrate: Number,
  phosphate: Number
});
mongoose.model('Water', waterSchema);

module.exports = mongoose.model('Water');
