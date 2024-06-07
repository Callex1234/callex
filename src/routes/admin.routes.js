const { crm, addCrm } = require("../controller/crm.controller");
const { process } = require("../controller/process.controller");
const { verifyToken } = require("../middleware/auth.middleware");
const express = require("express");

const adminRoutes = express.Router();

adminRoutes.get("/crm", verifyToken, crm);
adminRoutes.post("/crm", addCrm);
adminRoutes.get("/process", process);
module.exports = adminRoutes;
