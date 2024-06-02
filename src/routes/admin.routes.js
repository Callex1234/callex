const { crm } = require("../controller/crm.controller");
const { verifyToken } = require("../middleware/auth.middleware");
const express = require("express");

const adminRoutes = express.Router();

adminRoutes.get("/crm", verifyToken, crm);

module.exports = adminRoutes;
