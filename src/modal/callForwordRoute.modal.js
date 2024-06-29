const mongoose = require("mongoose");
const CallforwordRoute = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: false,
  },
  active: {
    type: Boolean,
    require: false,
  },
  digits: {
    type: Number,
    require: true,
  },
  availableTrunk: {
    type: Array,
  },
  selectedTrunk: {
    type: Array,
  },
});

const callforwordRoute = mongoose.model("CallforwordRoute", CallforwordRoute);

module.exports = callforwordRoute;
