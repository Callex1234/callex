const multer = require("multer");
const { crm, addCrm } = require("../controller/crm.controller");
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
adminRoutes.get("/process", process);
module.exports = adminRoutes;
