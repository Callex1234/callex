const multer = require("multer");

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
const { trunk } = require("../controller/outBoundsTrunk");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public/logos"); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Specify the file name
  },
});
const upload = multer({ storage: storage });
const adminRoutes = express.Router();

adminRoutes.get("/crm", verifyToken, crm);
adminRoutes.post("/crm", upload.single("Logo"), addCrm);
adminRoutes.post("/crm/:id", upload.single("Logo"), updateCrm);
adminRoutes.get("/crm/delete/:id", verifyToken, deleteCrm);
adminRoutes.get("/script/delete/:id", verifyToken, deleteScripts);
adminRoutes.get("/script", Scripts);
adminRoutes.post("/script/:id", verifyToken, updateScripts);
adminRoutes.post("/script", verifyToken, addScripts);
adminRoutes.get("/process", process);
adminRoutes.get("/outBoundTrunk", verifyToken, trunk);
module.exports = adminRoutes;
