const mongoose = require("mongoose");

const outboundTrunkVoipSchema = new mongoose.Schema(
  {
    customSetting: {
      type: Boolean,
    },
    SIPAccount: {
      type: String,
    },
    accountID: {
      type: String,
    },
    IPAddress: {
      type: String,
    },
    context: {
      type: String,
    },
    password: {
      type: String,
    },
    type: {
      type: String,
      enum: ["peer", "friend", "date"],
      default: "peer",
    },
    outboundTrunk: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "outboundTrunk",
    },
  },
  { timestamps: true },
  {
    strictPopulate: false,
  }
);

const outboundTrunkVoip = mongoose.model(
  "outboundTrunkVoip",
  outboundTrunkVoipSchema
);

module.exports = outboundTrunkVoip;
