const express = require("express");
const { handleWelcome } = require("../controller");
const authRoutes = require("./adminAuth.routes");
const { Admin } = require("mongodb");
const adminRoutes = require("./admin.routes");
const { login } = require("../controller/auth.controller");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.redirect("/login");
});

routes.get("/test", handleWelcome);
routes.get("/login", login);

routes.use("/admin", authRoutes);
routes.use("/admin", adminRoutes);
module.exports = routes;
