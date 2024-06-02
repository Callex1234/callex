const mongoose = require("mongoose");
const CRM = require("./crm.modal");
const CrmField = require("./crmField.modal");

const crmAnswerSchema = new mongoose.Schema(
  {
    answer: {
      type: String,
      require: true,
    },
    crm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CRM",
      populate: true,
    },
    crmfield: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CrmField",
      populate: true,
    },
  },
  { timestamps: true }
);

crmAnswerSchema.index({ unique: true });
const CrmAnswer = mongoose.model("CrmAnswer", crmAnswerSchema);

module.exports = CrmAnswer;
