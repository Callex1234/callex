const multer = require("multer");
const { crm, addCrm, updateCrm } = require("../controller/crm.controller");
const { Scripts } = require("../controller/script.conroller");
const { process } = require("../controller/process.controller");
const { verifyToken } = require("../middleware/auth.middleware");
const express = require("express");

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
adminRoutes.get("/script", Scripts);
adminRoutes.post("/script", Scripts);
adminRoutes.get("/process", process);
module.exports = adminRoutes;
