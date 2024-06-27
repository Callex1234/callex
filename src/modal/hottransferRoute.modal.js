const mongoose = require("mongoose");
const HotTranferRoute = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  routeDesc: {
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

const hotTranferRoute = mongoose.model("HotTranferRoute", HotTranferRoute);

module.exports = hotTranferRoute;
