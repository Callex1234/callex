const mongoose = require("mongoose");

const crmViewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    customerMessage: {
      type: String,
      require: true,
    },
    file: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
  {
    strictPopulate: false,
  }
);

crmViewSchema.index({ unique: true });
const CrmView = mongoose.model("CrmView", crmViewSchema);

module.exports = CrmView;
