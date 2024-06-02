const mongoose = require("mongoose");

const crmSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    primaryNumber: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

crmSchema.index({ unique: true });
const CRM = mongoose.model("CRM", crmSchema);

module.exports = CRM;
