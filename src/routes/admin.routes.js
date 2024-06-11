const { crm } = require("../controller/crm.controller");
const { verifyToken } = require("../middleware/auth.middleware");
const express = require("express");

const adminRoutes = express.Router();

adminRoutes.get("/crm", verifyToken, crm);
adminRoutes.get("/outBoundTrunk", verifyToken);


module.exports = adminRoutes;
