const { number } = require("joi");
const mongoose = require("mongoose");
const newAudio = new mongoose.Schema({
  fileName: {
    type: String,
    require: true,
  },
  uploadFile: {
    type: String,
    require: true,
  },
  filesize: {
    type: Number,
  },
  filePath: {
    type: String,
  },
});

const Audio = mongoose.model("Audio", newAudio);

module.exports = Audio;
