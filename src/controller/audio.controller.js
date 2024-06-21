const { logger } = require("../config/logger.config");
const Joi = require("joi");
const Audio = require("../modal/audio.modal");
const fs = require("fs");
const path = require("path");

const audio = async (req, res) => {
  try {
    const Audiofile = await Audio.find({});
    console.log(Audiofile);
    return res.render("admin/audio", { Audiofile: Audiofile });
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};

const addAudio = async (req, res) => {
  try {
    const { body, file } = req;
    console.log("Request body:", body);
    console.log("Uploaded file:", file);
    console.log("Uploaded file:", file.path);

    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }
    const addaudio = await Audio.create({
      fileName: req.body.name,
      uploadFile: req.file.filename,
      filesize: req.file.size,
      filePath: `audio/${req.file.filename}`,
    });
    console.log("file size", file.size);
    console.log("Audio created:", addaudio);
    // console.log(req.audiofile);
    return res.redirect("/admin/audio");
  } catch (err) {
    logger.error("Error in process.process => " + err.message);
    console.log(err);
    logger.error(JSON.stringify(err));
  }
};
const deleteAudio = async (req, res) => {
  try {
    const id = req.params.id;
    await Audio.findByIdAndDelete(id);
    console.log({ id });
    return res.redirect("/admin/audio");
  } catch (error) {
    logger.error(error.message);
    console.log(error);
    return res.redirect("/admin/audio");
  }
};

const downloadAudio = async (req, res) => {
  try {
    fileName = "file.mp3";
    // console.log("hi");
    const id = req.params.id;
    const file = await Audio.findById(id);
    const filePath = path.resolve(file.filePath);
    console.log("file data", file);

    // Validate that filePath and fileName are strings
    if (
      !file ||
      typeof file.filePath !== "string" ||
      typeof file.fileName !== "string"
    ) {
      console.error(
        `Invalid file metadata: filePath=${file.filePath}, fileName=${file?.fileName}`
      );
      return res.status(404).send("File not found or invalid file metadata");
    }

    console.log({ id });
    // if (!file) {
    //   return res.status(404).send("File not found");
    // }

    res.download(filePath + file.fileName, (err) => {
      if (err) {
        console.error(`Error downloading file: ${err.message}`);
        if (!res.headersSent) {
          return res.status(500).send("Error downloading file");
        }
      } else {
        console.log("File download initiated successfully.");
      }
    });
    console.log(filePath, `filename : ${file.fileName} `);
    return res.redirect("/admin/audio");
  } catch (error) {
    logger.error(`Error in downloadAudio: ${error.message}`);
    console.log(error);
    return res.redirect("/admin/audio");
  }
};

module.exports = { audio, addAudio, deleteAudio, downloadAudio };
