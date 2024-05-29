const { register } = require("../controller/auth.controller");
const express = require("express");

const authRoutes = express.Router();

authRoutes.post("/register", register);

module.exports = authRoutes;
