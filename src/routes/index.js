const express = require("express");
const { handleWelcome } = require("../controller");
const authRoutes = require("./adminAuth.routes");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.status(200).send(` ******  WELCOME to CALLEX  *******`);
});

routes.get("/test", handleWelcome);

routes.use("/admin", authRoutes);

module.exports = routes;
