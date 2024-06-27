const multer = require("multer");
const { index } = require("../controller/callForwordRoutes.controller");
const { hotTranfer } = require("../controller/hotTranferRoutes.controller");
const {
  audio,
  addAudio,
  deleteAudio,
  downloadAudio,
} = require("../controller/audio.controller");

const {
  routes,
  addroutes,
  deleteRoutes,
  updateRoutes,
} = require("../controller/route.controller");
const {
  crm,
  addCrm,
  updateCrm,
  deleteCrm,
} = require("../controller/crm.controller");
const {
  Scripts,
  addScripts,
  updateScripts,
  deleteScripts,
} = require("../controller/script.conroller");

const { process } = require("../controller/process.controller");
const { verifyToken } = require("../middleware/auth.middleware");
const express = require("express");
const {
  trunk,
  createTrunk,
  deleteTrunks,
  updateTrunk,
} = require("../controller/outBoundsTrunk.controller");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public/logos"); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Specify the file name
  },
});

const filestorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public/audio"); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Specify the file name
  },
});
const upload = multer({ storage: storage });
const audiouploads = multer({ storage: filestorage });
const adminRoutes = express.Router();

adminRoutes.post("/trunks", createTrunk);
adminRoutes.get("/trunks/delete/:id", deleteTrunks);
adminRoutes.get("/outBoundTrunk", trunk);
adminRoutes.get("/crm", verifyToken, crm);
adminRoutes.post("/crm", upload.single("Logo"), addCrm);
adminRoutes.post("/crm/:id", upload.single("Logo"), updateCrm);
adminRoutes.get("/crm/delete/:id", verifyToken, deleteCrm);
adminRoutes.get("/script/delete/:id", verifyToken, deleteScripts);
adminRoutes.get("/routes/delete/:id", verifyToken, deleteRoutes);
adminRoutes.get("/script", Scripts);
adminRoutes.post("/script/:id", verifyToken, updateScripts);
adminRoutes.post("/script", verifyToken, addScripts);
adminRoutes.get("/process", process);
adminRoutes.get("/routes", routes);
adminRoutes.post("/routes", verifyToken, addroutes);
adminRoutes.post("/routes/:id", verifyToken, updateRoutes);
adminRoutes.get("/audio", audio);
adminRoutes.get("/audio/delete/:id", verifyToken, deleteAudio);
adminRoutes.get("/audio/download/:id", verifyToken, downloadAudio);
adminRoutes.post("/audio", audiouploads.single("audiofile"), addAudio);
adminRoutes.get("/outbound-trunk", verifyToken, trunk);
adminRoutes.post("/trunks/:id", updateTrunk);
adminRoutes.get("/callforward", verifyToken, index);
adminRoutes.get("/hotTransferRoutes", verifyToken, hotTranfer);
module.exports = adminRoutes;
