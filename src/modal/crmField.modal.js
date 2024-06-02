const mongoose = require("mongoose");
const CrmView = require("./crmView.modal");

const crmFieldSchema = new mongoose.Schema(
  {
    edit: {
      type: Boolean,
      require: false,
    },
    label: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      enum: ["text", "select", "date"],
      default: "text",
    },
    option: {
      type: Object,
    },
    crmview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CrmView",
    },
  },
  { timestamps: true },
  {
    strictPopulate: false,
  }
);

crmFieldSchema.index({ unique: true });
const CrmField = mongoose.model("CrmField", crmFieldSchema);

module.exports = CrmField;
