const mongoose = require("mongoose");
const newRoutes = new mongoose.Schema({
  routeName: {
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
  routeMethod: {
    type: String,
    enum: ["serial", "random"],
    default: "serial",
  },
  availableTrunk: {
    type: Array,
  },
  selectedTrunk: {
    type: Array,
  },
});

const Routes = mongoose.model("Routes", newRoutes);

module.exports = Routes;
