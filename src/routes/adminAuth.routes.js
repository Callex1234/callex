const {
  register,
  login,
  loginUsers,
  dashboard,
} = require("../controller/auth.controller");
const express = require("express");
const { verifyToken } = require("../middleware/auth.middleware");

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.get("/login", login);
authRoutes.post("/login/", loginUsers);
authRoutes.get("/dashboard", verifyToken, dashboard);

module.exports = authRoutes;
