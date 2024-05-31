const { register, login } = require("../controller/auth.controller");
const express = require("express");

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.get("/login", login);

module.exports = authRoutes;
