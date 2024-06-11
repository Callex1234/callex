const mongoose = require("mongoose");

const newScript = new mongoose.Schema({
  scriptName: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
    require: false,
  },
  isUrl: {
    type: Boolean,
    require: false,
  },
  text: {
    type: String,
    require: false,
  },
});

const Script = mongoose.model("Script", newScript);

module.exports = Script;
