const mongoose = require("mongoose");

const outBoundTrunkSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  active: {
    type: Boolean,
  },
  type: {
    type: String,
  },
  channels: {
    type: String,
  },
});

const outBoundTrunk = mongoose.model("outboundTrunk", outBoundTrunkSchema);

module.exports = outBoundTrunk;
